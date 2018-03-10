angular.module('blackBass').controller('ticketsController', [
	function ticketsController() {

		this.$onInit = function () {

			this.ticketsItems = {
				"text" : "Tickets will be available",
				"linkName" : "www.ticketea.pt",
				"url" : "https://www.ticketea.pt/bilhetes-festival-black-bass-2017-evora-fest/"
			};

		}
	}
	
	]);
