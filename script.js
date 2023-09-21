document.addEventListener("keydown", whichKey)
var teeArray = [5,14,15,16,"rgb(39,125,161)","tee"]
var cubeArray = [5,6,15,16,"rgb(87,117,144)", "cube"]
var stickArray = ["rgb(77,144,142"]
var elArray = ["rgb(67,170,139)"]
var reverseElArray = ["rgb(144,190,109)"]
var esArray = ["rgb(249,199,79)"]
var reverseEsArray = ["rgb(249,132,74)"]
var activeTetromino = ["rgb(248,150,30"]
function makeGrid(){
  for(var i=0 ; i< 200 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("class", "my-btn")
    btn.setAttribute("id", i)
    document.getElementById("gridContainer").appendChild(btn)
    document.getElementById(i).textContent = i
  }//end loop
  for(i = 0 ; i<6; i++){
    activeTetromino[i] = cubeArray[i];
    if(i < 4){
      document.getElementById(activeTetromino[i]).style.backgroundColor = cubeArray[4]
    }
  }
}//end function
function whichKey(e){
  if(e.code == "ArrowLeft"){
    //the player has pressed the left arrow key
    moveTertrominoLeft()
  }//end if
  if(e.code == "ArrowRight"){
    //the player has pressed the right arrow key
   
  }//end if
}//end function

function moveTertrominoLeft(){
  for(i=0 ; i<4 ; i++){
    document.getElementById(activeTetromino[i]).style.backgroundColor = "rgb(244, 213, 141)"
    activeTetromino[i] -= 1;
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }//end loop
}//end function

