EmberMobile.ListView = EmberMobile.PageView.extend({
  templateName: 'list',

  catsBinding: 'EmberMobile.catsController.content',

  goPrevious: function(){
     EmberMobile.catsController.decPageNum();
     EmberMobile.catsController.loadData();
  },

  goNext: function(){
     EmberMobile.catsController.incPageNum();
     EmberMobile.catsController.loadData();
  },

  onPageShow: function(){
    if (EmberMobile.catsController.get('content').length == 0) {
        EmberMobile.catsController.loadData();
    }
  }
});