import"./modulepreload-polyfill-3cfb730f.js";let a;const t={player1:null,player2:null},u=document.getElementById("backgroundAudio"),i=document.getElementById("miscAudio");let l="player1",r=[],c=0,s;window.addEventListener("load",()=>{a=localStorage.getItem("Mode"),a===null&&(typeof window.electronAPI<"u"?window.electronAPI.navigateTo("index.html"):window.location.pathname="../"),a==="Single Player"&&(document.getElementsByClassName("player")[1].style.display="none",document.getElementsByClassName("text")[1].style.display="none"),document.getElementsByClassName("body")[0].style.display="flex",u.play(),addEventListener("keydown",e=>{switch(e.keyCode){case 74:t.player1!=="Keyboard"&&t.player2!=="Keyboard"&&y("Keyboard");break;case 76:if(l==="player2"){let n="player1";t[n]==="Keyboard"?(l=n,t[n]=null,document.getElementsByClassName("controller")[0].style.opacity=0,i.currentTime=0,i.play()):typeof window.electronAPI<"u"?window.electronAPI.navigateTo("index.html"):location.pathname="../"}else typeof window.electronAPI<"u"?window.electronAPI.navigateTo("index.html"):location.pathname="../"}}),addEventListener("gamepadconnected",e=>{let n=e.gamepad.index;r.push(n)}),addEventListener("gamepaddisconnected",e=>{let n=e.gamepad.index;r=r.filter(o=>o!==n)}),m()});function m(){c++,r.forEach(e=>{navigator.getGamepads()[e].buttons.map(o=>o.pressed).forEach((o,p)=>{if(o)switch(p){case 1:t.player1!==e&&t.player2!==e&&(Math.abs(c-s)>10||s===void 0)&&y(e);break;case 2:if(l==="player2"&&(Math.abs(c-s)>10||s===void 0)){let d="player1";t[d]===e?(l=d,t[d]=null,document.getElementsByClassName("controller")[0].style.opacity=0):typeof window.electronAPI<"u"?window.electronAPI.navigateTo("index.html"):location.pathname="../"}else typeof window.electronAPI<"u"?window.electronAPI.navigateTo("index.html"):location.pathname="../"}})}),requestAnimationFrame(m)}function y(e){t[l]=e,i.currentTime=0,i.play(),l==="player1"?(document.getElementsByClassName("controller")[0].style.opacity=100,e==="Keyboard"?document.getElementsByClassName("controller")[0].setAttribute("src","../resources/Icons/wasd.png"):document.getElementsByClassName("controller")[0].setAttribute("src","../resources/Icons/controller.png")):l==="player2"&&(document.getElementsByClassName("controller")[1].style.opacity=100,e==="Keyboard"?document.getElementsByClassName("controller")[1].setAttribute("src","../resources/Icons/wasd.png"):document.getElementsByClassName("controller")[1].setAttribute("src","../resources/Icons/controller.png")),a==="Single Player"||a==="Multi Player"&&l==="player2"?(a==="Single Player"&&(t.player2="Computer"),localStorage.setItem("Controllers",JSON.stringify(t)),setTimeout(()=>{typeof window.electronAPI<"u"?window.electronAPI.navigateTo("SelectCharacter/index.html"):window.location.pathname="../SelectCharacter/"},500)):a==="Multi Player"&&l==="player1"&&(l="player2")}