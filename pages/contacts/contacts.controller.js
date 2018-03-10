angular.module('blackBass').controller('ContactsController', [
	
	function ContactsController() {

		this.$onInit = function () {
			this.contactItems = [{
				"name" : "Tiago",
				"email" : "tiagoalexandrino@pointlist.pt"
			},{
				"name" : "João",
				"email" : "joaomodas@pointlist.pt"
			}];

			this.location = {
				"cidade" : "Évora",
				"pais" : "Portugal"
			};
		}

	}
	]);

