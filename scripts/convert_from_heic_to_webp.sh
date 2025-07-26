#!/bin/bash

# HEIC to WebP Converter
#
# This script converts .heic/.HEIC images to .webp format using ImageMagick.
# 
# Usage:
#   Run this script in a directory containing .heic or .HEIC files
#   ./convert_from_heic_to_webp.sh
#
# Requirements:
#   - ImageMagick (magick command)
#   - Read/write permissions in the current directory
#
# Output:
#   Creates two subdirectories:
#   - HEIC/: Contains original .heic/.HEIC files (moved from current directory)
#   - webp/: Contains converted .webp files
#
# Example:
#   Before: photos/IMG_001.HEIC, photos/IMG_002.heic
#   After:  photos/HEIC/IMG_001.HEIC, photos/HEIC/IMG_002.heic
#           photos/webp/IMG_001.webp, photos/webp/IMG_002.webp

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    exit 1
fi

# Check if any HEIC files exist
if ! ls *.{heic,HEIC} 1> /dev/null 2>&1; then
    echo "No .heic or .HEIC files found in current directory."
    exit 1
fi

# Create directories (use -p to avoid errors if they exist)
mkdir -p HEIC/
mkdir -p webp/

# Move HEIC files to subdirectory
mv *.{heic,HEIC} ./HEIC/ 2>/dev/null || true

# Convert files
echo "Converting HEIC files to WebP format..."
count=0
total=$(ls ./HEIC/*.{heic,HEIC} 2>/dev/null | wc -l)

for file in ./HEIC/*.{heic,HEIC}; do
    if [[ -f "$file" ]]; then
        ((count++))
        echo "Converting ($count/$total): $(basename "$file")"
        magick "$file" "./webp/$(basename "${file%.*}").webp"
    fi
done

echo "Conversion complete! Converted $count files."

