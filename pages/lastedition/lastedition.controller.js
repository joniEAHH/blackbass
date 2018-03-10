angular.module('blackBass').controller('lasteditionController', [
	'$http',
	function lasteditionController($http) {

		this.$onInit = function () {

			this.videoProducts = {
				"video" : "https://player.vimeo.com/video/245386371"
			};

		}
	}
	
	]);
