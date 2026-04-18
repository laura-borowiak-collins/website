#!/bin/bash

PREFIX="Z"
NEW_NAME="KALEIDOSCOPE"
PATTERN="${PREFIX}*"

i=10

for f in $PATTERN; do
    num=$(printf "%02d" $i)
    ext="${f##*.}"
    mv "$f" "${NEW_NAME}_${num}.${ext}"
    i=$((i+1))
done