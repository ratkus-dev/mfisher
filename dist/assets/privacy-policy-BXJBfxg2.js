import"./main-BBAJvQCu.js";/* empty css                  */import"./vendor-CGj-QosL.js";document.addEventListener("DOMContentLoaded",()=>{const E=document.querySelectorAll(".hero__btn, .team__btn, .cta__btn, .accordion__btn, .process__btn"),i=document.getElementById("popup"),_=i.querySelector(".popup__close"),r=document.querySelector(".order-form"),u=document.querySelectorAll(".budget-option"),s=document.getElementById("empty-error"),p=document.getElementById("file-upload"),a=document.getElementById("file-list"),l=new Set,f=()=>{r.querySelectorAll(".validate").forEach(o=>{o.classList.remove("field-error");const t=document.querySelector(`#${o.id}-error`);t&&(t.textContent="")}),s&&(s.textContent="")};E.forEach(n=>{n.addEventListener("click",()=>{i.classList.add("is-open"),document.querySelector("html").classList.add("no-scroll")})}),_.addEventListener("click",()=>{r.reset(),a.innerHTML="",u.forEach(n=>n.classList.remove("selected")),l.clear(),i.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll"),f()}),i.addEventListener("click",n=>{n.target===i&&(r.reset(),a.innerHTML="",u.forEach(o=>o.classList.remove("selected")),l.clear(),i.classList.remove("is-open"),document.querySelector("html").classList.remove("no-scroll"),f())});const v=()=>{const n=p.files,o=["doc","docx","pdf","ppt","pptx","xlsx","zip","rar"],t=30*1024*1024,d=3;if(!s)return!1;for(let e of n){const L=e.name.split(".").pop().toLowerCase();if(l.has(e.name)){s.textContent=`File ${e.name} is already added.`;continue}if(!o.includes(L))return s.textContent=`Unsupported file format: ${e.name}`,!1;if(e.size>t)return s.textContent=`File ${e.name} exceeds the 30MB size limit.`,!1;if(l.size>=d)return s.textContent=`You can attach up to ${d} files.`,!1;const c=document.createElement("li");c.classList.add("file__item");const h=document.createElement("span");h.textContent=e.name;const m=document.createElement("button");m.innerHTML='<span class="icon icon-close"></span>',m.classList.add("btn-del"),m.addEventListener("click",()=>{c.remove(),l.delete(e.name),p.value="",s.textContent=""}),c.appendChild(h),c.appendChild(m),a.appendChild(c),l.add(e.name)}return s.textContent="",!0},x=()=>{let n=!0;return r.querySelectorAll(".validate").forEach(t=>{t.id&&!validateField(t)?(n=!1,t.classList.add("field-error")):t.classList.remove("field-error")}),v()||(n=!1),n};r.addEventListener("submit",n=>{var o;if(n.preventDefault(),x()){s.textContent="";const t=new FormData(r);emailjs.init("lLSKvVcx1LQ3lQ7Qy");const d={user_name:t.get("user-name"),user_email:t.get("user-email"),user_phone:t.get("user-phone"),user_comment:t.get("user-comment"),project_budget:((o=document.querySelector(".budget-option.selected"))==null?void 0:o.getAttribute("data-value"))||"Not specified",user_nda:t.get("user-nda")?"Yes":"No"};emailjs.send("service_d3x1f1d","template_9nakrge",d).then(()=>{const e=document.getElementById("popup-mini");e.classList.remove("hide"),e.classList.add("is-open"),e.querySelector(".popup-mini__close-btn").addEventListener("click",()=>{e.classList.remove("is-open"),e.classList.add("hide"),r.reset(),a.innerHTML="",u.forEach(L=>L.classList.remove("selected")),l.clear(),f()})}).catch(e=>{console.error("Error submitting form:",e),alert("There was an error submitting the form.")})}else s.textContent="Please fix the errors above before submitting."}),p.addEventListener("change",v)});
//# sourceMappingURL=privacy-policy-BXJBfxg2.js.map
