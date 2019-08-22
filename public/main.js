var cardCount = 0;

$(document).ready(function startTimers() {
    //Is there a logged in user?

    //If so, get their cards, add them via the function.

    setInterval(function updateTimers() {
        for (var id = 0; id < cardCount; id++) {
            var timeUntil = document.getElementById(id).getAttribute("timeUntil");

            if (timeUntil > 0) {
                var years = Math.floor(timeUntil / (60 * 60 * 24 * 30 * 12));
                var months = Math.floor((timeUntil % (60 * 60 * 24 * 30 * 12)) / (60 * 60 * 24 * 30));
                var days = Math.floor((timeUntil % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
                var hours = Math.floor((timeUntil % (60 * 60 * 24)) / (60 * 60));
                var minutes = Math.floor((timeUntil % (60 * 60)) / 60);
                var seconds = Math.floor(timeUntil % 60);

                countDownTimer = years + `y ` + months + `m ` + days + `d ` + hours + `h ` + minutes + `m ` + seconds + `s `;

                timeUntil--;

                document.getElementById(id).setAttribute("timeUntil", timeUntil);
                document.getElementById(id).innerHTML = countDownTimer;

            }
            else {
                document.getElementById(id).innerHTML = "EXPIRED";
            }
        }
    }, 1000);
});

function addRmndr() {
    if (cardCount > 1) {
        alert("Please login or sign up to make another reminder!");
        
    }
    else {
        var remndr = $("#exampleFormControlInput2").val().trim();

    var cardTitle = $("#exampleFormControlInput1").val().trim()

    var id = cardCount;

    cardCount++;

    makeCard(id, remndr, cardTitle);

    }
};

function makeCard(id, remndr, cardTitle) {

    var inputHr = $("#hr").val().trim();
    var inputMin = $("#min").val().trim();
    var inputSec = $("#sec").val().trim();
    var inputMonth = $("#month").val().trim();
    var inputDay = $("#day").val().trim();
    var inputYear = $("#year").val().trim();

    var timeUntil = parseInt(0);

    if (!isNaN(inputYear) && inputYear != "") {
        timeUntil += parseInt(inputYear * 60 * 60 * 24 * 30 * 12);
    }
    if (!isNaN(inputMonth) && inputMonth != "") {
        timeUntil += parseInt(inputMonth * 60 * 60 * 24 * 30);
    }
    if (!isNaN(inputDay) && inputDay != "") {
        timeUntil += parseInt(inputDay * 60 * 60 * 24);
    }
    if (!isNaN(inputHr) && inputHr != "") {
        timeUntil += parseInt(inputHr * 60 * 60);
    }
    if (!isNaN(inputMin) && inputMin != "") {
        timeUntil += parseInt(inputMin * 60);
    }
    if (!isNaN(inputSec) && inputSec != "") {
        timeUntil += parseInt(inputSec);
    }

    var timerCard = $(`<div class = "col-sm-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">` + cardTitle + `</h5>
                                <h6 id="` + id + `" timeUntil="` + timeUntil + `" class="card-subtitle mb-2 text-muted"></h6>
                                <p class="card-text">` + remndr + `</p>
                            </div>
                        </div>
                        </div>`);

    $("#reminderList").append(timerCard);
    
}