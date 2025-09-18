# Rust Style Guide

This guide follows the official Rust Style Guide as documented at https://doc.rust-lang.org/nightly/style-guide/

## Formatting Conventions

### Indentation and Line Width
- Use 4 spaces for indentation (never tabs)
- Each level of indentation must be 4 spaces
- Maximum line width: 100 characters
- Prefer block indent over visual indent for smaller diffs and less rightward drift

### Trailing Commas
Always use trailing commas in comma-separated lists when followed by a newline:
```rust
function_call(
    argument,
    another_argument,
);

let array = [
    element,
    another_element,
];
```

### Blank Lines
- Separate items and statements by zero or one blank line
- Never use more than one blank line between items

### Naming Conventions
- **Functions and Variables**: snake_case (e.g., `user_profile`, `calculate_total`)
- **Types, Traits, and Enums**: PascalCase (e.g., `UserProfile`, `PaymentProcessor`)
- **Constants and Statics**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **Type Parameters**: Single uppercase letter or descriptive PascalCase (e.g., `T`, `Elem`)
- **Lifetimes**: Short lowercase names, often single letters (e.g., `'a`, `'static`)

### Module Organization
- Place `mod` declarations before `use` declarations
- Sort imports alphabetically within groups:
  1. `extern crate` declarations
  2. Standard library imports
  3. External crate imports
  4. Internal module imports
  5. `self` and `super` imports

### Function Formatting
```rust
// Short functions can be single line if they fit
fn simple() -> i32 { 42 }

// Multi-line functions with proper indentation
fn complex_function(
    param1: Type1,
    param2: Type2,
) -> ReturnType {
    // function body
}
```

### Struct and Enum Formatting
```rust
// Single-line for simple structs
struct Point { x: f64, y: f64 }

// Multi-line for complex structs
struct ComplexStruct {
    field1: Type1,
    field2: Type2,
    field3: Type3,
}

// Enums with consistent formatting
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
```

### Pattern Matching
```rust
match expression {
    Pattern1 => result1,
    Pattern2 => {
        // multi-line block
        result2
    }
    Pattern3 | Pattern4 => result3,
    _ => default_result,
}
```

## Error Handling

### Core Principles
- Use `Result<T, E>` for recoverable errors
- Use `panic!` only for unrecoverable errors or programming bugs
- Prefer `?` operator over explicit `match` for error propagation
- Always implement both `Debug` and `Display` for error types

### Error Type Selection
Choose error types based on your audience and use case:

**For Applications:**
```rust
// Use anyhow for simple error handling with context
use anyhow::{Context, Result};

fn read_config() -> Result<Config> {
    let contents = fs::read_to_string("config.toml")
        .context("Failed to read config file")?;
    toml::from_str(&contents)
        .context("Failed to parse config")
}
```

**For Libraries:**
```rust
// Use thiserror for structured, programmatic error handling
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ConfigError {
    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),
    
    #[error("Parse error at line {line}: {msg}")]
    Parse { line: usize, msg: String },
    
    #[error("Missing required field: {field}")]
    MissingField { field: String },
}
```

### Error Chaining and Context
- Implement `Error::source()` to provide error chains
- Use `#[from]` attribute for automatic error conversion
- Preserve original error context when wrapping

```rust
#[derive(Error, Debug)]
pub enum DatabaseError {
    #[error("Connection failed")]
    Connection(#[from] sqlx::Error),
    
    #[error("Query failed: {query}")]
    Query { 
        query: String,
        #[source]
        source: sqlx::Error,
    },
}
```

### Error Messages
- Write error messages for end users, not developers
- Include actionable information when possible
- Don't expose internal implementation details
- Use consistent tone and formatting

```rust
// Good: Actionable error message
#[error("Configuration file not found at '{path}'. Please create the file or check the path.")]
FileNotFound { path: String },

// Bad: Technical jargon
#[error("ENOENT: no such file or directory, open '{path}'")]
SystemError { path: String },
```

### Error Handling Patterns

**Never use `unwrap()` or `expect()` in production code:**
```rust
// Bad: Can panic
let value = some_result.unwrap();

// Good: Handle the error
let value = match some_result {
    Ok(val) => val,
    Err(e) => {
        log::error!("Failed to process: {}", e);
        return Err(e.into());
    }
};

// Better: Use ? operator
let value = some_result?;
```

**Prefer `Box<dyn Error>` for applications:**
```rust
// Application-level error handling
type Result<T> = std::result::Result<T, Box<dyn std::error::Error + Send + Sync>>;

fn main() -> Result<()> {
    let config = read_config()?;
    let data = fetch_data(&config)?;
    process_data(data)?;
    Ok(())
}
```

**Use structured errors for libraries:**
```rust
// Library error types should be structured for programmatic handling
#[derive(Error, Debug)]
pub enum ApiError {
    #[error("Network error: {0}")]
    Network(#[from] reqwest::Error),
    
    #[error("Authentication failed")]
    Auth,
    
    #[error("Rate limit exceeded. Retry after {retry_after} seconds")]
    RateLimit { retry_after: u64 },
    
    #[error("Invalid response format")]
    InvalidResponse,
}
```

### Error Testing
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_error_display() {
        let error = ConfigError::MissingField { 
            field: "database_url".to_string() 
        };
        assert_eq!(
            error.to_string(),
            "Missing required field: database_url"
        );
    }

    #[test]
    fn test_error_chain() {
        let io_error = std::io::Error::new(
            std::io::ErrorKind::NotFound, 
            "file not found"
        );
        let config_error = ConfigError::Io(io_error);
        
        // Test that source is preserved
        assert!(config_error.source().is_some());
    }
}
```

### Recommended Error Handling Crates

#### For Applications
- **`anyhow`**: Simple error handling with context and error chaining
  ```toml
  [dependencies]
  anyhow = "1.0"
  ```

#### For Libraries  
- **`thiserror`**: Derive macro for structured error types
  ```toml
  [dependencies]
  thiserror = "1.0"
  ```

#### For Specific Use Cases
- **`eyre`**: Alternative to `anyhow` with customizable error reports
- **`miette`**: Fancy error reporting with source code snippets
- **`color-eyre`**: Beautiful error reports with syntax highlighting

## Newtypes and Type-Driven Design

### When to Use Newtypes
Use newtype wrappers to:
- Encode business rules and constraints in the type system
- Prevent primitive obsession and argument confusion
- Create domain-specific types that are always valid
- Improve API safety and self-documentation

```rust
// Bad: Primitive obsession
fn create_user(email: &str, password: &str) -> Result<User, Error> {
    // Arguments can be swapped, validation logic scattered
}

// Good: Type-driven design
fn create_user(email: EmailAddress, password: Password) -> Result<User, Error> {
    // Impossible to swap arguments, validation centralized
}
```

### Basic Newtype Pattern
```rust
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct EmailAddress(String);

#[derive(Debug, Clone, PartialEq)]
pub struct UserId(u64);

#[derive(Debug)]
pub struct Password(String); // Note: No Clone for security
```

### Newtype Constructors
Always provide fallible constructors that validate input:

```rust
#[derive(Debug, Clone, PartialEq)]
pub struct EmailAddress(String);

#[derive(Error, Debug)]
#[error("Invalid email address: {0}")]
pub struct EmailAddressError(String);

impl EmailAddress {
    /// Create a new email address with validation
    pub fn new(email: &str) -> Result<Self, EmailAddressError> {
        if Self::is_valid(email) {
            Ok(Self(email.to_lowercase()))
        } else {
            Err(EmailAddressError(email.to_string()))
        }
    }
    
    /// Create email address without validation (use with caution)
    /// 
    /// # Safety
    /// The caller must ensure the input is a valid email address
    pub unsafe fn new_unchecked(email: String) -> Self {
        Self(email)
    }
    
    fn is_valid(email: &str) -> bool {
        // Email validation logic
        email.contains('@') && email.len() > 3
    }
}
```

### Conversion Traits
Implement conversion traits for ergonomic usage:

```rust
// For infallible conversions
impl From<UserId> for u64 {
    fn from(id: UserId) -> Self {
        id.0
    }
}

// For fallible conversions
impl TryFrom<&str> for EmailAddress {
    type Error = EmailAddressError;
    
    fn try_from(email: &str) -> Result<Self, Self::Error> {
        Self::new(email)
    }
}

impl TryFrom<String> for EmailAddress {
    type Error = EmailAddressError;
    
    fn try_from(email: String) -> Result<Self, Self::Error> {
        Self::new(&email)
    }
}
```

### Accessing Inner Values
Provide controlled access to inner values:

```rust
impl EmailAddress {
    /// Get the email address as a string slice
    pub fn as_str(&self) -> &str {
        &self.0
    }
    
    /// Get the domain part of the email
    pub fn domain(&self) -> &str {
        self.0.split('@').nth(1).unwrap_or("")
    }
}

// Alternative: Implement AsRef for generic access
impl AsRef<str> for EmailAddress {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

// Use Deref sparingly - can break encapsulation
impl std::ops::Deref for EmailAddress {
    type Target = str;
    
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
```

### Display Implementation
Implement user-friendly display formatting:

```rust
impl std::fmt::Display for EmailAddress {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl std::fmt::Display for UserId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "User({})", self.0)
    }
}

// For sensitive data, avoid displaying actual content
impl std::fmt::Display for Password {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "[REDACTED]")
    }
}
```

### Security-Focused Newtypes
For sensitive data, implement additional security measures:

```rust
use zeroize::{Zeroize, ZeroizeOnDrop};

#[derive(Debug, Zeroize, ZeroizeOnDrop)]
pub struct Password(String);

impl Password {
    pub fn new(password: &str) -> Result<Self, PasswordError> {
        if password.len() < 8 {
            return Err(PasswordError::TooShort);
        }
        Ok(Self(password.to_string()))
    }
    
    /// Verify password against this hash
    pub fn verify(&self, candidate: &str) -> bool {
        // Use constant-time comparison
        use subtle::ConstantTimeEq;
        self.0.as_bytes().ct_eq(candidate.as_bytes()).into()
    }
}

// Never implement Clone for sensitive data
impl Drop for Password {
    fn drop(&mut self) {
        self.0.zeroize();
    }
}
```

### Newtype Testing
Test newtypes thoroughly:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_email_validation() {
        assert!(EmailAddress::new("user@example.com").is_ok());
        assert!(EmailAddress::new("invalid").is_err());
        assert!(EmailAddress::new("").is_err());
    }

    #[test]
    fn test_email_normalization() {
        let email = EmailAddress::new("USER@EXAMPLE.COM").unwrap();
        assert_eq!(email.as_str(), "user@example.com");
    }

    #[test]
    fn test_email_domain_extraction() {
        let email = EmailAddress::new("user@example.com").unwrap();
        assert_eq!(email.domain(), "example.com");
    }

    #[test]
    fn test_password_security() {
        let password = Password::new("secure123").unwrap();
        assert_eq!(format!("{}", password), "[REDACTED]");
        // Test that Debug doesn't leak password
        assert!(!format!("{:?}", password).contains("secure123"));
    }
}
```

### Newtypes Libraries

#### For Reducing Boilerplate
- **`derive_more`**: Derive implementations for common traits on newtypes
  ```toml
  [dependencies]
  derive_more = "0.99"
  ```
  ```rust
  #[derive(Display, AsRef, Deref, From, Into)]
  struct EmailAddress(String);
  ```

#### For Advanced Newtype Generation
- **`nutype`**: Procedural macro for generating validated newtypes
  ```toml
  [dependencies]
  nutype = { version = "0.4", features = ["new_unchecked", "regex"] }
  ```
  ```rust
  #[nutype(
      sanitize(trim, lowercase),
      validate(regex = r"^[^@]+@[^@]+\.[^@]+$"),
      derive(Debug, Clone, Display, AsRef, Deref),
      new_unchecked,
  )]
  pub struct EmailAddress(String);
  ```

**Note**: While these libraries reduce boilerplate, understand the underlying patterns before using them. `nutype` in particular creates a strong dependency that can be difficult to migrate away from.


## Comments and Documentation
- Use line comments (`//`) over block comments (`/* */`)
- Put a single space after the opening sigil
- Use doc comments (`///`) for public API documentation
- Place doc comments before attributes
- Comments should be complete sentences with proper punctuation

```rust
/// This function calculates the factorial of a number.
/// 
/// # Examples
/// 
/// ```
/// assert_eq!(factorial(5), 120);
/// ```
pub fn factorial(n: u32) -> u32 {
    // Handle the base case
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}
```

## Attributes
- Place each attribute on its own line
- Indent attributes to the level of the item
- Prefer outer attributes where possible

```rust
#[derive(Debug, Clone)]
#[must_use]
pub struct Config {
    #[serde(default)]
    pub name: String,
}
```

## Generics and Trait Bounds
```rust
// Simple bounds inline
fn simple<T: Display>(item: T) { }

// Complex bounds with where clause
fn complex<T, U>(first: T, second: U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
    // function body
}
```

## Closures
```rust
// Short closures on one line
let add_one = |x| x + 1;

// Multi-line closures with proper formatting
let complex_closure = |param1, param2| {
    let result = param1 + param2;
    result * 2
};
```

## Use Statements
- Group and sort use statements:
  1. `std` imports
  2. External crate imports
  3. Local crate imports
  4. `self`/`super` imports
- Use nested imports to reduce duplication

```rust
use std::collections::{HashMap, HashSet};
use std::io::{self, Write};

use external_crate::module::Type;

use crate::internal::module;
use super::parent_module;
```

## Unsafe Code
- Don't use `unsafe`
- If necessary, document safety invariants clearly
- If necessary, Keep `unsafe` blocks as small as possible
- If necessary, prefer safe abstractions over raw `unsafe` code

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_descriptive_name() {
        assert_eq!(function_under_test(input), expected_output);
    }
}
```

## Tools

### Rustfmt
Use `rustfmt` to automatically format code according to these guidelines:
```bash
cargo fmt
```

### Clippy
Use `clippy` for additional linting and best practices:
```bash
cargo clippy
```

## Application Architecture

### Project Structure
Organize Rust applications or crates using hexagonal architecture principles:

```
src/
├── main.rs                # Bootstrap and dependency injection
├── lib.rs                 # Public API and module exports
├── domain/                # Core business logic
│   ├── mod.rs
│   ├── models.rs          # Domain entities and value objects
│   ├── services.rs        # Business logic services
│   └── errors.rs          # Domain-specific errors
├── ports/                 # Interfaces/traits (abstractions)
│   ├── mod.rs
│   ├── repositories.rs    # Data access abstractions
│   └── services.rs        # Service abstractions
├── adapters/              # Infrastructure implementations
│   ├── mod.rs
│   ├── database/          # Database adapters
│   │   ├── mod.rs
│   │   ├── sqlite.rs
│   │   └── postgres.rs
│   ├── http/              # HTTP adapters
│   │   ├── mod.rs
│   │   ├── handlers.rs
│   │   └── models.rs      # HTTP-specific models
│   └── external/          # External service adapters
│       ├── mod.rs
│       └── email.rs
└── config/                # Configuration
    ├── mod.rs
    └── settings.rs
```

### Domain Layer
Keep domain logic pure and dependency-free:

```rust
// domain/models.rs
use crate::domain::errors::DomainError;

#[derive(Debug, Clone, PartialEq)]
pub struct Author {
    pub id: AuthorId,
    pub email: EmailAddress,
    pub name: AuthorName,
    pub created_at: DateTime<Utc>,
}

impl Author {
    pub fn new(
        email: EmailAddress, 
        name: AuthorName
    ) -> Result<Self, DomainError> {
        Ok(Self {
            id: AuthorId::generate(),
            email,
            name,
            created_at: Utc::now(),
        })
    }
    
    pub fn update_name(&mut self, name: AuthorName) -> Result<(), DomainError> {
        // Business logic for name updates
        self.name = name;
        Ok(())
    }
}
```

### Ports (Abstractions)
Define interfaces that the domain needs:

```rust
// ports/repositories.rs
use async_trait::async_trait;
use crate::domain::{models::Author, errors::DomainError};

#[async_trait]
pub trait AuthorRepository: Send + Sync {
    async fn find_by_id(&self, id: &AuthorId) -> Result<Option<Author>, DomainError>;
    async fn find_by_email(&self, email: &EmailAddress) -> Result<Option<Author>, DomainError>;
    async fn save(&self, author: &Author) -> Result<(), DomainError>;
    async fn delete(&self, id: &AuthorId) -> Result<(), DomainError>;
}

// ports/services.rs
#[async_trait]
pub trait AuthorService: Send + Sync {
    async fn create_author(
        &self,
        email: EmailAddress,
        name: AuthorName,
    ) -> Result<Author, DomainError>;
    
    async fn get_author(&self, id: &AuthorId) -> Result<Author, DomainError>;
    async fn update_author_name(
        &self,
        id: &AuthorId,
        name: AuthorName,
    ) -> Result<Author, DomainError>;
}
```

### Service Implementation
Implement business logic in services:

```rust
// domain/services.rs
use async_trait::async_trait;
use std::sync::Arc;

pub struct AuthorServiceImpl<R> 
where
    R: AuthorRepository,
{
    repository: Arc<R>,
}

impl<R> AuthorServiceImpl<R>
where
    R: AuthorRepository,
{
    pub fn new(repository: Arc<R>) -> Self {
        Self { repository }
    }
}

#[async_trait]
impl<R> AuthorService for AuthorServiceImpl<R>
where
    R: AuthorRepository,
{
    async fn create_author(
        &self,
        email: EmailAddress,
        name: AuthorName,
    ) -> Result<Author, DomainError> {
        // Check if author already exists
        if let Some(_) = self.repository.find_by_email(&email).await? {
            return Err(DomainError::AuthorAlreadyExists { email });
        }
        
        // Create new author
        let author = Author::new(email, name)?;
        self.repository.save(&author).await?;
        
        Ok(author)
    }
    
    async fn get_author(&self, id: &AuthorId) -> Result<Author, DomainError> {
        self.repository
            .find_by_id(id)
            .await?
            .ok_or(DomainError::AuthorNotFound { id: id.clone() })
    }
}
```

### Adapters (Infrastructure)
Implement concrete adapters for external dependencies:

```rust
// adapters/database/sqlite.rs
use async_trait::async_trait;
use sqlx::{SqlitePool, Row};

pub struct SqliteAuthorRepository {
    pool: SqlitePool,
}

impl SqliteAuthorRepository {
    pub fn new(pool: SqlitePool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl AuthorRepository for SqliteAuthorRepository {
    async fn find_by_id(&self, id: &AuthorId) -> Result<Option<Author>, DomainError> {
        let row = sqlx::query("SELECT * FROM authors WHERE id = ?")
            .bind(id.as_str())
            .fetch_optional(&self.pool)
            .await
            .map_err(|e| DomainError::DatabaseError { 
                message: e.to_string() 
            })?;
            
        match row {
            Some(row) => Ok(Some(self.row_to_author(row)?)),
            None => Ok(None),
        }
    }
    
    async fn save(&self, author: &Author) -> Result<(), DomainError> {
        sqlx::query(
            "INSERT OR REPLACE INTO authors (id, email, name, created_at) 
             VALUES (?, ?, ?, ?)"
        )
        .bind(author.id.as_str())
        .bind(author.email.as_str())
        .bind(author.name.as_str())
        .bind(author.created_at)
        .execute(&self.pool)
        .await
        .map_err(|e| DomainError::DatabaseError { 
            message: e.to_string() 
        })?;
        
        Ok(())
    }
    
    // Helper method to convert database row to domain model
    fn row_to_author(&self, row: sqlx::sqlite::SqliteRow) -> Result<Author, DomainError> {
        Ok(Author {
            id: AuthorId::from_str(row.get("id"))?,
            email: EmailAddress::new(row.get("email"))?,
            name: AuthorName::new(row.get("name"))?,
            created_at: row.get("created_at"),
        })
    }
}
```

### HTTP Adapters
Keep HTTP concerns separate from domain logic:

```rust
// adapters/http/handlers.rs
use axum::{extract::State, http::StatusCode, Json};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct CreateAuthorRequest {
    email: String,
    name: String,
}

#[derive(Serialize)]
pub struct AuthorResponse {
    id: String,
    email: String,
    name: String,
    created_at: DateTime<Utc>,
}

impl From<Author> for AuthorResponse {
    fn from(author: Author) -> Self {
        Self {
            id: author.id.to_string(),
            email: author.email.to_string(),
            name: author.name.to_string(),
            created_at: author.created_at,
        }
    }
}

pub async fn create_author<S>(
    State(service): State<Arc<S>>,
    Json(request): Json<CreateAuthorRequest>,
) -> Result<Json<AuthorResponse>, AppError>
where
    S: AuthorService,
{
    let email = EmailAddress::new(&request.email)
        .map_err(|_| AppError::InvalidInput("Invalid email format".to_string()))?;
    
    let name = AuthorName::new(&request.name)
        .map_err(|_| AppError::InvalidInput("Invalid name format".to_string()))?;
    
    let author = service.create_author(email, name).await?;
    
    Ok(Json(author.into()))
}

// HTTP-specific error handling
#[derive(Debug)]
pub enum AppError {
    InvalidInput(String),
    Domain(DomainError),
}

impl From<DomainError> for AppError {
    fn from(err: DomainError) -> Self {
        Self::Domain(err)
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            AppError::InvalidInput(msg) => (StatusCode::BAD_REQUEST, msg),
            AppError::Domain(DomainError::AuthorNotFound { .. }) => {
                (StatusCode::NOT_FOUND, "Author not found".to_string())
            }
            AppError::Domain(DomainError::AuthorAlreadyExists { .. }) => {
                (StatusCode::CONFLICT, "Author already exists".to_string())
            }
            AppError::Domain(_) => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error".to_string())
            }
        };
        
        (status, Json(json!({ "error": message }))).into_response()
    }
}
```

### Dependency Injection and Bootstrap
Wire everything together in main:

```rust
// main.rs
use std::sync::Arc;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let config = Config::from_env()?;
    
    // Infrastructure setup
    let database_pool = setup_database(&config.database_url).await?;
    
    // Dependency injection
    let author_repository = Arc::new(SqliteAuthorRepository::new(database_pool));
    let author_service = Arc::new(AuthorServiceImpl::new(author_repository));
    
    // HTTP server setup
    let app = create_app(author_service);
    let listener = TcpListener::bind(&config.server_address).await?;
    
    axum::serve(listener, app).await?;
    
    Ok(())
}

fn create_app<S>(author_service: Arc<S>) -> Router
where
    S: AuthorService + 'static,
{
    Router::new()
        .route("/authors", post(create_author))
        .route("/authors/:id", get(get_author))
        .with_state(author_service)
}
```

### Testing Hexagonal Architecture
Use dependency injection for comprehensive testing:

```rust
// tests/integration.rs
use std::sync::Arc;
use std::collections::HashMap;
use async_trait::async_trait;

// Mock repository for testing
pub struct MockAuthorRepository {
    authors: Arc<Mutex<HashMap<AuthorId, Author>>>,
}

#[async_trait]
impl AuthorRepository for MockAuthorRepository {
    async fn save(&self, author: &Author) -> Result<(), DomainError> {
        let mut authors = self.authors.lock().await;
        authors.insert(author.id.clone(), author.clone());
        Ok(())
    }
    
    async fn find_by_id(&self, id: &AuthorId) -> Result<Option<Author>, DomainError> {
        let authors = self.authors.lock().await;
        Ok(authors.get(id).cloned())
    }
}

#[tokio::test]
async fn test_create_author_service() {
    let repository = Arc::new(MockAuthorRepository::new());
    let service = AuthorServiceImpl::new(repository);
    
    let email = EmailAddress::new("test@example.com").unwrap();
    let name = AuthorName::new("Test Author").unwrap();
    
    let author = service.create_author(email.clone(), name.clone()).await.unwrap();
    
    assert_eq!(author.email, email);
    assert_eq!(author.name, name);
    
    // Test duplicate email handling
    let result = service.create_author(email, name).await;
    assert!(matches!(result, Err(DomainError::AuthorAlreadyExists { .. })));
}
```

## Macro Development

### When to Write Macros
Write macros to:
- Eliminate repetitive boilerplate code
- Generate code based on compile-time information
- Create ergonomic APIs that would be impossible with functions
- Implement domain-specific syntax that improves readability

Avoid macros for:
- Simple code generation that functions can handle
- Complex logic that belongs in regular functions
- Cases where generics or traits provide better solutions

### Basic Macro Structure
Use multiple rules to handle different argument patterns:

```rust
#[macro_export]
macro_rules! my_macro {
    // Rule 1: Simple case
    ($expr:expr) => {
        // Simple expansion
        println!("Value: {}", $expr);
    };
    
    // Rule 2: With format string
    ($expr:expr, $fmt:expr) => {
        // More complex expansion
        println!($fmt, $expr);
    };
    
    // Rule 3: Multiple expressions
    ($($expr:expr),+ $(,)?) => {
        $(
            println!("Item: {}", $expr);
        )+
    };
}
```

### Macro Hygiene and Dependencies
Always use fully qualified paths for dependencies:

```rust
#[macro_export]
macro_rules! safe_assert {
    ($condition:expr) => {
        if !$condition {
            // Use fully qualified paths to avoid import requirements
            $crate::std::panic!("Assertion failed: {}", stringify!($condition));
        }
    };
    
    ($condition:expr, $msg:expr) => {
        if !$condition {
            $crate::std::panic!("Assertion failed: {}", $msg);
        }
    };
}
```

### Avoiding Side Effects
Evaluate expressions only once to prevent side effects:

```rust
#[macro_export]
macro_rules! safe_max {
    ($left:expr, $right:expr) => {
        // Bad: Could evaluate expressions multiple times
        // if $left > $right { $left } else { $right }
        
        // Good: Evaluate once and store in variables
        {
            let left_val = $left;
            let right_val = $right;
            if left_val > right_val { left_val } else { right_val }
        }
    };
}
```

### Internal Rules for Complex Logic
Use internal rules (prefixed with `@`) for complex macro operations:

```rust
#[macro_export]
macro_rules! count_tokens {
    // Public interface
    ($($tokens:tt)*) => {
        count_tokens!(@count 0, $($tokens)*)
    };
    
    // Internal rule for counting
    (@count $count:expr,) => {
        $count
    };
    
    (@count $count:expr, $head:tt $($tail:tt)*) => {
        count_tokens!(@count $count + 1, $($tail)*)
    };
}

// Usage: count_tokens!(a b c d) expands to 4
```

### Pattern Matching Techniques

#### Matching Different Types
```rust
#[macro_export]
macro_rules! type_info {
    ($value:expr) => {
        match $value {
            v => {
                println!("Value: {:?}", v);
                println!("Type: {}", std::any::type_name_of_val(&v));
            }
        }
    };
}
```

#### Optional Trailing Commas
```rust
#[macro_export]
macro_rules! flexible_vec {
    ($($item:expr),* $(,)?) => {
        vec![$($item),*]
    };
}

// Both work:
// flexible_vec![1, 2, 3]
// flexible_vec![1, 2, 3,]
```

#### Variable Repetitions
```rust
#[macro_export]
macro_rules! hash_map {
    ($($key:expr => $value:expr),* $(,)?) => {
        {
            let mut map = std::collections::HashMap::new();
            $(
                map.insert($key, $value);
            )*
            map
        }
    };
}

// Usage: hash_map!["key1" => "value1", "key2" => "value2"]
```

### Advanced Macro Patterns

#### Normalization and Preprocessing
```rust
#[macro_export]
macro_rules! normalize_input {
    // Public interface - accepts mixed input
    ($($input:tt)*) => {
        normalize_input!(@normalize [] $($input)*)
    };
    
    // Internal rule - normalize to consistent format
    (@normalize [$($normalized:tt)*]) => {
        // Process normalized input
        process_normalized!($($normalized)*);
    };
    
    (@normalize [$($normalized:tt)*] $item:ident, $($rest:tt)*) => {
        normalize_input!(@normalize [$($normalized)* $item] $($rest)*)
    };
    
    (@normalize [$($normalized:tt)*] $item:ident $($rest:tt)*) => {
        normalize_input!(@normalize [$($normalized)* $item] $($rest)*)
    };
}
```

#### Compile-Time Counting
```rust
#[macro_export]
macro_rules! array_len {
    // Convert to counting format
    ($($item:expr),* $(,)?) => {
        array_len!(@count $($item),*)
    };
    
    // Count using recursion
    (@count) => { 0 };
    (@count $head:expr) => { 1 };
    (@count $head:expr, $($tail:expr),*) => {
        1 + array_len!(@count $($tail),*)
    };
}

// Usage: const LEN: usize = array_len![1, 2, 3, 4]; // LEN = 4
```

### Macro Testing
Test macros thoroughly with different input patterns:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_macro_basic_usage() {
        let result = my_macro!(42);
        assert_eq!(result, expected_value);
    }
    
    #[test]
    fn test_macro_with_format() {
        let result = my_macro!(42, "Number: {}");
        assert_eq!(result, "Number: 42");
    }
    
    #[test]
    fn test_macro_multiple_items() {
        let result = my_macro!(1, 2, 3);
        assert_eq!(result.len(), 3);
    }
    
    #[test]
    fn test_macro_edge_cases() {
        // Test empty input
        let result = my_macro!();
        assert!(result.is_empty());
        
        // Test single item
        let result = my_macro!(1);
        assert_eq!(result.len(), 1);
        
        // Test trailing comma
        let result = my_macro!(1, 2, 3,);
        assert_eq!(result.len(), 3);
    }
}
```

### Error Handling in Macros
Provide clear error messages for invalid input:

```rust
#[macro_export]
macro_rules! validate_input {
    () => {
        compile_error!("validate_input! requires at least one argument");
    };
    
    ($($valid:ident),+ $(,)?) => {
        // Valid pattern - process normally
        validate_input!(@process $($valid),+)
    };
    
    ($invalid:expr, $($rest:tt)*) => {
        compile_error!(concat!(
            "validate_input! only accepts identifiers, got: ",
            stringify!($invalid)
        ));
    };
    
    (@process $($item:ident),+) => {
        // Implementation here
    };
}
```

### Documentation and Examples
Document macros with clear examples:

```rust
/// Creates a configuration struct with builder pattern methods.
/// 
/// # Examples
/// 
/// ```
/// config_builder! {
///     MyConfig {
///         host: String = "localhost".to_string(),
///         port: u16 = 8080,
///         debug: bool = false,
///     }
/// }
/// 
/// let config = MyConfig::builder()
///     .host("example.com".to_string())
///     .port(3000)
///     .build();
/// ```
#[macro_export]
macro_rules! config_builder {
    // Implementation...
}
```

### Performance Considerations
- Limit macro recursion depth (default limit is 128)
- Use internal rules to minimize expansion size
- Consider compile-time impact of complex macros
- Profile macro expansion time for performance-critical code

```rust
// Good: Efficient counting with tail recursion
#[macro_export]
macro_rules! efficient_count {
    ($($tokens:tt)*) => {
        efficient_count!(@count 0; $($tokens)*)
    };
    
    (@count $acc:expr;) => { $acc };
    (@count $acc:expr; $head:tt $($tail:tt)*) => {
        efficient_count!(@count $acc + 1; $($tail)*)
    };
}
```

## Observability and Logging

### Setup and Configuration
Use the `tracing` ecosystem for structured, observable logging:

```toml
# Cargo.toml
[dependencies]
tracing = "0.1"
tracing-subscriber = { version = "0.3", features = ["env-filter", "json"] }
tracing-appender = "0.2"
tokio = { version = "1", features = ["tracing"] }
tracing-futures = "0.2"  # For async spans
```

### Basic Setup
Initialize tracing subscriber in your main function:

```rust
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

fn init_logging() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "info".into())
        )
        .with(tracing_subscriber::fmt::layer())
        .init();
}

fn main() {
    init_logging();
    tracing::info!("Application started");
    // Your application code here
}
```

### Production Configuration
For production environments, use JSON logging with file rotation:

```rust
use tracing_appender::rolling;
use tracing_subscriber::{filter::EnvFilter, fmt, layer::SubscriberExt, util::SubscriberInitExt};

fn init_production_logging() {
    let file_appender = rolling::daily("./logs", "app.log");
    let (non_blocking, _guard) = tracing_appender::non_blocking(file_appender);
    
    let filter = EnvFilter::try_from_default_env()
        .unwrap_or_else(|_| "info".into());

    tracing_subscriber::registry()
        .with(filter)
        .with(
            fmt::layer()
                .with_writer(non_blocking)
                .json()
                .with_current_span(true)
                .with_span_list(true)
        )
        .init();
}
```

### Structured Logging Patterns

#### Basic Event Logging
Always use structured fields instead of string interpolation:

```rust
use tracing::{info, warn, error, debug};

// Good: Structured logging with fields
fn handle_user_request(user_id: u64, action: &str) {
    info!(user_id = user_id, action = action, "Processing user request");
    
    match validate_user(user_id) {
        Ok(user) => {
            debug!(user_id = user_id, username = user.username, "User validation successful");
        }
        Err(e) => {
            error!(user_id = user_id, error = ?e, "User validation failed");
        }
    }
}

// Bad: String interpolation
fn bad_logging_example(user_id: u64, action: &str) {
    info!("Processing user request for user {} with action {}", user_id, action);
}
```

#### Business Event Logging
Log important business events with relevant context:

```rust
use tracing::{info, error};

fn process_payment(order_id: String, amount: f64, currency: &str) {
    info!(
        order_id = %order_id,
        amount = amount,
        currency = currency,
        "Processing payment"
    );
    
    // Processing logic...
    
    if payment_successful {
        info!(
            order_id = %order_id,
            amount = amount,
            currency = currency,
            transaction_id = "txn_123456",
            "Payment completed successfully"
        );
    } else {
        error!(
            order_id = %order_id,
            amount = amount,
            currency = currency,
            error_code = "PAYMENT_FAILED",
            "Payment processing failed"
        );
    }
}
```

### Spans for Context and Tracing

#### Automatic Instrumentation
Use `#[instrument]` for automatic span creation:

```rust
use tracing::{info, instrument};

#[instrument]
async fn fetch_user_data(user_id: u64) -> Result<UserData, DatabaseError> {
    info!("Fetching user data from database");
    
    let user = database_client.get_user(user_id).await?;
    
    info!(username = %user.username, "User data retrieved successfully");
    Ok(user)
}

// Skip large parameters to avoid logging overhead
#[instrument(skip(large_data))]
async fn process_large_data(user_id: u64, large_data: &[u8]) {
    info!(data_size = large_data.len(), "Processing large data");
    // Process data...
    info!("Large data processing completed");
}
```

#### Manual Span Creation
For more control over span lifecycle:

```rust
use tracing::{info, Span};

fn manual_span_example(user_id: u64) {
    let span = tracing::span!(
        tracing::Level::INFO,
        "user_operation",
        user_id = user_id,
        operation = "data_sync"
    );
    
    let _enter = span.enter();
    
    info!("Operation started");
    // Do work...
    info!("Operation completed");
    // Span automatically exits when _enter is dropped
}
```

#### Hierarchical Spans
Spans automatically create parent-child relationships:

```rust
use tracing::{info, warn, instrument};

#[instrument]
async fn handle_request(request_id: String, user_id: u64) {
    info!("Request received");
    
    // Child span automatically inherits parent context
    match authenticate_user(user_id).await {
        Ok(user) => {
            info!(username = %user.username, "Authentication successful");
            process_authenticated_request(request_id, user).await;
        }
        Err(e) => {
            warn!(error = ?e, "Authentication failed");
        }
    }
}

#[instrument]
async fn authenticate_user(user_id: u64) -> Result<User, AuthError> {
    info!("Authenticating user");
    
    // This will be a child span of handle_request
    let user = fetch_user_data(user_id).await?;
    validate_user_permissions(&user)?;
    
    info!("User authenticated successfully");
    Ok(user)
}
```

### Error Integration
Combine structured logging with error handling:

```rust
use tracing::{error, warn, info, instrument};
use anyhow::{Context, Result};

#[instrument]
async fn process_order(order_id: String) -> Result<()> {
    info!("Starting order processing");
    
    let order = fetch_order(&order_id)
        .await
        .with_context(|| format!("Failed to fetch order {}", order_id))?;
    
    validate_order(&order)
        .with_context(|| format!("Order validation failed for {}", order_id))?;
    
    match process_payment(&order).await {
        Ok(payment_result) => {
            info!(
                order_id = %order_id,
                payment_id = %payment_result.id,
                amount = payment_result.amount,
                "Payment processed successfully"
            );
        }
        Err(e) => {
            error!(
                order_id = %order_id,
                error = ?e,
                "Payment processing failed"
            );
            return Err(e).with_context(|| format!("Payment failed for order {}", order_id));
        }
    }
    
    info!(order_id = %order_id, "Order processing completed");
    Ok(())
}
```

### Tokio Integration
Proper instrumentation for async tasks:

```rust
use tracing::{info, instrument};
use tokio::task;

#[instrument]
async fn background_task(task_id: u64) {
    info!("Background task started");
    
    // Spawn child task - context is automatically propagated
    let handle = task::spawn(async move {
        info!("Child task executing");
        // Do work...
        info!("Child task completed");
    });
    
    handle.await.unwrap();
    info!("Background task completed");
}
```

### Environment Configuration
Configure logging through environment variables:

```bash
# Development
RUST_LOG="debug,hyper=info,tokio=info"

# Production
RUST_LOG="info,myapp=debug"

# Debugging specific modules
RUST_LOG="myapp::auth=trace,myapp::database=debug"
```

### Security Considerations
Never log sensitive information:

```rust
use tracing::{info, error};

// Good: Don't log sensitive data
fn login_user(email: &str, password: &str) -> Result<User, AuthError> {
    info!(email = email, "User login attempt");
    
    match authenticate(email, password) {
        Ok(user) => {
            info!(user_id = user.id, email = email, "Login successful");
            Ok(user)
        }
        Err(e) => {
            // Don't log the password!
            error!(email = email, error = ?e, "Login failed");
            Err(e)
        }
    }
}

// Bad: Logging sensitive information
fn bad_login_example(email: &str, password: &str) {
    info!("Login attempt with email {} and password {}", email, password);
}
```

### Performance Considerations
- Use appropriate log levels to avoid performance impact in production
- Skip expensive computations in spans when not needed
- Use `skip` attribute for large parameters
- Consider using `enabled!` macro for expensive debug logging

```rust
use tracing::{debug, enabled, Level};

fn expensive_debug_logging(data: &LargeDataStructure) {
    if enabled!(Level::DEBUG) {
        let processed = expensive_computation(data);
        debug!(result = ?processed, "Expensive computation result");
    }
}
```

### Testing with Logging
Capture logs in tests for verification:

```rust
#[cfg(test)]
mod tests {
    use tracing_test::traced_test;
    use tracing::{info, error};

    #[traced_test]
    fn test_with_logging() {
        info!("Test started");
        
        let result = some_function_that_logs();
        
        // Logs are captured and can be inspected
        assert!(result.is_ok());
        
        info!("Test completed");
    }
}
```

## Testing

### Core Testing Principles
- **Test for correctness and prevent regressions**: Tests ensure code works and stays working
- **Use the right tool for the job**: Choose appropriate testing strategies for different scenarios
- **Write clear and maintainable tests**: Tests serve as documentation
- **Prefer `cargo nextest`**: Install with `cargo install cargo-nextest --locked` for faster test runs
- Place unit tests in a `tests` module at the end of the file
- Test both success and failure cases

### Unit Tests vs Integration Tests

#### Unit Tests
Test individual components in isolation within the same file:

```rust
// In src/my_module.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn internal_logic() -> bool {
    // Private function that can be tested
    true
}

#[cfg(test)]
mod tests {
    use super::*; // Import functions from the outer module

    #[test]
    fn test_add_positive_numbers() {
        assert_eq!(add(2, 2), 4);
        assert_eq!(add(10, 5), 15);
    }

    #[test]
    fn test_add_negative_numbers() {
        assert_eq!(add(-2, -3), -5);
        assert_eq!(add(-10, 5), -5);
    }

    #[test]
    fn test_internal_logic() {
        // Can test private functions in unit tests
        assert!(internal_logic());
    }
}
```

#### Integration Tests
Test public API from user perspective in `tests/` directory:

```rust
// In tests/api_tests.rs
use v_ciso::{User, UserService, DatabaseError};

#[test]
fn test_user_creation_workflow() {
    let service = UserService::new();
    let user = User::new("alice@example.com", "Alice Smith").unwrap();
    
    let result = service.create_user(user);
    assert!(result.is_ok());
}

#[test]
fn test_invalid_email_handling() {
    let result = User::new("invalid-email", "Alice Smith");
    assert!(result.is_err());
}
```

### Best Practices

#### Test Single Concepts
Each test should verify one specific behavior:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    // Good: Tests one specific behavior
    #[test]
    fn succeeds_with_valid_input() {
        let input = "valid@example.com";
        let result = validate_email(input);
        assert!(result.is_ok());
    }

    // Good: Tests error condition specifically
    #[test]
    fn returns_error_on_missing_at_symbol() {
        let input = "invalid-email";
        let result = validate_email(input);
        assert!(matches!(result, Err(ValidationError::MissingAtSymbol)));
    }

    // Bad: Tests multiple concepts
    #[test]
    fn test_email_validation() {
        assert!(validate_email("valid@example.com").is_ok());
        assert!(validate_email("invalid").is_err());
        assert!(validate_email("").is_err());
    }
}
```

#### Use Descriptive Test Names
Test names should explain what is being tested:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    // Good: Descriptive names
    #[test]
    fn user_creation_succeeds_with_valid_data() { /* ... */ }

    #[test]
    fn user_creation_fails_with_duplicate_email() { /* ... */ }

    #[test]
    fn password_validation_requires_minimum_length() { /* ... */ }

    // Bad: Generic names
    #[test]
    fn test1() { /* ... */ }

    #[test]
    fn user_test() { /* ... */ }

    #[test]
    fn works() { /* ... */ }
}
```

#### Return Result from Tests
Use `Result` return type for cleaner error handling:

```rust
use anyhow::Result;

#[test]
fn result_based_test() -> Result<()> {
    let config = load_config("test.toml")?;
    let service = create_service(&config)?;
    let result = service.process_data()?;
    
    assert_eq!(result.status, "success");
    Ok(())
}

#[test]
fn database_integration_test() -> Result<()> {
    let db = setup_test_database().await?;
    let user = User::new("test@example.com", "Test User")?;
    
    db.save_user(&user).await?;
    let retrieved = db.find_user_by_email("test@example.com").await?;
    
    assert_eq!(retrieved.unwrap().email, user.email);
    Ok(())
}
```

#### Use Test Tables for Multiple Cases
For functions requiring many input/output combinations:

```rust
#[test]
fn test_word_parsing() {
    #[rustfmt::skip]
    let cases = vec![
        ("Hello friend.",       vec!["Hello", "friend"],           "excludes period"),
        ("extra-fun",           vec!["extra", "fun"],              "separates dashes"),
        ("aren't macros great", vec!["aren't", "macros", "great"], "apostrophe is one word"),
        ("",                    vec![],                            "empty string"),
        ("single",              vec!["single"],                    "single word"),
    ];

    for (input, expected, description) in cases {
        let actual = parse_words(input);
        assert_eq!(expected, actual, "Failed on case: {}", description);
    }
}

#[test]
fn test_number_validation() {
    let test_cases = [
        (0, true, "zero is valid"),
        (1, true, "positive number is valid"),
        (-1, false, "negative number is invalid"),
        (100, true, "large positive number is valid"),
        (i32::MAX, true, "max value is valid"),
    ];

    for (input, expected_valid, description) in test_cases {
        let result = validate_positive_number(input);
        assert_eq!(result.is_ok(), expected_valid, "{}", description);
    }
}
```

### Anti-Patterns to Avoid

#### Don't Assert on Setup Steps
Use `.unwrap()` or `.expect()` for setup, save assertions for the actual test:

```rust
// Bad: Clutters the test's purpose
#[test]
fn test_user_processing() {
    let user = setup_user().unwrap();
    assert!(user.is_valid()); // This should be in its own test
    
    let result = process_user(user);
    assert!(result.is_ok());
}

// Good: Focused test
#[test]
fn test_user_processing() {
    let user = setup_user().expect("User setup should succeed");
    
    let result = process_user(user);
    assert!(result.is_ok());
}

// Good: Separate test for setup validation
#[test]
fn test_setup_user_creates_valid_user() {
    let user = setup_user().unwrap();
    assert!(user.is_valid());
}
```

#### Use Specific Panic Messages
Be specific with `#[should_panic]` tests:

```rust
// Bad: Could catch wrong panic
#[test]
#[should_panic]
fn test_panics() {
    create_item_with_invalid_name("");
}

// Good: Specific panic message
#[test]
#[should_panic(expected = "name cannot be empty")]
fn test_panics_with_empty_name() {
    create_item_with_invalid_name("");
}

// Better: Test error cases without panics
#[test]
fn test_rejects_empty_name() {
    let result = try_create_item_with_name("");
    assert!(matches!(result, Err(ValidationError::EmptyName)));
}
```

### Advanced Testing Patterns

#### Snapshot Testing with `insta`
For testing complex outputs:

```toml
[dev-dependencies]
insta = "1.0"
```

```rust
use insta::assert_json_snapshot;

#[test]
fn test_user_serialization() {
    let user = User {
        id: 1,
        name: "Alice Smith".to_string(),
        email: "alice@example.com".to_string(),
        created_at: DateTime::parse_from_rfc3339("2023-01-01T00:00:00Z").unwrap(),
    };
    
    // Creates snapshot file on first run, compares on subsequent runs
    assert_json_snapshot!(user);
}

#[test]
fn test_api_response_format() {
    let response = create_user_response();
    assert_json_snapshot!(response, @r###"
    {
      "id": 1,
      "name": "Alice Smith",
      "email": "alice@example.com",
      "status": "active"
    }
    "###);
}
```

#### Mocking with `mockall`
For testing with external dependencies:

```toml
[dev-dependencies]
mockall = "0.11"
```

```rust
use mockall::{automock, predicate::*};

#[automock]
trait DatabaseRepository {
    fn find_user(&self, id: u64) -> Result<User, DatabaseError>;
    fn save_user(&self, user: &User) -> Result<(), DatabaseError>;
}

#[test]
fn test_user_service_with_mock() {
    let mut mock_repo = MockDatabaseRepository::new();
    
    // Set up expectations
    mock_repo
        .expect_find_user()
        .with(eq(1))
        .times(1)
        .returning(|_| Ok(User::new(1, "Alice")));
    
    mock_repo
        .expect_save_user()
        .times(1)
        .returning(|_| Ok(()));
    
    let service = UserService::new(Box::new(mock_repo));
    let result = service.update_user_name(1, "Alice Updated");
    
    assert!(result.is_ok());
}
```

#### Property Testing with `proptest`
For testing with generated inputs:

```toml
[dev-dependencies]
proptest = "1.0"
```

```rust
use proptest::prelude::*;

proptest! {
    #[test]
    fn test_add_commutativity(a in -1000..1000i32, b in -1000..1000i32) {
        prop_assert_eq!(add(a, b), add(b, a));
    }

    #[test]
    fn test_string_round_trip(s in "\\PC*") {
        let encoded = encode_string(&s);
        let decoded = decode_string(&encoded)?;
        prop_assert_eq!(s, decoded);
    }
}

// Custom strategies for domain types
proptest! {
    #[test]
    fn test_user_validation(
        email in "[a-z]+@[a-z]+\\.[a-z]+",
        name in "[A-Za-z ]{1,50}"
    ) {
        let user = User::new(&email, &name);
        prop_assert!(user.is_ok());
    }
}
```

#### Fluent Assertions with `spectral`
For more readable assertions:

```toml
[dev-dependencies]
spectral = "0.6"
```

```rust
use spectral::prelude::*;

#[test]
fn test_with_fluent_assertions() {
    let name = "Frodo Baggins";
    assert_that(&name)
        .starts_with("Frodo")
        .ends_with("Baggins")
        .has_length(13);
    
    let numbers = vec![1, 2, 3, 4, 5];
    assert_that(&numbers)
        .contains(&3)
        .has_length(5)
        .matches(|n| n.iter().all(|&x| x > 0));
    
    let result = some_operation();
    assert_that(&result)
        .is_ok()
        .map(|r| &r.value)
        .is_equal_to(&42);
}
```

### Async Testing
Testing async functions with tokio:

```rust
#[tokio::test]
async fn test_async_function() {
    let service = AsyncService::new();
    let result = service.fetch_data().await;
    assert!(result.is_ok());
}

#[tokio::test]
async fn test_concurrent_operations() {
    let service = AsyncService::new();
    
    let tasks = (0..10).map(|i| {
        let service = service.clone();
        tokio::spawn(async move {
            service.process_item(i).await
        })
    });
    
    let results = futures::future::join_all(tasks).await;
    
    for result in results {
        assert!(result.unwrap().is_ok());
    }
}
```

### Test Organization
Structure tests for maintainability:

```rust
#[cfg(test)]
mod tests {
    use super::*;
    
    // Helper functions for test setup
    fn setup_test_user() -> User {
        User::new("test@example.com", "Test User").unwrap()
    }
    
    fn setup_test_database() -> TestDatabase {
        TestDatabase::new_in_memory()
    }
    
    mod user_creation {
        use super::*;
        
        #[test]
        fn succeeds_with_valid_data() { /* ... */ }
        
        #[test]
        fn fails_with_invalid_email() { /* ... */ }
    }
    
    mod user_updates {
        use super::*;
        
        #[test]
        fn updates_name_successfully() { /* ... */ }
        
        #[test]
        fn rejects_empty_name() { /* ... */ }
    }
}
```

## Idiomatic Rust Patterns

### Core Principles
- **KISS (Keep It Simple, Stupid)**: Write code for humans, not just computers
- **Ownership and Borrowing**: Embrace Rust's core principles for safe, concurrent code
- **Composition over Inheritance**: Use traits and composition to build functionality
- **Type Safety**: Use the type system to make invalid states unrepresentable

### Function Arguments and Borrowing

#### Use Borrowed Types for Arguments
Prefer borrowed types over owned types for function parameters:

```rust
// Good: Flexible and efficient
fn process_data(data: &str) -> usize {
    data.len()
}

fn analyze_items(items: &[Item]) -> Analysis {
    // Process slice of items
    Analysis::new(items)
}

fn handle_path(path: &Path) -> Result<(), IoError> {
    // Work with path reference
    std::fs::read_to_string(path)?;
    Ok(())
}

// Usage works with both owned and borrowed types
let owned_string = "hello".to_string();
process_data(&owned_string);  // Works with String
process_data("world");        // Works with &str

let vec = vec![Item::new(), Item::new()];
analyze_items(&vec);          // Works with Vec<Item>
analyze_items(&[item1, item2]); // Works with array slice
```

#### Avoid Unnecessary Owned Parameters
```rust
// Bad: Forces unnecessary allocations
fn bad_process(data: String) -> usize {
    data.len() // Could have used &str
}

fn bad_analyze(items: Vec<Item>) -> Analysis {
    // Could have used &[Item]
    Analysis::new(&items)
}

// Good: Flexible borrowed parameters
fn good_process(data: &str) -> usize {
    data.len()
}

fn good_analyze(items: &[Item]) -> Analysis {
    Analysis::new(items)
}
```

### String Handling and Formatting

#### Use `format!` for String Concatenation
When readability is more important than performance:

```rust
// Good: Readable and idiomatic
fn create_greeting(name: &str, title: &str) -> String {
    format!("Hello, {} {}!", title, name)
}

fn build_url(base: &str, endpoint: &str, id: u64) -> String {
    format!("{}/api/{}/{}", base, endpoint, id)
}

// For performance-critical code, consider alternatives
fn efficient_concat(parts: &[&str]) -> String {
    let total_len: usize = parts.iter().map(|s| s.len()).sum();
    let mut result = String::with_capacity(total_len);
    for part in parts {
        result.push_str(part);
    }
    result
}
```

### Constructor Patterns

#### Provide Standard Constructors
Use `new()` as convention and implement `Default` when appropriate:

```rust
#[derive(Debug, Default)]
pub struct AppConfig {
    pub timeout: u64,
    pub retries: u8,
    pub debug: bool,
}

impl AppConfig {
    pub fn new() -> Self {
        Self {
            timeout: 5000,
            retries: 3,
            debug: false,
        }
    }
    
    pub fn with_timeout(mut self, timeout: u64) -> Self {
        self.timeout = timeout;
        self
    }
}

// Usage patterns
let config1 = AppConfig::new();
let config2 = AppConfig::default(); // All zeros/false
let config3 = AppConfig { 
    retries: 5, 
    ..Default::default() 
};
let config4 = AppConfig::new().with_timeout(10000);
```

#### Builder Pattern for Complex Construction
For structs with multiple optional fields:

```rust
pub struct DatabaseConnection {
    host: String,
    port: u16,
    database: String,
    username: String,
    password: String,
    pool_size: usize,
    timeout: Duration,
    ssl_enabled: bool,
}

pub struct DatabaseConnectionBuilder {
    host: String,
    port: u16,
    database: String,
    username: String,
    password: String,
    pool_size: usize,
    timeout: Duration,
    ssl_enabled: bool,
}

impl DatabaseConnectionBuilder {
    pub fn new(host: &str, database: &str) -> Self {
        Self {
            host: host.to_string(),
            port: 5432,
            database: database.to_string(),
            username: "postgres".to_string(),
            password: String::new(),
            pool_size: 10,
            timeout: Duration::from_secs(30),
            ssl_enabled: false,
        }
    }
    
    pub fn port(mut self, port: u16) -> Self {
        self.port = port;
        self
    }
    
    pub fn username(mut self, username: &str) -> Self {
        self.username = username.to_string();
        self
    }
    
    pub fn password(mut self, password: &str) -> Self {
        self.password = password.to_string();
        self
    }
    
    pub fn pool_size(mut self, size: usize) -> Self {
        self.pool_size = size;
        self
    }
    
    pub fn timeout(mut self, timeout: Duration) -> Self {
        self.timeout = timeout;
        self
    }
    
    pub fn ssl_enabled(mut self, enabled: bool) -> Self {
        self.ssl_enabled = enabled;
        self
    }
    
    pub fn build(self) -> Result<DatabaseConnection, ConnectionError> {
        if self.password.is_empty() {
            return Err(ConnectionError::MissingPassword);
        }
        
        Ok(DatabaseConnection {
            host: self.host,
            port: self.port,
            database: self.database,
            username: self.username,
            password: self.password,
            pool_size: self.pool_size,
            timeout: self.timeout,
            ssl_enabled: self.ssl_enabled,
        })
    }
}

// Usage
let connection = DatabaseConnectionBuilder::new("localhost", "myapp")
    .username("admin")
    .password("secret123")
    .port(5433)
    .pool_size(20)
    .ssl_enabled(true)
    .build()?;
```

### Memory Management Patterns

#### Use `mem::take()` and `mem::replace()`
When possible handle owned values in `&mut` contexts without cloning:

```rust
#[derive(Default)]
enum ProcessingState {
    #[default]
    Idle,
    Processing { data: String, progress: f64 },
    Completed { result: String },
    Failed { error: String },
}

impl ProcessingState {
    fn complete_processing(&mut self) -> Result<(), String> {
        match self {
            ProcessingState::Processing { data, .. } => {
                // Take ownership of data without cloning
                let owned_data = std::mem::take(data);
                let result = format!("Processed: {}", owned_data);
                
                // Replace the entire state
                *self = ProcessingState::Completed { result };
                Ok(())
            }
            _ => Err("Not in processing state".to_string()),
        }
    }
    
    fn reset_with_new_data(&mut self, new_data: String) -> Option<String> {
        // Replace current state and return old data if it was processing
        let old_state = std::mem::replace(self, ProcessingState::Processing { 
            data: new_data, 
            progress: 0.0 
        });
        
        match old_state {
            ProcessingState::Processing { data, .. } => Some(data),
            _ => None,
        }
    }
}
```

#### Return Consumed Arguments on Error
Allow callers to retry or recover:

```rust
#[derive(Debug)]
pub struct SendError<T> {
    pub value: T,
    pub reason: String,
}

pub fn send_message(message: String) -> Result<(), SendError<String>> {
    if message.is_empty() {
        return Err(SendError {
            value: message, // Return the original value
            reason: "Message cannot be empty".to_string(),
        });
    }
    
    // Simulate network failure
    if rand::random::<f64>() < 0.3 {
        return Err(SendError {
            value: message, // Return for retry
            reason: "Network timeout".to_string(),
        });
    }
    
    // Success case - message is consumed
    println!("Message sent: {}", message);
    Ok(())
}

// Usage with retry logic
fn send_with_retry(mut message: String, max_retries: usize) -> Result<(), String> {
    for attempt in 0..=max_retries {
        match send_message(message) {
            Ok(()) => return Ok(()),
            Err(SendError { value, reason }) => {
                message = value; // Recover the message for retry
                if attempt == max_retries {
                    return Err(format!("Failed after {} attempts: {}", max_retries + 1, reason));
                }
                println!("Attempt {} failed: {}, retrying...", attempt + 1, reason);
            }
        }
    }
    unreachable!()
}
```

### Resource Acquisition Is Initialization (RAII) Guards and Resource Management

#### Automatic Resource Management
```rust
use std::sync::{Mutex, MutexGuard};

pub struct DatabaseTransaction<'a> {
    connection: &'a mut DatabaseConnection,
    committed: bool,
}

impl<'a> DatabaseTransaction<'a> {
    pub fn new(connection: &'a mut DatabaseConnection) -> Result<Self, DatabaseError> {
        connection.begin_transaction()?;
        Ok(Self {
            connection,
            committed: false,
        })
    }
    
    pub fn execute(&mut self, query: &str) -> Result<QueryResult, DatabaseError> {
        self.connection.execute(query)
    }
    
    pub fn commit(mut self) -> Result<(), DatabaseError> {
        self.connection.commit()?;
        self.committed = true;
        Ok(())
    }
}

impl<'a> Drop for DatabaseTransaction<'a> {
    fn drop(&mut self) {
        if !self.committed {
            // Automatically rollback if not committed
            let _ = self.connection.rollback();
        }
    }
}

// Usage - automatic rollback on error or early return
fn transfer_funds(
    db: &mut DatabaseConnection, 
    from: u64, 
    to: u64, 
    amount: f64
) -> Result<(), DatabaseError> {
    let mut tx = DatabaseTransaction::new(db)?;
    
    tx.execute(&format!("UPDATE accounts SET balance = balance - {} WHERE id = {}", amount, from))?;
    tx.execute(&format!("UPDATE accounts SET balance = balance + {} WHERE id = {}", amount, to))?;
    
    // Only commit if all operations succeed
    tx.commit()?;
    Ok(())
} // Automatic rollback if any operation fails
```

### Iterator and Collection Patterns

#### Combating Rightward Pressure
Use early returns and `?` operator to avoid deep nesting:

```rust
// Bad: Deep nesting (rightward pressure)
fn process_user_bad(user_id: u64) -> Result<ProcessedUser, Error> {
    match get_user(user_id) {
        Ok(user) => {
            match validate_user(&user) {
                Ok(_) => {
                    match fetch_user_data(&user) {
                        Ok(data) => {
                            match process_data(data) {
                                Ok(processed) => Ok(ProcessedUser { user, processed }),
                                Err(e) => Err(e.into()),
                            }
                        }
                        Err(e) => Err(e.into()),
                    }
                }
                Err(e) => Err(e.into()),
            }
        }
        Err(e) => Err(e.into()),
    }
}

// Good: Flat structure with early returns
fn process_user_good(user_id: u64) -> Result<ProcessedUser, Error> {
    let user = get_user(user_id)?;
    validate_user(&user)?;
    let data = fetch_user_data(&user)?;
    let processed = process_data(data)?;
    
    Ok(ProcessedUser { user, processed })
}
```

#### Advanced Iterator Patterns
```rust
// Pulling first error from iterator
fn find_first_error<I, T, E>(iter: I) -> Result<Vec<T>, E>
where
    I: Iterator<Item = Result<T, E>>,
{
    iter.collect()
}

// Empty and singular iterators
fn process_optional_items(items: Option<Vec<String>>) {
    // Handle empty case elegantly
    for item in items.unwrap_or_default() {
        println!("Processing: {}", item);
    }
}

// Tuple structs as functions
let numbers = vec!["1", "2", "3", "4"];
let parsed: Result<Vec<i32>, _> = numbers
    .iter()
    .map(|s| s.parse()) // str::parse is a function
    .collect();

// Using enum constructors as functions
enum Status {
    Active(String),
    Inactive,
}

let names = vec!["Alice", "Bob", "Charlie"];
let active_users: Vec<Status> = names
    .into_iter()
    .map(|name| Status::Active(name.to_string()))
    .collect();
```

### Anti-Patterns to Avoid

#### Don't Clone to Satisfy Borrow Checker
```rust
// Bad: Unnecessary clone
fn process_items_bad(items: &mut Vec<String>) {
    if items.is_empty() { return; }
    
    let first_item = items[0].clone(); // Unnecessary clone
    items.push("new item".to_string());
    println!("First item: {}", first_item);
}

// Good: Restructure to avoid clone
fn process_items_good(items: &mut Vec<String>) {
    let is_empty = items.is_empty();
    if is_empty { return; }
    
    // Print first, then modify
    if let Some(first) = items.first() {
        println!("First item: {}", first);
    }
    items.push("new item".to_string());
}

// Alternative: Use indices
fn process_items_alternative(items: &mut Vec<String>) {
    if items.is_empty() { return; }
    
    println!("First item: {}", items[0]); // Borrow first
    items.push("new item".to_string());   // Then modify
}
```

#### Don't Abuse Deref Polymorphism
```rust
// Bad: UserId is not a number for arithmetic
struct UserId(u64);

impl std::ops::Deref for UserId {
    type Target = u64;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

// This allows confusing usage:
// let id = UserId(123);
// let doubled = *id * 2; // UserId should not support arithmetic!

// Good: Provide explicit access methods
impl UserId {
    pub fn new(id: u64) -> Self {
        Self(id)
    }
    
    pub fn value(&self) -> u64 {
        self.0
    }
    
    pub fn as_string(&self) -> String {
        self.0.to_string()
    }
}

// Clear, intentional usage:
// let id = UserId::new(123);
// let id_value = id.value();
```

#### Avoid Panic in Library Code
```rust
// Bad: Library code that panics
pub fn get_user_bad(id: u64) -> User {
    database::fetch_user(id)
        .expect("User not found") // Panics on missing user
}

// Good: Return Result and let caller decide
pub fn get_user_good(id: u64) -> Result<User, DatabaseError> {
    database::fetch_user(id)
}

// Application code can then choose how to handle
fn handle_user_request(id: u64) {
    match get_user_good(id) {
        Ok(user) => process_user(user),
        Err(DatabaseError::NotFound) => show_user_not_found_page(),
        Err(e) => show_error_page(e),
    }
}
```

### Advanced Patterns

#### Using Cell for Interior Mutability
```rust
use std::cell::Cell;

// Shared reference swap trick
struct DisplayableIterator<I> {
    iter: Cell<Option<I>>,
}

impl<I> DisplayableIterator<I> {
    fn new(iter: I) -> Self {
        Self {
            iter: Cell::new(Some(iter)),
        }
    }
}

impl<I> std::fmt::Display for DisplayableIterator<I>
where
    I: Iterator,
    I::Item: std::fmt::Display,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        // Take the iterator out, consuming it
        let iter = self.iter.take().unwrap();
        
        let mut first = true;
        for item in iter {
            if !first {
                write!(f, ", ")?;
            }
            first = false;
            write!(f, "{}", item)?;
        }
        Ok(())
    }
}
```

## Project Scripts

- **Location**: Place all project automation scripts in a `scripts/` directory at the root of the application/crate
- **Purpose**: Create scripts for common development operations such as:
  - `run_local.sh` - Local development server startup
  - `run_tests.sh` - Test execution with different categories
  - `deploy.sh` - Deployment automation
  - `test_service.sh` - Service validation and health checks
- **Design Principles**:
  - Keep scripts simple, focused, and self-contained
  - Write one script per logical operation
  - Make scripts executable (`chmod +x scripts/*.sh`)
  - Use clear, descriptive names that indicate the script's purpose
- **Documentation**: Remember to update the `README.md` in the root of the application/crate explaining available scripts and their usage
- **Error Handling**: Scripts should fail fast and provide clear error messages
- **Environment**: Scripts should work from the project root directory and handle environment setup

## Project Documentation

- **Primary Documentation**: Write a comprehensive `README.md` file in the root of every new Rust application/crate
- **Single Source of Truth**: The README.md should provide everything a new developer needs to understand, build, test, and deploy the service/microservice
- **Required README Sections**:
  - **Overview**: Purpose, key features, and main functionalities
  - **Architecture**: Component breakdown and file/directory structure
  - **Quick Start**: Step-by-step setup and basic usage
  - **Compilation**: Build instructions with feature flags and dependencies
  - **Testing**: Test categories, commands, and coverage information
  - **Deployment**: Local development, Docker, and production deployment
  - **Configuration**: Environment variables and configuration files
  - **Troubleshooting**: Common issues and solutions
- **Documentation Quality Standards**:
  - **Developer-Friendly**: Clear sections for different skill levels and use cases
  - **Comprehensive**: Covers everything from basic setup to advanced deployment
  - **Well-Organized**: Logical flow from overview to detailed implementation
  - **Action-Oriented**: Provides concrete commands and examples
  - **Future-Proof**: Includes contribution guidelines and extensibility information
- **Additional Documentation**:
  - **Multi-file Docs Location**: When additional Markdown documents beyond the root `README.md` are needed for a crate, place them under a `docs/` directory at the root of that crate (e.g., `crates/<crate-name>/docs/`). Link these documents from the crate's `README.md` for discoverability
  - **Scripts Documentation**: Update the main `README.md` to reference available scripts and their usage
  - **API Documentation**: Use `cargo doc` for comprehensive API documentation
  - **Architecture Diagrams**: Include visual representations for complex systems
- **Maintenance**: Keep documentation updated with code changes and new features

## References
- Official Rust Style Guide: https://doc.rust-lang.org/nightly/style-guide/
- Rust API Guidelines: https://rust-lang.github.io/api-guidelines/
- The Definitive Guide to Rust Error Handling: https://www.howtocodeit.com/articles/the-definitive-guide-to-rust-error-handling
- The Ultimate Guide to Rust Newtypes: https://www.howtocodeit.com/articles/ultimate-guide-rust-newtypes
- Master Hexagonal Architecture in Rust: https://www.howtocodeit.com/articles/master-hexagonal-architecture-rust
- Writing Production Rust Macros: https://www.howtocodeit.com/articles/writing-production-rust-macros-with-macro-rules
- Rust Design Patterns: https://rust-unofficial.github.io/patterns/
- Elements of Rust: https://github.com/ferrous-systems/elements-of-rust