let beat = new Audio('./ding.mp3');
let sound = new Audio('buzzer-or-wrong-answer-20582.mp3');

function changeColor(color){
    document.body.style.background = color;
}

function clearAllButtons(){
    el_play_list.forEach((el) => {
        el.innerHTML = ""; 
        el.style.visibility = "hidden";
    });
}
function playDing(){
    return new Promise(resolve => {
        beat.play();
        beat.onended = resolve;
    });
}
function playWrong(){
    return new Promise(resolve => {
        sound.play();
        sound.onended = resolve;
    });
}
function play(){
    changeColor('lightblue');
    el_down.innerHTML = "what is the square root of 2?";
    el_up.innerHTML = "";
    el_btn.innerHTML = "Restart";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[0].innerHTML = "1.333";
    el_play_list[0].style.visibility = "visible";
    el_play_list[1].innerHTML = "1.414";
    el_play_list[1].style.visibility = "visible";
    el_play_list[2].innerHTML = "1";
    el_play_list[2].style.visibility = "visible";
    el_play_list[3].innerHTML = "undefined";
    el_play_list[3].style.visibility = "visible";
  }
async function wrong(){
    await playWrong();
    el_down.innerHTML = "";
    el_up.innerHTML = "Quiz";
    el_btn.innerHTML = "Play";
    el_id.innerHTML = "By Ethan";
    clearAllButtons();
    changeColor('greenyellow');
}
async function one(){
    await playDing();
    el_down.innerHTML = "what is 5 factorial?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[4].innerHTML = "15";
    el_play_list[4].style.visibility = "visible";
    el_play_list[5].innerHTML = "115";
    el_play_list[5].style.visibility = "visible";
    el_play_list[6].innerHTML = "125";
    el_play_list[6].style.visibility = "visible";
    el_play_list[7].innerHTML = "120";
    el_play_list[7].style.visibility = "visible";
}

async function two(){
    await playDing();
    el_down.innerHTML = "What question number is this?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[8].innerHTML = "1";
    el_play_list[8].style.visibility = "visible";
    el_play_list[9].innerHTML = "2";
    el_play_list[9].style.visibility = "visible";
    el_play_list[10].innerHTML = "3";
    el_play_list[10].style.visibility = "visible";
    el_play_list[11].innerHTML = "4"; 
    el_play_list[11].style.visibility = "visible";
} 
async function three(){
    await playDing();
    el_down.innerHTML = "What is |123-221|?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[12].innerHTML = "-98";
    el_play_list[12].style.visibility = "visible";
    el_play_list[13].innerHTML = "98";
    el_play_list[13].style.visibility = "visible";
    el_play_list[14].innerHTML = "88";
    el_play_list[14].style.visibility = "visible";
    el_play_list[15].innerHTML = "-88"; 
    el_play_list[15].style.visibility = "visible";
} 
async function four(){
    await playDing();
    changeColor('purple');
    el_down.innerHTML = "What is mercury's diameter in KM?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[16].innerHTML = "4878";
    el_play_list[16].style.visibility = "visible";
    el_play_list[17].innerHTML = "4787";
    el_play_list[17].style.visibility = "visible";
    el_play_list[18].innerHTML = "3543";
    el_play_list[18].style.visibility = "visible";
    el_play_list[19].innerHTML = "5379"; 
    el_play_list[19].style.visibility = "visible";
    } 
async function five(){
    await playDing();
    el_down.innerHTML = "how long is the cycle of the moon phases?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[20].innerHTML = "29 days";
    el_play_list[20].style.visibility = "visible";
    el_play_list[21].innerHTML = "29.5 days";
    el_play_list[21].style.visibility = "visible";
    el_play_list[22].innerHTML = "30 days";
    el_play_list[22].style.visibility = "visible";
    el_play_list[23].innerHTML = "30.5 days";   
    el_play_list[23].style.visibility = "visible";
}
async function six(){
    await playDing();
    el_down.innerHTML = "when did atronaut Armstrong land on the moon?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[24].innerHTML = "1956";
    el_play_list[24].style.visibility = "visible";
    el_play_list[25].innerHTML = "2x The Current Year";
    el_play_list[25].style.visibility = "visible";
    el_play_list[26].innerHTML = "1969";
    el_play_list[26].style.visibility = "visible";
    el_play_list[27].innerHTML = "1971";   
    el_play_list[27].style.visibility = "visible";
}
async function seven(){
    await playDing();
    el_down.innerHTML = "how many dwarf planets are in the solar system?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[28].innerHTML = "4";
    el_play_list[28].style.visibility = "visible";
    el_play_list[29].innerHTML = "7";
    el_play_list[29].style.visibility = "visible";
    el_play_list[30].innerHTML = "5";
    el_play_list[30].style.visibility = "visible";
    el_play_list[31].innerHTML = "6";   
    el_play_list[31].style.visibility = "visible";
}
async function eight(){
    await playDing();
    el_down.innerHTML = "What can you hear in space?";
    el_up.innerHTML = "";
    el_id.innerHTML = "";
    clearAllButtons();
    el_play_list[32].innerHTML = "alien creeks";
    el_play_list[32].style.visibility = "visible";
    el_play_list[33].innerHTML = "nothing";
    el_play_list[33].style.visibility = "visible";
    el_play_list[34].innerHTML = "meteors colliding";
    el_play_list[34].style.visibility = "visible";
    el_play_list[35].innerHTML = "oxegyn tanks";   
    el_play_list[35].style.visibility = "visible";
}
function what(){
    window.location = "what.html";
}
function restart(){
    window.location = "index.html";
}
function end(){
    window.location = "end.html";
}
function finish(){
    window.location = "finish.html";
}

function changeBg(){
    document.getElementById('btn').style = "background-color: orangered;";
}
function changeBg2(){
    document.getElementById('btn').style = "background-color: green;";
}
function changeBg3(){
    document.getElementById('end_play').style = "background-color: orangered;";
}
function changeBg4(){
    document.getElementById('end_play').style = "background-color: green;";
}
function changeBg5(){
    document.getElementById('f').style = "background-color: orangered;";
}
function changeBg6(){
    document.getElementById('f').style = "background-color: green;";
}



