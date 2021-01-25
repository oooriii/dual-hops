Vue.component('birres', {
//	props: [ 'geturi', 'posturi', 'comanda', 'adomiciliuri', 'adomicili',  'missatgesociuri', 'missatgesoci' ],
//	props: [ 'geturi'],
	template: `
	<article v-for="birra in birres">
	  <h3>{{birra.nom}}</h3>
	  <div>
	    <span aria-aria-label="style">{{birra.estil}}</span>
	    <span aria-aria-label="alc">{{birra.alc}}%</span>
	    <span aria-aria-label="bittering">{{birra.amargor}} IBU</span>
	    <span aria-aria-label="prod">{{birra.prod}}</span>
	    <span aria-aria-label="country">{{birra.country}}</span>
	  </div>
	</article>
	`,
	data () {
	    return {
						loading: false,
						message: '',
						status: '',
						birres: [],
	        }

	},
	computed:{

	},
	methods:{

	},
	mounted () {
			this.loading = true;
			self = this;
			// birres
			axios.get('birres.json')
			.then(response => (this.birres = response.data)).
			finally(function(){
				self.loading=false;
			});

	},
});

Vue.component('events', {
//	props: [ 'geturi', 'posturi', 'comanda', 'adomiciliuri', 'adomicili',  'missatgesociuri', 'missatgesoci' ],
//	props: [ 'geturi'],
	template: `
	<main>
		<p>Durant aquest mes farem les següents activitats:</p>
<!--
		<calendar>
		</calendar>
-->
		<ul>
			<li v-for="event in events"><time>{{event.data-hora}}</time>{{event.titol}} <a v-if="! event.complet" href="{{event.formulari}}" target="_blank" class="w-100 btn btn-lg btn-outline-dark font-weight-bold text-dark" role="button">Apuntar-m'hi!</a><span class="text-danger">COMPLET!</span></li>
		</ul>
	</main>
	`,
	data () {
	    return {
						loading: false,
						message: '',
						status: '',
						events: [],
	        }

	},
	computed:{

	},
	methods:{

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

	},
});

var vm = new Vue({
	 el: '#vue-app',
	 data: {
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
		 events[],
     /*
		 isActiveBurger: false,
		 isActiveAcces: false,
		 isActiveNotification: true,
		 usertab: true,
		 // recuperar pwd
		 email: '',
		 loadingBtn: false,
		 message: {
			 missatge: '',
			 status: '',
		 },
     */
	 },
   /*
	 computed:{
		 admintab: function(){
			 return ! this.usertab;
		 },
	 },
	 methods:{
		 // generals
		 toggleBurger: function(){
				 this.isActiveBurger = !this.isActiveBurger;
				 //console.log('toggle');
		 },
		 toggleAcces: function(){
				 this.isActiveAcces = !this.isActiveAcces;
		 },
		 deleteNotification: function(){
				 this.isActiveNotification = false;
		 },
		 recuperarPwd: function(){
			 this.loadingBtn=true;
			 self=this;
			 axios.get('/auth/recuperar-password/2/'+this.email).
			 then(response => (this.message =  response.data)).
			 catch(response => (this.message =  response.data )).
			 finally(function(){
				 self.loadingBtn=false;
			 });
		 },
		 // treure input image
		 deleteImage: function(){
				 var img=document.getElementById('image');
				 img.parentNode.removeChild(img);
		 },
		 deleteCollaret: function(){
				 var coll=document.getElementById('collaret');
				 coll.parentNode.removeChild(coll);
		 },
	 },
*/
});
