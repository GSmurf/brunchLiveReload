"use strict";

var App = {
  items: ['Installer les dépendances de brunch', 
	      'Installer bower pour les références tierce du genre jquery ou autres', 
	      'Lancer brunch w --server', 
	      'Se connecter par défaut à l\'adresse http://localhost:3333 avec chrome!'],

  init: function init() {
    var tmpl = require('views/list');
    var html = tmpl({ items: App.items });
    $('body').append(html);
  }
};

module.exports = App;