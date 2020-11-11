class Player {
  constructor(){
    this.playerName = null;
    this.playerIndex = null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
    console.log(playerCount);
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.playerIndex;
    database.ref(playerIndex).set({
      name: this.playerName,
      distance: this.distance
    });
  }

  static getAllPlayersInfo(){
    var dbRef = database.ref("players");
    dbRef.on("value",function(data){
      allPlayers = data.val();
    });
  }
}