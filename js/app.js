


class Tomagoch {
    constructor(age, hunger, boredom, sleepiness){
        this.age = age;
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleepiness = sleepiness;
   }
}



const game = {
    
    timer: 0,

    toma: null,

    deathpProbabilty:10,
    
    makeToma:function(){
        this.toma = new Tomagoch(0, 0, 0, 0);
        this.start();
    },

    start:function(){

        $li = $('<li/>');     
        $li.css({"font-style": "italic", "color": "orange"});
        $('ul').prepend($li);
        $('.start').css('display', 'none');
        $('.tomagotchi_image').css('background-image', 'url(https://thumbs.gfycat.com/AfraidAlarmedHairstreak-max-1mb.gif)');
        $('.btns').css('display', 'block');

        game.lifecycleTimer();
    },

     changeBackImage1:function(){

        $('.tomagotchi_image').css('background-image', 'url(https://media.tenor.com/images/948c6f9c0d34c7a84847599691ea9578/tenor.gif)');
    },


    changeBackImage2:function(){
    
        $('.tomagotchi_image').css('background-image', 'url(https://media1.giphy.com/media/8TzKb1nVj0h1mxFmMa/giphy.gif)');
    },


    agingGener:function(){
        this.toma.age+=1;
        $('.age').text(this.toma.age);
    },

    stopGame:function(){
        clearTimeout(this.intervalId);
        $('.game_title').css('display', 'block');
        $('.tomagotchi_image').css('background-image', 'url(https://emojis.slackmojis.com/emojis/images/1531847457/4230/blob-cry.gif?1531847457)');
    },

    lifecycleTimer: function(){
        console.log("lifecycleTimer was called");
        // start the timerß

        this.intervalId = setInterval(() => {
            
            this.timer++;
            console.log(this.timer);
            // / every three seconds 
              

                // if hunger sleep boredom < 10
                // if(this.toma.hunger < 9 || this.toma.sleepiness <9 ||this.toma.boredom <9){
                if(this.toma.hunger < 10 &&  this.timer % 5=== 0){
                    this.feedTom();
                   
                }
                // if(this.toma.hunger > 10 || this.toma.sleepiness > 10 ||this.toma.boredom > 10){
                  if(this.toma.hunger === 10){  
                    this.stopGame();
                  
            
                } if(this.toma.sleepiness < 10 && this.timer % 5 === 0 && this.timer % 3 === 0){
                    this.sleep();

                }

                    if(this.toma.sleepiness === 10){
                        this.stopGame();

                    }

                    if(this.toma.boredom < 10 && this.timer % 3 === 0 && this.timer){

                        this.play();
                    }

                    if(this.toma.boredom === 10){
                        this.stopGame();

                    }

                if(this.timer === 10){
                    this.agingGener();

                }

                if(this.timer === 20){
                    this.agingGener();
                    this.changeBackImage1();
                }

                if(this.timer === 30){
                    this.agingGener();
                    this.changeBackImage2();
                }


            


        }, 500)
        // timerId
    },


    //method to call to increment deathpProbabilty every time timer runs
    feedTom:function(){
        this.toma.hunger++;
        $('.hunger').text(this.toma.hunger);
    },

    sleep:function(){
        this.toma.sleepiness++;
        $('.bed').text(this.toma.sleepiness);
    },

    play:function(){
        this.toma.boredom++;
        $('.amuse').text(this.toma.boredom);
    }

}






$('form').on('submit', (e)=>{
 //stop the page refresh
 e.preventDefault();

 console.log('form submitted');

 //retrieving the value from the input
  const inputValue = $('#input_name').val();


  $li = $('<li/>');

  $('ul').prepend($li);

  $($li).text(`Name: ${inputValue}`);

  $('form').css('display', 'none');

  $('.start').css('display', 'block');

});




$('.start').on('click', () => {
    game.makeToma();
});



$('.feed').on('click', ()=>{
    
    if(game.toma.hunger >0 && game.toma.hunger < 10){
    game.toma.hunger-=1;
    $('.hunger').text(game.toma.hunger);
  }
});



$('.sleep').on('click', ()=>{
    if(game.toma.sleepiness > 0 && game.toma.hunger < 10){
    game.toma.sleepiness-=1;
    $('.bed').text(game.toma.sleepiness);
  }
})



$('.entertain').on('click', ()=>{
    if(game.toma.boredom > 0 && game.toma.boredom < 10){
    game.toma.boredom-=1;
    $('.amuse').text(game.toma.boredom);
}
})






























