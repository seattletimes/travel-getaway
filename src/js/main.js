// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

function initializeButtons(modalId, buttonId) {
    // Get the modal
    var modal = document.getElementById(modalId);

    // Get the button that opens the modal
    var btn = document.getElementById(buttonId);

    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

initializeButtons("job", "btnJob");
initializeButtons("city", "btnCity");
initializeButtons("routine", "btnRoutine");
initializeButtons("weather", "btnWeather");
initializeButtons("stress", "btnStress");
initializeButtons("travel", "btnTravel");
initializeButtons("family", "btnFamily");
initializeButtons("tech", "btnTech");
initializeButtons("comfort", "btnComfort");
