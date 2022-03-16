const moon = document.getElementById('moon');
const subtitle = document.getElementById('subtitle');
const title = document.getElementById('title');
const mountainBehind = document.getElementById('behind-mountain');
const mountainMiddle = document.getElementById('middle-mountain');
const mountainFront = document.getElementById('front-mountain');
const floor = document.getElementById('floor');
const cave = document.getElementById('cave');
const hero = document.getElementsByClassName('hero');
const button = document.getElementById('button');
const nav = document.getElementsByClassName('nav')[0];

button.onclick = () => {
  nav.classList.toggle('active');
}

subtitle.style.left = 0;

window.onscroll = () => {
  let value = window.scrollY;
  moon.style.top = value * 1.15 + 'px';
  mountainBehind.style.top = value * 1 +'px';
  mountainMiddle.style.top = value * 0.6 +'px';
  mountainFront.style.top = value * 0 +'px';
  
  title.style.marginTop = value * 0.7 + 'px';
  subtitle.style.left = value * 2 + 'px';
  subtitle.style.marginTop = value * 0.7 + 'px';
  subtitle.style.marginLeft = value * 3 + 'px';
  // subtitle.style.bottom = value * 9 + 'px';
}