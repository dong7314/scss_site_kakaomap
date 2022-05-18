$(function(){
  /*
  실습
  #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 on class 추가하시오.

  let hrefNum = window.location.href; // 주소 값 확인
  let href1 = hrefNum.split('/');
  let hrefLeng1 = href1.length;
  let href2 = href1[hrefLeng1 - 1].split('.');
  let href = href2[0];

  $('#lnb ul li').each(function(){
    if ( $(this).find('a').text().toLowerCase() == href ) {
      $(this).find('a').addClass('on');
    } else {
      $(this).find('a').removeClass('on');
    }
  });
  */
  /*
  let currentHref = $(location).attr('href').split('/');
  currentHref = currentHref[currentHref.length-1];
  currentHref = currentHref.split('.')[0];

  $('#lnb a').each(function(){
    let matchHref = $(this).attr('href').split('/');
    matchHref = matchHref[matchHref.length-1].split('.');
    matchHref = matchHref[0];
    if ( currentHref == matchHref ) {
      $(this).addClass('on');
    }
  });
  */
  /*
  실습
  location href split 코드에서 공통부분을 함수화 하시오.
  */
  function locationHref(value){
    let valueHref = $(value).attr('href').split('/');
    valueHref = valueHref[valueHref.length-1];
    valueHref = valueHref.split('.')[0];
    return valueHref;
  }

  let currentHref = locationHref(location);
  $('#lnb a').each(function(){
    let matchHref = locationHref(this);
    if ( currentHref == matchHref ) {
      $(this).addClass('on');
    }
  });

  // accordion
  $('.accordion dd:not(:first)').css('display', 'none');
  $('.accordion dl dt').click(function(){
    if( $(('+dd'), this).css('display') == 'none' ) {
      $('dd').slideUp('slow');
      $(('+dd'), this).slideDown('slow');
    }
  });
});
