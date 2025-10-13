#!/bin/bash

# Script to generate favicon files from the Resysto logo
# Requires ImageMagick (convert command)

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directories
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
IMAGES_DIR="$PROJECT_ROOT/static/images"
SOURCE_LOGO="$IMAGES_DIR/resysto-logo.png"

echo "🎨 Resysto Favicon Generator"
echo "=============================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick is not installed!${NC}"
    echo ""
    echo "Please install ImageMagick:"
    echo "  - Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  - macOS: brew install imagemagick"
    echo "  - Arch Linux: sudo pacman -S imagemagick"
    echo ""
    echo "Or use an online tool:"
    echo "  https://realfavicongenerator.net/"
    exit 1
fi

# Check if source logo exists
if [ ! -f "$SOURCE_LOGO" ]; then
    echo -e "${RED}❌ Source logo not found: $SOURCE_LOGO${NC}"
    echo ""
    echo "Creating a placeholder logo with Resysto branding..."
    
    # Create a simple placeholder logo
    convert -size 512x512 xc:'#0A0A0A' \
        -fill '#00D4FF' -draw "circle 256,256 256,100" \
        -fill '#39FF14' -draw "circle 206,256 206,180" \
        -fill '#B026FF' -draw "circle 306,256 306,180" \
        -font Arial-Bold -pointsize 120 -gravity center \
        -fill white -annotate +0+0 'R' \
        "$SOURCE_LOGO"
    
    echo -e "${GREEN}✅ Created placeholder logo${NC}"
fi

echo "📁 Source: $SOURCE_LOGO"
echo "📂 Output: $IMAGES_DIR"
echo ""

# Generate favicons
echo "Generating favicons..."

# 16x16 favicon
echo "  → favicon-16x16.png (16×16)"
convert "$SOURCE_LOGO" -resize 16x16 -background transparent -gravity center -extent 16x16 "$IMAGES_DIR/favicon-16x16.png"

# 32x32 favicon
echo "  → favicon-32x32.png (32×32)"
convert "$SOURCE_LOGO" -resize 32x32 -background transparent -gravity center -extent 32x32 "$IMAGES_DIR/favicon-32x32.png"

# Apple Touch Icon (180x180)
echo "  → apple-touch-icon.png (180×180)"
convert "$SOURCE_LOGO" -resize 180x180 -background transparent -gravity center -extent 180x180 "$IMAGES_DIR/apple-touch-icon.png"

# Android Chrome icons
echo "  → android-chrome-192x192.png (192×192)"
convert "$SOURCE_LOGO" -resize 192x192 -background transparent -gravity center -extent 192x192 "$IMAGES_DIR/android-chrome-192x192.png"

echo "  → android-chrome-512x512.png (512×512)"
convert "$SOURCE_LOGO" -resize 512x512 -background transparent -gravity center -extent 512x512 "$IMAGES_DIR/android-chrome-512x512.png"

# Optional: Create a .ico file for legacy browsers
echo "  → favicon.ico (16×16, 32×32, 48×48)"
convert "$IMAGES_DIR/favicon-16x16.png" \
        "$IMAGES_DIR/favicon-32x32.png" \
        \( "$SOURCE_LOGO" -resize 48x48 -background transparent -gravity center -extent 48x48 \) \
        "$PROJECT_ROOT/static/favicon.ico"

echo ""
echo -e "${GREEN}✅ All favicons generated successfully!${NC}"
echo ""
echo "Generated files:"
ls -lh "$IMAGES_DIR"/favicon-*.png \
       "$IMAGES_DIR"/apple-touch-icon.png \
       "$IMAGES_DIR"/android-chrome-*.png \
       "$PROJECT_ROOT/static/favicon.ico" 2>/dev/null || true

echo ""
echo "📋 Next steps:"
echo "  1. Review the generated icons"
echo "  2. Optionally, replace with professionally designed icons"
echo "  3. Test the site: zola serve"
echo "  4. Build and deploy: zola build"
echo ""
echo "🔍 Test your favicons at:"
echo "  https://realfavicongenerator.net/favicon_checker"
echo ""




