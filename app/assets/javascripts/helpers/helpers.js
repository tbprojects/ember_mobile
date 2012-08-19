EmberMobile.pagesHistory = [];
EmberMobile.currentPage  = "#splash_screen";

EmberMobile.backPage = function(){
    if (this.pagesHistory.length > 0) {
        this.currentPage = null;
        this.changePage(this.pagesHistory.pop(), {transition: 'slide', reverse: true})
    }
};

EmberMobile.changePage = function(nextPage, options){
    this.get(nextPage).loadPage(options);
    if (this.currentPage) {
        this.pagesHistory.push(this.currentPage)
    }
    this.currentPage = nextPage;
    setTimeout(this.refreshLists, 500);
};

EmberMobile.showSpinner = function(){
    jQuery('#block-ui').height(jQuery(document).height());
    jQuery('#block-ui').show();
    jQuery.mobile.showPageLoadingMsg();
};

EmberMobile.hideSpinner = function(){
    jQuery('#block-ui').hide();
    jQuery.mobile.hidePageLoadingMsg();
};

EmberMobile.refreshLists = function(){
    setTimeout(function(){jQuery('.ui-page-active ul.ui-listview').listview('refresh');},10)
};