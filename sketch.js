function setup(){
  createCanvas(600,600);
  background(249,213,201);
  noStroke();
  fill(43,43,43);
  ellipse(150,150,60,40);
  ellipse(450,150,60,40);
  fill(255,139,174);
  ellipse(300,350,150,90);
  stroke(0,0,0);
  ellipse(275,350,30,50);
  ellipse(325,350,30,50);
  textSize(30);
  noFill();
  ellipse(300,300,700,700);
  frameRate(10);
}

function draw(){
  x = mouseX;
  y = mouseY;
  if(key === '1'){
    if(mouseIsPressed){
      fill(245,144,64);
      stroke(0,0,0);
      ellipse(x,y,50,50);
      fill(0,0,0);
      textSize(20);
      text("10",x-11,y+6);
    }
  }
  else if(key === '2'){
    if(mouseIsPressed){
      fill(193,187,151);
      stroke(0,0,0);
      ellipse(x,y,65,65);
      fill(0,0,0);
      textSize(25);
      text("50",x-14,y+8);
    }
  }
  else if (key === '3'){
    if(mouseIsPressed){
      fill(213,213,213);
      stroke(0,0,0);
      ellipse(x,y,80,80);
      fill(0,0,0);
      textSize(30);
      text("100",x-26,y+10);
    }
  }
  else if (key === '4'){
    if(mouseIsPressed){
      fill(225,233,246);
      stroke(0,0,0);
      ellipse(x,y,100,100);
      fill(0,0,0);
      textSize(35);
      text("500",x-32,y+15);
    }
  }
  else if (key === '0'){
    a = random(1,5);
    a = float(a);
    if(mouseIsPressed){
      if(1<=a && a<2){
        fill(245,144,64);
        stroke(0,0,0);
        ellipse(x,y,50,50);
        fill(0,0,0);
        textSize(20);
        text("10",x-11,y+6);
      }
      else if(2<=a && a<3){
        fill(193,187,151);
        stroke(0,0,0);
        ellipse(x,y,65,65);
        fill(0,0,0);
        textSize(25);
        text("50",x-14,y+8);
      }
      else if(3<=a && a<4){
        fill(213,213,213);
        stroke(0,0,0);
        ellipse(x,y,80,80);
        fill(0,0,0);
        textSize(30);
        text("100",x-26,y+10);
      }
      else{
        fill(225,233,246);
        stroke(0,0,0);
        ellipse(x,y,100,100);
        fill(0,0,0);
        textSize(35);
        text("500",x-32,y+15);
      }
    }
  }
}