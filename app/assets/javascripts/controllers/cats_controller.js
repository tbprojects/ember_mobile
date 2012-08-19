EmberMobile.catsController = Ember.Controller.create({

    content: [],
    selectedCat: null,
    pageNum: 1,

    decPageNum: function(){
        this.set('pageNum', this.get('pageNum') - 1);
    },

    incPageNum: function(){
        this.set('pageNum', this.get('pageNum') + 1);
    },

    loadData: function() {
        if (this.get('pageNum') < 1) {this.set('pageNum', 1)}
        var self = this;
        EmberMobile.showSpinner();
        jQuery.ajax({
            url: '/cats',
            data: {page: self.get('pageNum')}
        }).done(function(data){
            var cats = jQuery.map(data.cats, function(value){
                return EmberMobile.Cat.create(value)
            });
            self.set('content', cats);
            EmberMobile.refreshLists();
            EmberMobile.hideSpinner();
        }).fail(function(data){
            alert('Request failed');
            EmberMobile.hideSpinner();
        });
    }
});
