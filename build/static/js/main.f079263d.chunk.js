(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"title":"Personal website","firstLink":"https://github.com/randrerd/new-portfolio","secondLink":"https://rul.codes","techStack":{"markupAndComponents":["Javascript","React"],"styling":["Css3","Tailwindcss"],"utils":["Git","MobileFirst"]},"previewUrl":{"mobile":"../assets/new-portfolio.png","desktop":"../assets/new-portfolio-lg.png"}},{"title":"GifOS","firstLink":"https://github.com/randrerd/gifos","secondLink":"https://gifos.vercel.app","techStack":{"markupAndComponents":["Html5","Javascript"],"styling":["Css3","Sass"],"utils":["Git","MobileFirst"]},"previewUrl":{"mobile":"../assets/gifos.png","desktop":"../assets/gifos-lg.png"}},{"title":"eLearning Platform","firstLink":"https://github.com/randrerd/elearningProject","secondLink":"https://randrerd.github.io/elearningProject/","techStack":{"markupAndComponents":["Html5","Javascript"],"styling":["Css3","Sass"],"utils":["Git","MobileFirst"]},"previewUrl":{"mobile":"../assets/elearning.png","desktop":"../assets/elearning-lg.png"}}]')},26:function(e){e.exports=JSON.parse('{"CTASection":{"header":"Front End Developer","content":"Hi, I\'m Ra\xfal! I focus on building creative and functional user interfaces."},"aboutSection":{"header":"Journey","content":[{"paragraph":{"text":"I started studying web development in 2019 on my own with the help of The Odin Project."}},{"paragraph":{"text":"Learning how to work with Git through GitHub, then HTML and CSS, then in early 2020..."}},{"paragraph":{"subtitle":"A formal education","text":"I enrolled in Ac\xe1mica\u2019s Full Stack Web Development program in Buenos Aires, Argentina."}},{"paragraph":{"text":"Where I improved my HTML and CSS skills and learned JavaScript, Node.js, Express.js, and working with relational and non-relational databases such as MySQL and MongoDB."}},{"paragraph":{"subtitle":"Thereafter","text":"In September 2020 I completed the Ac\xe1mica program, I added features and made improvements to projects I\u2019d started and also started learning React.js on my own."}},{"paragraph":{"text":"Currently I find myself looking for my first experience in the industry to work alongside a team and therefore be able to learn even more from them."}}]},"projectsSection":{"header":"Projects","btn1":"Code","btn2":"Live","projects":[{"name":"Personal website","summary":"The website you\'re currently seeing! Hope you like it, it\'s my first React.js AND TailwindCSS proper project"},{"name":"GifOS","summary":"Web app that allows the user to make their own GIFs, search for their favourite ones and get recommendations. The app uses the Giphy API"},{"name":"eLearning Platform","summary":"Web app that allows the user to make their own GIFs, search for their favourite ones and get recommendations. The app uses the Giphy API"}],"techStackHeader":"Tech Stack"},"contactSection":{"content":"Want to get in touch?","btn":"Contact Me!"},"footerSection":{"content":"Made with React.js, TawilwindCSS and a lot of \u2764"}}')},27:function(e){e.exports=JSON.parse('{"CTASection":{"header":"Desarrollador Front End","content":"\xa1Hola, soy Ra\xfal! Mi foco es construir interfaces de usuario creativas y funcionales."},"aboutSection":{"header":"Trayecto","content":[{"paragraph":{"text":"Empec\xe9 a estudiar desarrollo web en 2019 de manera autodidacta con la ayuda de The Odin Project."}},{"paragraph":{"text":"Aprend\xed a utlizar Git a trav\xe9s de GitHub, HTML y CSS, luego a principios del 2020..."}},{"paragraph":{"subtitle":"Una educaci\xf3n acad\xe9mica","text":"Me inscrib\xed en el programa de Desarrollo Web Full Stack en Ac\xe1mica en Buenos Aires, Argentina."}},{"paragraph":{"text":"Mejor\xe9 mis habilidades con HTML y CSS y adem\xe1s aprend\xed JavaScript, Node.js, Express.js, a trabajar con base de datos relacionales y no-relacionales (MySQL y MongoDB) e igualmente me familiaric\xe9 con las metodolog\xedas \xe1giles."}},{"paragraph":{"subtitle":"Posteriormente","text":"En Septiembre de 2020 complet\xe9 el programa de Ac\xe1mica, continu\xe9 agregandole m\xe1s funcionalidades a los proyectos que ya hab\xeda realizado y empec\xe9 a estudiar React.js de manera autodidacta."}},{"paragraph":{"text":"Actualmente me encuentro en la b\xfasqueda de mi primera experiencia en la industria de sistemas para as\xed poder trabajar junto a un equipo que me permita continuar aprendiendo y creciendo."}}]},"projectsSection":{"header":"Proyectos","btn1":"C\xf3digo","btn2":"En vivo","projects":[{"name":"Sitio web personal","summary":"The website you\'re currently seeing! Hope you like it, it\'s my first React.js AND TailwindCSS proper project"},{"name":"GifOS","summary":"Web app that allows the user to make their own GIFs, search for their favourite ones and get recommendations. The app uses the Giphy APIF"},{"name":"eLearning Platform","summary":"Web app that allows the user to make their own GIFs, search for their favourite ones and get recommendations. The app uses the Giphy API"}],"techStackHeader":"Tech Stack"},"contactSection":{"content":"\xbfQuieres comunicarte?","btn":"\xa1Cont\xe1ctame!"},"footerSection":{"content":"Hecho con React.js, TailwindCSS y bastante \u2764"}}')},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),i=n.n(r),c=n(22),s=n.n(c),o=n(6),l=n(29),d=n(5),m=(n(36),n(23)),b=Object(r.createContext)({theme:"light"});function h(e){var t=e.children,n=Object(r.useState)("light"),i=Object(o.a)(n,2),c=i[0],s=i[1],l={theme:c,userThemeChange:function(e){var t=e||("light"===c?"dark":"light");s(t),window.localStorage.setItem("pref-theme",t)}};return Object(a.jsx)(b.Provider,{value:l,children:t})}var u=n(3),x={en:n(26),es:n(27)},j=Object(r.createContext)({userLanguage:"en",dictionary:x.en});function g(e){var t=e.children,n=Object(r.useState)("en"),i=Object(o.a)(n,2),c=i[0],s=i[1],l={userLanguage:c,dictionary:x[c],userLanguageChange:function(e){var t=e||("en"===c?"es":"en");s(t),window.localStorage.setItem("pref-lang",t)}};return Object(a.jsx)(j.Provider,{value:l,children:t})}function f(e){var t=e.tid,n=e.section,a=Object(r.useContext)(j).dictionary[n];return Array.isArray(a)?a:t?a[t]||t:a}var p=n(15);function O(){var e=Object(r.useContext)(j),t=e.userLanguageChange,n=e.userLanguage,i=Object(r.useContext)(b).theme;return Object(r.useEffect)((function(){var e=window.localStorage.getItem("pref-lang");e||(e=window.navigator.language.substring(0,2)),t(e)}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{children:Object(a.jsxs)("span",{className:"flex relative",onClick:function(){t()},children:[" ","es"!==n?Object(a.jsx)("p",{className:"light"===i?"text-2xl mb-3 lg:text-4xl lg:mb-0 lg:min-w-4 font-semibold lg:p-1  text-dark-bg  ":"text-2xl  mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold  lg:p-1 text-light-bg ",children:"ES"}):Object(a.jsx)("p",{className:"light"===i?"text-2xl mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold lg:p-1  text-dark-bg  ":"text-2xl mb-3 lg:text-4xl lg:mb-0  lg:min-w-4 font-semibold  lg:p-1 text-light-bg ",children:"EN"})]})})})}function v(){var e=Object(r.useContext)(b),t=e.theme,n=e.userThemeChange;return Object(r.useEffect)((function(){var e=window.localStorage.getItem("pref-theme");e||(e="light"),n(e)}),[n]),Object(a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-end items-end text-4xl lg:text-5xl",children:[Object(a.jsx)("button",{className:"flex",onClick:function(){n()},children:"dark"===t?Object(a.jsx)(p.c,{className:"my-1 lg:mx-1 text-".concat(t,"-secondary")}):Object(a.jsx)(p.a,{className:"my-1 lg:mx-1 text-".concat(t,"-secondary")})}),Object(a.jsx)(O,{})]})}var y={hidden:{opacity:0},show:{opacity:1,transition:{duration:1,ease:"easeOut",staggerChildren:.5}}},w={hidden:{opacity:0,y:50},show:{opacity:1,y:0,transition:{duration:.6}}},k={leftToRight:{hidden:{opacity:0,x:-100},show:{opacity:1,x:0,transition:{duration:1}}},rightToLeft:{hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{duration:1}}}},S={rest:{},hover:{background:"black"}},N={rest:{},hover:{color:"white"}};function C(){var e=Object(r.useContext)(b).theme;return Object(a.jsxs)("header",{className:"mx-8 lg:mx-48 mx lg:mt-8 my-4 lg:mb-0 lg:min-h-screen min-h-12   ",children:[Object(a.jsx)(v,{}),Object(a.jsxs)(u.b.div,{variants:y,animate:"show",initial:"hidden",className:"flex flex-col w-10/12 lg:w-7/12 lg:mt-5 relative",children:[Object(a.jsx)("div",{className:"overflow-hidden mb-6 lg:text-7xl w-min",children:Object(a.jsx)(u.b.h1,{variants:w,className:"light"===e?" text-light-secondary lg:text-7xl block":"  text-dark-secondary lg:text-7xl block  ",children:Object(a.jsx)(f,{section:"CTASection",tid:"header"})})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"overflow-hidden my-2 lg:text-5xl",children:Object(a.jsx)(u.b.h2,{variants:w,className:"light"===e?"text-light-primary my-2 lg:text-5xl block ":" text-dark-primary my-2 lg:text-5xl block",children:Object(a.jsx)(f,{section:"CTASection",tid:"content"})})}),Object(a.jsx)("div",{className:"light"===e?"bg-light-secondary w-32 lg:w-1/2 my-1 h-1 lg:h-3 mt-5":"w-32 lg:w-1/2 my-1 h-1 lg:h-2 bg-dark-secondary mt-5 "})]})]})]})}var T=n(28);function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1,t=Object(T.a)({threshold:e}),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(u.c)();return r?i.start("show"):i.start("hidden"),[a,i]}function A(){var e=Object(r.useContext)(b).theme,t=JSON.parse(JSON.stringify(w));return t.hidden.color="white",Object(a.jsxs)(u.b.div,{variants:y,className:"flex my-5 mb-3 lg:mt-0 overflow-hidden bg-".concat(e,"-bg duration-700"),children:["dark"!==e?Object(a.jsx)(u.b.h3,{variants:w,className:"relative text-white z-20 blend-difference lg:text-5xl",children:Object(a.jsx)(f,{tid:"header",section:"aboutSection"})}):Object(a.jsx)(u.b.h3,{variants:t,className:"relative text-white z-20 blend-difference lg:text-5xl",children:Object(a.jsx)(f,{tid:"header",section:"aboutSection"})}),Object(a.jsx)(u.b.div,{variants:k.leftToRight,className:"relative self-end right-8 lg:right-13 w-16 h-8 lg:h-12 bg-".concat(e,"-secondary ")})]})}var I=n(12);function M(e){var t=e.content,n=e.theme,r=Object(u.g)().scrollYProgress,i=Object(u.f)(r,[0,.2,.35],[0,-30,-50]),c=Object(u.f)(r,[0,.35,.5],[0,-100,-180]),s=t.text,o=t.subtitle;return o?Object(a.jsxs)("div",{children:[Object(a.jsx)(u.b.h4,{style:I.isBrowser?{y:c}:{y:i},className:"text-".concat(n,"-secondary lg:text-2xl mt-8 duration-700"),children:o}),Object(a.jsx)(u.b.p,{style:I.isBrowser?{y:c}:{y:i},className:"text-".concat(n,"-primary my-2 lg:text-lg duration-700"),children:s})]}):Object(a.jsx)(u.b.p,{style:I.isBrowser?{y:c}:{y:i},className:"text-".concat(n,"-primary lg:text-lg my-2 duration-700"),children:s})}function E(){var e=Object(r.useContext)(b).theme,t=L(),n=Object(o.a)(t,2),i=n[0],c=n[1],s=f({section:"aboutSection"});return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.b.section,{exit:"hidden",initial:"hidden",animate:c,ref:i,variants:y,className:"flex flex-col mx-8 my-4 mt-7 lg:mx-48 lg:my-0 bg-".concat(e,"-bg duration-700 lg:mb-0"),children:[Object(a.jsx)(A,{}),Object(a.jsx)("div",{className:"lg:mx-56 lg:ml-64  max-w-1xl flex flex-col my-4 lg:mb-0",children:s.content.map((function(t,n){var r=t.paragraph;return Object(a.jsx)(M,{theme:e,content:r},n)}))})]})})}var P=n(16);function F(){return Object(a.jsxs)(u.b.div,{variants:y,className:"flex my-5 mb-3 lg:mt-0 overflow-hidden",children:[Object(a.jsx)(u.b.h3,{variants:w,className:"relative text-white z-20 blend-difference lg:text-5xl",children:Object(a.jsx)(f,{section:"projectsSection",tid:"header"})}),Object(a.jsx)(u.b.div,{variants:k.rightToLeft,className:"absolute self-center mr-auto w-16 h-8 lg:h-12 bg-white"})]})}var G=n(8);function H(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),i=n[0],c=n[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),d=l[0],m=l[1],b=e.content,h={markupAndComponents:[{name:"Html5",display:"HTML5",icon:G.e},{name:"Javascript",display:"JavaScript",icon:G.g},{name:"React",display:"React.JS",icon:G.i}],styling:[{name:"Css3",display:"CSS3",icon:G.a},{name:"Sass",display:"Sass",icon:G.j},{name:"Tailwindcss",display:"Tailwind CSS",icon:G.k}],utils:[{name:"Git",display:"Git",icon:G.b},{name:"MobileFirst",display:"Mobile First",icon:p.b}]};function u(e,t){var n=[];return e.forEach((function(e){var a=t.find((function(t){return e===t.name}));n.push(a)})),n}function x(e){c(!0),m(e)}return Object(a.jsxs)("div",{className:"flex flex-col w-32 min-w-8 min-h-12",children:[Object(a.jsx)("h4",{className:"text-white my-3 text-xl font-medium",children:Object(a.jsx)(f,{section:"projectsSection",tid:"techStackHeader"})}),Object(a.jsxs)("div",{className:"text-3xl",children:[Object(a.jsx)("div",{className:"flex",children:u(b.markupAndComponents,h.markupAndComponents).map((function(e,t){return Object(a.jsx)(e.icon,{onMouseEnter:function(){return x(e.display)},onMouseLeave:function(){return c(!1)},onClick:function(){return x(e.display)},className:"m-1 text-white"},t)}))}),Object(a.jsx)("div",{className:"flex",children:u(b.styling,h.styling).map((function(e,t){return Object(a.jsx)(e.icon,{onMouseEnter:function(){return x(e.display)},onMouseLeave:function(){return c(!1)},onClick:function(){return x(e.display)},className:"m-1 text-white"},t)}))}),Object(a.jsx)("div",{className:"flex",children:u(b.utils,h.utils).map((function(e,t){return Object(a.jsx)(e.icon,{onMouseEnter:function(){return x(e.display)},onMouseLeave:function(){return c(!1)},onClick:function(){return x(e.display)},className:"m-1 text-white"},t)}))})]}),i&&Object(a.jsx)("p",{className:"text-white font-light text-xs m-1",children:d})]})}function J(e){var t=e.previewUrl;return Object(a.jsxs)("div",{className:"flex flex-col mt-4 mb-2",children:[Object(a.jsx)("img",{className:"self-center m-auto h-56 lg:hidden",alt:"Screenshot of current project",src:t.mobile}),Object(a.jsx)("img",{className:"self-start m-0 hidden lg:block",alt:"Screenshot of current project",src:"".concat(t.desktop)})]})}function z(e){var t=e.details,n=t.title,r=t.summary,i=t.firstLink,c=t.secondLink,s=t.techStack,o=t.previewUrl,l=e.handleClick,d=e.i,m=Object(u.g)().scrollYProgress,b=Object(u.f)(m,[0,.47,.57],[0,-50,-90]),h=Object(u.f)(m,[0,.47,.62,.85],[0,-50,-125,-250]);return Object(a.jsxs)(u.b.div,{style:I.isBrowser?{y:h}:{y:b},className:d===P.length-1?"flex flex-col mt-12 lg:flex-row duration-700":"flex flex-col my-12 lg:flex-row lg:mb-32 duration-700",children:[Object(a.jsxs)("div",{className:"flex flex-col mb-4 lg:ml-64 lg:w-6/12 lg:mr-12 lg:mb-0",children:[Object(a.jsx)("button",{className:"my-2",onClick:function(){return l(c)},children:Object(a.jsx)(J,{previewUrl:o})}),Object(a.jsxs)("div",{className:"flex justify-center w-full max-w-sm self-center lg:max-w-none",children:[Object(a.jsx)("button",{onClick:function(){return l(i)},className:"w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0 max",children:Object(a.jsx)("span",{children:Object(a.jsx)(f,{section:"projectsSection",tid:"btn1"})})}),Object(a.jsx)("button",{onClick:function(){return l(c)},className:"w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0",children:Object(a.jsx)("span",{children:Object(a.jsx)(f,{section:"projectsSection",tid:"btn2"})})})]}),Object(a.jsx)("div",{className:"relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40"})]}),Object(a.jsxs)("div",{className:"flex flex-col items-start flex-shrink-0 lg:w-1/4",children:[Object(a.jsx)("h4",{className:"text-white mb-3 font-normal lg:self-start lg:mt-3 lg:mb-0",children:n}),Object(a.jsx)("p",{className:"text-white text-lg font-light",children:r}),Object(a.jsx)(H,{content:s})]})]})}function R(e){var t=f({section:"projectsSection"}),n=L(),r=Object(o.a)(n,2),i=r[0],c=r[1],s=t.projects,l=P.map((function(e,t){return e.summary=s[t].summary,e.title=s[t].name,e}));return Object(a.jsxs)(u.b.section,{initial:"hidden",animate:c,ref:i,variants:y,className:"bg-black px-8 py-4 pb-24 mt-7 flex flex-col lg:px-48 lg:pt-16 lg:pb-0",children:[Object(a.jsx)(F,{}),l.map((function(t,n){return Object(a.jsx)(z,{details:t,i:n,handleClick:e.handleClick},n)}))]})}function B(e){var t=L(.85),n=Object(o.a)(t,2),i=n[0],c=n[1],s=JSON.parse(JSON.stringify(S)),l=JSON.parse(JSON.stringify(N));s.hover.background="white",l.hover.color="black";var d=Object(r.useContext)(b).theme,m=e.handleClick;return Object(a.jsxs)(u.b.section,{ref:i,initial:"hidden",animate:c,variants:y,className:"flex flex-col mb-20 items-center  ",children:[Object(a.jsx)("p",{className:"text-".concat(d,"-secondary text-3xl align-text-center"),children:Object(a.jsx)(f,{section:"contactSection",tid:"content"})}),"dark"!==d?Object(a.jsx)(u.b.button,{variants:S,initial:"rest",whileHover:"hover",whileTap:"hover",animate:"rest",onClick:function(){return m("email")},className:"light"===d?"bg-light-bg border border-light-secondary border-solid my-8 mx-6 p-3 mt-3 duration-300":"bg-dark-bg border border-dark-secondary border-solid my-8 mx-6 p-3 mt-3 duration-300",children:Object(a.jsx)(u.b.span,{variants:N,className:"light"===d?"text-light-secondary text-2xl font-light":"text-dark-secondary text-2xl font-light",children:Object(a.jsx)(f,{section:"contactSection",tid:"btn"})})}):Object(a.jsx)(u.b.button,{variants:s,initial:"rest",whileHover:"hover",whileTap:"hover",animate:"rest",onClick:function(){return m("email")},className:"light"===d?"bg-light-bg border border-light-secondary border-solid my-8 mx-6 p-3 mt-3 duration-300":"bg-dark-bg border border-dark-secondary border-solid my-8 mx-6 p-3 mt-3 duration-300",children:Object(a.jsx)(u.b.span,{variants:l,className:"light"===d?"text-light-secondary text-2xl font-light":"text-dark-secondary text-2xl font-light",children:Object(a.jsx)(f,{section:"contactSection",tid:"btn"})})})]})}function D(){var e=Object(r.useContext)(b).theme,t=Object(u.g)().scrollYProgress,n=L(.65),i=Object(o.a)(n,2),c=i[0],s=i[1],l=Object(u.f)(t,[0,.9,.95,1],[0,-75,-25,0]),d=Object(u.f)(t,[0,.85,.97],[0,-95,0]);return Object(a.jsxs)(a.Fragment,{children:["dark"===e&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:" w-48 h-1 relative z-10 m-auto bg-black"})}),Object(a.jsx)("div",{className:" w-48 h-1 relative z-10 m-auto top-2 bg-".concat(e,"-bg")}),Object(a.jsx)("div",{className:" w-48 h-1 relative z-10 m-auto top-4 bg-".concat(e,"-bg")}),Object(a.jsx)(u.b.div,{initial:"hidden",animate:s,ref:c,style:I.isBrowser?{y:d}:{y:l},variants:y,className:"w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700"})]})}function W(e){var t=e.handleClick,n=[{name:"Gmail",icon:G.d,url:"email"},{name:"Github",icon:G.c,url:"https://github.com/randrerd"},{name:"LinkedIn",icon:G.h,url:"https://linkedin.com/in/randrerd"},{name:"Twitter",icon:G.l,url:"https://twitter.com/randrerd"},{name:"Instagram",icon:G.f,url:"https://instagram.com/randrerd"}];return Object(a.jsxs)("section",{className:"flex flex-col bg-black items-center",children:[Object(a.jsx)("div",{className:"p-5 text-white flex flex-row text-3xl justify-between w-64 my-10 mb-4",children:n.map((function(e,n){return Object(a.jsx)("button",{onClick:function(){return t(e.url)},children:Object(a.jsx)(e.icon,{})},n)}))}),Object(a.jsxs)("div",{className:"flex flex-col text-xs font-light mb-5 self-center items-center ",children:[Object(a.jsx)("p",{className:"text-whiteish",children:Object(a.jsx)(f,{section:"footerSection",tid:"content"})}),Object(a.jsx)("p",{className:"text-whiteish",children:"@randrerd"})]})]})}function U(){var e=Object(r.useContext)(b).theme;function t(e){if("email"===e)window.location="mailto:raulandrerd@gmail.com";else{var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}}return Object(a.jsxs)("div",{className:"light"===e?"bg-light-bg duration-700":"bg-dark-bg duration-700",children:[Object(a.jsx)(m.a,{bodyAttributes:{class:"light"===e?"bg-light-bg duration-700 z-30":"bg-dark-bg duration-700 z-30"}}),Object(a.jsx)(C,{}),Object(a.jsx)(E,{}),Object(a.jsx)(R,{handleClick:t}),Object(a.jsx)(D,{}),Object(a.jsx)(B,{handleClick:t}),Object(a.jsx)(W,{handleClick:t})]})}function q(){var e=Object(u.d)(-100),t=Object(u.d)(-100),n={damping:25,stiffness:700},i=Object(u.e)(e,n),c=Object(u.e)(t,n);return Object(r.useEffect)((function(){var n=function(n){e.set(n.clientX),t.set(n.clientY)};return window.addEventListener("mousemove",n),function(){window.removeEventListener("mousemove",n)}})),Object(a.jsx)(u.b.div,{style:{translateX:i,translateY:c},className:"cursor z-50"})}function Y(){return Object(a.jsx)("div",{className:"bg-black flex flex-col items-center justify-center h-screen",children:Object(a.jsx)("div",{className:"lg:w-3/12 md:w-2/4 bg-black z-10 absolute m-8 flex flex-col items-center justify-center border-white border-solid border-8 rounded-sm py-8 px-8",children:Object(a.jsx)("h2",{className:"text-4xl text-white font-medium text-center z-20",children:"We're working for you, pretty soon everything will be finished."})})})}var Q=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),m=s[0],b=s[1];function u(e){var t=e.target===document.querySelector(".text-4xl.text-white.font-medium.text-center.z-20"),n=e.y>419&&e.y<440;t&&n&&i((function(e){return e+1}))}return Object(r.useEffect)((function(){return window.addEventListener("click",(function(e){return u(e)})),function(){window.removeEventListener("click",(function(e){return u(e)}))}}),[]),Object(r.useEffect)((function(){7===n&&b(!0)}),[n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{}),Object(a.jsx)(g,{children:Object(a.jsx)(h,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(d.c,{children:m?Object(a.jsx)(d.a,{path:"/",exact:!0,component:U}):Object(a.jsx)(d.a,{path:"/",exact:!0,component:Y})})})})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),X()}},[[42,1,2]]]);
//# sourceMappingURL=main.f079263d.chunk.js.map