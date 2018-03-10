angular.module('blackBass').controller('partnersController', [
	function partnersController() {

		this.$onInit = function () {

			this.partnersItems = [
			{
				"href": "http://www.loudmagazine.net/",
				"path": "assets/img/loud.png"
			},
			{
				"href": "https://www.superbock.pt",
				"path": "assets/img/superbock.png"
			},
			{
				"href": "https://tradiio.com",
				"path": "assets/img/tradio.png"
			}];

		}
	}
	
	]);




