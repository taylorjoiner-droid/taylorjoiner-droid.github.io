$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600,400,100,15,"blue");
    createPlatform(1100,100,100,15,"blue");
    createPlatform(200,650,100,15,"purple");
    createPlatform(550,625,300,15,"purple");
    createPlatform(850,300,250,15,"purple");
    createPlatform(275,475,200,15,"blue");
    createPlatform(1050,550,150,15,"blue");
    createPlatform(410,225,200,15,"purple");



    // TODO 3 - Create Collectables
    createCollectable("database",400,175,0.5,0.7);
    createCollectable("database",1150,55,0.5,0.7);
    createCollectable("database",630,340,0.5,0.7);
    createCollectable("database",230,620,0.5,0.7);


    
    // TODO 4 - Create Cannons
    createCannon("left",250,2000);
    createCannon("right",550,1500);
    createCannon("top",400,1500);
    createCannon("bottom",700,1500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
