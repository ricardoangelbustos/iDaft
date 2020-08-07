function playWorkIt1(){
    document.getElementById("workit1").play();
}
function playMakeIt1(){
    document.getElementById("makeit1").play();
}
function playDoIt1(){
    document.getElementById("doit1").play();
}
function playMakeUs1() {
    document.getElementById("makeus1").play();
}
function playHarder1() {
    document.getElementById("harder1").play();
}
function playBetter1() {
    document.getElementById("better1").play();
}
function playFaster1() {
    document.getElementById("faster1").play();
}
function playStronger1() {
    document.getElementById("stronger1").play();
}
function playMoreThan1() {
    document.getElementById("morethan1").play();
}
function playHour1() {
    document.getElementById("hour1").play();
}
function playOur1() {
    document.getElementById("our1").play();
}
function playNever1() {
    document.getElementById("never1").play();
}
function playEver1() {
    document.getElementById("ever1").play();
}
function playAfter1() {
    document.getElementById("after1").play();
}
function playWorkIs1() {
    document.getElementById("workis1").play();
}
function playOver1() {
    document.getElementById("over1").play();
}
function toggle() {
    var workit = document.getElementById("workit1");
    if (workit.src.match("music/1_work_it_1.mp3")){
        workit.src="music/1_work_it_2.mp3"
    } else {
        workit.src="music/1_work_it_1.mp3"
    }

    var makeit = document.getElementById("makeit1");
    if (makeit.src.match("music/2_make_it_1.mp3")){
        makeit.src="music/2_make_it_2.mp3"
    } else {
        makeit.src="music/2_make_it_1.mp3"
    }

    var doit = document.getElementById("doit1");
    if (doit.src.match("music/3_do_it_1.mp3")){
        doit.src="music/3_do_it_2.mp3"
    } else {
        doit.src="music/3_do_it_1.mp3"
    }

    var makesus = document.getElementById("makeus1");
    if (makesus.src.match("music/4_makes_us_1.mp3")) {
        makesus.src="music/4_makes_us_2.mp3"
    } else {
        makesus.src="music/4_makes_us_1.mp3"
    }
    
    var harder = document.getElementById("harder1");
    if (harder.src.match("music/5_harder_1.mp3")){
        harder.src="music/5_harder_2.mp3"
    } else {
        harder.src="music/5_harder_1.mp3"
    }

    var better = document.getElementById("better1");
    if (better.src.match("music/6_better_1.mp3")){
        better.src="music/6_better_2.mp3"
    } else {
        better.src="music/6_better_1.mp3"
    }

    var faster = document.getElementById("faster1");
    if (faster.src.match("music/7_faster_1.mp3")){
        faster.src="music/7_faster_2.mp3"
    } else {
        faster.src="music/7_faster_1.mp3"
    }

    var stronger = document.getElementById("stronger1");
    if (stronger.src.match("music/8_stronger_1.mp3")){
        stronger.src="music/8_stronger_2.mp3"
    } else {
        stronger.src="music/8_stronger_1.mp3"
    }

    var morethan = document.getElementById("morethan1");
    if (morethan.src.match("music/9_more_than_1.mp3")){
        morethan.src="music/9_more_than_2.mp3"
    } else {
        morethan.src="music/9_more_than_1.mp3"
    }

    var hour = document.getElementById("hour1");
    if (hour.src.match("music/10_hour_1.mp3")){
        hour.src="music/10_hour_2.mp3"
    } else {
        hour.src="music/10_hour_1.mp3"
    }

    var our = document.getElementById("our1");
    if (our.src.match("music/11_our_1.mp3")){
        our.src="music/11_our_2.mp3"
    } else {
        our.src="music/11_our_1.mp3"
    }

    var never = document.getElementById("never1");
    if (never.src.match("music/12_never_1.mp3")){
        never.src="music/12_never_2.mp3"
    } else {
        never.src="music/12_never_1.mp3"
    }

    var ever = document.getElementById("ever1");
    if (ever.src.match("music/13_ever_1.mp3")){
        ever.src="music/13_ever_2.mp3"
    } else {
        ever.src="music/13_ever_1.mp3"
    }

    var after = document.getElementById("after1");
    if (after.src.match("music/14_after_1.mp3")){
        after.src="music/14_after_2.mp3"
    } else {
        after.src="music/14_after_1.mp3"
    }

    var workis = document.getElementById("workis1");
    if (workis.src.match("music/15_work_is_1.mp3")){
        workis.src="music/15_work_is_2.mp3"
    } else {
        workis.src="music/15_work_is_1.mp3"
    }

    var over = document.getElementById("over1");
    if (over.src.match("music/16_over_1.mp3")){
        over.src="music/16_over_2.mp3"
    } else {
        over.src="music/16_over_1.mp3"
    }

    var text = document.getElementById("text");
    if (text.innerHTML.match("HIGH!")) {
        text.innerHTML = "LOW!";
    } else {
        text.innerHTML = "HIGH!";
    }

    var element=document.body;
    element.classList.toggle("color");
}
function playBeat() {
    document.getElementById("beat1").play();
    document.getElementById("beat1").currentTime = 0;

    var beat = document.getElementById("beat");
    if (beat.innerHTML.match("START THE BEAT!")) {
        beat.innerHTML = "RESTART THE BEAT!";
    }
}