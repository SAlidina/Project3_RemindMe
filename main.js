// var currentTime = moment();
// console.log(currentTime.format());
// $(".timerAppear").append(currentTime.format());
// var datetime = null;
// date = null;
// var update = function () {
//     date = moment(new Date())
//     datetime.html(date.format('ddd,MMMM Do YYYY, h:mm:ss a'));
// };

// $(document).ready(function () {
//     datetime = $('.timerAppear')
//     update();
//     setInterval(update, 1000);
// });

var hr = '';
var min = '';
var sec = '';
var remndr = '';
var month = '';
var day = '';
var year = '';
var countDownTimer;



function addRmndr() {
    remndr = $("#exampleFormControlInput2").val().trim();
    
    cardTitle = $("#exampleFormControlInput1").val().trim()

    //console.log(remndr + " " + hr + " " + min + " " + sec + " " + month + " " + day + " " + year);
   
    var id = 0;//$(".reminderList").length

    //pass x into this function
    makeCard(id);
};

 

function makeCard(id) {
   

    var timerCard = $(`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <div id="0" />
                <h5 class="card-title">` + cardTitle + `</h5>
                <h6 class="card-subtitle mb-2 text-muted">` + countDownTimer + `</h6>
                <p class="card-text">` + remndr + `</p>
            </div>`);
    $(".reminderList").append(timerCard);

     var x = setInterval(function () {
    
    hr = $("#hr").val().trim();
    min = $("#min").val().trim();
    sec = $("#sec").val().trim();
    month = $("#month").val().trim();
    day = $("#day").val().trim();
    year = $("#year").val().trim();

    var now = new Date().getTime();
    
    var countDownDate = new Date(month + " " + day + ", " + year + " " + hr + ":" + min + ":" + sec).getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDownTimer = days + `d ` + hours + `h ` + minutes + `m ` + seconds + `s `;

    document.getElementById(0).innerHTML = countDownTimer;

}, 1000);
}