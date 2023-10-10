document.addEventListener("keydown", whichKey)

//you need to make a function to rotate each tetromino.
function rotateTee(){

  //for each rotating state of the tetromino you will need an 'if-else'
  if(activeTetromino[6] == 0){
    //the Tee is facing upwards.
    document.getElementById(activeTetromino[1]).style.backgroundColor = backColor
    activeTetromino[1] += 1;
    activeTetromino[2] += 1;
    activeTetromino[3] += 9;
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
    //the tee is facing the right.
    document.getElementById(activeTetromino[0]).style.backgroundColor = backColor
    activeTetromino[0]+=9
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==2){
    //the tee is facing the right.
    document.getElementById(activeTetromino[0]).style.backgroundColor = backColor
    activeTetromino[0]-=9
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[1]).style.backgroundColor = backColor
    activeTetromino[1]-=1
    document.getElementById(activeTetromino[1]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[2]).style.backgroundColor = backColor
    activeTetromino[2]-=1
    document.getElementById(activeTetromino[2]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==3){
    //the tee is facing the right.
    document.getElementById(activeTetromino[3]).style.backgroundColor = backColor
    activeTetromino[3]-=9
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] = 0
  }//end if
}//end function
function rotateStick(){
  if(activeTetromino[6] == 0){
    document.getElementById(activeTetromino[0]).style.backgroundColor = backColor
    document.getElementById(activeTetromino[2]).style.backgroundColor = backColor
    document.getElementById(activeTetromino[3]).style.backgroundColor = backColor
    activeTetromino[0] += 9;
    activeTetromino[2] -= 9;
    activeTetromino[3] -= 18;
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[2]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
    document.getElementById(activeTetromino[0]).style.backgroundColor = backColor
    document.getElementById(activeTetromino[2]).style.backgroundColor = backColor
    document.getElementById(activeTetromino[3]).style.backgroundColor = backColor
    activeTetromino[0] -= 9;
    activeTetromino[2] += 9;
    activeTetromino[3] += 18;
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[2]).style.backgroundColor = activeTetromino[4]
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] =0
  }
}

//in the function below you need an "if-else" for each tetromino
function rotateTetromino(){
  if(activeTetromino[5] == "tee"){
    rotateTee()
  }else if(activeTetromino[5] == "reverseEl"){
    rotateReverseEl();
  }else if(activeTetromino[5] == "stick"){
    rotateStick();
  }//end if
}//end function

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
function newTetromino(){
  for(i=0 ; i < 7 ; i++){
    activeTetromino[i] = stickArray[i];
    if(i<4){
        document.getElementById(activeTetromino[i]).style.backgroundColor = stickArray[4]
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
    document.getElementById(i).textContent = i
  }//end loop
  for(i = 0 ; i<6; i++){
    activeTetromino[i] = cubeArray[i];
    if(i < 4){
      document.getElementById(activeTetromino[i]).style.backgroundColor = cubeArray[4]
    }
  }
}//end function

