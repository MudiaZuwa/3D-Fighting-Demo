import "./modulepreload-polyfill-3cfb730f.js";
const y = document.getElementById("Single"),
  b = document.getElementById("Multi"),
  w = document.getElementById("Quit");
document.getElementById("backgroundAudio");
const e = document.getElementById("miscAudio");
var d;
let l = [],
  o = 2,
  c = 0,
  i;
window.onload = () => {
  s(),
    localStorage.removeItem("Controllers"),
    localStorage.removeItem("Characters"),
    localStorage.removeItem("Mode"),
    addEventListener("keydown", (a) => {
      switch (a.keyCode) {
        case 74:
          (e.currentTime = 0),
            (e.src = "./resources/Audios/menu-click-89198.mp3"),
            e.play(),
            S();
          break;
        case 65:
          o > 1 &&
            (o--,
            s(),
            (e.currentTime = 0),
            (e.src = "./resources/Audios/menu-button-88360.mp3"),
            e.play());
          break;
        case 37:
          o > 1 &&
            (o--,
            s(),
            (e.currentTime = 0),
            (e.src = "./resources/Audios/menu-button-88360.mp3"),
            e.play());
          break;
        case 68:
          o < 3 &&
            (o++,
            s(),
            (e.currentTime = 0),
            (e.src = "./resources/Audios/menu-button-88360.mp3"),
            e.play());
          break;
        case 39:
          o < 3 &&
            (o++,
            s(),
            (e.currentTime = 0),
            (e.src = "./resources/Audios/menu-button-88360.mp3"),
            e.play());
          break;
      }
    }),
    addEventListener("gamepadconnected", (a) => {
      let t = a.gamepad.index;
      l.push(t);
    }),
    addEventListener("gamepaddisconnected", (a) => {
      let t = a.gamepad.index;
      l = l.filter((r) => r !== t);
    }),
    h();
};
function h() {
  c++,
    l.forEach((a) => {
      let t = navigator.getGamepads()[a];
      var r = g(t.axes[0], 0.25),
        n = g(t.axes[9], 0.25);
      if (Math.abs(c - i) > 10 || i === void 0) {
        t.buttons
          .map((p) => p.pressed)
          .forEach((p, f) => {
            if (p)
              switch ((console.log(f), f)) {
                case 1:
                  (Math.abs(c - i) > 10 || i === void 0) && (e.currentTime = 0),
                    (e.src = "./resources/Audios/menu-click-89198.mp3"),
                    e.play(),
                    S();
                  break;
              }
          });
        let u, m;
        if (
          (t.buttons[14] && t.buttons[15]
            ? ((u = t.buttons[14].pressed || (n > 0 && n <= 1)),
              (m = t.buttons[15].pressed || (n < 0 && n > -0.9)))
            : ((u = n > 0 && n <= 1), (m = n < 0 && n > -0.9)),
          r < 0 || u)
        ) {
          (i = c),
            o > 1 &&
              (o--,
              s(),
              (e.currentTime = 0),
              (e.src = "./resources/Audios/menu-button-88360.mp3"),
              e.play());
          return;
        }
        if (r > 0 || m) {
          (i = c),
            o < 3 &&
              (o++,
              s(),
              (e.currentTime = 0),
              (e.src = "./resources/Audios/menu-button-88360.mp3"),
              e.play());
          return;
        }
      }
    }),
    requestAnimationFrame(h);
}
function s() {
  switch (
    ((y.style.textShadow = ""),
    (b.style.textShadow = ""),
    (w.style.textShadow = ""),
    o)
  ) {
    case 1:
      b.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
    case 2:
      y.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
    case 3:
      w.style.textShadow = " 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";
      break;
  }
}
function S() {
  switch (o) {
    case 1:
      (d = "Multi Player"),
        localStorage.setItem("Mode", d),
        setTimeout(() => {
          typeof window.electronAPI < "u"
            ? window.electronAPI.navigateTo("SelectController/index.html")
            : (window.location.pathname = "../SelectController/");
        }, 500);
      break;
    case 2:
      (d = "Single Player"),
        localStorage.setItem("Mode", d),
        setTimeout(() => {
          typeof window.electronAPI < "u"
            ? window.electronAPI.navigateTo("SelectController/index.html")
            : (window.location.pathname = "../SelectController/");
        }, 500);
      break;
    case 3:
      typeof app < "u"
        ? app.window.close()
        : alert("Abeg Where Do You Know Your Quitting To?");
      break;
  }
}
function g(a, t, r) {
  return (
    (r = (Math.abs(a) - t) / (1 - t)), r < 0 && (r = 0), r * (a > 0 ? 1 : -1)
  );
}
