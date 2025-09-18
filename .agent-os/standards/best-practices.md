# Development Best Practices

## Context

Global development guidelines for Agent OS projects.

<conditional-block context-check="core-principles">
IF this Core Principles section already read in current context:
  SKIP: Re-reading this section
  NOTE: "Using Core Principles already in context"
ELSE:
  READ: The following principles

## Core Principles

### Keep It Simple
- Implement code in the fewest lines possible
- Avoid over-engineering solutions
- Choose straightforward approaches over clever ones

### Optimize for Readability
- Prioritize code clarity over micro-optimizations
- Write self-documenting code with clear variable names
- Add comments for "why" not "what"

### DRY (Don't Repeat Yourself)
- Extract repeated business logic to private methods
- Extract repeated UI markup to reusable components
- Create utility functions for common operations

### File Structure
- Keep files focused on a single responsibility
- Group related functionality together
- Use consistent naming conventions
- Organize code by business domain, not technical concerns
- Separate core business logic from infrastructure dependencies

### Test Driven Development (TDD)
- Write unit tests first, following the Red-Green-Refactor cycle
- When checking the generated code with tests, aim for at least 80% coverage, if possible
- Write tests that describe the expected behavior, not just the implementation
- Test edge cases and error conditions, not just the happy path
- Keep tests simple, focused, and independent of each other
- Use descriptive test names that explain what behavior is being tested
- Mock external dependencies to ensure tests are fast and reliable
- Refactor both production code and tests to maintain quality
</conditional-block>

<conditional-block context-check="dependencies" task-condition="choosing-external-library">
IF current task involves choosing an external library:
  IF Dependencies section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using Dependencies guidelines already in context"
  ELSE:
    READ: The following guidelines
ELSE:
  SKIP: Dependencies section not relevant to current task

## Dependencies

### Choose Libraries Wisely
When adding third-party dependencies:
- Select the most popular and actively maintained option
- Check the library's GitHub repository for:
  - Recent commits (within last 6 months)
  - Active issue resolution
  - Number of stars/downloads
  - Clear documentation
</conditional-block>

<conditional-block context-check="security-principles" task-condition="security-sensitive">
IF current task involves security-sensitive operations OR writing code that handles user input:
  IF Security Principles section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using Security Principles already in context"
  ELSE:
    READ: The following security principles
ELSE:
  SKIP: Security principles not relevant to current task

## Security Principles

These rules apply universally to all code, including manual development, automated tooling, and AI-generated code.

### Core Security Rules

1. **Do Not Use Raw User Input in Sensitive Operations**
   - Never use untrusted input directly in file access, command execution, database queries, or similar operations
   - Always validate, sanitize, and escape user input before use

2. **Do Not Expose Secrets in Public Code**
   - API keys, credentials, private keys, or tokens must not appear in frontend code or public repositories
   - Use environment variables or secure configuration management

3. **Enforce Secure Communication Protocols**
   - Only use secure protocols (HTTPS, TLS) for all external communications
   - Never transmit sensitive data over unencrypted connections

4. **Validate All External Input**
   - Inputs from users, external APIs, or third-party systems must be validated for type, length, and format
   - Use allowlists rather than blocklists when possible

5. **Do Not Log Sensitive Information**
   - Logs must not contain credentials, tokens, personal identifiers, or other sensitive data
   - Sanitize log output before writing

6. **Handle Errors Securely**
   - Do not expose internal system details in error messages
   - Log detailed errors internally, show generic messages to users

7. **Limit Trust in Client-Side Logic**
   - Critical logic (permissions, authentication, validation) must not rely solely on client-side code
   - Always validate on the server side

8. **Prevent Security Control Bypass**
   - Security checks must not be disabled or bypassed without documented justification
   - Require explicit approval for security exceptions
</conditional-block>

<conditional-block context-check="rust-safety" task-condition="rust-development">
IF current task involves writing or updating Rust code:
  IF Rust Safety section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using Rust Safety rules already in context"
  ELSE:
    READ: The following Rust safety rules
ELSE:
  SKIP: Rust safety rules not relevant to current task

## Rust Safety Rules

### Memory Safety
1. **Avoid Unsafe Code**
   - Do not use `unsafe` blocks unless absolutely necessary
   - If used, document safety invariants clearly and ensure thorough review
   - Keep `unsafe` blocks as small as possible

2. **Handle Errors Explicitly**
   - Always handle `Result` and `Option` types explicitly
   - Do not use `unwrap()` or `expect()` on values that may contain errors or `None`
   - Use proper error propagation with `?` operator
   - Choose appropriate error types based on your audience:
     - Use `Box<dyn Error>` for applications where callers won't programmatically handle errors
     - Use structured enum-based errors for libraries where callers need programmatic handling
   - Implement both `Debug` and `Display` for all error types

3. **Prevent Integer Overflows**
   - Use checked arithmetic (`checked_add`, `checked_sub`, etc.)
   - Enable overflow checks in release builds
   - Validate numeric input ranges

### Production Safety
4. **Avoid Panics in Production**
   - Handle errors gracefully and return appropriate error messages
   - Use `Result` types for recoverable errors
   - Test panic conditions during development

5. **Use Strong Types for Security-Critical Data**
   - Use newtype wrappers for authentication tokens, passwords, and sensitive data
   - Implement `Zeroize` trait for sensitive data cleanup
   - Avoid accidental misuse through type safety
   - Design error types that don't leak sensitive information in `Display` implementations
   - Make invalid states unrepresentable through type design

6. **Limit Third-Party Crates**
   - Only use well-maintained and trusted crates
   - Regularly audit dependencies with `cargo audit`
   - Review crate source code for security-critical dependencies

7. **Prefer Immutability**
   - Use immutable variables and data structures by default
   - Reduce risk of unintended side effects
   - Make mutability explicit and minimal
</conditional-block>

<conditional-block context-check="rust-principles">
IF this Rust Principles section already read in current context:
  SKIP: Re-reading this section
  NOTE: "Using Rust Principles already in context"
ELSE:
  READ: The following principles

## Rust Principles

### Advanced Error Handling
1. **Design Errors for Your Audience**
   - For applications: Use `anyhow::Error` or `Box<dyn Error + Send + Sync>` for simple error handling
   - For libraries: Use structured enum-based errors with `thiserror` for programmatic handling
   - Consider what callers will do with your errors when choosing representation

2. **Error Composition and Chaining**
   - Implement `Error::source()` to provide error chaining
   - Use `#[from]` attribute with `thiserror` for automatic error conversion
   - Preserve original error context when wrapping errors

3. **Error Ergonomics**
    - Use `thiserror` for structured errors to reduce boilerplate
    - Use `anyhow` for application-level error handling with context
    - Provide helpful error messages that guide users toward solutions

### Type-Driven Design with Newtypes
4. **Design Always-Valid Data Types**
    - Use newtype wrappers to encode business rules and constraints in the type system
    - Validate data once at the boundary and trust it throughout the system
    - Prefer compile-time guarantees over runtime checks where possible
    - Make invalid states unrepresentable through careful type design

5. **Newtype Constructor Patterns**
    - Provide fallible constructors (`new`) that validate input and return `Result`
    - Use `TryFrom` implementations for ergonomic conversions
    - Consider `unsafe` `new_unchecked` constructors for performance-critical paths with pre-validated data
    - Make constructors the single source of truth for validation logic

6. **Newtype Trait Implementation Strategy**
    - Derive standard traits (`Debug`, `Clone`, `PartialEq`) by default
    - Implement `Display` with user-friendly formatting
    - Use `AsRef`, `Deref`, or custom getters for accessing inner values
    - Implement `From`/`TryFrom` for ergonomic conversions
    - Be selective about which traits to expose to maintain encapsulation

### Application Architecture
7. **Dependency Inversion and Abstraction**
    - Abstract external dependencies behind traits (ports)
    - Implement concrete adapters for specific technologies
    - Keep business logic independent of infrastructure concerns
    - Use dependency injection to provide implementations

8. **Domain-Driven Design**
    - Organize code by business domain, not technical layers
    - Keep domain models free of external dependencies
    - Define clear boundaries between different business contexts
    - Use domain-specific language in code and APIs

9. **Repository Pattern**
    - Abstract data access behind repository traits
    - Define repositories in terms of domain operations, not database operations
    - Return domain errors, not database-specific errors
    - Keep repositories focused on single aggregate roots

10. **Service Layer Architecture**
    - Encapsulate business logic in service traits
    - Make services the orchestration layer between ports and domain
    - Keep services stateless and focused on single responsibilities
    - Use services to coordinate between multiple repositories

### Advanced Rust Patterns
11. **Macro Development**
    - Use macros to eliminate boilerplate, not to create domain-specific languages
    - Prefer declarative macros (`macro_rules!`) over procedural macros when possible
    - Design macros with multiple rules to handle different argument patterns
    - Use fully qualified paths for dependencies in macro expansions
    - Implement proper macro hygiene to avoid variable name conflicts

12. **Macro Design Principles**
    - Evaluate input expressions only once to avoid side effects
    - Use internal rules (prefixed with `@`) for complex macro logic
    - Provide clear error messages when macro patterns don't match
    - Test macros thoroughly with edge cases and different input patterns
    - Document macro behavior and expected input formats clearly

13. **Observability and Logging**
    - Use structured logging with the `tracing` crate for comprehensive observability
    - Always include meaningful context and fields in log events
    - Use spans to track operations and provide hierarchical context
    - Configure log levels appropriately for different environments (debug, info, error)
    - Never log sensitive data (passwords, tokens, personal information)
    - Use environment variables for runtime log configuration

14. **Testing Strategy and Quality**
    - Test for correctness and to prevent regressions
    - Use the right testing tool for each scenario (unit, integration, property testing)
    - Write clear and maintainable tests that serve as documentation
    - Prefer `cargo nextest` for running tests (faster with better UI)
    - Test a single concept per test function for clear failure diagnosis
    - Use descriptive test names that explain the behavior being tested

15. **Test Organization and Patterns**
    - Write unit tests in `#[cfg(test)]` modules for testing internal logic
    - Write integration tests in `tests/` directory for testing public APIs
    - Return `Result` from tests to use the `?` operator for cleaner error handling
    - Use test tables for functions requiring multiple input/output combinations
    - Don't assert on intermediate setup steps - use `.unwrap()` or `.expect()` instead
    - Use specific panic messages with `#[should_panic(expected = "message")]`

### Idiomatic Rust Patterns
16. **Function Arguments and Borrowing**
    - Use borrowed types for function arguments: `&str` over `&String`, `&[T]` over `&Vec<T>`
    - This makes functions more flexible and avoids unnecessary allocations
    - Embrace ownership and borrowing as core principles for safe, concurrent code
    - Use composition over inheritance through traits and composition

17. **Resource Management and RAII**
    - Use RAII guards for automatic resource management (mutex locks, database connections)
    - Use `mem::take()` and `mem::replace()` to handle owned values in `&mut` contexts
    - Return consumed arguments on error to allow caller retry or recovery
    - Contain `unsafe` code in small, auditable modules with safe public APIs

18. **Constructor and Builder Patterns**
    - Provide constructors with `new()` as convention and implement `Default` when appropriate
    - Use the builder pattern for complex object creation with multiple optional fields
    - Use `format!` for string concatenation when readability is more important than performance
    - Make invalid states unrepresentable through careful type design

19. **Anti-Patterns to Avoid**
    - Don't clone values just to satisfy the borrow checker - restructure code instead
    - Don't use `Deref` polymorphism for unrelated types - provide explicit getter methods
    - Don't overuse `#[deny(warnings)]` across entire projects - it makes toolchain upgrades difficult
    - Don't panic on errors in library code - return `Result<T, E>` and let callers decide
    - Avoid rightward pressure through judicious use of early returns and `?` operator
</conditional-block>

<conditional-block context-check="web-security" task-condition="web-development">
IF current task involves web development, database operations, or network requests:
  IF Web Security section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using Web Security rules already in context"
  ELSE:
    READ: The following web security rules
ELSE:
  SKIP: Web security rules not relevant to current task

## Web Security Rules

### SQL Injection Prevention
1. **Always Use Parameterized Queries**
   - Never construct SQL queries by concatenating user input
   - Use prepared statements provided by your database library
   - Treat user input as data, not executable code

2. **Validate Database Input**
   - Validate all external input for type, length, and format
   - Use least privilege database accounts
   - Never expose raw database errors to users

### Path Traversal Prevention
3. **Do Not Use User Input in File Paths**
   - Never use raw user input to construct file paths
   - Use allowlists of permitted files/directories
   - Validate and canonicalize paths before use

4. **Implement Proper File Access Controls**
   - Use secure file handling libraries
   - Implement proper access controls and permissions
   - Sanitize file names and extensions

### SSRF Prevention
5. **Control Outbound Network Requests**
   - Never use raw user input as destination URLs
   - Block access to private/internal IP ranges
   - Validate hostnames and resolved IPs before requests

6. **Restrict Network Protocols**
   - Only allow HTTP/HTTPS protocols on safe ports
   - Block file://, gopher://, and other dangerous protocols
   - Do not forward internal authorization headers

### XML Security (XXE Prevention)
7. **Secure XML Processing**
   - Disable DTDs and external entities in XML parsers
   - Use secure parser libraries with XXE protection
   - Limit resource consumption to prevent DoS attacks
</conditional-block>

<conditional-block context-check="mcp-security" task-condition="mcp-integration">
IF current task involves MCP (Model Context Protocol) integration:
  IF MCP Security section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using MCP Security rules already in context"
  ELSE:
    READ: The following MCP security rules
ELSE:
  SKIP: MCP security rules not relevant to current task

## MCP Security Rules

1. **Do Not Execute System Commands from MCP**
   - Never execute system or shell commands automatically based on MCP input
   - Require explicit human review and approval for system operations

2. **Protect Sensitive Data in MCP**
   - Do not transmit credentials, tokens, or Personal Identifiable Information (PII) through MCP requests
   - Treat all user-supplied input as potentially sensitive
   - If uncertain about data sensitivity, do not use it as parameters

3. **Control File Operations**
   - MCP must not autonomously add, modify, or delete files
   - Require human oversight for all file system operations

4. **Prevent Automatic Tool Chaining**
   - Do not run additional tools automatically based on MCP suggestions
   - Require explicit review and approval for tool execution

5. **Require User Confirmation**
   - Before invoking tools that modify files or execute commands
   - Before running database queries based on MCP output
   - For any sensitive operations suggested by MCP
</conditional-block>
