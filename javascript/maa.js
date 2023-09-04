// audio
var myaudio = document.getElementById("audioID");

    function play() { 
    return myaudio.play(); 
    };

    function stop() {
    return myaudio.pause(); 
    };
function playMusic(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}

// show or hide

const divContainer = document.querySelector(".slider");
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
}

// menghilang opacity

const element = document.getElementById('animasi');
const showTime = 3000000; // Waktu (dalam milidetik) ketika konten akan muncul (3 detik dalam contoh ini)

  setTimeout(() => {
    element.style.animation = 'none'; // Menghapus animasi agar konten muncul langsung
    element.style.opacity = 1;
  }, showTime);

// perpindahan tempat

const content = document.getElementById('card');
const animateButton = document.getElementById('container');

animateButton.addEventListener('click', () => {
  content.classList.toggle('animating'); // Tambah atau hilangkan kelas "animating"
});

  // Fungsi untuk menampilkan konten dengan animasi setelah jeda waktu
  function showContentWithDelay() {
    const content = document.getElementById("container");
    
    setTimeout(function() {
      content.classList.add("visible-content"); // Tambahkan kelas yang membuat konten terlihat
    }, 360000); // Jeda waktu dalam milidetik (contoh: 2 detik)
  }

  // Panggil fungsi untuk menampilkan konten
  showContentWithDelay();

// hidden

const sentences = [
  "Halloo niii welcomee, Nahh ada sesuatu nihh buat dewii cobaa klick itu kata Halloo(Kata Pertama) (^_<)...Nahh setelah sesuatu nya udahan ayokk cepet klick tombol next kita ngejar waktu 6 menit nyaaa ／(≧ x ≦)＼",
  "Nahh gimana tadi merdu kann???／(＞×＜)＼ hahahahaa, Maaf yhh cuman segini tapi tian ngejar waktu juga karena yhh susah bikin ini teh mumet kalo ingin yang lebih mah ／(v x v)＼, Lovee youu Dewii....ayokk klick next aja tapi yh kalo gak ada apa mah dieum aja tunggu yh sampe 6 menit baru nanti muncul sendirii jadii tangan nya harap dieum dulu yhh nunggu aja perhatiin ini cuman 6 menit kokk....kalo gak sesuai perkataan tian nanti auto gagal lohh ini nyaa ／(=⌒x⌒=)＼, Nahh kalo ada sesuatu yang muncul coba klick aja gambar nya okeehh ／(^ × ^)＼, Awas loh terharu apalagi sampe nangiss ／(＞×＜)＼...Nanti boleh yhh cerita gimana reaksinya liat ini :)",
];
let currentIndex = 0;

const sentenceElement = document.getElementById("sentence");
const nextButton = document.getElementById("nextButton");
const contentContainer = document.getElementById("container");

function showNextSentence() {
  if (currentIndex < sentences.length) {
    sentenceElement.textContent = sentences[currentIndex];
    currentIndex++;
  } else {
    sentenceElement.hidden = true;
    nextButton.disabled = true;
    nextButton.hidden = true;
    contentContainer.removeAttribute("hidden"); // Menghapus atribut 'hidden' untuk menampilkan konten selanjutnya
  }
}

// button

const button = document.querySelector(".button");
      button.addEventListener("click", (e) => {
        e.preventDefault;
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
        }, 200);
      });
