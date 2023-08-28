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


  /* --------------- ball ani --------------- */
  $(document).ready(function () {
    $.each($(".ball"), function (index, obj) {
      $(obj).css({
        "animation-timing-function": "linear",
        "animation-name": "bounce",
        "animation-duration": "1s",
        "animation-iteration-count": "0.8",
        "animation-direction": "normal",
        "animation-delay": (0.3 * index) + "s",
        "animation-fill-mode": "forwards",
        "animation-play-state": "running"
      });
    });
  });


  /* --------------- clock --------------- */
  const clock = document.getElementById("clock");

  function getClock() {
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    //number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
    clock.innerText = `${hour} : ${minutes} : ${second}`;
  }

  getClock();
  setInterval(getClock, 1000);


  /* --------------- page --------------- */
  const container = document.querySelectorAll('.container');
  const home = document.querySelector('.container.home');
  const about = document.querySelector('.container.about');
  const gallery = document.querySelector('.container.gallery');
  const skills = document.querySelector('.container.skills');
  const projects = document.querySelector('.container.projects');
  const contact = document.querySelector('.container.contact');
  const mainTitle = document.querySelector('.header .main_title');
  const pathAbo = document.querySelector('.container.about .path');
  const pathSkil = document.querySelector('.container.skills .path');
  const pathPro = document.querySelector('.container.projects .path');
  const pathCon = document.querySelector('.container.contact .path');

  container.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.active')[0].classList.remove('active');
      item.classList.add('active');
    })
  })

  home.addEventListener('click', () => {
    mainTitle.innerHTML = 'Hello, I’m Giyeon !'
  })

  about.addEventListener('click', () => {
    mainTitle.innerHTML = 'About';
  })

  gallery.addEventListener('click', () => {
    mainTitle.innerHTML = 'Gallery';
  })

  skills.addEventListener('click', () => {
    mainTitle.innerHTML = 'Skills';
  })

  projects.addEventListener('click', () => {
    mainTitle.innerHTML = 'Projects';
  })

  contact.addEventListener('click', () => {
    mainTitle.innerHTML = 'Contact';
  })

  document.querySelectorAll('.scroll_content').forEach(sc => {
    ps = new PerfectScrollbar(sc, {
      suppressScrollX: true,
      scrollYMarginOffset: 50,
      wheelSpeed: 1
    })
  });

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


/* --------------- main ani --------------- */
function showTxtA() {
  document.querySelector(".txtA").style.opacity = 1;
}
self.setTimeout("showTxtA()", 2600);

function hideTxtA() {
  document.querySelector(".txtA").style.opacity = 0;
}
self.setTimeout("hideTxtA()", 4800);

function showTxtB() {
  document.querySelector(".txtB h1").style.opacity = "1";
}
self.setTimeout("showTxtB()", 6000);

function showTxtC() {
  document.querySelector(".txtC p").style.opacity = "1";
}
self.setTimeout("showTxtC()", 7500);

function nextAbout() {
  document.querySelector(".container.home .next_notice").style.opacity = "1";
}
self.setTimeout("nextAbout()", 8500);


/* --------------- about scroll --------------- */
$(function () {
  const page = $('.scroll_content')

  page.mousewheel(function (e, delta) {
    if (delta > 0) {
      let prev = $(this).prev().offset().top
      $('.about .container_inner').stop().animate({
        scrollTop: prev
      }, 1000) //위로 올라갈때 스륵하게
    } else if (delta < 0) {
      let next = $(this).next().offset().top
      $('.about .container_inner').stop().animate({
        scrollTop: next
      }, 1000)
    }
  }) //page_mousewheel_event
})


/* --------------- notice --------------- */
const about = document.querySelector('.container.about');
const gallery = document.querySelector('.container.gallery');
const skills = document.querySelector('.container.skills');
const projects = document.querySelector('.container.projects');
const scrollAbo = document.querySelector('.container.about .aboutSD');
const nxtSkills = document.querySelector('.container.gallery .nxtSkills');
const nxtProject = document.querySelector('.container.skills .nxtProject');
const hoverSkill = document.querySelector('.container.skills .hoverSkill');
const nxtContact = document.querySelector('.container.projects .nxtContact');
const aboutInner = document.querySelector('.container.about .container_inner');

about.addEventListener('click', () => {
  scrollAbo.style.opacity = '1';
}, 5000)


aboutInner.addEventListener('scroll', () => {
  if (window.scrollTop < 500) {
    gsap.to(nxtSkills, 0.3, {
      opacity: 0
    })
  } else {
    gsap.to(nxtSkills, 0.3, {
      opacity: 1
    })
  }
}); //topBtn_event

gallery.addEventListener('click', () => {
  nxtSkills.style.opacity = '1';
}, 5000)

skills.addEventListener('click', () => {
  nxtProject.style.opacity = '1';
  hoverSkill.style.opacity = '1';
}, 3000)

projects.addEventListener('click', () => {
  nxtContact.style.opacity = '1';
}, 5000)


/* --------------- skill --------------- */
skills.addEventListener('click', () => {
  let bar1 = new ProgressBar.Circle(HTML, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#EF652A',
    lineCap: 'round',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#EF652A'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar2 = new ProgressBar.Circle(css, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#039BE5',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#039BE5'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar3 = new ProgressBar.Circle(js, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC736',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#FFC736'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar4 = new ProgressBar.Circle(react, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#61DAFB',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#61DAFB'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar5 = new ProgressBar.Circle(scss, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#BE608B',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#BE608B'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar6 = new ProgressBar.Circle(jquery, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#0868AC',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#0868AC'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar7 = new ProgressBar.Circle(bootstrap, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#602cac',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#602cac'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar8 = new ProgressBar.Circle(vscode, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#0877B9',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#0877B9'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar9 = new ProgressBar.Circle(git, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#de4c36',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#de4c36'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar10 = new ProgressBar.Circle(github, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#191919',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#191919'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar11 = new ProgressBar.Circle(parcel, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#c19466',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#c19466'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar12 = new ProgressBar.Circle(nodeJs, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#6fbe4f',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#6fbe4f'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar13 = new ProgressBar.Circle(xd, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#470137',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#470137'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar14 = new ProgressBar.Circle(figma, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FF7262',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#FF7262'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar15 = new ProgressBar.Circle(photoshop, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#31A8FF',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#31A8FF'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  let bar16 = new ProgressBar.Circle(illustrator, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 2000,
    color: '#EB8D00',
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: true
    },
    from: {
      color: '#eee'
    },
    to: {
      color: '#EB8D00'
    },
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
      bar.text.style.color = state.color;
    }
  });

  bar1.animate(0.95);
  bar2.animate(0.95);
  bar3.animate(0.65);
  bar4.animate(0.65);
  bar5.animate(0.95);
  bar6.animate(0.85);
  bar7.animate(0.95);
  bar8.animate(0.95);
  bar9.animate(0.9);
  bar10.animate(0.9);
  bar11.animate(0.9);
  bar12.animate(0.9);
  bar13.animate(1.0);
  bar14.animate(1.0);
  bar15.animate(1.0);
  bar16.animate(1.0);
}, )

/* --------------- skill_hover --------------- */
const html = document.getElementById('HTML');
const css = document.getElementById('css');
const js = document.getElementById('js');
const react = document.getElementById('react');
const scss = document.getElementById('scss');
const jquery = document.getElementById('jquery');
const bootstrap = document.getElementById('bootstrap');
const vscode = document.getElementById('vscode');
const git = document.getElementById('git');
const github = document.getElementById('github');
const parcel = document.getElementById('parcel');
const nodeJs = document.getElementById('nodeJs');
const xd = document.getElementById('xd');
const figma = document.getElementById('figma');
const photoshop = document.getElementById('photoshop');
const illustrator = document.getElementById('illustrator');

const htmlTxt = document.querySelector('.skill_txt .html_txt');
const cssTxt = document.querySelector('.skill_txt .css_txt');
const jsTxt = document.querySelector('.skill_txt .js_txt');
const reactTxt = document.querySelector('.skill_txt .react_txt');
const scssTxt = document.querySelector('.skill_txt .scss_txt');
const jqueryTxt = document.querySelector('.skill_txt .jquery_txt');
const bootTxt = document.querySelector('.skill_txt .bootstrap_txt');
const vscTxt = document.querySelector('.skill_txt .vscode_txt');
const gitTxt = document.querySelector('.skill_txt .git_txt');
const githubTxt = document.querySelector('.skill_txt .github_txt');
const parcelTxt = document.querySelector('.skill_txt .parcel_txt');
const nodelTxt = document.querySelector('.skill_txt .nodeJs_txt');
const xdTxt = document.querySelector('.skill_txt .xd_txt');
const figmaTxt = document.querySelector('.skill_txt .figma_txt');
const photoTxt = document.querySelector('.skill_txt .photo_txt');
const illuTxt = document.querySelector('.skill_txt .illu_txt');


html.addEventListener('mouseover', () => {
  htmlTxt.style.opacity = '1';
})

html.addEventListener('mouseout', () => {
  htmlTxt.style.opacity = '0';
})

css.addEventListener('mouseover', () => {
  cssTxt.style.opacity = '1';
})

css.addEventListener('mouseout', () => {
  cssTxt.style.opacity = '0';
})

js.addEventListener('mouseover', () => {
  jsTxt.style.opacity = '1';
})

js.addEventListener('mouseout', () => {
  jsTxt.style.opacity = '0';
})

react.addEventListener('mouseover', () => {
  reactTxt.style.opacity = '1';
})

react.addEventListener('mouseout', () => {
  reactTxt.style.opacity = '0';
})

scss.addEventListener('mouseover', () => {
  scssTxt.style.opacity = '1';
})

scss.addEventListener('mouseout', () => {
  scssTxt.style.opacity = '0';
})

jquery.addEventListener('mouseover', () => {
  jqueryTxt.style.opacity = '1';
})

jquery.addEventListener('mouseout', () => {
  jqueryTxt.style.opacity = '0';
})

bootstrap.addEventListener('mouseover', () => {
  bootTxt.style.opacity = '1';
})

bootstrap.addEventListener('mouseout', () => {
  bootTxt.style.opacity = '0';
})

vscode.addEventListener('mouseover', () => {
  vscTxt.style.opacity = '1';
})

vscode.addEventListener('mouseout', () => {
  vscTxt.style.opacity = '0';
})

git.addEventListener('mouseover', () => {
  gitTxt.style.opacity = '1';
})

git.addEventListener('mouseout', () => {
  gitTxt.style.opacity = '0';
})

github.addEventListener('mouseover', () => {
  githubTxt.style.opacity = '1';
})

github.addEventListener('mouseout', () => {
  githubTxt.style.opacity = '0';
})

parcel.addEventListener('mouseover', () => {
  parcelTxt.style.opacity = '1';
})

parcel.addEventListener('mouseout', () => {
  parcelTxt.style.opacity = '0';
})

nodeJs.addEventListener('mouseover', () => {
  nodelTxt.style.opacity = '1';
})

nodeJs.addEventListener('mouseout', () => {
  nodelTxt.style.opacity = '0';
})

xd.addEventListener('mouseover', () => {
  xdTxt.style.opacity = '1';
})

xd.addEventListener('mouseout', () => {
  xdTxt.style.opacity = '0';
})

figma.addEventListener('mouseover', () => {
  figmaTxt.style.opacity = '1';
})

figma.addEventListener('mouseout', () => {
  figmaTxt.style.opacity = '0';
})

photoshop.addEventListener('mouseover', () => {
  photoTxt.style.opacity = '1';
})

photoshop.addEventListener('mouseout', () => {
  photoTxt.style.opacity = '0';
})

illustrator.addEventListener('mouseover', () => {
  illuTxt.style.opacity = '1';
})

illustrator.addEventListener('mouseout', () => {
  illuTxt.style.opacity = '0';
})


/* --------------- gallery --------------- */
const portInner = document.querySelector('.container.gallery .container_inner .design_port');
const portInnerImg = document.querySelector('.container.gallery .container_inner .design_port img');
const topBtn = document.querySelector('.container.gallery .container_inner .topBtn');

portInner.addEventListener('scroll', () => {
  if (portInner.scrollTop < 500) {
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  } else {
    gsap.to(topBtn, 0.3, {
      opacity: 1
    })
  }
}); //topBtn_scroll_event

function goingUp() {
  portInner.scrollTop = 0; // For Safari
}//topBtn_click_event


/* --------------- contact --------------- */
(function () {
  emailjs.init('1D37eO2fAV9sq-YWg');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();allery
    // generate a five digit number for the contact_number variable
    this.number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_ssddjea', 'template_0spz8ad', this)
      .then(function (response) {
        console.log('SUCCESS!', response);
        alert('소중한 메일 감사합니다! 빠른 답장드리도록 하겠습니다.');
        window.location.reload();
      }, function (error) {
        console.log('FAILED...', error);
        alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!');
      });
  });
}