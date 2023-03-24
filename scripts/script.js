const desktopItem = document.querySelectorAll('.desktop__item');
const desktopBoxes = Array.from(document.querySelectorAll('.desktop__boxes'));
const desktopItemImg = document.querySelectorAll('.desktop__item-img img')
const desktopItemSub = document.querySelectorAll('.desktop__item-sub')

desktopItem.forEach((items) => {
  items.addEventListener('dragstart', dragstart);
  items.addEventListener('dragend', dragend);
})

desktopBoxes.forEach((boxes) => {
  boxes.addEventListener('dragover', dragover)
  boxes.addEventListener('drop', dragdrop)
});

//////////////////*


function dragstart(e) {
  e.target.classList.remove('cell__object')
  e.target.classList.add('object__dragstart2')
  desktopItem.forEach(element => {
    element.classList.remove('object__dragstart-active')
  });
}
function dragend(e) {
  e.target.classList.add('object__dragstart-active')
  e.target.classList.add('cell__object2')
  e.target.classList.remove('object__dragstart2')
}
function dragover(e) {
  e.preventDefault();
}
function dragdrop(e) {
  desktopItem.forEach((items) => {
    if (items.classList.contains('object__dragstart2')) {
      e.target.append(items);
    }
  })
}

document.body.addEventListener('click', function () {
  desktopItem.forEach((items) => {
    items.classList.remove('object__dragstart-active')
  })
  desktopItemSub.forEach((items2) => {
    items2.classList.remove('sub__focus')
    items2.removeAttribute('contenteditable')
  })
})

desktopItem.forEach((items) => {
  items.addEventListener('click', function (e) {
    e.stopPropagation();
    desktopItem.forEach((items_1) => {
      items_1.classList.remove('object__dragstart-active')
    })
    e.target.classList.add('object__dragstart-active')
  })
})


desktopItemImg.forEach((items3) => {
  items3.addEventListener('click', function (e) {
    e.stopPropagation();
  })
})


desktopItemSub.forEach((items2) => {
  items2.addEventListener('click', function (e) {
    e.stopPropagation();
    desktopItemSub.forEach((items2_2) => {
      items2_2.removeAttribute('contenteditable', 'true')
      items2_2.classList.remove('sub__focus')
    })
    e.target.setAttribute('contenteditable', 'true')
    e.target.classList.add('sub__focus')

    if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(items2);
      selection.removeAllRanges();
      selection.addRange(range);
    }

  })

  document.addEventListener('keydown', (event) => {
    desktopItemSub.forEach((items2) => {
      if (event.key == 'Enter') {
        items2.classList.remove('sub__focus')
        items2.removeAttribute('contenteditable')
      }
    })
  })
})


//////////////// ? footer functionality

const menuBtn = document.querySelector('.windows-icon');
const menuActive = document.querySelector('.menu__active');
const powerOffInterface = document.querySelector('.power__container')
const powerOff = document.querySelector('.power-off')
const menuLeft = document.querySelector('.menu__left')
const menuHidden = document.querySelectorAll('.menu-hidden')
const menuLeftItems = document.querySelectorAll('.menu-left-js')
const menuLeftTopItem = document.querySelector('.menu__left-items1')
const powerSleep = document.querySelector('.power__sleep');
const powerDown = document.querySelector('.power__down');
const powerDownAnimation = document.querySelector('.shut-down-container');
const powerDownAnimationCircle = document.querySelector('.shut-down-animation');
const powerDownAnimationTxt = document.querySelector('.shut__down-txt');
const powerRestart = document.querySelector('.power__restart');
const powerRestartAnimation = document.querySelector('.restart-container');
const powerRestartAnimationCircle = document.querySelector('.restart-animation');
const powerRestartAnimationTxt = document.querySelector('.restart-txt');
const turnOnAnimation = document.querySelector('.turn-on-container');
const turnOnAnimationCircle = document.querySelector('.turn-on-animation');
const turnOnAnimationTxt2 = document.querySelector('.turn-on-txt2');
const turnOnAnimationTxt = document.querySelector('.turn-on-txt');
const WindowsStartPass = document.querySelector('.windows-start2-input');
const WindowsStartPassEye = document.querySelector('.windows-start2-eye');
const windowsStartTime = document.querySelector('.windows-start-time');
const windowsStartDate = document.querySelector('.windows-start-date');
const windowsStartInterface1 = document.querySelector('.windows-start1');
const windowsStartInterface2 = document.querySelector('.windows-start2');
const windowsStartInterface1WidgetContainer = document.querySelector('.widget-container');
const windowsStartInterface1DateContainer = document.querySelector('.widows-date-conatiner');
const windowsStartInterface2Btn = document.querySelector('.windows-start2-btn');
const windowsStartInputUnderTxt = document.querySelector('.windows-start2-pass');
const windowsStartInputUnderTxt2 = document.querySelector('.windows-start2-reset');
const windowsStartInterface2Btn2 = document.querySelector('.windows-start2-btn2');


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = weekday[new Date().getDay()];
let month = months[new Date().getMonth()];

windowsStartDate.innerHTML

let time = setInterval(windowsStartTime.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}` ,60000)

let date = windowsStartDate.innerHTML = `${day}, ${month} ${new Date().getDate()}`

menuBtn.addEventListener('click', menuClick)

function menuClick() {
  menuActive.classList.toggle('menu__animation1');
  menuBtn.classList.toggle('menu__active-bgcolor');
  if (!menuBtn.classList.contains('menu__active-bgcolor')) {
    powerOffInterface.classList.remove('power-off-active')
    menuLeft.classList.remove('menu__left-hover')
    menuHidden.forEach((menuItems) => {
      menuItems.classList.remove('menu-hidden-hover')
    })
    menuLeftItems.forEach((menuLeftItems) => {
      menuLeftItems.classList.remove('power-off-bgtransparent')
    })
    menuLeftTopItem.classList.remove('power-off-bgtransparent')
  }
}


powerOff.addEventListener('click', powerOffClick)

function powerOffClick() {
  powerOffInterface.classList.toggle('power-off-active');
  menuLeft.classList.toggle('menu__left-hover')
  menuHidden.forEach((menuItems) => {
    menuItems.classList.toggle('menu-hidden-hover')
  })
  menuLeftItems.forEach((menuLeftItems) => {
    menuLeftItems.classList.toggle('power-off-bgtransparent')
  })
  menuLeftTopItem.classList.toggle('power-off-bgtransparent')
}


powerSleep.addEventListener('click', powerSleepEffect);

function powerSleepEffect() {
  document.body.classList.add('power__sleep-active')
}

document.addEventListener('keydown', documentSpace);
function documentSpace(event) {
  if (event.code == 'Space' && document.body.classList.contains('power__sleep-active')) {
    document.body.classList.remove('power__sleep-active')
    powerOffInterface.classList.remove('power-off-active')
    menuActive.classList.remove('menu__animation1');
    menuBtn.classList.remove('menu__active-bgcolor');
    menuLeft.classList.remove('menu__left-hover')
    menuHidden.forEach((menuItems) => {
      menuItems.classList.remove('menu-hidden-hover')
    })
    menuLeftItems.forEach((menuLeftItems) => {
      menuLeftItems.classList.remove('power-off-bgtransparent')
    })
    menuLeftTopItem.classList.remove('power-off-bgtransparent')
  }
}

[powerOffInterface, powerOff, menuBtn].forEach(el => el.addEventListener('click', powerOffInterfaceRemoveStop))

function powerOffInterfaceRemoveStop(e) {
  e.stopPropagation()
}


document.addEventListener('click', powerOffInterfaceRemove)

function powerOffInterfaceRemove() {
  powerOffInterface.classList.remove('power-off-active')
  menuLeft.classList.remove('menu__left-hover')
  menuHidden.forEach((menuItems) => {
    menuItems.classList.remove('menu-hidden-hover')
  })
  menuLeftItems.forEach((menuLeftItems) => {
    menuLeftItems.classList.remove('power-off-bgtransparent')
  })
}

if (!powerOffInterface.classList.contains('power-off-active')) {
  menuActive.addEventListener('click', menuActiveStop)
}
document.body.addEventListener('click', () => {
  if (!powerOffInterface.classList.contains('power-off-active')) {
    menuActive.classList.remove('menu__animation1')
    menuBtn.classList.remove('menu__active-bgcolor')
  }
})

function menuActiveStop(e) {
  powerOffInterface.classList.remove('power-off-active')
  menuHidden.forEach((menuItems) => {
    menuItems.classList.remove('menu-hidden-hover')
  })
  menuLeft.classList.remove('menu__left-hover')
  menuLeftItems.forEach((menuLeftItems) => {
    menuLeftItems.classList.remove('power-off-bgtransparent')
  })
  menuLeftTopItem.classList.remove('power-off-bgtransparent')
  e.stopPropagation()
}

powerDown.addEventListener('click', powerDownEffect)

function powerDownEffect() {
  powerDownAnimation.classList.add('shut-down-effect')
  powerDownAnimationCircle.classList.add('shut-down-effect2')
  powerDownAnimationTxt.classList.add('shut-down-effect2')
}

powerRestart.addEventListener('click', powerRestartEffect)

function powerRestartEffect() {
  powerRestartAnimation.classList.add('restart-effect')
  powerRestartAnimationCircle.classList.add('restart-effect2')
  powerRestartAnimationTxt.classList.add('restart-effect2')
  setTimeout(() => {
    turnOnAnimation.classList.add('restart-effect3');
    powerRestartAnimation.classList.remove('restart-effect')
    powerRestartAnimationCircle.classList.remove('restart-effect2')
    powerRestartAnimationTxt.classList.remove('restart-effect2')
  }, 10000);
  setTimeout(() => {
    turnOnAnimationTxt2.classList.add('restart-effect5')
  }, 12000);
  setTimeout(() => {
    turnOnAnimationCircle.classList.add('restart-effect4')
    turnOnAnimationTxt2.classList.add('restart-effect7')
    turnOnAnimation.classList.add('restart-effect6')
  }, 14000);
  setTimeout(() => {
    turnOnAnimationCircle.classList.add('restart-effect7')
    turnOnAnimationTxt.classList.add('restart-effect7')
  }, 19000);
  setTimeout(() => {
    turnOnAnimation.classList.add('restart-effect8')
  }, 21000);
  setTimeout(() => {
    turnOnAnimation.classList.add('restart-effect9')
  }, 22000);
  setTimeout(() => {
    turnOnAnimation.classList.add('restart-effect7')
    powerOffInterface.classList.remove('power-off-active')
    menuActive.classList.remove('menu__animation1');
    menuBtn.classList.remove('menu__active-bgcolor');
    menuLeft.classList.remove('menu__left-hover')
    menuHidden.forEach((menuItems) => {
      menuItems.classList.remove('menu-hidden-hover')
    })
    menuLeftItems.forEach((menuLeftItems) => {
      menuLeftItems.classList.remove('power-off-bgtransparent')
    })
    menuLeftTopItem.classList.remove('power-off-bgtransparent')
  }, 22500);
  setTimeout(() => {
    windowsStartInterface1.classList.add('windows-start-effect')
  }, 22600);
}

document.body.addEventListener('click', windowsStart1ToStart2)
document.body.addEventListener('keydown', windowsStart1ToStart2)

function windowsStart1ToStart2(){
  if(windowsStartInterface1.classList.contains('windows-start-effect')){
    windowsStartInterface1WidgetContainer.classList.add('windows-start-effect2')
    windowsStartInterface1DateContainer.classList.add('windows-start-effect2')
    setTimeout(() => {
      windowsStartInterface2.classList.add('windows-start-effect')
    }, 900);
  }
}
// ! search
WindowsStartPass.addEventListener('input', WindowsStartPassValid)
WindowsStartPass.addEventListener('click', () => { WindowsStartPass.select() })

function WindowsStartPassValid() {
  if (WindowsStartPass.value.length > 0) {
    WindowsStartPassEye.classList.add('windows-start2-effect')
  } else {
    WindowsStartPassEye.classList.remove('windows-start2-effect')
  }
}
WindowsStartPassEye.addEventListener('mousedown', WindowsStartPassEyePress)

function WindowsStartPassEyePress(event) {
  if (event.button == 0) {
    WindowsStartPass.type = 'text'
    WindowsStartPassEye.classList.add('windows-start2-effect2')
    WindowsStartPass.focus()
    WindowsStartPass.classList.add('windows-start2-effect3')
    WindowsStartPass.style.backgroundColor = '#FFF'
    WindowsStartPassEye.classList.remove('windows-start2-effect4')
  }
}
WindowsStartPassEye.addEventListener('mouseup', () => {
  WindowsStartPass.type = 'password'
  WindowsStartPassEye.classList.remove('windows-start2-effect2')
  WindowsStartPass.focus()
  WindowsStartPass.classList.add('windows-start2-effect3')
  WindowsStartPass.style.backgroundColor = '#FFF'
  WindowsStartPassEye.classList.add('windows-start2-effect4')
})

WindowsStartPassEye.addEventListener('mouseenter', () => {WindowsStartPassEye.classList.add('windows-start2-effect4')})

WindowsStartPassEye.addEventListener('mouseleave', () => {
  WindowsStartPass.type = 'password'
  WindowsStartPassEye.classList.remove('windows-start2-effect2')
  WindowsStartPass.focus()
  WindowsStartPassEye.classList.remove('windows-start2-effect4')
})

document.body.addEventListener('click', () => {
  if(WindowsStartPass.style.backgroundColor !== '#FFF'){
    WindowsStartPass.style.backgroundColor = '#FFF'
    WindowsStartPass.classList.add('windows-start2-effect3')
    WindowsStartPass.focus()
    WindowsStartPass.select()
  }
})

windowsStartInterface2Btn.addEventListener('click', windowsEnter)

function windowsEnter(){
  if(WindowsStartPass.value  === 'qwerty'){
    windowsStartInterface1.classList.remove('windows-start-effect')
    windowsStartInterface2.classList.add('windows-start-effect3')
    setTimeout(() => {
    windowsStartInterface2.classList.remove('windows-start-effect')
    }, 2000);
    // setTimeout(() => {
    //  location.reload()
    // }, 2200);
  } else{
    WindowsStartPass.classList.add('restart-effect7')
    windowsStartInterface2Btn.classList.add('restart-effect7')
    WindowsStartPassEye.classList.add('restart-effect7')
    windowsStartInputUnderTxt.innerHTML = 'The password is incorrect. Try again.'
    windowsStartInputUnderTxt2.classList.add('restart-effect7')
    windowsStartInterface2Btn2.classList.add('windows-start-effect')
  }
}

windowsStartInterface2Btn2.addEventListener('click', windowsFalsePassOk)

function windowsFalsePassOk(){
  windowsStartInterface2Btn2.classList.remove('windows-start-effect')
  windowsStartInputUnderTxt2.classList.remove('restart-effect7')
  windowsStartInputUnderTxt.innerHTML = 'Password hint: qwerty'
  WindowsStartPass.classList.remove('restart-effect7')
  windowsStartInterface2Btn.classList.remove('restart-effect7')
  WindowsStartPassEye.classList.remove('restart-effect7')
}