
var images = [
    "https://tse1.mm.bing.net/th?id=OIP.J9bEyxrDP6uPwQGq-6iYMQHaFj&pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th?id=OIP.BXYbbn0IgAucv82dsHgtzwHaEo&pid=Api&P=0&h=220",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylFvrQp18ryDpL1P9RsGdMa0G2-PJjIKxlvaV0C4k7hW4vcunroGBVkXI9NuPFKSg7yc&usqp=CAU",
    "https://img.lovepik.com/photo/48013/0640.jpg_wh860.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKAzhC8XX3BeHnq2nwyconccO8qa_yyTFyg&s",
  ];
  
  currentIndex = 0;
  
  function next() {

  
    var currentImg = document.getElementById("slider-img");
  
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    currentImg.src = images[currentIndex];
  }
  
  function prev() {
    var currentImg = document.getElementById("slider-img");
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
  
    currentImg.src = images[currentIndex];
  }