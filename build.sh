#!/bin/bash
src_dir=js
dist_dir=dist

./node_modules/.bin/babel $src_dir --out-dir $dist_dir

cp $src_dir/index.mjs $dist_dir/index.mjs
cp README.md LICENSE package.json $dist_dir