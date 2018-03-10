angular.module('blackBass').controller('HeaderAppController', [
    'HEADER_APP.CONFIG',
    function HeaderAppController(componentConfig) {

        this.$onInit = function () {
            var self = this;
            this.mainMenu = componentConfig.mainMenuLinks;

        };
    }
]);