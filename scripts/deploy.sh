#!/bin/sh
set -e
git push
node generatePdf.js
git add -A
git commit -m "to deploy"
git push
git switch master
git merge develop
git push
git switch develop
