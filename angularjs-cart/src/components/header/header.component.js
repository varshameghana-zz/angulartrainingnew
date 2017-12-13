angular.module('angularjs-cart')
    .component('appHeader', {
        templateUrl: 'src/components/header/header.component.html',
        bindings: {
            onMenuItemClick: '&'
        },
        controller: function(){
            this.onLinkClick = function(e, menuName){
                e.preventDefault();
                this.onMenuItemClick({name: menuName});
            };
        }
    });