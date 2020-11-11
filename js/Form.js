class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton("reset");
      
  }

  display(){

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-50, displayHeight/2-100);
    this.button.position(displayWidth/2-10, displayHeight/2-70);

    this.reset.position(displayWidth/2+160,50);
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      window.location.reload();
    })


    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    
    var name = this.input.value();

    playerCount+=1;
    player.playerIndex = playerCount;
    player.playerName = name;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("Hello " + name )
    this.greeting.position(displayWidth/2-50, displayHeight/2-100)
    });



  }

  hideElements(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}