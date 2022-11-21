var player1 = document.getElementById('player');
var buah1 = document.getElementsByClassName('buah');
var food1 = document.getElementsByClassName('jambu');
var food2 = document.getElementsByClassName('jeruk');
var food3 = document.getElementsByClassName('str');
var food4 = document.getElementsByClassName('apple');
var uQuiz = document.getElementById('quiz1');
// var sMakan = document.getElementById('sMakan');

var nilaiApel = 0;
var nilaiJambu = 0;
var nilaiJeruk = 0;
var nilaiStr= 0;
var jawab = 0
// membuat function jalan
function berjalan(){
    document.addEventListener('keydown', function (event) {
        var keyPress = String.fromCharCode(event.keyCode);
        if (keyPress == "D") {
            player1.style.left = (player1.offsetLeft += 50) + 'px';
            player1.style.animation = 'kanan 0.5s steps(1) infinite';
            cekTangkap();
        }
        if (keyPress == "A") {
            player1.style.left = (player1.offsetLeft -= 50) + 'px';
            player1.style.animation = 'kiri 0.5s steps(1) infinite';
            cekTangkap();
        }
        if (keyPress == "X") {
            player1.style.top = (player1.offsetTop += 50) + 'px';
            player1.style.animation = 'bawah 0.5s steps(1) infinite';
            cekTangkap();
        }
        if (keyPress == "W") {
            player1.style.top = (player1.offsetTop -= 50) + 'px';
            player1.style.animation = 'atas 1s steps(1) infinite';
            cekTangkap();
        }
    })
}


// makan buah
function cekTangkap() {
   
    for (i = 0; i < food1.length; i++) {
        // inisialisasi variabel element
        const uJambu = document.getElementById('jambu');
        pTop = player1.offsetTop;
        pLeft = player1.offsetLeft;
        pWidth = player1.offsetWidth;
        pHeight = player1.offsetHeight;

        fTop = food1[i].offsetTop;
        fLeft = food1[i].offsetLeft;
        fWidth = food1[i].offsetWidth;
        fHeight = food1[i].offsetHeight;
        
        // cek apakah buah sudah menyentuh mangkok
        if ((pLeft + pWidth) > fLeft && pLeft < (fLeft + fWidth) && (pTop + pHeight) > fTop && pTop < (fTop + fHeight)) {
            // document.body.removeChild(food1);
            nilaiJambu += 1;
            uJambu.innerHTML ='<h3 id="jambu"> <img src="/img/jambu.png" alt=""> X '+nilaiJambu+'</h3>';
            document.getElementById("sMakan").innerHTML = `<audio controls autoplay id="sMakan">
            <source src="/sound/mixkit-arcade-mechanical-bling-210.wav" type="audio/wav">
        </audio>`;
            food1[i].remove();
        }
    }
    for (i = 0; i < food2.length; i++) {
        // inisialisasi variabel element
        const uJeruk = document.getElementById('jeruk');
        pTop = player1.offsetTop;
        pLeft = player1.offsetLeft;
        pWidth = player1.offsetWidth;
        pHeight = player1.offsetHeight;

        fTop = food2[i].offsetTop;
        fLeft = food2[i].offsetLeft;
        fWidth = food2[i].offsetWidth;
        fHeight = food2[i].offsetHeight;

        // cek apakah buah sudah menyentuh mangkok
        if ((pLeft + pWidth) > fLeft && pLeft < (fLeft + fWidth) && (pTop + pHeight) > fTop && pTop < (fTop + fHeight)) {
            nilaiJeruk += 1;
            uJeruk.innerHTML ='<h3 id="jeruk"><img src="/img/jeruk.png" alt=""> X '+nilaiJeruk+'</h3>';
            document.getElementById("sMakan").innerHTML = `<audio controls autoplay id="sMakan">
            <source src="/sound/mixkit-arcade-mechanical-bling-210.wav" type="audio/wav">
        </audio>`;
            food2[i].remove();
        }
    }
    for (i = 0; i < food3.length; i++) {
        // inisialisasi variabel element
        const uStr = document.getElementById('str');
        pTop = player1.offsetTop;
        pLeft = player1.offsetLeft;
        pWidth = player1.offsetWidth;
        pHeight = player1.offsetHeight;

        fTop = food3[i].offsetTop;
        fLeft = food3[i].offsetLeft;
        fWidth = food3[i].offsetWidth;
        fHeight = food3[i].offsetHeight;

        // cek apakah buah sudah menyentuh mangkok
        if ((pLeft + pWidth) > fLeft && pLeft < (fLeft + fWidth) && (pTop + pHeight) > fTop && pTop < (fTop + fHeight)) {
            nilaiStr += 1;
            uStr.innerHTML ='<h3 id="str"> <img src="/img/str.png" alt=""> X '+nilaiStr+'</h3>';
            document.getElementById("sMakan").innerHTML = `<audio controls autoplay id="sMakan">
            <source src="/sound/mixkit-arcade-mechanical-bling-210.wav" type="audio/wav">
        </audio>`;
            food3[i].remove();
        }
    }
    for (i = 0; i < food4.length; i++) {
        // inisialisasi variabel element
        const uApple = document.getElementById('napple');
        pTop = player1.offsetTop;
        pLeft = player1.offsetLeft;
        pWidth = player1.offsetWidth;
        pHeight = player1.offsetHeight;

        fTop = food4[i].offsetTop;
        fLeft = food4[i].offsetLeft;
        fWidth = food4[i].offsetWidth;
        fHeight = food4[i].offsetHeight;

        // cek apakah buah sudah menyentuh mangkok
        if ((pLeft + pWidth) > fLeft && pLeft < (fLeft + fWidth) && (pTop + pHeight) > fTop && pTop < (fTop + fHeight)) {
            nilaiApel += 1;
            uApple.innerHTML ='<h3 id="napple"><img src="/img/apple.png" alt=""> x '+nilaiApel+'</h3>';
            document.getElementById("sMakan").innerHTML = `<audio controls autoplay id="sMakan">
            <source src="/sound/mixkit-arcade-mechanical-bling-210.wav" type="audio/wav">
        </audio>`;
            food4[i].remove();
        }
    }
}

// fungsi random posision
function jambu() {
    let jumlah = 5;
    let food1 = document.querySelector('body');
    let i = 0;
    while (i < jumlah) {
    let drop = document.createElement('div');
    drop.classList.add('jambu');
    let posX = Math.floor(Math.random() * innerWidth);
    let posT = Math.floor(Math.random() * innerHeight);
    drop.style.width = 50 + 'px';
    drop.style.height = 50 + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = posT + 'px';
    food1.appendChild(drop);
    i++;
    }
}
function jeruk() {
    let jumlah = 5;
    let food1 = document.querySelector('body');
    let i = 0;
    while (i < jumlah) {
    let drop = document.createElement('div');
    drop.classList.add('jeruk');
    let posX = Math.floor(Math.random() * innerWidth);
    let posT = Math.floor(Math.random() * innerHeight);
    drop.style.width = 50 + 'px';
    drop.style.height = 50 + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = posT + 'px';
    food1.appendChild(drop);
    i++;
    }
}
function str() {
    let jumlah = 5;
    let food1 = document.querySelector('body');
    let i = 0;
    while (i < jumlah) {
    let drop = document.createElement('div');
    drop.classList.add('str');
    let posX = Math.floor(Math.random() * innerWidth);
    let posT = Math.floor(Math.random() * innerHeight);
    drop.style.width = 50 + 'px';
    drop.style.height = 50 + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = posT + 'px';
    food1.appendChild(drop);
    i++;
    }
}
function apple() {
    let jumlah = 5;
    let food1 = document.querySelector('body');
    let i = 0;
    while (i < jumlah) {
    let drop = document.createElement('div');
    drop.classList.add('apple');
    let posX = Math.floor(Math.random() * innerWidth);
    let posT = Math.floor(Math.random() * innerHeight);
    drop.style.width = 50 + 'px';
    drop.style.height = 50 + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = posT + 'px';
    food1.appendChild(drop);
    i++;
    }
}

// timer
function countdown() {
    var seconds = 13;
    
    uAple = document.getElementById('jApel');
    uJambu = document.getElementById('jJambu');
    uJeruk = document.getElementById('jJeruk');
    uStr = document.getElementById('jStr');
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            var cek = getRndInteger(0,4);
            // pilih soal
            if (cek == 0){
                uQuiz.innerHTML ='<h3 id="quiz1"><img src="/img/jambu.png" alt="">'+nilaiJambu +' + <img src="/img/apple.png" alt="">'+nilaiApel+' = ?</h3>';
                jawab = nilaiJambu + nilaiApel;
            }
            if(cek == 1){
                uQuiz.innerHTML ='<h3 id="quiz1"><img src="/img/jeruk.png" alt="">'+nilaiJeruk +' + <img src="/img/str.png" alt="">'+nilaiStr+' = ?</h3>';
                jawab = nilaiJeruk + nilaiStr;
            }
            if(cek == 2){
                uQuiz.innerHTML ='<h3 id="quiz1"><img src="/img/jeruk.png" alt="">'+nilaiJeruk +' + <img src="/img/apple.png" alt="">'+nilaiApel+' = ?</h3>';
                jawab = nilaiJeruk + nilaiApel;
            }
            if(cek == 3){
                uQuiz.innerHTML ='<h3 id="quiz1"><img src="/img/jambu.png" alt="">'+nilaiJambu +' + <img src="/img/str.png" alt="">'+nilaiStr+' = ?</h3>';
                jawab = nilaiJambu + nilaiStr;
            }
            document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
            <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Jawab Quiz Dulu!</button>
            </div>
            `;
            player1.remove();
            uAple.innerHTML ='<td id="jApel">'+nilaiApel+'</td>';
            uJambu.innerHTML ='<td id="jJambu">'+nilaiJambu+'</td>';
            uJeruk.innerHTML ='<td id="jJeruk">'+nilaiJeruk+'</td>';
            uStr.innerHTML ='<td id="jStr">'+nilaiStr+'</td>';
            $('#exampleModal').modal(options)
            // for (i = 0; i < food2.length; i++) {
            //     food2[i].remove();
            // }
            // for (i = 0; i < food3.length; i++) {
            //     food3[i].remove();
            // }
            // for (i = 0; i < food4.length; i++) {
            //     food4[i].remove();
            // }
            document.getElementById("counter").innerHTML = "";
        }
    }
    tick();
}
countdown();
// angka random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// funsi untuk mengecek hasil jawaban benar atau tidak
function cekHasil(){
    var jwb = document.getElementById('jawab').value;
    if(jawab == jwb){
        $('#benar').modal('show');
        // timer
        reload();
    }
    else{
        $('#salah').modal('show');
    }
}

// reload
function reload() {
    var seconds = 3;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            location.reload();
        }
    }
    tick();
}
function Start() {
    var mundur = 3;
    strt = document.getElementById('start');
    function tick() {
        var hit = document.getElementById("start");
        mundur--;
        hit.innerHTML =
            "" + (mundur < 10 ?  "" :"") + String(mundur);
        if (mundur > 0) {
            setTimeout(tick, 1000);
        } else {
            strt.innerHTML  ='<h2 id="start"></h2>';
            berjalan();
            jambu();
            jeruk();
            apple();
            str();
        }
    }
    tick();
}
Start();

// sound aktfi
document.getElementById("sGame").innerHTML = `<audio controls autoplay id="sGame" loop>
<source src="/sound/sound1.mp3" type="audio/mpeg">
        </audio>`;
