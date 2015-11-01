"use strict";

var App = {
  items: ['Learn Brunch', 'Apply to my projects', '…', 'Profit!',  'Plouperié !!!'],

  init: function init() {
    var tmpl = require('views/list');
    var html = tmpl({ items: App.items });
    $('body').append(html);
  }
};

module.exports = App;