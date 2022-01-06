import{j as h,r,N as m,B as p,R as f,a as n,b as N}from"./vendor.0946841c.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function c(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=c(s);fetch(s.href,a)}};g();const e=h.exports.jsx,i=h.exports.jsxs,x=()=>{const t=r.exports.useRef(),o=r.exports.useRef(),c=()=>{o.current.classList.toggle("esta-activo"),t.current.classList.toggle("esta-activo")};return r.exports.useEffect(()=>{const l=document.querySelectorAll(".menu-principal .enlace");t.current.addEventListener("click",c);for(const s of l)s.addEventListener("click",c)}),i("header",{className:"cabecera-principal",children:[i("div",{className:"contenedor",children:[e("a",{className:"logo-enlace",href:"index.html",children:e("img",{src:"https://image.flaticon.com/icons/png/512/2251/2251538.png",alt:""})}),i("button",{ref:t,className:"boton-interruptor-menu",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})}),i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",children:[e("path",{fillRule:"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),e("path",{fillRule:"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})]})]}),e("nav",{ref:o,className:"menu-principal",children:i("ul",{children:[e("li",{children:e(m,{className:"enlace",to:"/",children:"Inicio"})}),e("li",{children:e(m,{className:"enlace",to:"/about-us",children:"\xBFQuienes somos?"})}),e("li",{children:e(m,{className:"enlace",to:"/projects",children:"Proyectos"})}),e("li",{children:e(m,{className:"enlace",to:"/contact",children:"Contacto"})})]})})]}),e("script",{src:"JS/scripts.js"})]})},v=()=>e("footer",{className:"footer-principal",children:e("p",{className:"texto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis, neque dignissimos perspiciatis ab quidem dolores at quos natus fuga culpa, eveniet sed odio impedit doloribus quibusdam laudantium? Consequuntur, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit."})}),b=()=>i("h1",{className:"texto",children:["Erorr 404 ",e("br",{})," Pagina no encontrada "]}),w=()=>i("section",{className:"sobre-nosotros contenedor-seccion",children:[e("h2",{className:"titulo",children:"Sobre nosotros"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."}),e("a",{className:"boton-enlace",href:"proyectos.html",children:"Ver experiencia"}),e("img",{className:"img-fondo",src:"https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:""})]}),y=()=>i("section",{className:"banner-principal contenedor-seccion",children:[i("div",{className:"contenedor",children:[e("h1",{className:"titulo",children:"Desarrollamos y dise\xF1amos tu sitio web"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nihil?"}),e("a",{className:"boton-enlace",href:"contacto.html",children:"Escribenos ya mismo"})]}),e("div",{className:"contenedor-img"})]}),q=()=>i("section",{className:"ultimos-proyectos contenedor-seccion",children:[e("h2",{className:"titulo",children:"Ultimos proyectos"}),i("div",{className:"contenedor",children:[e("a",{className:"proyecto",href:"",children:i("article",{children:[e("div",{className:"contenido",children:i("div",{children:[e("h4",{className:"titulo",children:"Proyecto"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."})]})}),e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:""})})]})}),e("a",{className:"proyecto",href:"",children:i("article",{children:[e("div",{className:"contenido",children:i("div",{children:[e("h4",{className:"titulo",children:"Proyecto"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."})]})}),e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:""})})]})}),e("a",{className:"proyecto",href:"",children:i("article",{children:[e("div",{className:"contenido",children:i("div",{children:[e("h4",{className:"titulo",children:"Proyecto"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."})]})}),e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:""})})]})}),e("a",{className:"proyecto",href:"",children:i("article",{children:[e("div",{className:"contenido",children:i("div",{children:[e("h4",{className:"titulo",children:"Proyecto"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."})]})}),e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:""})})]})})]})]}),u=({name:t})=>{const o="http://www.w3.org/2000/svg",c={cleanCode:"bi bi-clean-code",fastDelivery:"bi bi-fast-delivery",communication:"bi bi-communication"},l={cleanCode:e("path",{d:"m5.8604 1.4874a0.13307 0.13307 0 0 1 0.25264 0l0.23731 0.71256c0.10609 0.31765 0.35505 0.56661 0.6727 0.6727l0.71256 0.23731a0.13307 0.13307 0 0 1 0 0.25264l-0.71256 0.23731a1.0633 1.0633 0 0 0-0.6727 0.6727l-0.23731 0.71256a0.13307 0.13307 0 0 1-0.25264 0l-0.23731-0.71256a1.0633 1.0633 0 0 0-0.6727-0.6727l-0.71256-0.23731a0.13307 0.13307 0 0 1 0-0.25264l0.71256-0.23731a1.0633 1.0633 0 0 0 0.6727-0.6727zm7.0168-0.5683a0.09274 0.09274 0 0 1 0.17525 0l0.16501 0.49504c0.07355 0.2213 0.24688 0.39463 0.46818 0.46818l0.49504 0.16501a0.09274 0.09274 0 0 1 0 0.17525l-0.49504 0.16501a0.73936 0.73936 0 0 0-0.46818 0.46818l-0.16501 0.49504a0.09274 0.09274 0 0 1-0.17525 0l-0.16501-0.49504a0.73936 0.73936 0 0 0-0.46818-0.46818l-0.4944-0.16501a0.09274 0.09274 0 0 1 0-0.17525l0.49504-0.16501c0.2213-0.073553 0.39463-0.24688 0.46818-0.46818l0.16437-0.4944zm-2.7572 2.8004a0.42784 0.42784 0 1 0-0.81787-0.25152l-3.422 11.122a0.42784 0.42784 0 0 0 0.81787 0.25152zm-4.8114 2.1379a0.42776 0.42776 0 0 1 0 0.6057l-2.6923 2.6914 2.6923 2.6914a0.4283 0.4283 0 0 1-0.6057 0.6057l-2.9943-2.9943a0.42776 0.42776 0 0 1 0-0.6057l2.9943-2.9943a0.42776 0.42776 0 0 1 0.6057 0zm5.3829 0a0.42776 0.42776 0 0 0 0 0.6057l2.6923 2.6914-2.6923 2.6914a0.4283 0.4283 0 0 0 0.6057 0.6057l2.9943-2.9943a0.42776 0.42776 0 0 0 0-0.6057l-2.9943-2.9943a0.42776 0.42776 0 0 0-0.6057 0z"}),fastDelivery:e("path",{d:"m11.609 1a0.30003 0.30003 0 0 0-0.25391 0.45898l1.3477 2.1426a0.30003 0.30003 0 0 0 0.50781 0l1.3477-2.1426a0.30003 0.30003 0 0 0-0.25391-0.45898zm0.54297 0.59961h1.6094l-0.80469 1.2793zm-4.6191 0.2793a0.30003 0.30003 0 0 0-0.22852 0.00195l-6.625 2.8477a0.3 0.3 0 0 0-0.15625 0.39453 0.3 0.3 0 0 0 0.39453 0.15625l5.9551-2.5605-0.88477 2.1953a0.30003 0.30003 0 0 0 0.39844 0.38867l5.9043-2.5391a0.3 0.3 0 0 0 0.15625-0.39258 0.3 0.3 0 0 0-0.39453-0.1582l-5.2344 2.25 0.88281-2.1934a0.30003 0.30003 0 0 0-0.16797-0.39063zm4.75 3.0215a0.30013 0.30013 0 0 0-0.29883 0.29883v9.2012h0.59961v-8.9004h1.2832v8.9004h0.60156v-9.2012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4824 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v7.7012h0.59961v-7.4004h1.2852v7.4004h0.59961v-7.7012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4844 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v6.2012h0.60156v-5.9004h1.2832v5.9004h0.59961v-6.2012a0.30013 0.30013 0 0 0-0.30078-0.29883zm-3.4844 1.5a0.30013 0.30013 0 0 0-0.30078 0.29883v4.7012h0.60156v-4.4004h1.2832v4.4004h0.59961v-4.7012a0.30013 0.30013 0 0 0-0.29883-0.29883zm-0.83203 5a0.3 0.3 0 0 0-0.30078 0.29883 0.3 0.3 0 0 0 0.30078 0.30078h14a0.3 0.3 0 0 0 0.30078-0.30078 0.3 0.3 0 0 0-0.30078-0.29883z"}),communication:e("path",{d:"m14.896 4.8188c0 1.7969-1.6649 3.2536-3.7184 3.2536a4.2111 4.2111 0 0 1-1.0909-0.14223c-0.27144 0.13758-0.89474 0.40159-1.9433 0.57356-0.09296 0.014874-0.16361-0.081805-0.12689-0.16826 0.16454-0.38857 0.31328-0.90636 0.3579-1.3786-0.56938-0.5717-0.91519-1.32-0.91519-2.1381 0-1.7969 1.6649-3.2536 3.7184-3.2536 2.0535 0 3.7184 1.4567 3.7184 3.2536zm-5.3452-1.3944a0.2324 0.2324 0 0 0 0 0.4648h3.2536a0.2324 0.2324 0 0 0 0-0.4648zm0 1.162a0.2324 0.2324 0 0 0 0 0.4648h3.2536a0.2324 0.2324 0 0 0 0-0.4648zm0 1.162a0.2324 0.2324 0 0 0 0 0.4648h1.8592a0.2324 0.2324 0 0 0 0-0.4648zm-7.8622 8.6864s-0.58534 0-0.58534-0.58534 0.58534-2.3414 3.512-2.3414 3.512 1.756 3.512 2.3414-0.58534 0.58534-0.58534 0.58534zm2.9267-3.512a1.756 1.756 0 1 0 0-3.512 1.756 1.756 0 0 0 0 3.512z"})};return e("svg",{className:c[t],width:"16",height:"16",fill:"#fff",viewBox:"0 0 16 16",xmlns:o,children:l[t]})},M=()=>i("section",{className:"nuestros-servicios contenedor-seccion",children:[e("h2",{className:"titulo",children:"Nuestros servicios"}),i("div",{className:"contenedor",children:[i("article",{className:"servicio",children:[e("span",{className:"icono",children:e(u,{name:"cleanCode"})}),e("h3",{className:"titulo",children:"Servicio"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?"})]}),i("article",{className:"servicio",children:[e("span",{className:"icono",children:e(u,{name:"fastDelivery"})}),e("h3",{className:"titulo",children:"Servicio"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?"})]}),i("article",{className:"servicio",children:[e("span",{className:"icono",children:e(u,{name:"communication"})}),e("h3",{className:"titulo",children:"Servicio"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorem?"})]})]})]}),L=()=>i("section",{className:"trabaja-con-nosotros contenedor-seccion",children:[e("h2",{className:"titulo",children:"\xBFQuieres trabajar con nosotros?"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nesciunt?"}),e("a",{className:"boton-enlace",href:"mailto:contacto@edsoft.com",children:"contacto@edsoft.com"})]}),H=()=>i("main",{children:[e(y,{}),e(M,{}),e(w,{}),e(q,{}),e(L,{})]}),B=()=>e("main",{children:i("section",{className:"quienes-somos contenedor-seccion",children:[e("h1",{className:"titulo",children:"\xBFQuienes somos?"}),i("div",{className:"contenedor",children:[i("article",{children:[e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",alt:""})}),i("div",{children:[e("h2",{className:"titulo",children:"Quienes somos"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis, neque dignissimos perspiciatis ab quidem dolores at quos natus fuga culpa, eveniet sed odio impedit doloribus quibusdam laudantium? Consequuntur, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed nam! Aperiam, earum voluptatibus nulla placeat eum, necessitatibus illo quae deleniti laudantium omnis molestiae cumque quo, ipsum possimus rerum odio."})]})]}),i("article",{children:[e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",alt:""})}),i("div",{children:[e("h2",{className:"titulo",children:"Mision"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis, neque dignissimos perspiciatis ab quidem dolores at quos natus fuga culpa, eveniet sed odio impedit doloribus quibusdam laudantium? Consequuntur, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed nam! Aperiam, earum voluptatibus nulla placeat eum, necessitatibus illo quae deleniti laudantium omnis molestiae cumque quo, ipsum possimus rerum odio."})]})]}),i("article",{children:[e("div",{className:"contenedor-img",children:e("img",{src:"https://images.unsplash.com/photo-1544980919-e17526d4ed0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",alt:""})}),i("div",{children:[e("h2",{className:"titulo",children:"Vision"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis, neque dignissimos perspiciatis ab quidem dolores at quos natus fuga culpa, eveniet sed odio impedit doloribus quibusdam laudantium? Consequuntur, nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sed nam! Aperiam, earum voluptatibus nulla placeat eum, necessitatibus illo quae deleniti laudantium omnis molestiae cumque quo, ipsum possimus rerum odio."})]})]})]})]})}),j=()=>{const t=[];for(let o=0;o<12;o++)t[o]=o+1;return e("main",{children:i("section",{className:"todos-los-proyectos contenedor-seccion",children:[e("h1",{className:"titulo",children:"Proyectos"}),e("div",{className:"contenedor",children:t.map(o=>i("article",{className:"proyecto",children:[e("div",{className:"contenedor-img",children:e("img",{src:"https://raw.githubusercontent.com/devfjavier/Proyecto-de-EDsoft/master/src/images/proyecto.webp",alt:""})}),i("div",{className:"contenido",children:[e("h3",{className:"titulo",children:"Proyecto"}),e("p",{className:"texto",children:"Lorem ipsum dolor sit amet."}),e("a",{href:"",target:"_blank",rel:"nofollow noreferrer noopener",children:"Ver proyecto"})]})]},o))})]})})},D=()=>e("main",{children:i("section",{className:"contacto contenedor-seccion",children:[e("h1",{className:"titulo",children:"Contacto"}),i("div",{className:"contenedor",children:[e("div",{children:e("h3",{className:"titulo",children:"\xBFTienes algo que decir?"})}),i("address",{children:[i("div",{children:[e("h4",{className:"titulo",children:"Telefono"}),i("p",{className:"texto",children:[e("span",{className:"icono",children:e("img",{src:"https://image.flaticon.com/icons/png/512/3178/3178167.png",alt:""})}),e("a",{href:"tel:1234567890",children:"(123) 456 - 789 - 0"})]})]}),i("div",{children:[e("h4",{className:"titulo",children:"Correo electronico"}),i("p",{className:"texto",children:[e("span",{className:"icono",children:e("img",{src:"https://image.flaticon.com/icons/png/512/4697/4697970.png",alt:""})}),e("a",{href:"mailto:contacto@loremipsun.com",children:"contacto@loremipsun.com"})]})]}),i("div",{children:[e("h4",{className:"titulo",children:"Redes sociales"}),i("div",{children:[e("a",{href:""}),e("a",{href:""}),e("a",{href:""}),e("a",{href:""})]})]}),i("div",{children:[e("h4",{className:"titulo",children:"Direccion"}),i("p",{className:"texto",children:[e("span",{className:"icono",children:e("img",{src:"https://image.flaticon.com/icons/png/512/4534/4534467.png",alt:""})}),e("a",{href:"https://www.google.com/maps/place/Groenlandia/@67.8825871,-73.8807304,3z/data=!3m1!4b1!4m5!3m4!1s0x4ea20dbbe3c07715:0x34cf9d830114e218!8m2!3d65.8747247!4d-46.1425781",children:"Calle Falsa #123, Springfield, \xD3regon, Estados Unidos"})]})]}),e("iframe",{className:"map-ubcation",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24611878.567421794!2d-73.88073035826869!3d67.88258712523397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea20dbbe3c07715%3A0x34cf9d830114e218!2sGroenlandia!5e0!3m2!1ses!2smx!4v1589145084108!5m2!1ses!2smx",frameBorder:"0",allowFullScreen:"",style:{border:0},"aria-hidden":"false",tabIndex:"0"})]})]})]})}),z=()=>i(p,{children:[e(x,{}),i(f,{children:[e(n,{path:"/",element:e(H,{})}),e(n,{path:"/about-us",element:e(B,{})}),e(n,{path:"/projects",element:e(j,{})}),e(n,{path:"/contact",element:e(D,{})}),e(n,{path:"*",element:e(b,{})})]}),e(v,{})]});N.exports.render(e(r.exports.StrictMode,{children:e(z,{})}),document.getElementById("root"));
