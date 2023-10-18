
//you need to make a function to rotate each tetromino.
function rotateTee(){

  //for each rotating state of the tetromino you will need an 'if-else'
  if(activeTetromino[6] == 0){
    //the Tee is facing upwards.
    changeColor(backColor)
    activeTetromino[1] += 1;
    activeTetromino[2] += 1;
    activeTetromino[3] += 9;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
    //the tee is facing the right.
    changeColor(backColor)
    activeTetromino[0]+=9
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==2){
    //the tee is facing the right.
    changeColor(backColor)
    activeTetromino[0]-=9
    activeTetromino[1]-=1
    activeTetromino[2]-=1
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==3){
    //the tee is facing the right.
    changeColor(backColor)
    activeTetromino[3]-=9
    changeColor(activeTetromino[4])
    activeTetromino[6] = 0
  }//end if
}//end function
function rotateStick(){
  if(activeTetromino[6] == 0){
    changeColor(backColor)
    activeTetromino[0] += 9;
    activeTetromino[2] -= 9;
    activeTetromino[3] -= 18;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
    changeColor(backColor)
    activeTetromino[0] -= 9;
    activeTetromino[2] += 9;
    activeTetromino[3] += 18;
    changeColor(activeTetromino[4])
    activeTetromino[6] =0
  }
}
function rotateReverseEl(){
  if(activeTetromino[6] == 0){
     changeColor(backColor)
    activeTetromino[0] += 10;
    activeTetromino[1] += 10;
     activeTetromino[2] += 2;
    activeTetromino[3] += 2;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
     changeColor(backColor)
    activeTetromino[0] += 10;
    activeTetromino[1] += 1;
     activeTetromino[2] += 9;
    activeTetromino[3] += 18;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==2){
     changeColor(backColor)
    activeTetromino[0] -= 2;
    activeTetromino[1] -= 2;
     activeTetromino[2] -= 10;
    activeTetromino[3] -= 10;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==3){
     changeColor(backColor)
    activeTetromino[0] -= 18;
    activeTetromino[1] -= 9;
     activeTetromino[2] -= 1;
    activeTetromino[3] -= 10;
    changeColor(activeTetromino[4])
    activeTetromino[6] =0
  }
}
function rotateEl(){
  if(activeTetromino[6] == 0){
     changeColor(backColor)
    activeTetromino[0] += 20;
    activeTetromino[1] += 11;
     activeTetromino[2] += 2;
    activeTetromino[3] += 9;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
     changeColor(backColor)
    activeTetromino[0] -= 1;
    activeTetromino[1] -= 1;
     activeTetromino[2] += 8;
    activeTetromino[3] += 10;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==2){
     changeColor(backColor)
    activeTetromino[0] -= 9;
    activeTetromino[1] -= 2;
     activeTetromino[2] -= 11;
    activeTetromino[3] -= 20;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==3){
     changeColor(backColor)
    activeTetromino[0] -= 10;
    activeTetromino[1] -= 8;
     activeTetromino[2] += 1;
    activeTetromino[3] += 1;
    changeColor(activeTetromino[4])
    activeTetromino[6] =0
  }
}
function rotateEs(){
  if(activeTetromino[6] == 0){
     changeColor(backColor)
    activeTetromino[0] += 1;
    activeTetromino[1] += 9;
     activeTetromino[2] += 0;
    activeTetromino[3] += 8;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
     changeColor(backColor)
    activeTetromino[0] -= 1;
    activeTetromino[1] -= 9;
     activeTetromino[2] += 0;
    activeTetromino[3] -= 8;
     changeColor(activeTetromino[4])
    activeTetromino[6] =0  }
}
function rotateReverseEs(){
  if(activeTetromino[6] == 0){
     changeColor(backColor)
    activeTetromino[0] += 0;
    activeTetromino[1] += 9;
     activeTetromino[2] += 2;
    activeTetromino[3] += 11;
    changeColor(activeTetromino[4])
    activeTetromino[6] +=1
  }else if(activeTetromino[6]==1){
     changeColor(backColor)
    activeTetromino[0] += 0;
    activeTetromino[1] -= 9;
     activeTetromino[2] -= 2;
    activeTetromino[3] -= 11;
     changeColor(activeTetromino[4])
    activeTetromino[6] =0  }
}
function changeColor(col){
  for(i=0; i<4;i++){
     document.getElementById(activeTetromino[i]).style.backgroundColor = col
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
  }else if(activeTetromino[5] == "es"){
    rotateEs();
  }else if(activeTetromino[5] == "el"){
    rotateEl();
  }else if(activeTetromino[5] == "reverseEs"){
    rotateReverseEs();
  }
}//end function
