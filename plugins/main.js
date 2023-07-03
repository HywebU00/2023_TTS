// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();

//選單黏著
(function () {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  let windowScroll = window.scrollY;

  window.addEventListener('load', sticky);
  window.addEventListener('scroll', sticky);
  function sticky() {
    let headerHeight = header.offsetHeight;
    windowScroll = window.scrollY;
    if (windowScroll > 0) {
      header.classList.add('sticky');
      main.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove('sticky');
      main.removeAttribute('style');
    }
  }
})();

//手機版選單
(function () {
  const searchBtn = document.querySelector('.topSearch .searchBtn');
  const searchInput = document.querySelector('.topSearch .searchInput');
  const searchClose = document.querySelector('.topSearch .close');
  const mobileBtn = document.querySelector('.mobileBtn');
  const menuClose = document.querySelector('.topSearch .close');
  const body = document.querySelector('body');

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    mobileBtn.classList.remove('active');
    body.classList.toggle('searchOpen');
    body.classList.remove('menuOpen');
  });
  searchClose.addEventListener('click', () => {
    searchInput.classList.remove('active');
    mobileBtn.classList.remove('active');
    body.classList.remove('searchOpen');
  });

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    body.classList.toggle('menuOpen');
    searchInput.classList.remove('active');
    body.classList.remove('searchOpen');
  });
})();

//偵測位置
(function () {
  let options = {};

  let callback = (entries, observer) => {
    entries.forEach((item, index) => {
      if (item.isIntersecting) {
        item.target.classList.add('scrollOver');
        // } else {
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  const pic = document.querySelectorAll('.pic');
  pic.forEach((item) => observer.observe(item));
})();

(function () {
  const demoContent = `
    <div class="demoBox">
      <ul>
        <li class="red active" data-color="red"></li>
        <li class="blue" data-color="blue"></li>
        <li class="green" data-color="green"></li>
        <li class="yellow" data-color="yellow"></li>
        <li class="cyan" data-color="cyan"></li>
        <li class="brown" data-color="brown"></li>
        <li class="purple" data-color="purple"></li>
        <li class="gray" data-color="gray"></li>
      </ul>
    </div>`;
  document.write(demoContent);

  const timeCheck = new Date().getTime() + 86400000 * 3;

  // const timeCheck = new Date();
  const cookieCss = document.cookie
    .split('; ')
    .find((row) => row.startsWith('color='))
    ?.split('=')[1];
  const css = document.querySelector('#css');
  const demo = document.querySelectorAll('.demoBox li');

  css.attributes.href.nodeValue = `css/color_${cookieCss || 'red'}.css`;

  demo?.forEach((item, index) => {
    item.classList.remove('active');
    item.addEventListener('click', () => {
      demo.forEach((v) => v.classList.remove('active'));
      item.classList.add('active');
      let color = item.dataset.color;
      document.cookie = `color=${color}; expires=${new Date(timeCheck)}`;
      css.attributes.href.nodeValue = `css/color_${color}.css`;
    });
  });
  const nowActive = document.querySelector(`.${String(cookieCss)}`);
  nowActive?.classList.add('active');
})();
