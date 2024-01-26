#!/bin/bash
src_dir=app/js
dist_dir=dist

./node_modules/.bin/babel $src_dir --out-dir $dist_dir/lib

cp $src_dir/*.mjs $dist_dir/lib/
cp README.md LICENSE package.json postinstall.js $dist_dir