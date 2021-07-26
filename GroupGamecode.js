let pX;
let pY;
let S1;

let S2;


let EX1;///how much other square moves
let ZX1;//starting point of otehr square
let EY1 = 100;///y starting point of other square

let EX2;///how much other square moves
let ZX2;//starting point of otehr square
let EY2 = 200;///y starting point of other square

let EX3;///how much other square moves
let ZX3;//starting point of otehr square
let EY3 = 300;///y starting point of other square

let EX4;///how much other square moves
let ZX4;//starting point of otehr square
let EY4 = 400;///y starting point of other square

let EX5;///how much other square moves
let ZX5;//starting point of otehr square
let EY5 = 500;///y starting point of other square


let   r1;
let   g1;
let  b1;

let   r2;
let   g2;
let  b2;

let   r3;
let   g3;
let  b3;

let   r4;
let   g4;
let  b4;

let   r5;
let   g5;
let  b5;

let StartScreen;
let levelScreen;
let touch;
function setup()
{
    createCanvas(750,750);  
    noStroke();    
    rectMode(CENTER);
     pX = 375;
    pY = 375;
ZX1 = 740;
EX1 = random(5, 15);//chnage at levelselect

ZX2 = 740;
EX2 = random(5, 15);//chnage at levelselect

ZX3 = 740;
EX3 = random(5, 15);//chnage at levelselect

ZX4 = 740;
EX4 = random(5, 15);//chnage at levelselect

ZX5 = 740;
EX5 = random(5, 15);//chnage at levelselect


r1 = random(0, 255);
g1 = random(0, 255);
b1 = random(0, 255);

r2 = random(0, 255);
g2 = random(0, 255);
b2 = random(0, 255);

r3 = random(0, 255);
g3 = random(0, 255);
b3 = random(0, 255);

r4 = random(0, 255);
g4 = random(0, 255);
b4 = random(0, 255);

r5 = random(0, 255);
g5 = random(0, 255);
b5 = random(0, 255);

 StartScreen = true;
 Levelscreen = true;
  touch = 0;

}

function draw()///this is the rocket code
{
    background(0,50);
    if(StartScreen == true)
    {
        startscreen();   
    }
    if( StartScreen == false && Levelscreen == true)
    {
        levelselect();
    }
    if(StartScreen == false && Levelscreen == false)
    { S1 = random(5, 15);
        S2 = random(5, 15);
        missiledata();
        playerdata();
    }


    
   
}

function playerdata()
{
   




    if((pX < 750) && (keyIsDown(RIGHT_ARROW)))
    {
        pX+=10;
        fill('yellow');
    rect(pX-35, pY,S1,S2);
    }
    if((pX > 0) && (keyIsDown(LEFT_ARROW)))
    {
        pX-=10;
        fill('yellow');
    rect(pX+35, pY,S1,S2);
    }
    if((pY < 750) && (keyIsDown(DOWN_ARROW)))
    {
        pY+=10;
        fill('yellow');
    rect(pX-10, pY-15,S1,S2);
    rect(pX+10, pY-15,S1,S2);
    }
    if((pY > 0) && (keyIsDown(UP_ARROW)))
    {
        pY-=10;
        fill('yellow');
    
    rect(pX-10, pY+15,S1,S2);
    rect(pX+10, pY+15,S1,S2);
    }
    fill('red');
    rect(pX, pY,50,20);
    if(pX+15 <= ZX1 && pX-15 >= ZX1 && pY+15 >= EY1 && pY-15 >= EY1 ) 
{
   touch+=1;  
}
if(pX+15 <= ZX2 && pX-15 >= ZX2 && pY+15 >= EY2 && pY-15 >= EY2 ) 
{
   touch+=1;   
}
if(pX+15 <= ZX3 && pX-15 >= ZX3 && pY+15 >= EY3 && pY-15 >= EY3 ) 
{
    touch+=1;  
}
if(pX+15 <= ZX4 && pX-15 >= ZX4 && pY+15 >= EY4 && pY-15 >= EY4 ) 
{
    touch+=1;   
}
if(pX+15 <= ZX5 && pX-15 >= ZX5 && pY+15 >= EY5 && pY-15 >= EY5 ) 
{
    touch+=1;   
}
fill('red');
    textSize(50);
    textFont('Georgia');
    text(touch, 250, 200);
}

function missiledata()
{
    S1 = random(5, 10);
S2 = random(5, 10);


    fill(r1,g1,b1);
    rect(ZX1, EY1,50,20);
    ZX1 = ZX1 - EX1;
    if(ZX1 <= 0)
    {
        ZX1 = 740;
        EY1 = random(0, 750);
        r1 = random(0, 255);
g1 = random(0, 255);
b1 = random(0, 255);
    }
    fill('yellow');
    rect(ZX1 + 35, EY1,S1,S2);


    
    fill(r2,g2,b2);
    rect(ZX2, EY2,50,20);
    ZX2 = ZX2 - EX2;
    if(ZX2 <= 0)
    {
        ZX2 = 740;
        EY2 = random(0, 750);
        r2 = random(0, 255);
g2 = random(0, 255);
b2 = random(0, 255);
    }
    fill('yellow');
    rect(ZX2 + 35, EY2,S2,S2);


    fill(r3,g3,b3);
    rect(ZX3, EY3,50,20);
    ZX3 = ZX3 - EX3;
    if(ZX3 <= 0)
    {
        ZX3 = 740;
        EY3 = random(0, 750);
        r3 = random(0, 255);
g3 = random(0, 255);
b3 = random(0, 255);
    }
    fill('yellow');
    rect(ZX3 + 35, EY3,S2,S2);



    fill(r4,g4,b4);
    rect(ZX4, EY4,50,20);
    ZX4 = ZX4 - EX4;
    if(ZX4 <= 0)
    {
        ZX4 = 740;
        EY4 = random(0, 750);
        r4 = random(0, 255);
g4 = random(0, 255);
b4 = random(0, 255);
    }
    fill('yellow');
    rect(ZX4 + 35, EY4,S2,S2);


    fill(r5,g5,b5);
    rect(ZX5, EY5,50,20);
    ZX5 = ZX5 - EX5;
    if(ZX5 <= 0)
    {
        ZX5 = 740;
        EY5 = random(0, 750);
        r5 = random(0, 255);
g5 = random(0, 255);
b5 = random(0, 255);
    }
    fill('yellow');
    rect(ZX5 + 35, EY5,S2,S2);
}


function startscreen()////////////////////////////
{
    S1 = random(5, 10);
S2 = random(5, 10);


    fill(r1,g1,b1);
    rect(ZX1, EY1,50,20);
    ZX1 = ZX1 - EX1;
    if(ZX1 <= 0)
    {
        ZX1 = 740;
        EY1 = random(0, 750);
        r1 = random(0, 255);
g1 = random(0, 255);
b1 = random(0, 255);
    }
    fill('yellow');
    rect(ZX1 + 35, EY1,S1,S2);


    
    fill(r2,g2,b2);
    rect(ZX2, EY2,50,20);
    ZX2 = ZX2 - EX2;
    if(ZX2 <= 0)
    {
        ZX2 = 740;
        EY2 = random(0, 750);
        r2 = random(0, 255);
g2 = random(0, 255);
b2 = random(0, 255);
    }
    fill('yellow');
    rect(ZX2 + 35, EY2,S1,S2);


    fill(r3,g3,b3);
    rect(ZX3, EY3,50,20);
    ZX3 = ZX3 - EX3;
    if(ZX3 <= 0)
    {
        ZX3 = 740;
        EY3 = random(0, 750);
        r3 = random(0, 255);
g3 = random(0, 255);
b3 = random(0, 255);
    }
    fill('yellow');
    rect(ZX3 + 35, EY3,S1,S2);



    fill(r4,g4,b4);
    rect(ZX4, EY4,50,20);
    ZX4 = ZX4 - EX4;
    if(ZX4 <= 0)
    {
        ZX4 = 740;
        EY4 = random(0, 750);
        r4 = random(0, 255);
g4 = random(0, 255);
b4 = random(0, 255);
    }
    fill('yellow');
    rect(ZX4 + 35, EY4,S1,S2);


    fill(r5,g5,b5);
    rect(ZX5, EY5,50,20);
    ZX5 = ZX5 - EX5;
    if(ZX5 <= 0)
    {
        ZX5 = 740;
        EY5 = random(0, 750);
        r5 = random(0, 255);
g5 = random(0, 255);
b5 = random(0, 255);
    }
    fill('yellow');
    rect(ZX5 + 35, EY5,S1,S2);

let RT = random(0,255);
let GT = random(0,255);
let BT = random(0,255);
    fill(RT,GT,BT);
    textSize(50);
    textFont('Georgia');
    text('Hvr Mse To Start', 175, 380);

    let A = mouseX;
    let B = mouseY;

    if(A >= 175 && A <= 500 && B >=300 && B <= 550)
    {
        StartScreen = false;  
    }

}

function levelselect()
{
    S1 = random(5, 10);
S2 = random(5, 10);


    fill(r1,g1,b1);
    rect(ZX1, EY1,50,20);
    ZX1 = ZX1 - EX1;
    if(ZX1 <= 0)
    {
        ZX1 = 740;
        EY1 = random(0, 750);
        r1 = random(0, 255);
g1 = random(0, 255);
b1 = random(0, 255);
    }
    fill('yellow');
    rect(ZX1 + 35, EY1,S1,S2);


    
    fill(r2,g2,b2);
    rect(ZX2, EY2,50,20);
    ZX2 = ZX2 - EX2;
    if(ZX2 <= 0)
    {
        ZX2 = 740;
        EY2 = random(0, 750);
        r2 = random(0, 255);
g2 = random(0, 255);
b2 = random(0, 255);
    }
    fill('yellow');
    rect(ZX2 + 35, EY2,S1,S2);


    fill(r3,g3,b3);
    rect(ZX3, EY3,50,20);
    ZX3 = ZX3 - EX3;
    if(ZX3 <= 0)
    {
        ZX3 = 740;
        EY3 = random(0, 750);
        r3 = random(0, 255);
g3 = random(0, 255);
b3 = random(0, 255);
    }
    fill('yellow');
    rect(ZX3 + 35, EY3,S1,S2);



    fill(r4,g4,b4);
    rect(ZX4, EY4,50,20);
    ZX4 = ZX4 - EX4;
    if(ZX4 <= 0)
    {
        ZX4 = 740;
        EY4 = random(0, 750);
        r4 = random(0, 255);
g4 = random(0, 255);
b4 = random(0, 255);
    }
    fill('yellow');
    rect(ZX4 + 35, EY4,S1,S2);


    fill(r5,g5,b5);
    rect(ZX5, EY5,50,20);
    ZX5 = ZX5 - EX5;
    if(ZX5 <= 0)
    {
        ZX5 = 740;
        EY5 = random(0, 750);
        r5 = random(0, 255);
g5 = random(0, 255);
b5 = random(0, 255);
    }
    fill('yellow');
    rect(ZX5 + 35, EY5,S1,S2);

    let RL = random(0,255);
let GL = random(0,255);
let BL = random(0,255);
    fill(RL,GL,BL);
    textSize(25);
    textFont('Georgia');
    text('Easy', 250, 200);
    text('Average', 250, 400);
    text('Insane', 250, 600);

    let A = mouseX;
    let B = mouseY;

    if(A >= 250 && A <= 300 && B >=150 && B <= 220)
    {
        EX1 = random(2,5);//chnage at levelselect
        EX2 = random(2,5);//chnage at levelselect
        EX3 = random(2,5);//chnage at levelselect
        EX4 = random(2,5);//chnage at levelselect
        EX5 = random(2,5);//chnage at levelselect
        Levelscreen = false;
    }

    if(A >= 250 && A <= 400 && B >=350 && B <= 450)
    {
        EX1 = random(5,8);//chnage at levelselect
        EX2 = random(2,8);//chnage at levelselect
        EX3 = random(2,8);//chnage at levelselect
        EX4 = random(2,8);//chnage at levelselect
        EX5 = random(2,8);//chnage at levelselect
        Levelscreen = false;
    }

    if(A >= 250 && A <= 400 && B >=550 && B <= 650)
    {
        EX1 = random(10,25);//chnage at levelselect
        EX2 = random(10,25);//chnage at levelselect
        EX3 = random(10,25);//chnage at levelselect
        EX4 = random(10,25);//chnage at levelselect
        EX5 = random(10,25);//chnage at levelselect
        Levelscreen = false;
    }
}



