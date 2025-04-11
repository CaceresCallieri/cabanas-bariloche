#!/bin/bash

# This script generates thumbnails for all .webp files in the specified directory.
# This should be run in the same directory as the images.

# Enable globbing to avoid errors if no files found
shopt -s nullglob

# Read all .webp files into array safely
FILES=( *.webp )

# Check if the directory ../thumbnails exists, if not create it
if [ ! -d "../thumbnails" ]; then
    echo "Creating thumbnails directory..."
    mkdir ../thumbnails
fi

# Loop through each file and generate a thumbnail
for FILE in "${FILES[@]}"; do
    echo "Processing file: $FILE"

    # Extract the file name without the extension
    NAME_PART="${FILE%.*}"  # Removes everything after the last '.'

    # Generate thumbnail using ImageMagick
    magick "$FILE" -resize 150x "../thumbnails/${NAME_PART}_thumbnail.webp"

    echo "Thumbnail created: ../thumbnails/${NAME_PART}_thumbnail.webp"
done
