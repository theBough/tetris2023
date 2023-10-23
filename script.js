document.addEventListener("keydown", whichKey)
function pickNextTetromino(){
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
    activeTetromino[i] = thisTetromino[i];
    if(i<4){
        document.getElementById(activeTetromino[i]).style.backgroundColor = thisTetromino[4]
        
    }//
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
      newTetromino();
      return 0;
    }
  }//end Loop
  for(i = 3 ; i>-1; i--){
    if(activeTetromino[i]>189){
      addTetrominoToFinished();
      newTetromino()
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
  for(i = 0 ; i<7; i++){
    activeTetromino[i] = esArray[i];
    if(i < 4){
      document.getElementById(activeTetromino[i]).style.backgroundColor = esArray[4]
      //console.log(document.getElementById(505))
      //document.getElementById("505").style.backgroundColor = reverseElArray[4]
    }
  }
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

