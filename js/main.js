var vm = new Vue({
	 el: '#vue-app',
	 data: {
     birres{
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
     },
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
	 },
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

});
