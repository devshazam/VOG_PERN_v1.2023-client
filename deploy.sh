#!/bin/bash
pwd
git pull
npm run build
pm2 restart index.js
