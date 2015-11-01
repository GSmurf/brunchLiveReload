mkdir ~/Documents/Lab/brunchLiveReload
cd ~/Documents/Lab/brunchLiveReload
git init
npm install -g brunch
npm install -D brunch javascript-brunch sass-brunch
brunch build
npm install -D bower
bower install --save jquery#1.*
