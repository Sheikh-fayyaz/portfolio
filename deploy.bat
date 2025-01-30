@echo off
echo Deploying Portfolio...
git add .
git commit -m "Auto Deployment"
git push
npm run build
npm run deploy
echo Deployment Complete!
pause