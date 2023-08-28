  /* --------------- ball ani --------------- */
  $(document).ready(function () {
    $.each($(".ball"), function (index, obj) {
      $(obj).css({
        "animation-timing-function": "linear",
        "animation-name": "bounce",
        "animation-duration": "1.2s",
        "animation-iteration-count": "1",
        "animation-direction": "normal",
        "animation-delay": (0.5 * index) + "s",
      });
    });
  });



  /* --------------- circleCursor --------------- */
  const docuE = document.documentElement;


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



    /* --------------- clock --------------- */
    const clock = document.getElementById("clock");
    const today = document.getElementById("today");

    function getClock() {
      let date = new Date();
      let hour = String(date.getHours()).padStart(2, "0");
      let minutes = String(date.getMinutes()).padStart(2, "0");
      let second = String(date.getSeconds()).padStart(2, "0");
      //number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
      clock.innerText = `${hour}:${minutes}:${second}`;
    }

    getClock();
    setInterval(getClock, 1000);

    function getDate() {
      let date = new Date();
      let year = String(date.getFullYear());
      let month = String(date.getMonth() + 1);
      let day = date.getDate().toString().padStart(2, '0');
      //number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
      today.innerText = `${year}.${month}.${day}`;
    }

    getDate();
    setInterval(getDate, 1000);



    /* function startBlink() {
      if (blink) {
        setInterval(doBlink(), 350);
      }
    }
    window.onload = startBlink; */


    /* --------------- page --------------- */
    const container = document.querySelectorAll('.container');
    const about = document.getElementById('.about');
    const skills = document.getElementById('.skills');
    const projects = document.getElementById('.projects');
    const contact = document.getElementById('.contact');
    const path = document.querySelector('.about .path');
    const pathSkil = document.querySelector('.skills .path');
    const pathPro = document.querySelector('.projects .path');
    const pathCon = document.querySelector('.contact .path');

    container.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.active')[0].classList.remove('active');
        item.classList.add('active');
        path.style.display = 'block';
      })
    })

    /*  about.addEventListener('click', () => {
       path.style.display = 'block';
     }) */







    /*     const container = document.querySelectorAll('.container');
        const about = document.getElementById('.about');
        const skills = document.getElementById('.skills');
        const projects = document.getElementById('.projects');
        const contact = document.getElementById('.contact');
        const pathAbo = document.querySelector('.about .path');
        const pathSkil = document.querySelector('.skills .path');
        const pathPro = document.querySelector('.projects .path');
        const pathCon = document.querySelector('.contact .path');

        container.forEach(item => {
          item.addEventListener('click', () => {
            document.querySelectorAll('.active')[0].classList.remove('active');
            item.classList.add('active');
          });
        });

        about.addEventListener('click', () => {
          pathAbo.style.display = 'block';
        });

        skills.addEventListener('click', () => {
          pathAbo.style.display = 'none';
          pathSkil.style.display = 'block';
        });

        projects.addEventListener('click', () => {
          pathSkil.style.display = 'none';
          pathPro.style.display = 'block';
        });

        contact.addEventListener('click', () => {
          pathPro.style.display = 'none';
          pathCon.style.display = 'block';
        });
     */




    /* document.querySelectorAll('.scroll_content').forEach(sc => {
      ps = new PerfectScrollbar(sc, {
        suppressScrollX: true,
        scrollYMarginOffset: 50,
        wheelSpeed: 1
      })
    }); */

    window.addEventListener("resize", () => {
      vh = window.innerHeight;
      vw = window.innerWidth;

      document.body.classList.add("no-transition");

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");
      }, 400);
    });
  });

  /* --------------- home --------------- */
  /* txt --------------- */

  function showTxtA() {
    document.querySelector(".txtA").style.opacity = "1";
  }
  self.setTimeout("showTxtA()", 4000); // 초 지정

  function hideTxtA() {
    document.querySelector(".txtA").style.opacity = "0";
  }
  self.setTimeout("hideTxtA()", 4000); // 초 지정

  function showTxtB() {
    document.querySelector(".txtB h1").style.opacity = "1";
  }
  self.setTimeout("showTxtB()", 4000); // 초 지정