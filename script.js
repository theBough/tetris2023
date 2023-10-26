document.addEventListener("keydown", whichKey)
function isGameOver(){
  for(i=0 ; i<3 ; i++){
    if(finishedArray.includes(activeTetromino[i])){
      clearInterval(myGravity);
    }
  }//end loop
}//end Function
function startGame(){
  var rndNum = Math.floor(Math.random()*7)
  console.log(rndNum)
  
  if(rndNum == 0){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = teeArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 1){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = esArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 2){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = reverseElArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 3){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = elArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 4){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = reverseEsArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 5){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = stickArray[i];
    }//end loop
    console.log(nextTetromino)
  }
  if(rndNum == 6){
    for(i = 0 ; i<7 ; i++){
      nextTetromino[i] = cubeArray[i];
    }//end loop
    console.log(nextTetromino)
  }
 
  pickNextTetromino();
}
function pickNextTetromino(){
  //console.log(nextTetromino[5])
  for(var i = 6 ; i>-1 ; i--){
    console.log(i)
    activeTetromino[i] = nextTetromino[i];
    if(i<4){
      console.log(activeTetromino[4])
        document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }//
  }//end loop
 isGameOver();
  var rndNum = Math.random()*7
  rndNum = Math.floor(rndNum)
  var nextTetrominoPic = document.getElementById("nextTetromino")

  if(rndNum == 0){
    nextTetrominoPic.src = "images/cube.png"
    newTetromino(cubeArray)
  }
  if(rndNum == 1){
    nextTetrominoPic.src = "images/el.png"
     newTetromino(elArray)
  }
  if(rndNum == 2){
    nextTetrominoPic.src = "images/reverseEl.png"
    newTetromino(reverseElArray)
  }
  if(rndNum == 3){
    nextTetrominoPic.src = "images/es.png"
    newTetromino(esArray)
  }
  if(rndNum == 4){
    nextTetrominoPic.src = "images/reverseEs.png"
    newTetromino(reverseEsArray)
  }
  if(rndNum == 5){
    nextTetrominoPic.src = "images/stick.png"
    newTetromino(stickArray)
  }
  if(rndNum == 6){
    nextTetrominoPic.src = "images/tee.png"
    newTetromino(teeArray)
  }
  //console.log(rndNum)
  //console.log(nextTetromino)
}
function addTetrominoToFinished(){
  for(i=0 ; i<4 ; i++){
      finishedArray.push(activeTetromino[i]);
  }//end loop
}//end function
function gravityOn(){
  //This turns on Gravity.
  //the lower the number the faster the 
  //tetrominos will fall
  myGravity = setInterval(moveTetrominoDown,500)
}//end Function
function gravityOff(){
  clearInterval(myGravity)
}//end function
function newTetromino(thisTetromino){
  for(i=0 ; i < 7 ; i++){
    nextTetromino[i] = thisTetromino[i];
  }//end loop
}//end function
function moveTetrominoDown(){
  for(i=3 ; i>-1 ; i--){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColor
    activeTetromino[i] +=10;
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }//end loop
  for(i=0 ; i < 4 ; i++){
    if(finishedArray.includes(activeTetromino[i]+10)){
      addTetrominoToFinished();
      pickNextTetromino();
      return 0;
    }
  }//end Loop
  for(i = 3 ; i>-1; i--){
    if(activeTetromino[i]>189){
      addTetrominoToFinished();
      pickNextTetromino()
    }//end if
  }//end loop
}//end function
function moveTetrominoRight(){
  //We are going to use this to see if the tetromino is on the left edge
  var canMove = true;
  for(i=0 ; i<4 ; i++){
    if(activeTetromino[i] % 10 == 9){
      canMove = false;
    } //end if
  }//end for loop
  for(i=0; i<4; i++){
    if(finishedArray.includes(activeTetromino[i]+1)){
      canMove = false
    }
  }
  if(canMove){
    for(i=3 ; i>-1 ; i--){
      document.getElementById(activeTetromino[i]).style.backgroundColor = "rgb(244, 213, 141)"
      activeTetromino[i] += 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }//end loop
  }//end if
}//end function
function moveTetrominoLeft(){
  //We are going to use this to see if the tetromino is on the left edge
  var canMove = true;
  for(i=0 ; i<4 ; i++){
    if(activeTetromino[i] % 10 == 0){
      canMove = false;
    } //end if
  }//end for loop
  for(i=0; i<4; i++){
    if(finishedArray.includes(activeTetromino[i]-1)){
      canMove = false
    }
  }
  if(canMove){
    for(i=0 ; i<4 ; i++){
      document.getElementById(activeTetromino[i]).style.backgroundColor = "rgb(244, 213, 141)"
      activeTetromino[i] -= 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }//end loop
  }//end if

}//end function
function whichKey(e){
  if(e.code == "ArrowLeft"){
    //the player has pressed the left arrow key
    moveTetrominoLeft()
  }//end if
  if(e.code == "ArrowRight"){
    //the player has pressed the right arrow key
     moveTetrominoRight()
  }//end if
  if(e.code == "ArrowDown"){
    //the player has pressed the down arrow
     moveTetrominoDown()
  }//end if
  if(e.code == "ArrowUp"){
    //the player has pressed the up arrow
     rotateTetromino()
  }//end if
}//end function
function makeGrid(){
  for(var i=0 ; i< 200 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("class", "my-btn")
    btn.setAttribute("id", i)
    document.getElementById("gridContainer").appendChild(btn)
    //document.getElementById(i).textContent = i
  }//end loop
  startGame();
  //makePreviewGrid();
}//end function
function makePreviewGrid(){
  for(var i=0 ; i< 30 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("class", "my-btn-preview")
    btn.setAttribute("id", i+500)
    document.getElementById("previewGrid").appendChild(btn)
    document.getElementById(i).textContent = i
    //console.log(btn)
  }//end loop  
}//end function
