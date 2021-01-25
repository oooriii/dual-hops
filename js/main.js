var vm = new Vue({
	 el: '#vue-app',
	 data: {
/*
     birres:[
       {
         nom: 'Simple A',
         estil: 'American IPA',
         alc: 7.7,
         amargor: 58,
         prod: 'Dual Hops',
         country: 'Cat',
       },
       {
         nom: 'Simple B',
         estil: 'NeIPA',
         alc: 7.7,
         amargor: 58,
         prod: 'Dual Hops',
         country: 'Cat',
       },
       {
         nom: 'Pinya Colada!',
         estil: 'Milkshake IPA',
         alc: 6.2,
         amargor: 30,
         prod: 'Dual Hops',
         country: 'Cat',
       },
       {
         nom: 'Neipa Azacca|Sabro',
         estil: 'NePA',
         alc: 6,
         amargor: 28,
         prod: 'Dual Hops',
         country: 'Cat',
       },
     ],
*/
		 birres:[],
		 events:[],

	 },

	mounted () {
			this.loading = true;
			self = this;
			// birres
			axios.get('events.json')
			.then(response => (this.events = response.data)).
			finally(function(){
				self.loading=false;
			});
			this.loading = true;
			self = this;
			// birres
			axios.get('birres.json')
			.then(response => (this.birres = response.data)).
			finally(function(){
				self.loading=false;

				console.log(self.data);

			});

	},
});
