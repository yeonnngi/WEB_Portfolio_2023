/* --------------- mouse cursor --------------- */
//마우스가 body 안에 움직일때의 이벤트
document.addEventListener('DOMContentLoaded', () => {
  document.body.onmousemove = function (e) {
    const newCursor = document.getElementById("circleCursor");
    let posX = 0;
    let posY = 0;

    //마우스 x,y좌표 저장
    posX = e.clientX + "px";
    posY = e.clientY + "px";

    newCursor.style.left = posX;
    newCursor.style.top = posY;
  }

   /* --------------- IK_modal --------------- */
   $(document).ready(function () {
    $('.ikPro_open').click(function () {
      $('.ik_modal .modal_proposal').fadeIn(0);
    });
    $('.ikPro_close').click(function () {
      $('.ik_modal .modal_proposal').fadeOut(0);
    });
  })

  $(document).ready(function () {
    $('.ikCode_open').click(function () {
      $('.ik_modal .modal_code').fadeIn(0);
    });
    $('.ikCode_close ').click(function () {
      $('.ik_modal .modal_code').fadeOut(0);
    });
  })


  /* --------------- haggen_modal --------------- */
  $(document).ready(function () {
    $('.hdPro_open').click(function () {
      $('.haggen_modal .modal_proposal').fadeIn(0);
    });
    $('.hdPro_close').click(function () {
      $('.haggen_modal .modal_proposal').fadeOut(0);
    });
  })

  $(document).ready(function () {
    $('.hdCode_open').click(function () {
      $('.haggen_modal .modal_code').fadeIn(0);
    });
    $('.hdCode_close').click(function () {
      $('.haggen_modal .modal_code').fadeOut(0);
    });
  })


   /* --------------- react_modal --------------- */
  $(document).ready(function () {
    $('.reactCode_open').click(function () {
      $('.react_modal .modal_code').fadeIn(0);
    });
    $('.reactCode_close ').click(function () {
      $('.react_modal .modal_code').fadeOut(0);
    });
  })


  /* --------------- login_modal --------------- */
  $(document).ready(function () {
    $('.lgProto_open').click(function () {
      $('.login_modal .modal_proposal').fadeIn(0);
    });
    $('.lgProto_close').click(function () {
      $('.login_modal .modal_proposal').fadeOut(0);
    });
  })

  $(document).ready(function () {
    $('.lgCode_open').click(function () {
      $('.login_modal .modal_code').fadeIn(0);
    });
    $('.lgCode_close ').click(function () {
      $('.login_modal .modal_code').fadeOut(0);
    });
  })


  /* --------------- page --------------- */
  $('.modal .code_tab ul li').on('click', function () {
    $('.modal .code_detail').animate({
      scrollTop: 0
    }, 300);
  });

  const ikCodeTab = document.querySelectorAll('.ik_modal .code_tab ul li');
  const ikCodeDetail = document.querySelectorAll('.ik_modal .code_detail ul li');

  const hdCodeTab = document.querySelectorAll('.haggen_modal .code_tab ul li');
  const hdCodeDetail = document.querySelectorAll('.haggen_modal .code_detail ul li');

  const reCodeTab = document.querySelectorAll('.react_modal .code_tab ul li');
  const reCodeDetail = document.querySelectorAll('.react_modal .code_detail ul li');

  const lgCodeTab = document.querySelectorAll('.login_modal .code_tab ul li');
  const lgCodeDetail = document.querySelectorAll('.login_modal .code_detail ul li');

  ikCodeTab.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ikTab_on')[0].classList.remove('ikTab_on');
      tab.classList.add('ikTab_on');
    });
  });

  ikCodeTab.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      ikCodeDetail.forEach((item) => {
        item.classList.remove('ikCode_on');
        ikCodeDetail[i].classList.add('ikCode_on');
      });
    });
  });

  hdCodeTab.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.hdTab_on')[0].classList.remove('hdTab_on');
      tab.classList.add('hdTab_on');
    });
  });

  hdCodeTab.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      hdCodeDetail.forEach((item) => {
        item.classList.remove('hdCode_on');
        hdCodeDetail[i].classList.add('hdCode_on');
      });
    });
  });

  reCodeTab.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.reTab_on')[0].classList.remove('reTab_on');
      tab.classList.add('reTab_on');
    });
  });

  reCodeTab.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      reCodeDetail.forEach((item) => {
        item.classList.remove('reCode_on');
        reCodeDetail[i].classList.add('reCode_on');
      });
    });
  });

  lgCodeTab.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.lgTab_on')[0].classList.remove('lgTab_on');
      tab.classList.add('lgTab_on');
    });
  });

  lgCodeTab.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      lgCodeDetail.forEach((item) => {
        item.classList.remove('lgCode_on');
        lgCodeDetail[i].classList.add('lgCode_on');
      });
    });
  });
});


const proLnb = document.querySelectorAll('.header_box .lnb ul li');
const proDetail = document.querySelectorAll('.content .project');

proLnb.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.li_on')[0].classList.remove('li_on');
    tab.classList.add('li_on');
  });
});

proLnb.forEach((tab, i) => {
  tab.addEventListener('click', function () {
    proDetail.forEach((item) => {
      item.classList.remove('on');
      proDetail[i].classList.add('on');
    });
  });
});