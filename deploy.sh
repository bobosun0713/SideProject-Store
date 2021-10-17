#!/usr/bin/env sh

# abort on errors
set -e

# generate 生成dist檔
npm run deploy:github

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bobosun0713/SideProject-Store.git master:gh-pages

cd -