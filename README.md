# Installation
mkdir ~/Documents/Lab/brunchLiveReload
cd ~/Documents/Lab/brunchLiveReload
git init
npm install -g brunch
npm install -D brunch javascript-brunch sass-brunch jade-brunch auto-reload-brunch bower
bower install --save jquery#1.*

# Utilisation
Lancer brunch w --server
se connecter par défaut à l'adresse http://localhost:3333 avec chrome