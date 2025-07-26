#!/bin/bash

# WebP Thumbnail Generator
#
# This script generates 150px width thumbnails for all .webp files in the current directory.
# 
# Usage:
#   Run this script in a directory containing .webp files
#   ./generate_thumbnails.sh
#
# Requirements:
#   - ImageMagick (magick command)
#   - Read/write permissions in the current and parent directories
#
# Output:
#   Creates ../thumbnails/ directory containing thumbnail files
#   Thumbnails are named: original_name_thumbnail.webp
#
# Example:
#   Input:  ./photo.webp
#   Output: ../thumbnails/photo_thumbnail.webp (150px width, proportional height)

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    exit 1
fi

# Enable globbing to avoid errors if no files found
shopt -s nullglob

# Read all .webp files into array safely
FILES=( *.webp )

# Check if any .webp files exist
if [ ${#FILES[@]} -eq 0 ]; then
    echo "No .webp files found in current directory."
    exit 1
fi

# Check if the directory ../thumbnails exists, if not create it
if [ ! -d "../thumbnails" ]; then
    echo "Creating thumbnails directory..."
    mkdir -p ../thumbnails
fi

echo "Generating thumbnails for ${#FILES[@]} files..."

# Loop through each file and generate a thumbnail
count=0
for FILE in "${FILES[@]}"; do
    ((count++))
    echo "Processing ($count/${#FILES[@]}): $FILE"

    # Extract the file name without the extension
    NAME_PART="${FILE%.*}"  # Removes everything after the last '.'

    # Generate thumbnail using ImageMagick
    if magick "$FILE" -resize 150x "../thumbnails/${NAME_PART}_thumbnail.webp"; then
        echo "  ✓ Thumbnail created: ../thumbnails/${NAME_PART}_thumbnail.webp"
    else
        echo "  ✗ Failed to create thumbnail for: $FILE"
    fi
done

echo "Thumbnail generation complete! Processed $count files."
