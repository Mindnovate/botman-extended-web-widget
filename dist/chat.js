import{N as r,u as c,C as l}from"./assets/chat-CeCdaGcZ.js";window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1);let o={};const t=d("conf");if(t)try{o=JSON.parse(t)}catch(e){console.error("Failed to parse conf",t,e)}function a(){let e=document.createElement("div");e.id="botmanChatRoot",document.getElementsByTagName("body")[0].appendChild(e),r(c(l,{userId:o.userId,conf:o}),e)}function d(e){e=e.replace(/[[]/,"\\[").replace(/[]]/,"\\]");let n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return n===null?"":decodeURIComponent(n[1].replace(/\+/g," "))}
