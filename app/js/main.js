$(function () {
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px" viewBox="0 0 9 15" version="1.1"><g><path d="M 1.210938 6.835938 C 0.847656 7.203125 0.847656 7.796875 1.210938 8.164062 L 5.898438 12.851562 C 6.265625 13.21875 6.859375 13.21875 7.226562 12.851562 C 7.59375 12.484375 7.59375 11.890625 7.226562 11.523438 L 3.203125 7.5 L 7.226562 3.476562 C 7.589844 3.109375 7.589844 2.515625 7.226562 2.148438 C 6.859375 1.78125 6.265625 1.78125 5.898438 2.148438 Z M 1.210938 6.835938 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-one__item-num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px"viewBox="0 0 17 16" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.566406 0.5625 C 9.40625 0.21875 9.066406 0 8.695312 0 C 8.324219 0 7.988281 0.21875 7.828125 0.5625 L 5.886719 4.695312 L 1.550781 5.359375 C 1.1875 5.414062 0.886719 5.679688 0.777344 6.039062 C 0.664062 6.398438 0.753906 6.792969 1.015625 7.058594 L 4.160156 10.28125 L 3.417969 14.835938 C 3.355469 15.210938 3.507812 15.589844 3.804688 15.8125 C 4.105469 16.035156 4.5 16.0625 4.828125 15.882812 L 8.699219 13.742188 L 12.570312 15.882812 C 12.898438 16.0625 13.292969 16.039062 13.59375 15.8125 C 13.890625 15.585938 14.042969 15.210938 13.980469 14.835938 L 13.234375 10.28125 L 16.382812 7.058594 C 16.640625 6.792969 16.734375 6.398438 16.621094 6.039062 C 16.503906 5.679688 16.207031 5.414062 15.84375 5.359375 L 11.507812 4.695312 Z M 9.566406 0.5625 " /></g> </svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);


});
Fancybox.bind("[data-fancybox]", {

});
