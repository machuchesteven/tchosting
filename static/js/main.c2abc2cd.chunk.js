(this.webpackJsonphosting=this.webpackJsonphosting||[]).push([[0],{53:function(e,c,t){"use strict";t.r(c);var s=t(23),n=t(1),a=t(19),i=t.n(a),r=t(52),j=t(11),o=t(17),l=t(28),d=t(46),h=t(33),b=t(10),x=t(51),O=t(7),m=(t(58),t(59),t(22)),u=t(12),f=t(40),g=t(31),v=t(32),p=t(0);document.title="TechCraft Hosting";var N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(r.a,{sticky:"top",bg:"light",expand:"md",className:"h-100",children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(r.a.Brand,{children:Object(p.jsx)("b",{id:"brand-name",children:"TechCraftHost"})})}),Object(p.jsxs)(o.a,{className:"justify-content-center",activeKey:"/",id:"navigation",children:[Object(p.jsx)(o.a.Item,{style:{flex:3},children:Object(p.jsx)(o.a.Link,{href:"/",children:"Home"})}),Object(p.jsx)(o.a.Item,{style:{flex:3},children:Object(p.jsx)(o.a.Link,{href:"/",children:"Consult Us"})}),Object(p.jsx)(o.a.Item,{style:{flex:3},children:Object(p.jsx)(o.a.Link,{href:"#services",children:"Services"})}),Object(p.jsx)(o.a.Item,{style:{flex:2},children:Object(p.jsx)(o.a.Link,{href:"https://www.techcraft.co.tz/",children:"Main Site"})})]}),Object(p.jsx)(l.a,{variant:"outline-primary",className:"nav-button",onClick:function(e){return function(e){e.preventDefault(),console.log("Redirect to /login  screen"),window.location.href="/login"}(e)},children:"Log In"})]})})})},y=function(e){return Object(p.jsx)("div",{id:"call-to-buy",children:Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsxs)("h3",{children:["You have searched for ",e.name,", ",Object(p.jsx)(l.a,{variant:"outline-success",children:"Buy It Now"})," and Get a ",e.discount,"% discount once you buy it with us "]})})})},w=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)(m.Bounce,{top:!0,children:Object(p.jsxs)("h1",{className:"display-5 fw-bold",id:"site-greetings",children:["Get Your Business, Brand, or Office Domain",Object(p.jsx)("br",{}),"And Scale Up Your Business With",Object(p.jsx)("br",{}),"Us. It's Just A Single Click",Object(p.jsx)(u.a,{icon:f.a,id:"arrow-down"})]})})})})},T=function(){var e=Object(n.useState)(""),c=Object(s.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(""),r=Object(s.a)(i,2),o=r[0],O=r[1],g=Object(n.useState)(null),v=Object(s.a)(g,2),N=v[0],w=v[1],T=Object(n.useState)(""),k=Object(s.a)(T,2),S=k[0],B=k[1],C=Object(n.useState)(!1),H=Object(s.a)(C,2),A=H[0],I=H[1];function L(){var e=Object(n.useState)(!1),c=Object(s.a)(e,2),a=c[0],i=c[1];return A&&"AVAILABLE"===o?Object(p.jsx)("div",{children:Object(p.jsx)(m.Bounce,{children:Object(p.jsx)(y,{name:t,discount:20})})}):A&&"UNAVAILABLE"===o?Object(p.jsxs)("div",{children:[Object(p.jsx)(d.a,{variant:"success",children:Object(p.jsx)(m.Slide,{right:!0,children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)("h1",{children:"The domain is not available, But there are other suggestions"}),Object(p.jsxs)(l.a,{variant:"primary",onClick:function(e){i(!0)},children:[Object(p.jsx)(u.a,{icon:f.c,size:"lg"})," Click here to get them"]})]})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{children:a?"".concat(function(){var e=t.lastIndexOf("."),c=t.slice(0,e);return"".concat(c,".co.tz")}()):"Can You Try Another Good Name"})})]}):A||""!==S?A&&""!==S?Object(p.jsx)(d.a,{variant:"info",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(m.LightSpeed,{children:Object(p.jsx)("div",{className:"container-fluid mt-5 mb-5",children:Object(p.jsxs)(h.a,{md:2,className:"bg-none",children:[Object(p.jsx)(b.a,{span:1,offset:1,children:Object(p.jsx)("div",{className:"",children:Object(p.jsx)(u.a,{icon:f.b,size:"5x",spin:!0,className:"arrow-down"})})}),Object(p.jsx)(b.a,{span:9,children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{variant:"danger",children:Object(p.jsxs)("h3",{className:"fw-b center-align",children:["Sorry But an Error Occured during loading up your domain",Object(p.jsx)("br",{}),"Can You try One More Time"]})})})})]})})})})}):Object(p.jsx)(m.Fade,{in:!0,children:Object(p.jsx)("div",{className:"bg-light pt-5 pb-5",children:Object(p.jsx)(j.a,{children:Object(p.jsx)("h4",{className:"center-align",children:"Am pretty sure you will enjoy working with us"})})})}):Object(p.jsx)("div",{id:"empty"})}Object(n.useEffect)((function(){A&&fetch("https://domain-availability.whoisxmlapi.com/api/v1?apiKey=".concat("at_S7GiKRUSgB9dilmMnaTWaV5IfHhBF","&domainName=").concat(t,"&credits=DA"),{method:"GET",mode:"cors",headers:{"content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),O(e.DomainInfo.domainAvailability),w(!0),console.log(o)})).catch((function(e){console.log(e.message),w(!1),B(e)}))}),[A,o,t]);var z=Object(p.jsx)("div",{className:"empty"});return Object(p.jsxs)("div",{className:"justify-content-center shadow shadow-sm",children:[Object(p.jsx)("div",{id:"empty"}),Object(p.jsx)(j.a,{children:Object(p.jsx)(x.a,{method:"POST",onSubmit:function(e){return function(e){e.preventDefault(),console.log(t),I(!0)}(e)},className:"m-2",children:Object(p.jsxs)(h.a,{sm:1,md:2,className:"justify-content-center",children:[Object(p.jsx)(b.a,{sm:9,md:8,className:"justify-content-sm-center",children:Object(p.jsx)(x.a.Control,{type:"text",placeholder:"Domain Name",onChange:function(e){!function(e){e.preventDefault(),I(!1),O(""),a(e.target.value.toLowerCase())}(e)},id:"domain-input",className:"shadow m-2",required:!0})}),Object(p.jsx)(b.a,{sm:3,md:4,className:"justify-content-sm-center",children:Object(p.jsx)(l.a,{type:"submit",variant:"outline-primary",className:"m-2 shadow",children:"Look For Your Domain"})})]})})}),Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)("h4",{className:"align-center",children:A?"We are Looking for ".concat(t):""})})}),Object(p.jsx)("div",{className:"container",children:A&&N?"The domain is submitted and data is fetched":A&&null===N?"Just A second":""}),Object(p.jsx)(L,{}),function(){return N?Object(p.jsx)("div",{children:Object(p.jsx)(m.LightSpeed,{bottom:!0,children:Object(p.jsx)(j.a,{children:Object(p.jsxs)("h1",{children:["The Domain You have Looked for is ",o]})})})}):Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{children:Object(p.jsx)("h1",{children:"The domain check was succesful but some action failed"})})})},Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{children:null!==N?"".concat(o):"Techcraft Offers The Best way to work with its customers"})}),z]})},k=function(){return Object(p.jsxs)("div",{className:"hosting-services-container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h4",{className:"hosting-services-header center-align",children:"Techraft Offers Hosting in both System Hosting and Email"})}),Object(p.jsx)(j.a,{className:"hosting-services",children:Object(p.jsxs)(h.a,{sm:1,md:2,children:[Object(p.jsx)(b.a,{md:{span:4,offset:1},children:Object(p.jsxs)(O.a,{className:"justify-content-center shadow shadow-sm bg-white",children:[Object(p.jsx)(O.a.Header,{children:Object(p.jsx)(O.a.Title,{children:"Email Hosting"})}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{children:"We Offer Hosting in email bra bra bra"})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)(l.a,{className:"see-more-button",onClick:function(e){return function(e){e.preventDefault(),console.log("want to see more mail")}(e)},children:"See More"})})]})}),Object(p.jsx)(b.a,{md:{span:4,offset:1},children:Object(p.jsxs)(O.a,{className:"justify-content-center shadow shadow-sm bg-white",children:[Object(p.jsx)(O.a.Header,{children:Object(p.jsx)(O.a.Title,{children:"Web And System Hosting"})}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{children:"We Offer Hosting in Our servers  bra bra bra"})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)(l.a,{className:"see-more-button",onClick:function(e){return function(e){e.preventDefault(),console.log("want to see more Web")}(e)},children:"See More"})})]})})]})})]})},S=function(){return Object(p.jsxs)("div",{className:"why-chose-us",children:[Object(p.jsxs)(j.a,{children:[Object(p.jsx)("h3",{className:"why-chose-us-heading fw-b marg-top",children:"Why Chose Us"}),Object(p.jsxs)("p",{className:"why-chose-us-top-content",children:["At Techcraft Technologies Ltd, we guarantee reliable solutions that work. Our working mode is guide by our values that we hold ",Object(p.jsx)("br",{}),"close to heart. Ensuring that all products we deliver are the byproduct of these values."]})]}),Object(p.jsx)("div",{className:"reasons-card",children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(h.a,{sm:1,md:4,children:[Object(p.jsx)(b.a,{md:{span:2,offset:1},className:"mb-2",children:Object(p.jsxs)(O.a,{className:"reason-card",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("div",{className:"justify-content-center",children:Object(p.jsx)(u.a,{icon:g.a,size:"3x",className:"ml-5"})}),Object(p.jsx)(O.a.Title,{className:"reason-card-text",children:"Collaboration"})]}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{className:"reason-card-text",children:"Ensuring great teamwork by having teams made up of several developers with different skill set all working on a common goal."})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)("p",{className:"reason-card-text fw-b"})})]})}),Object(p.jsx)(b.a,{md:{span:2,offset:1},className:"mb-2",children:Object(p.jsxs)(O.a,{className:"reason-card",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("div",{className:"justify-content-center align-center",children:Object(p.jsx)(u.a,{icon:g.b,size:"3x"})}),Object(p.jsx)(O.a.Title,{className:"reason-card-text",children:"Innovation"})]}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{className:"reason-card-text",children:"Helping our people in our organizations achieve their full potential, through fostering creativity and disruptive innovation when solving challenges"})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)("p",{className:"reason-card-text fw-b"})})]})}),Object(p.jsx)(b.a,{md:{span:2,offset:1},className:"mb-2",children:Object(p.jsxs)(O.a,{className:"reason-card",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("div",{className:"justify-content-center align-center",children:Object(p.jsx)(u.a,{icon:g.b,size:"3x"})}),Object(p.jsx)(O.a.Title,{className:"reason-card-text",children:"Integrity"})]}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{className:"reason-card-text",children:"Working to deliver services without compromising our professional ethics and maintaining transparency on our organization and with our customers"})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)("p",{className:"reason-card-text fw-b",children:"See More"})})]})}),"   ",Object(p.jsx)(b.a,{md:{span:2,offset:1},className:"mb-2",children:Object(p.jsxs)(O.a,{className:"reason-card",children:[Object(p.jsxs)(O.a.Header,{children:[Object(p.jsx)("div",{className:"justify-content-center align-center",children:Object(p.jsx)(u.a,{icon:g.a,size:"3x"})}),Object(p.jsx)(O.a.Title,{className:"reason-card-text",children:"Quality"})]}),Object(p.jsx)(O.a.Body,{children:Object(p.jsx)(O.a.Text,{className:"reason-card-text",children:"Our provided ICT solutions function as per user requirement and are highly effective, robust , secure and reliable."})}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)("p",{className:"reason-card-text fw-b"})})]})})]}),Object(p.jsxs)(h.a,{className:"social-media-icons justify-content-center",children:[Object(p.jsx)("h1",{className:"reason-card-text mb-3 text-white",children:"Also, You Can Follow Us on Social Media"}),Object(p.jsx)(b.a,{sm:{span:2,offset:1},children:Object(p.jsx)(u.a,{icon:v.b,size:"4x",className:"brand-icon"})}),Object(p.jsx)(b.a,{sm:{span:2,offset:1},children:Object(p.jsx)(u.a,{icon:v.a,size:"4x",className:"brand-icon"})}),Object(p.jsx)(b.a,{sm:{span:2,offset:1},children:Object(p.jsx)(u.a,{icon:v.c,size:"4x",className:"brand-icon"})}),Object(p.jsx)(b.a,{sm:{span:2,offset:1},children:Object(p.jsx)(u.a,{icon:v.d,size:"4x",className:"brand-icon"})})]})]})})]})};i.a.render(Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(w,{}),Object(p.jsx)(T,{}),Object(p.jsx)(k,{}),Object(p.jsx)(S,{})]}),document.getElementById("root"))},59:function(e,c,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.c2abc2cd.chunk.js.map