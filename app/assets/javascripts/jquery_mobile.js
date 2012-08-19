// *************************
// PAGE VIEWS
// *************************

EmberMobile.PAGE_VIEWS = {
    'list': 'EmberMobile.ListView',
    'cat': 'EmberMobile.CatView'
};

// *************************
// BASE CLASSES
// *************************

EmberMobile.PartialView = Ember.View.extend({
    attributeBindings:['data-role'],
    backPage: function(){ EmberMobile.backPage() }
});

EmberMobile.PageView = EmberMobile.PartialView.extend({
    'data-role': 'page',

    loadPage: function(){ jQuery.mobile.changePage(this.$()) },
    onPageShow: function(){},
    onPageHide: function(){}
});

// *************************
// INIT
// *************************

EmberMobile.initialized = false;

// APPLICATION INIT
jQuery(document).bind('mobileinit', function() {
    jQuery.mobile.touchOverflowEnabled = true;
});

jQuery(document).bind('pageinit', function(){
    // CREATE AND APPEND TO BODY
    for(var viewId in EmberMobile.PAGE_VIEWS) {
        if (!EmberMobile.get(viewId)){
            var view = eval(EmberMobile.PAGE_VIEWS[viewId]).create();
            view.classNames.push(viewId+'View');
            view.append();
            EmberMobile.set(viewId,view);
        }
    }

    // BIND EVENTS
    for(var viewId in EmberMobile.PAGE_VIEWS) {
        view = EmberMobile.get(viewId);
        var className = viewId+'View';
        jQuery('.'+className).bind('pageshow', view.onPageShow);
        jQuery('.'+className).bind('pagehide', view.onPageHide);
    }

    // LOAD FIRST PAGE
    if (!EmberMobile.initialized) {
        setTimeout(function(){ EmberMobile.changePage('list')}, 1);
        EmberMobile.initialized = true
    }
});
