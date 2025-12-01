let gameState = "START" // możliwe stany "START", "PLAYING", "DYING", "GAME OVER"

// DŹWIĘKI
const wingSound = new Audio("../assets/Sound Efects/wing.ogg");
const pointSound = new Audio("../assets/Sound Efects/point.ogg");
const hitSound = new Audio("../assets/Sound Efects/hit.ogg");
const dieSound = new Audio("../assets/Sound Efects/die.ogg");
const swooshSound = new Audio("../assets/Flappy Bird/Sound Effects/swoosh.ogg");

//TŁO
const width = window.innerWidth;
const height = window.innerHeight;
let baseX1 = 0;
let baseX2 = 0;
let baseSpeed = 4;
let score = 0;


// RURY
let pipes = [];        // tablica z rurami
let frameCounter = 75;
const pipeInterval = 80;
const minGap = 70;
const maxGap = 140;

//PTAK
const birdGravity = 0.6;
const birdJump = -7;
let birdFrame = 0
let birdSpeed = 0;

function preload(){
    bgImg = loadImage("../assets/Flappy Bird/background-day.png");
    baseImg = loadImage("../assets/Flappy Bird/base.png");

    birdImg = [
        loadImage("../assets/Flappy Bird/yellowbird-downflap.png"),
        loadImage("../assets/Flappy Bird/yellowbird-midflap.png"),
        loadImage("../assets/Flappy Bird/yellowbird-upflap.png"),
    ]

    pipeImg = loadImage("../assets/Flappy Bird/pipe-green.png")


}

function setup() {
    createCanvas(width, height);

    baseX1 = 0;
    baseX2 = width;

    birdX = width / 4;
    birdY = height * 0.4;
}

function draw() {
    //NIEBO
    const w6 = width / 6;

    image(bgImg, 0, 0, w6, height);
    image(bgImg, w6, 0, w6, height);
    image(bgImg, 2 * w6, 0, w6, height);
    image(bgImg, 3 * w6, 0, w6, height);
    image(bgImg, 4 * w6, 0, w6, height);
    image(bgImg, 5 * w6, 0, w6, height);





         // RURY

         // co pipeInterval powstaje nowa rura
         frameCounter++;
         if (frameCounter % pipeInterval === 0) {
             createPipes();
         }


         for (let i = pipes.length - 1; i >= 0; i--) {
             const p = pipes[i];

             drawPipes(p);

             if(gameState === "PLAYING"){

                 p.x -= baseSpeed; // ruch rur w lewo


                 // czy ptak uderza w rurę
                 if (checkCollision(p)) { //jak tak to umiera
                     gameState = "DYING"
                     hitSound.play();

                 }

                 // dodawanie punktów
                 if (!p.scored && birdX > p.x + pipeWidth) {
                     score++;
                     p.scored = true;
                     pointSound.play();

                 }



                 // usuniecie rury która wyszła za ekran
                 if (p.x + pipeImg.width < 0) {
                     pipes.splice(i, 1);
                 }
         }

     }


    if (gameState === "PLAYING"|| gameState === "DYING") {
        //PTAK latanie

        birdSpeed += birdGravity; // grawitacja
        birdY += birdSpeed;
    }

    // PTAK rysowanie
    const groundY = height - baseImg.height;  // koniec nieba
    if (birdY > groundY - birdImg[0].height / 2) { // sprawdzenie kolizji z ziemią
        birdY = groundY - birdImg[0].height / 2;
        birdSpeed = 0;
        if (gameState === "DYING" || gameState === "PLAYING")  //koniec gry przy uderzeniu w ziemie
        {
            gameState = "GAME OVER";
            saveScore()
            dieSound.play();
        }

    }

    // animacja skrzydeł
    if (gameState === "PLAYING"){
        birdFrame += 0.2;
    }

    const idx = floor(birdFrame) % 3;


    let angle;
    if (gameState === "DYING") {
        angle = 1.57; // 90° - prosto w dół
    } else {
        angle = map(birdSpeed, -10, 10, -0.6, 0.8); // kąt w zależności od prędkości
        angle = constrain(angle, -0.8, 0.8);
    }

    push();
    translate(birdX, birdY);
    rotate(angle);
    imageMode(CENTER);
    image(birdImg[idx], 0, 0);
    imageMode(CORNER);
    pop();

    // TRAWA

    // dwa bloczki ziemi obok siebie
    image(baseImg, baseX1, height - baseImg.height, width, baseImg.height);
    image(baseImg, baseX2, height - baseImg.height, width, baseImg.height);

    if (gameState === "PLAYING"){

        // przesuwanie w lewo
        baseX1 -= baseSpeed;
        baseX2 -= baseSpeed;

        // tworzenie nieskończonej pętli:
        //jak bloczek przesunie się poza ekran
        // wskakuje na prawo za drugi bloczek
        if (baseX1 <= -width) {
            baseX1 = baseX2 + width;
        }
        if (baseX2 <= -width) {
            baseX2 = baseX1 + width;
        }

    }


    // TEKST
    stroke(0); // czarna ramka
    strokeWeight(4);
    fill(255); //biały tekst
    textAlign(CENTER, TOP);

    if(gameState === "START") {
        // ekran powitalny
        textSize(100);
        text("Start Game", width / 2, height / 2 - 50);
        textSize(50);
        text("Press Space", width / 2 + 100, height / 2 + 50);
    }
    else if (gameState === "PLAYING")
    {
        // PUNKTACJA
        textSize(50);
        text(score, width / 2, 20);
    }
    else if (gameState === "GAME OVER") {
        //ekran końcowy
        filter(GRAY);
        textSize(100);
        text("Game Over", width / 2, height / 2 - 100);

        textSize(40);
        textAlign(CENTER, TOP);
        text("Your score: " + score, width / 2, height / 2);

        // odczyt top 5 wyników
        let scores = JSON.parse(localStorage.getItem('scores') || '[]');

        textSize(30);
        text("Best scores:", width / 2, height / 2 + 60);

        for (let i = 0; i < scores.length; i++) {
            text((i + 1) + ". " + scores[i], width / 2, height / 2 + 100 + i * 30);
        }

        textSize(24);
        text("Press SPACE to play again", width / 2, height / 2 + 260);

    }


}


function drawPipes(p){

    const x = p.x; // Pozycja X rury
    const y = p.y; // Pozycja Y przerwy (gdzie kończy się górna rura)
    const gapSize = p.gap;


    pipeWidth = pipeImg.width;
    pipeHeight = pipeImg.height;


    const bottomPipe= gapSize+y;
    image(pipeImg,x,bottomPipe,pipeWidth,height - baseImg.height-bottomPipe)
    const topPipe= y;
    push();
    translate(x,topPipe);
    scale(1,-1);
    image(pipeImg,0,0,pipeWidth,topPipe)
    pop();

}

function createPipes(){
    const gapSize = random(minGap, maxGap);

    const groundY = height - baseImg.height; // górna krawędź trawy


    // dziura górnej rury nie wychodzi poza ekran
    const minGapY = 40;       // odstęp od góry
    const minMarginBottom = 40;    // odstęp od trawy

    const maxGapY = groundY-gapSize-minMarginBottom;
    const gapY = random(minGapY, maxGapY);


    pipes.push({
        gap: gapSize,
        x: width,
        y: gapY,
        scored: false
    })


}

function checkCollision(p) {
    const birdW = birdImg[0].width;
    const birdH = birdImg[0].height;

    const birdLeft = birdX - birdW / 2;
    const birdRight = birdX + birdW / 2;
    const birdTop = birdY - birdH / 2;
    const birdBottom = birdY + birdH / 2;

    const pipeLeft = p.x;
    const pipeRight = p.x + pipeWidth;

    // czy ptak znajduje się między początkiem i końcem rury
    const inHorizontalRange = birdRight > pipeLeft && birdLeft < pipeRight;

    if (inHorizontalRange) {
        // uderza w górną rurę [0-y]
        if (birdTop < p.y) {
            return true;
        }

        // uderza w dolną rurę [y+gap-ground]
        const bottomPipeTop = p.y + p.gap;
        if (birdBottom > bottomPipeTop) {
            return true;
        }
    }

    return false;
}


function keyPressed() {
    if (key === ' '){
        if (gameState === "START") {
            gameState = "PLAYING";
            birdSpeed = birdJump;
            wingSound.play();
        } else if (gameState === "PLAYING") {
            birdSpeed = birdJump;
            wingSound.play();
        } else if (gameState === "GAME OVER") {
            swooshSound.play();
            resetGame();
            gameState = "START";
        }
    }
}

function saveScore() {
    // pobierz aktualną listę lub pustą tablicę
    let scores = JSON.parse(localStorage.getItem('scores') || '[]');

    scores.push(score);

    // posortuj malejąco i zostaw tylko 5 najlepszych
    scores.sort((a, b) => b - a);
    scores = scores.slice(0, 5);

    // zapisz z powrotem
    localStorage.setItem('scores', JSON.stringify(scores));
}


function resetGame() {
    score = 0;
    pipes = [];
    frameCounter = 70;
    birdX = width / 4;
    birdY = height * 0.4;
    birdSpeed = 0;
}