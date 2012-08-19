EmberMobile.CatEntryView =  EmberMobile.PartialView.extend({
    attributeBindings: ['data-theme', 'data-iconshadow', 'data-wrapperels', 'data-icon', 'data-iconpos'],
    'data-theme': "c",
    'data-iconshadow': "true",
    'data-wrapperels': "div",
    'data-icon': "arrow-r",
    'data-iconpos': "right",

    selectedCatBinding: 'EmberMobile.catsController.selectedCat',
    
    tagName: 'li',

    showCat: function(){
        this.set('selectedCat', this.get('cat'));
        EmberMobile.changePage('cat', {transition: 'slide'})
    }
});