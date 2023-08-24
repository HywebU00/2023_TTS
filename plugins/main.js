// 開啟畫面動態效果
new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true, // default
}).init();

//首頁
(function () {
  if ($('.indexMain').length > 0) {
    $('.suppliersBox .bottomBox .productsList').append('<div class="control"><div class="count"></div></div>');

    $('.banner').slick({
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button" title="Previous"><svg><use xlink:href="#arrow3" /></svg></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button" title="Next"><svg><use xlink:href="#arrow3" /></svg></button>',
    });

    let tab = document.querySelectorAll('.tab');

    tab?.forEach((tabItem, index) => {
      tabItem.classList.add(`tab${index}`);
      let barItem = tabItem.querySelectorAll('.tabBar .item button');
      barItem.forEach((item, i) => {
        item.dataset.list = i;
      });

      $(`.tab${index} .tabBar .listBox`).slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        appendArrows: $(`.tab${index} .tabBar`),
        prevArrow: '<button class="slick-prev" id="test" aria-label="Previous" type="button" title="Previous"><svg><use xlink:href="#arrow3" /></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button" title="Next"><svg><use xlink:href="#arrow3" /></svg></button>',
      });

      let tabListContent = document.querySelectorAll(`.tab${index} .tabListContent`);
      tabListContent.forEach((list, i) => {
        list.classList.add(`tabListContent${i}`);

        $(`.tab${index} .tabListContent${i} > .sliderListBox`).slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          prevArrow: '<button class="slick-prev" id="test" aria-label="Previous" type="button" title="Previous"><svg><use xlink:href="#arrow3" /></svg></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button" title="Next"><svg><use xlink:href="#arrow3" /></svg></button>',
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1.5,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });

      let bar = document.querySelectorAll(`.tab${index} .tabBar .item`);
      let tabBox = document.querySelectorAll(`.tab${index} .tabListContent`);
      let tabContentBox = document.querySelector(`.tab${index} .tabListContentBox`);

      bar?.forEach((item, itemIndex) => {
        item.addEventListener('click', function (e) {
          const checkList = e.target.dataset.list;
          let siblings = [...item.parentNode.children].filter((child) => child !== item);
          siblings.forEach((v, i) => {
            v.classList.remove('active');
          });
          tabBox?.forEach((v, i) => {
            v.classList.remove('active');
          });
          this.classList.add('active');
          tabBox[checkList]?.classList.add('active');
          $(`.tab${index} .tabListContent${checkList} > .sliderListBox`).slick('refresh');
        });
      });

      let suppliersItems = document.querySelectorAll('.suppliersBox .bottomBox');
      suppliersItems?.forEach((item, i) => {
        item.classList.add(`suppliers${i}`);

        $(`.tab${index} .suppliers${i} .sliderListBox`).slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          appendArrows: $(`.tab${index} .suppliers${i} .control`),
          prevArrow: '<button class="slick-prev" id="test" aria-label="Previous" type="button" title="Previous"><svg><use xlink:href="#arrow3" /></svg></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button" title="Next"><svg><use xlink:href="#arrow3" /></svg></button>',
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });

        let $status = $(`.tab${index} .suppliers${i} .control .count`);
        let $slickElement = $(`.tab${index} .suppliers${i} .sliderListBox`);
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          let i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
        });
      });
    });

    $('.suppliersBox .listBox .item .topBox').on('click', function () {
      const display = $(this).siblings('.bottomBox').css('display');

      $(this).parents('.listBox').find('.bottomBox').not($(this).siblings('.bottomBox')).off().slideUp('fast');
      $(this).parents('.listBox').find('.item').not($(this).parent('.item')).removeClass('active');

      if (display === 'none') {
        $(this).parent('.item').addClass('active');
        $(this).siblings('.bottomBox').css('display', 'block');
        $(this).siblings('.bottomBox').find('.sliderListBox').slick('refresh');
        let height = $(this).siblings('.bottomBox').outerHeight();
        $(this).siblings('.bottomBox').css('height', 0);
        $(this).siblings('.bottomBox').outerHeight();
        $(this).siblings('.bottomBox').css('transitionProperty', 'height');
        $(this).siblings('.bottomBox').css('transitionDuration', `300ms`);
        $(this).siblings('.bottomBox').css('height', height);

        setTimeout(() => {
          $(this).siblings('.bottomBox').attr('style', null);
          $(this).siblings('.bottomBox').css('display', 'block');
        }, 350);
      } else {
        $(this).parent('.item').removeClass('active');
        const height = $(this).siblings('.bottomBox').outerHeight();
        $(this).siblings('.bottomBox').css('height', height);
        $(this).siblings('.bottomBox').outerHeight();
        $(this).siblings('.bottomBox').css('transitionProperty', 'height');
        $(this).siblings('.bottomBox').css('transitionDuration', `300ms`);
        $(this).siblings('.bottomBox').css('height', 0);

        setTimeout(() => {
          $(this).siblings('.bottomBox').attr('style', null);
        }, 350);
      }
    });
  }
})();

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
  const header = document.querySelector('header');
  let headerHeight = header.offsetHeight;

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    mobileBtn.classList.remove('active');
    body.classList.toggle('searchOpen');
    body.classList.remove('menuOpen');
    headerHeight = header.offsetHeight;
    searchInput.style.top = `${headerHeight}px`;
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

  const observer = new ResizeObserver(function (entries) {
    if (entries[0].contentRect.width === 1000) {
      mobileBtn.classList.remove('active');
      searchInput.classList.remove('active');
      body.classList.remove('menuOpen');
      body.classList.remove('searchOpen');
    } else {
      mobileBtn.classList.remove('active');
      searchInput.classList.remove('active');
      body.classList.remove('menuOpen');
      body.classList.remove('searchOpen');
    }
  });
  observer.observe(body);

  const searchTop = () => {
    headerHeight = header.offsetHeight;
    searchInput.style.top = `${headerHeight}px`;
    if (window.scrollY === 0) {
      setTimeout(() => {
        headerHeight = header.offsetHeight;
        searchInput.style.top = `${headerHeight}px`;
      }, 300);
    }
  };
  window.addEventListener('scroll', searchTop);
  window.addEventListener('resize', searchTop);
  window.addEventListener('load', searchTop);
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

$(function () {
  $('.mainMenu li').has('ul').addClass('nextLv').append('<span class="toggleBtn"></span>');

  $('.nextLv').hover(
    function () {
      if ($(window).outerWidth() > 1000) {
        $(this).children('ul').stop().off().slideDown('fast');
        $(this).addClass('active');
      }
    },
    function () {
      if ($(window).outerWidth() > 1000) {
        $(this).children('ul').stop().off().slideUp('fast');
        $(this).removeClass('active');
      }
    }
  );
  $('.nextLv a').on('click', function () {
    if ($(window).outerWidth() <= 1000 && $(this).attr('href') === '#') {
      $(this).siblings('.toggleBtn').trigger('click');
    }
  });
  $('.nextLv .toggleBtn').on('click', function () {
    $(this).parents('li').siblings('li').not($(this).parents('li')).children('ul').slideUp('fast');
    $(this).siblings('ul').stop().slideToggle('fast');
    $(this).parent('li').toggleClass('active');
  });
});

$(window).on('load resize', function () {
  $('.mainMenu li').removeClass('active');
  $('.mainMenu ul').attr('style', null);
});

$(function () {
  $('.btn-fatfooter').click(function (e) {
    $(this)
      .parent('.container')
      .find('nav>ul>li>ul')
      .stop(true, true)
      .slideToggle(function () {
        if ($(this).is(':visible')) {
          $('.btn-fatfooter').html('收合/CLOSE');
          $('.btn-fatfooter').attr('name', '收合選單/CLOSE');
        } else {
          $('.btn-fatfooter').html('展開/OPEN');
          $('.btn-fatfooter').attr('name', '展開選單/OPEN');
        }
      });
    $(this).stop(true, true).toggleClass('close');
  });
});
(function () {
  let goTopBtn = document.querySelector('.goTop');

  window.addEventListener('scroll', function () {
    let windowScrollTop = document.documentElement.scrollTop;
    if (windowScrollTop >= 200) {
      goTopBtn.style.cssText = 'opacity:1';
    } else {
      goTopBtn.style.cssText = 'opacity:0';
    }
  });
  goTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
// let slideWrapper = $('.bigPic .listBox');
// let lazyCounter = 0;

// function postMessageToPlayer(player, command) {
//   if (player == null || command == null) return;
//   player.contentWindow.postMessage(JSON.stringify(command), '*');
// }

// function playPauseVideo(slick, control) {
//   let currentSlide = slick.find('.slick-current .item');
//   let slideType = currentSlide.attr('class').split(' ')[1];
//   let player = currentSlide.find('iframe').get(0);
//   let startTime = currentSlide.data('video-start');

//   if (slideType === 'youtube') {
//     switch (control) {
//       case 'play':
//         postMessageToPlayer(player, {
//           event: 'command',
//           func: 'mute',
//         });
//         postMessageToPlayer(player, {
//           event: 'command',
//           func: 'playVideo',
//         });
//         break;
//       case 'pause':
//         postMessageToPlayer(player, {
//           event: 'command',
//           func: 'pauseVideo',
//         });
//         break;
//     }
//   }
// }

// slideWrapper.on('init', function (slick) {
//   slick = $(slick.currentTarget);
//   setTimeout(function () {
//     playPauseVideo(slick, 'play');
//   }, 1000);
// });
// slideWrapper.on('beforeChange', function (event, slick) {
//   slick = $(slick.$slider);
//   playPauseVideo(slick, 'pause');
// });
// slideWrapper.on('afterChange', function (event, slick) {
//   slick = $(slick.$slider);
//   playPauseVideo(slick, 'play');
// });

$(function () {
  $('.language a').on('click', function () {
    $(this).siblings('ul').slideToggle('fast');
  });
});
