angular.module('blackBass').controller('ArtistsController', [
	'$interval',
	'$http',
	function ArtistsController($interval, $http) {

		var self = this;
		var polling;

		this.ready = false;
		this.hasProducts = false;

		function getArtistList() {
			$http.get('https://api.myjson.com/bins/1dka0h').then(
				function onSuccess(response) {
					self.feauturedProducts = response.data;
					self.ready = true;
					this.hasProducts = true;
				},
				function onError() {
					console.log('Endpoint failed');
				}
				).finally(function () {
					self.ready = true;
				});
			}

			this.$onInit = function () {

				getArtistList();

				// polling = $interval(function () {
				// 	getArtistList();
				// }, 10000);

			}
			this.$onDestroy = function () {
				$interval.cancel(polling);
			}
		}
		]);

