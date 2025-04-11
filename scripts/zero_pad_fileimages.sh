#!/bin/bash

# This script renames all .webp files in the specified directory by adding a zero-padded prefix to the file names.

# Directory containing the images (default is current directory)
IMAGE_DIR="${1:-.}"

# Move into the directory
cd "$IMAGE_DIR" || exit 1

# Enable globbing to avoid errors if no files found
shopt -s nullglob

# Read all .webp files into array safely
FILES=( *.webp )

PAD_WIDTH=2

for FILE in "${FILES[@]}"; do
    echo "Processing file: $FILE"

    PREFIX="${FILE%%.*}"  # Removes everything after the first '.'

    # # If the prefix already has the pad width, skip renaming
    if [[ ${#PREFIX} -eq $PAD_WIDTH ]]; then
        echo "File alredy has desires pad width. Skipping..."
        continue
    fi

    # Get current number and add a zero-padded prefix
    NEW_PREFIX=$(printf "%0${PAD_WIDTH}d" "$PREFIX")

    # Extract the file name without the prefix
    NAME_PART="${FILE#*.}"  # Removes everything before and including first '.'

    NEW_NAME=${NEW_PREFIX}.${NAME_PART}

    echo "Renaming: $FILE -> $NEW_NAME"
    mv "${FILE}" "${NEW_NAME}"
done
