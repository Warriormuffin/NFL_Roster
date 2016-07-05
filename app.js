var players = []


function Player(name,position,jersey){
    this.name = name;
    this.position = position;
    this.jersey= jersey;
}

$('form').on('submit', function(e){
  e.preventDefault();
  var form = this;
  var newPlayer = new Player(form.playerName.value, form.playerPosition.value, form.playerJersey.value)
  players.push(newPlayer);
  
  update(players);
})

function update(list){
  var usersElem = $('.player-roster');
  usersElem.empty()
  for(var i = 0; i < list.length; i++){
    usersElem.prepend('<div class="player-card"><h3>' +  '<img id="theImg" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />'+ '<br>' +list[i].name+'<br>'+list[i].position+'<br>'+list[i].jersey+'</h3></div>')  
  }
}
function playerID(){
  
}
$('.player-roster').on('click', '.player-card', function(){
  var player = $(this).text()
  console.log(this)
  // removePlayerByCard(player);
  // update(players)
})
 
function removePlayerByCard(name){
  
  for (var i = 0; i < players.length; i++) {
    var currentPlayer = players[i];
    var a =  (currentPlayer.name + currentPlayer.position + currentPlayer.jersey)
    // console.log(name)
    
    if(a == name){
      return players.splice(i,1)
      
      
    }
  } 
}