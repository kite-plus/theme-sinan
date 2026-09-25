#!/bin/sh
# Packs a release as the zip the studio installs: one folder named after the
# theme, holding theme.yaml and what the theme is made of, nothing more.
set -eu
cd "$(dirname "$0")/.."

name=$(sed -n 's/^name: *//p' theme.yaml)
version=$(sed -n 's/^version: *//p' theme.yaml)
out="dist/$name-$version.zip"

rm -rf dist/stage "$out"
mkdir -p "dist/stage/$name"
cp -R theme.yaml layouts static i18n screenshot.webp LICENSE README.md "dist/stage/$name/"
(cd dist/stage && zip -qrX "../$name-$version.zip" "$name" -x "*.DS_Store")
rm -rf dist/stage
echo "$out"
