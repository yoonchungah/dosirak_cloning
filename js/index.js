window.onscroll = function () {
  headerChange();
  colorChange();
}

//header 색 변경, 로고 이미지 변경

function headerChange(){
  let header = document.querySelector('header');
  let bammenu = document.querySelectorAll('.btn_nav span');
  if (document.body.scrollTop > 99 || document.documentElement.scrollTop > 99){
    header.classList.add("scroll-header");
    document.getElementById("logo").src = "img/logo.png";
    for(let i = 0; i<bammenu.length; i++){  
      bammenu[i].style.backgroundColor = '#000';
    }
  }  else {
    header.classList.remove("scroll-header");
    document.getElementById("logo").src = "img/logo_white.png";
    for(let i = 0; i<bammenu.length; i++){  
      bammenu[i].style.backgroundColor = '#fff';
    }
  }
}

//nav 색 변경, 메뉴바 언더라인
let navA = document.querySelectorAll('nav>ul>li>a');
let horizontalBar = document.getElementById("horizontal-underline");

function colorChange(){
  if(document.body.scrollTop > 99 || document.documentElement.scrollTop > 99){
    for(let i = 0; i<navA.length; i++){
      navA[i].style.color = '#000';
    }
    horizontalBar.style.backgroundColor = "#000";
  }else{
    for(let i = 0; i<navA.length; i++){
      navA[i].style.color = '#fff';
    }
    horizontalBar.style.backgroundColor = "#fff";
  }
}

function horizontalIndicator(e){
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}
function horizontalIndicator2(e){
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = "0px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

navA.forEach((menu)=>
  menu.addEventListener("mouseenter",(e)=>
  horizontalIndicator(e.currentTarget))
);
navA.forEach((menu)=>
  menu.addEventListener("mouseleave",(e)=>
  horizontalIndicator2(e.currentTarget))
);



//메인 배너 스와이퍼
var swiper = new Swiper(".mySwiper", {
  loop : true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//마우스 올리면 색 변경
let bnrBtn = document.querySelectorAll('.bnr_btn');
let memBers = document.querySelector('.members');

function bgChange1(){
  memBers.addEventListener('mouseenter',()=>{
    memBers.style.backgroundColor = '#16a9ff';
    document.querySelector('.members h3').classList.add('color');
    document.querySelector('.members p').classList.add('color');
    for(i=0; i<bnrBtn.length; i++){
      bnrBtn[0].classList.add('color');
    }
  })
  memBers.addEventListener('mouseleave',()=>{
    memBers.style.backgroundColor = '#eee';
    document.querySelector('.members h3').classList.remove('color');
    document.querySelector('.members p').classList.remove('color');
    for(j=0; j<bnrBtn.length; j++){
      bnrBtn[0].classList.remove('color');
    }
  })
}



let Talk = document.querySelector('.talk');


function bgChange2(){
  Talk.addEventListener('mouseenter',()=>{
    Talk.style.backgroundColor = '#cb3939';
    document.querySelector('.talk h3').classList.add('color');
    document.querySelector('.talk p').classList.add('color');
    for(i=0; i<bnrBtn.length; i++){
      bnrBtn[1].classList.add('color');
    }
  })

  Talk.addEventListener('mouseleave',()=>{
    Talk.style.backgroundColor = '#eee';
    document.querySelector('.talk h3').classList.remove('color');
    document.querySelector('.talk p').classList.remove('color');
    for(j=0; j<bnrBtn.length; j++){
      bnrBtn[1].classList.remove('color');
    }
  })
}

let inSu = document.querySelector('.insu');

function bgChange3(){
  inSu.addEventListener('mouseenter',()=>{
    inSu.style.backgroundColor = '#ffc216';
    document.querySelector('.insu h3').classList.add('color');
    document.querySelector('.insu p').classList.add('color');
    for(i=0; i<bnrBtn.length; i++){
      bnrBtn[2].classList.add('color');
    }
  })
  inSu.addEventListener('mouseleave',()=>{
    inSu.style.backgroundColor = '#eee';
    document.querySelector('.insu h3').classList.remove('color');
    document.querySelector('.insu p').classList.remove('color');
    for(j=0; j<bnrBtn.length; j++){
      bnrBtn[2].classList.remove('color');
    }
  })
  
}


bgChange1();
bgChange2();
bgChange3();