function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire3c3f;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire3c3f=r),(0,r.register)("gC69E",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,a=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("gC69E").register(new URL("",import.meta.url).toString(),JSON.parse('["6Ie0P","index.c1d8e863.js","4quSE","double-check-icon.5eecb33a.svg","4leaP","index.53ec16d8.css"]'));var i={};i=JSON.parse('[{"id":1,"name":"home","monthlyPrice":49,"features":[{"name":"Feature 1","exist":true},{"name":"Feature 2","exist":false},{"name":"Feature 3","exist":false},{"name":"Feature 4","exist":false}]},{"id":2,"name":"professional","monthlyPrice":99,"features":[{"name":"Feature 1","exist":true},{"name":"Feature 2","exist":true},{"name":"Feature 3","exist":false},{"name":"Feature 4","exist":false}]},{"id":3,"name":"platinum","monthlyPrice":299,"features":[{"name":"Feature 1","exist":true},{"name":"Feature 2","exist":true},{"name":"Feature 3","exist":true},{"name":"Feature 4","exist":true}]}]');let l="monthly";var d={};d=new URL("double-check-icon.5eecb33a.svg",import.meta.url).toString();const o=new URL(d),c=()=>{l="monthly"===l?"yearly":"monthly",document.getElementById("period").innerHTML=l,e(i).forEach(e=>{let t=document.getElementById(`price-${e.name}`),n=parseInt(t.innerHTML),a=(("monthly"===l?e.monthlyPrice:12*e.monthlyPrice)-n)/50,r=n,i=0,d=()=>{r+=a*(1-Math.pow(1-i/50,10)),t.innerHTML=Math.round(r),++i<50&&requestAnimationFrame(d)};d()})},s=()=>{let t=document.getElementById("table-wrapper"),n=document.createElement("table"),a=document.createElement("thead"),r=document.createElement("tr");r.innerHTML="<th></th>"+e(i).map(e=>`<th>${e.name}</th>`).join(""),a.appendChild(r),n.appendChild(a);let d=document.createElement("tbody"),s=[["Price",...e(i).map(e=>`$<span id="price-${e.name}">${e.monthlyPrice}</span>.00`)],["Billing Frequency",...e(i).map(()=>`<span class="capitalize" id="period">${l}</span>`)]];for(let t=1;t<=e(i)[0].features.length;t++){let n=[`Feature ${t}`,...e(i).map(e=>e.features[t-1].exist?"✔":"✘")];s.push(n)}let u=["",...e(i).map(e=>`<button class="ripple" data-period="${l}" data-plan="${e.name}">Sign Up <img src="${o}" width="16" alt="check icon" /></button>`)],p=document.createElement("div");p.classList.add("control");let m=document.createElement("input");m.setAttribute("type","checkbox"),m.setAttribute("id","toggle"),m.classList.add("checkbox"),m.addEventListener("change",c);let f=document.createElement("label");f.setAttribute("for","toggle"),f.classList.add("switch"),p.appendChild(m),p.appendChild(f),s.forEach((e,t)=>{let n=document.createElement("tr");n.classList.add(`row-${t+1}`),e.forEach((e,a)=>{if(1===t&&a>1)return;let r=document.createElement("td");if(r.classList.add(`col-${a+1}`),1===t&&1===a){let t=document.createElement("div");t.classList.add("flex-container"),t.innerHTML=e,t.appendChild(p),r.setAttribute("colspan",3),r.appendChild(t)}else r.innerHTML=e;n.appendChild(r)}),d.appendChild(n)});let h=document.createElement("tr");u.forEach(e=>{let t=document.createElement("td");t.innerHTML=e,h.appendChild(t)}),d.appendChild(h),n.appendChild(d),t.appendChild(n)},u=e=>{console.log(`Signing up for ${e} plan and ${period} billing frequency!`)},p=()=>{document.querySelectorAll(".ripple").forEach(e=>{e.addEventListener("click",()=>{u(e.getAttribute("data-plan"),e.getAttribute("data-period"))})})};document.addEventListener("DOMContentLoaded",()=>{s(),p()});