(()=>{"use strict";const e=()=>{const e=document.createElement("section"),t=document.createElement("h1");return t.innerText="Something About Food",content.appendChild(e),e.appendChild(t),e},t=JSON.parse('[\n    {\n        "name": "Pierogi",\n        "picture": "../dist/images/pierogi.jpg"\n    },\n    {\n        "name": "Pizza",\n        "picture": "../dist/images/pizza.jpg"\n    },\n    {\n        "name": "Fries",\n        "picture": "../dist/images/fries.jpg"\n    },\n    {\n        "name": "Hamburger",\n        "picture": "../dist/images/hamburger.jpg"\n    },    \n    {\n        "name": "Spaghetti",\n        "picture": "../dist/images/spaghetti.jpg"\n    },\n    {\n        "name": "Hot Dog",\n        "picture": "../dist/images/hotdog.jpg"\n    } \n]'),n=document.querySelector("#content");function c(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.textContent=t,n}!function(){const e=document.createElement("nav"),t=c("home","Home"),o=c("menu","Menu"),d=c("contact","Contact");e.appendChild(t),e.appendChild(o),e.appendChild(d),n.appendChild(e)}(),e(),document.querySelector("#home").addEventListener("click",(()=>{document.querySelectorAll("section").forEach((e=>{e.remove()})),e()})),document.querySelector("#contact").addEventListener("click",(()=>{document.querySelectorAll("section").forEach((e=>{e.remove()})),(()=>{const e=document.createElement("section"),t=document.createElement("form");t.addEventListener("submit",(e=>e.preventDefault()));const n=document.createElement("input");n.placeholder="Your First Name";const c=document.createElement("input");c.placeholder="Your Last Name";const o=document.createElement("input");o.placeholder="Your Email";const d=document.createElement("textarea");d.placeholder="Your Message to Us";const a=document.createElement("button");a.innerText="Send Message",t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(d),t.appendChild(a),content.appendChild(e),e.appendChild(t)})()})),document.querySelector("#menu").addEventListener("click",(()=>{document.querySelectorAll("section").forEach((e=>{e.remove()})),(()=>{const e=document.createElement("section"),n=document.createElement("div");n.classList.add("container"),t.map((e=>{const t=document.createElement("div");t.classList.add("food-card");const c=document.createElement("span");c.innerHTML=e.name,t.style.backgroundImage=`url(${e.picture})`,t.appendChild(c),n.appendChild(t)})),content.appendChild(e),e.appendChild(n)})()}))})();