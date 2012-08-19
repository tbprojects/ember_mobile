EmberMobile.Store = DS.Store.extend({
  revision: 4,
  adapter: DS.RESTAdapter.create()
});

Storage.prototype.setObject = function(key, value) {
    return this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
};

Storage.prototype.addToArray = function(key, value) {
    var array = localStorage.getObject(key);
    array.push(value);
    return localStorage.setObject(key, array)
};