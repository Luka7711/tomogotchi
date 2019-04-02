


class Tomagoch {
	constructor(hunger, boredom, sleepiness, name){
		this.hunger = hunger;
		this.boredom = boredom;
		this.sleepiness = sleepiness;
		this.name = name;
   }
}

// const toma = new Tomagoch(0, 0, 0)




const game = {
	
	timer: 0,

	toma: null,

 	death:false,

 	
 	makeToma:function(nameOfTom){
 		this.toma = newTomagoch(0, 0, 0, nameOfTom);
 		this.start();
 	},

 	start:function(){

		$li = $('<li/>');

		$li.text('name: '+ this.toma.name);
		
		$li.css({"font-style": "italic", "color": "orange"});
		$('ul').prepend($li);
		$('.start').css('display', 'none');
		$('.tomagotchi_image').css('background-image', 'url("https://thumbs.gfycat.com/PastTeemingKudu-size_restricted.gif');
		$('.btns').css('display', 'block');

		game.lifecycleTimer();
 	},

	lifecycleTimer: function(){

		// start the timerß

		this.intervalId = setInterval(() => {
			this.timer++;
			/// every three seconds 

			//if hunger sleep boredom < 10
			// if(this.hunger<10 || this.sleepiness <10 ||this.boredom <10){
			this.feedTom();
			this.sleep();
			this.play();

			// }else if(this.hunger === 10 || this.sleepiness === 10 ||this.boredom === 10){
			// 	clearTimeout(this.intervalId);
			// 	$('.game_title').css('display', 'block');
			// }

		}, 1000)
		// timerId
	},
	//method to call to increment deathpProbabilty every time timer runs
	feedTom:function(){
		this.toma.hunger++;
		$('.hunger').text(this.toma.hunger);
	},

	sleep:function(){
		this.toma.boredom++;
		$('.bed').text(this.toma.boredom);
	},

	play:function(){
		this.toma.sleepiness++;
		$('.amuse').text(this.toma.sleepiness);
	}

}








 	


$('.start').on('click', () => {
	
	let nameOfTom = prompt("name your tomagotchi");
	game.makeToma(nameOfTom);
	













});


$('.feed').on('click', ()=>{
	game.hunger-=1;
	$('.hunger').text(game.hunger);
});



$('.sleep').on('click', ()=>{
	game.sleep-=1;
	$('.bed').text(game.sleepiness);
})



$('.entertain').on('click', ()=>{
	game.boredom-=1;
	$('.amuse').text(game.boredom);
})





































