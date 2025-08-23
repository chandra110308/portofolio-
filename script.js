// Init AOS
AOS.init({
  duration: 1000,
  mirror: true
});

// Typed.js
var typed = new Typed('#typed', {
  strings: ["Cyber Security", "Network Engineer", "IT Support"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
  showCursor: true,   // biar hanya 1 cursor
  cursorChar: "|"     // kursor custom (bisa diganti misal "_" atau kosong "")
});
