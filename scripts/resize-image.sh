#!/bin/bash

# Image Resizing Script using sips (macOS)
# Usage: ./scripts/resize-image.sh <input-file> <output-file> <width>
# Example: ./scripts/resize-image.sh photo.jpg photo-800.jpg 800

set -e

# Check if running on macOS
if ! command -v sips &> /dev/null; then
    echo "Error: sips command not found. This script requires macOS."
    exit 1
fi

# Display usage if incorrect number of arguments
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <input-file> <output-file> [width]"
    echo ""
    echo "Examples:"
    echo "  $0 photo.jpg photo-thumb.jpg 200    # Resize to 200px width"
    echo "  $0 photo.jpg photo-medium.jpg 800   # Resize to 800px width"
    echo "  $0 photo.jpg photo-large.jpg 1200   # Resize to 1200px width"
    echo "  $0 photo.jpg photo-optimized.jpg    # Just optimize, no resize"
    echo ""
    echo "Predefined sizes:"
    echo "  thumbnail: 200px"
    echo "  medium: 800px"
    echo "  large: 1200px"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"
WIDTH="${3:-}"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found."
    exit 1
fi

# Create output directory if it doesn't exist
OUTPUT_DIR=$(dirname "$OUTPUT_FILE")
mkdir -p "$OUTPUT_DIR"

# Handle predefined size names
case "$WIDTH" in
    "thumbnail"|"thumb")
        WIDTH=200
        ;;
    "medium"|"med")
        WIDTH=800
        ;;
    "large"|"lg")
        WIDTH=1200
        ;;
esac

# Copy file to output location first
cp "$INPUT_FILE" "$OUTPUT_FILE"

# Resize if width is specified
if [ -n "$WIDTH" ]; then
    echo "Resizing $INPUT_FILE to ${WIDTH}px width..."
    sips --resampleWidth "$WIDTH" "$OUTPUT_FILE" > /dev/null
else
    echo "Optimizing $INPUT_FILE (no resize)..."
fi

# Get file info
FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
DIMENSIONS=$(sips -g pixelWidth -g pixelHeight "$OUTPUT_FILE" | grep -E "pixelWidth|pixelHeight" | awk '{print $2}' | paste -sd "x" -)

echo "✓ Done!"
echo "  Output: $OUTPUT_FILE"
echo "  Size: $FILE_SIZE"
echo "  Dimensions: ${DIMENSIONS}px"
