angular.module('blackBass').controller('HomepageController', [
	
	function HomepageController() {

		this.$onInit = function () {
			this.home = {
				"logo" : "assets/img/logo.svg",
				"text" :  "Eis a edição 2017 do festival eborense BLACK BASS. Nos próximos dias 16, 17, 18 de Novembro irá decorrer um dos eventos mais bonitos no que toca a música independente e do que de bom se anda a fazer neste contexto."
			};
		}
	}
	]);

