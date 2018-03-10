angular.module('blackBass').controller('FooterAppController', [
    function () {

        this.$onInit = function () {
            this.footer = {
                text: 'Copyright © 2017. Black Bass - Évora fest',
            };
    };
}
]);