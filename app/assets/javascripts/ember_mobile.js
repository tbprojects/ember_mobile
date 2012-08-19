EmberMobile = Ember.Application.create();

//= require ./store
//= require ./jquery_mobile
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./templates
//= require_tree ./routes
//= require_self

EmberMobile.initialize();