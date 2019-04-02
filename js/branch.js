


// class Tomagoch {
// 	constructor(name, age, boredom);
// 	this.name = name;
// 	this.age = age;
// 	this.boredom = boredom;
// }


const game = {
	
	timer: 0,

 	hunger:0,

 	boredom:0,

 	sleepiness:0,

 	deathProbabilty:0,



	lifecycleTimer: function(){

		// start the timerß

		this.intervalId = setInterval(() => {
			this.timer+=1;
			/// every three seconds 
			if(this.deathProbabilty<10){
				this.feedTom();
				console.log(this.deathProbabilty);
				console.log('dying');

				this.sleep();
				this.play();

			}else if(this.deathProbabilty >=10){
				clearTimeout(this.intervalId);
				$('.game_title').css('display', 'block');
			}

		}, 3000)
		// timerId
	},
	//method to call to increment deathpProbabilty every time timer runs
	feedTom:function(){
		this.deathProbabilty+=1;
		$('.hunger').text(this.deathProbabilty);
	},

	sleep:function(){
		this.deathProbabilty+=1;
		$('.bed').text(this.deathProbabilty);
	},

	play:function(){
		this.deathProbabilty+=1;
		$('.amuse').text(this.deathProbabilty);
	}

}


let $nameOfTom;

let getName = ()=>{
 	$nameOfTom = prompt("name your tomagotchi");
}


$('.start').on('click', ()=>{

	getName();
	
	$li = $('<li/>');

	$li.text('name: '+ $nameOfTom);
	
	$li.css({"font-style": "italic", "color": "orange"});
	
	$('ul').prepend($li);
	$('.start').css('display', 'none');
	$('.tomagotchi_image').css('background-image', 'url("https://thumbs.gfycat.com/PastTeemingKudu-size_restricted.gif');
	$('.btns').css('display', 'block');

	game.lifecycleTimer();

});


$('.feed').on('click', ()=>{
	game.deathProbabilty-=1;
	$('.hunger').text(game.deathProbabilty);
});



$('.sleep').on('click', ()=>{
	game.deathProbabilty-=1;
	$('.bed').text(game.deathProbabilty);
})



$('.entertain').on('click', ()=>{
	game.deathProbabilty-=1;
	$('.amuse').text(game.deathProbabilty);
})





































