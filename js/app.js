


class Tomagoch {
	constructor(age, hunger, boredom, sleepiness, name){
		this.age = age;
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

 	
 	makeToma:function(nameOfTom){
 		this.toma = new Tomagoch(0, 0, 0, 0, nameOfTom);
 		this.start();
 	},

 	start:function(){

		$li = $('<li/>');

		$li.text('name: '+ this.toma.name);
		
		$li.css({"font-style": "italic", "color": "orange"});
		$('ul').prepend($li);
		$('.start').css('display', 'none');
		$('.tomagotchi_image').css('background-image', 'url(https://thumbs.gfycat.com/AfraidAlarmedHairstreak-max-1mb.gif)');
		$('.btns').css('display', 'block');

		game.lifecycleTimer();
 	},


 	agingGener:function(){
 		age+1;
 	},

	lifecycleTimer: function(){
		console.log("lifecycleTimer was called")
		// start the timerß

		this.intervalId = setInterval(() => {
			
			this.timer++;
			console.log(this.timer);
			/// every three seconds 

				// if hunger sleep boredom < 10
				if(this.toma.hunger<10 || this.toma.sleepiness <10 ||this.toma.boredom <10){
					this.feedTom();
					this.sleep();
					this.play();

				if(this.timer <7 && this.timer >4){
					
					changeBackImage1();
				
				}else if(this.timer < 10 && this.timer >7){
					changeBackImage2();
				}

			}else if(this.toma.hunger === 10 || this.toma.sleepiness === 10 ||this.toma.boredom === 10){
					   clearTimeout(this.intervalId);
					$('.game_title').css('display', 'block');
				  
			
			}
		}, 2000)
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







// $('form').on('submit', (e)=>{
// 	//stop the page refresh
// 	e.preventDefault();

// 	console.log('form submitted');

// 	//retrieving the value from the input
// 	const inputValue = $('#input-name').val();

// 	$ul = $('ul');

// 	$ul.appen

// 	//this setting value 
// 	$('#input-name').val('');
	
// 	console.log(inputValue);

// });


$('.start').on('click', () => {
	
	let nameOfTom = prompt("name your tomagotchi");
	game.makeToma(nameOfTom);
});



$('.feed').on('click', ()=>{
	game.toma.hunger-=1;
	$('.hunger').text(game.toma.hunger);
});



$('.sleep').on('click', ()=>{
	game.toma.sleepiness-=1;
	$('.bed').text(game.toma.sleepiness);
})



$('.entertain').on('click', ()=>{
	game.toma.boredom-=1;
	$('.amuse').text(game.toma.boredom);
})




let changeBackImage1 = function(){

	$('.tomagotchi_image').css('background-image', 'url(https://media.tenor.com/images/948c6f9c0d34c7a84847599691ea9578/tenor.gif)');
}


let changeBackImage2 =function(){
	$('.tomagotchi_image').css('background-image', 'url(http://www.animatedimages.org/data/media/532/animated-chicken-image-0042.gif)');
}




























