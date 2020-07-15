// search
$('.btn-danger').click(function () {

  if(document.querySelector('.swipedown')){
  var player = document.querySelector('.js-playlist');
  player.style.top = "70%";
  document.querySelector('#putTheWidgetHere').style.margin = 0;
  document.querySelector('.fa').classList.remove("fa-chevron-down");
document.querySelector('.fa').classList.add("fa-chevron-up");
document.querySelector('.btn').classList.remove("swipedown");
document.querySelector('.btn').classList.add("swipeup");
}
else {
  var player = document.querySelector('.js-playlist');
    player.style.top = 0;
    document.querySelector('#putTheWidgetHere').style.margin = "10%";
    document.querySelector('.fa').classList.remove("fa-chevron-up");
  document.querySelector('.fa').classList.add("fa-chevron-down");
  document.querySelector('.btn').classList.remove("swipeup");
  document.querySelector('.btn').classList.add("swipedown");
}

});
// $('.swipeup').click(function () {
//   var player = document.querySelector('.js-playlist');
//   player.style.top = 0;
//   document.querySelector('#putTheWidgetHere').style.margin = "10%";
//   document.querySelector('.fa').classList.remove("fa-chevron-up");
// document.querySelector('.fa').classList.add("fa-chevron-down");
// document.querySelector('.btn').classList.remove("swipeup");
// document.querySelector('.btn').classList.add("swipedown");
//
// });

$('.js-submit').click(function(){
  var input = document.querySelector('.input-search').value;
  console.log(input);
  SoundCloudAPI.init();
  SoundCloudAPI.getTrack(input);



})
// query SoundCloud

var SoundCloudAPI = {};

SoundCloudAPI.init = function(){

  SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
}
  SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputvalue) {
  SC.get('/tracks', {
    q: inputvalue
  }).then(function(tracks) {
    console.log(tracks);
    SoundCloudAPI.renderTracks(tracks);
  });
}
SoundCloudAPI.getTrack("arijit");

SoundCloudAPI.renderTracks = function(tracks) {
  $('.search-results').empty();
  // if(document.querySelector('.card')){
   // document.querySelector('.card') = null;}

tracks.forEach(function(track)
{
// js maded card start here


  var card = document.createElement('div');
  card.classList.add("card");
  var searchResults = document.querySelector('.search-results');
  searchResults.appendChild(card);


  var cardimage = document.createElement('div');
  cardimage.classList.add("image");
  card.appendChild(cardimage);
  var image = document.createElement('img');
  image.classList.add("image_img");
  image.src = track.artwork_url;
  cardimage.appendChild(image);

    var cardcontent = document.createElement('div');
    cardcontent.classList.add("content");
  card.appendChild(cardcontent);
  var cardcontentheader = document.createElement('div');
  cardcontentheader.classList.add("header");
  cardcontent.appendChild(cardcontentheader);
  var contentatag = document.createElement('a');
  var text = document.createTextNode(track.title);
  contentatag.appendChild(text);
  // contentatag.href = track.permalink_url;
  contentatag.target = "_blank";
  cardcontentheader.appendChild(contentatag);

  var cardbutton = document.createElement('div');
  cardbutton.classList.add("ui" ,"bottom", "attached", "button", "js-button");
  card.appendChild(cardbutton);
  var icon = document.createElement('i');
  icon.classList.add("add", "icon");
  cardbutton.appendChild(icon);
  var span = document.createElement('span');
  var text = document.createTextNode("Play");
  span.appendChild(text);
  cardbutton.appendChild(span);

  // js maded card ends here
  cardbutton.addEventListener("click", function () {
  console.log("working");
  SoundCloudAPI.playTrack(track.permalink_url);});





})







}





// find all sounds of buskers licensed under 'creative commons share alike'


// displaycard
// add to playlist
SoundCloudAPI.playTrack = function (tracklink) {
  console.log(tracklink);
  var playerid = document.querySelector('.js-playlist');
  playerid.style.display = "";
  playerid.style.top = 0;
  document.querySelector('#putTheWidgetHere').style.margin = "10%";
  document.querySelector('.fa').classList.remove("fa-chevron-up");
document.querySelector('.fa').classList.add("fa-chevron-down");
document.querySelector('.btn').classList.remove("swipeup");
document.querySelector('.btn').classList.add("swipedown");

  // console.log(playerid.children[0].childNodes);
  // console.log(document.querySelector('#putTheWidgetHere'));


  SC.oEmbed(tracklink, {
     element: document.getElementById('putTheWidgetHere')

   });
 


// SC.oEmbed(tracklink, {
//   auto_play: true
// }).then(function(embed){
//   console.log('oEmbed response: ', embed)
//   var sideBar = document.querySelector('.js-playlist');
//   sideBar.innerHTML = embed.html;
//   embed.width = "50%" ;
//   console.log(embed.width) ;
// });
}



// player
