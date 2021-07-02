//we can also create element here by js insted of doing it at html
var x = document.getElementById("sound");
        x.loop=true;
        x.play();

        window.addEventListener("keydown", function(event) {
            if (event.code == `ArrowUp`) {
              console.log("Space was pressed!");
            // document.getElementById("moving_car").style.transform = "translateY(-50vh)"; 
            // document.getElementById("mc").style.transition = "2s"; 
            var moving_car = document.getElementById("my_car");
            moving_car.classList.add("fly");
            var sound2 = document.getElementById("sound2");
            x.pause();
            // sound2.loop=true;
            sound2.play();
        }
          }); 