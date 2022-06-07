// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    console.log('window loaded');

    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener('click', function () {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm === true) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleFlightScreen.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }

        let land = document.getElementById("landing");

        land.addEventListener('click', function () {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed."
            shuttleFlightScreen.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        });

        let abort = document.getElementById("missionAbort");

        abort.addEventListener('click', function () {
            let confirm = window.confirm("Confirm that you want to abort the mission.");
            if (confirm !== false) {
                flightStatus.innerHTML = "Mission Aborted!";
                shuttleFlightScreen.style.backgroundColor = "";
                spaceShuttleHeight.innerHTML = 0;

            };

        })


        let rocket = document.getElementById("rocket");
        
        let num = parseInt("0px");
        let up = document.getElementById("up");
        up.addEventListener('click', function () {
            num += 10;
            rocket.style.bottom = `${Math.abs(num)}px`;
            console.log(rocket.style.bottom);

        });
        let down = document.getElementById("down");
        down.addEventListener('click', function () {
            // num = parseInt(rocket.style.bottom);
            num += 10;
            rocket.style.top = `${Math.abs(num)}px`;
            console.log(rocket.style.top);
        
        })
        

        let left = document.getElementById("left");
        left.addEventListener('click', function () {
            // num = parseInt(rocket.style.bottom);
            num -= 10;
            rocket.style.left = `${Math.abs(num)}px`;
            console.log(rocket.style.left);
        
        })
        // add 10px


        let right = document.getElementById("right");
        right.addEventListener('click', function () {
            // num = parseInt(rocket.style.bottom);
            num += 10;
            rocket.style.left = `${Math.abs(num)}px`;
            console.log(rocket.style.left);
        
        })





    });



})







