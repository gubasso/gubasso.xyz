#!/bin/sh
set -e
node generatePdf.js
git add -A
git commit -m "to deploy"
git push
git switch master
git merge develop
git push
git switch develop
