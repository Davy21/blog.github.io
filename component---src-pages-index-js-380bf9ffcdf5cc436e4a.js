(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2mvg":function(e,t,a){"use strict";var l=a("k1TG"),u=a("8o2o"),n=a("TSYQ"),r=a.n(n),o=a("q1tI"),v=a.n(o),i=a("vUet"),c=v.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.fluid,c=e.rounded,s=e.roundedCircle,A=e.thumbnail,d=Object(u.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(i.a)(a,"img");var m=r()(o&&a+"-fluid",c&&"rounded",s&&"rounded-circle",A&&a+"-thumbnail");return v.a.createElement("img",Object(l.a)({ref:t},d,{className:r()(n,m)}))}));c.displayName="Image",c.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=c},"7XRO":function(e,t){e.exports={author:"Davy Cheng",description:"my blog content",posts:[{id:1,date:"2020-01-21 23:35",image:"post1.jpg",title:"What is Success ?",tag:"Life",description:"Everyone has its own definition of success...",content:"Everyone has its own definition of sucesss. So do I !!! I think my success will be based on how big the impact I can bring to the community, how much people I am able to help! As a software engineer, I like to come up with a new idea and make it as a side project for me. I enjoy it so while thinking that it would change at least the community around me. But it is always harder than you think to achieve what you really wanted. People like to give up halfway ... ,get bored of the side project ... , overloaded with full-time job ... , of course, I feel it that way too. But, I will keep going. Somedays, it is going to be big."},{id:2,date:"2020-05-20 23:31",image:"post2.jpg",title:"New Normal and New Beginning",tag:"Life",description:"Every new beginning is a time for doing soul-searching...",content:"Tomorrow is the day that I have worked in Etiqa Insurance Singapore for 1 year. I have learnt a lot from this company, somehow, I think I am finally able to catch up to the technology world and not be left behind. But, I always think that I should look for change and not sitting in my own comfort zone. I should do something that I am proud of and feel worth. After all, working for others for rest of my life is not an option.Last but not least, if you are my potential client, do leave me a message to my email !"}]}},GiOv:function(e,t,a){e.exports=a.p+"static/post2-7bf07f70954baa955ca6cf183ef22bf1.jpg"},JDvq:function(e,t,a){e.exports=a.p+"static/post1-1a624bd9584de7d2d468ccfa4e48e988.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),u=a.n(l),n=a("Bl7J"),r=a("vrFN"),o=a("Wbzz"),v=a("2mvg"),i=a("k1TG"),c=a("8o2o"),s=a("TSYQ"),A=a.n(s),d=a("vUet"),m=a("dbZe"),f=u.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,n=e.size,r=e.active,o=e.className,v=e.block,s=e.type,f=e.as,b=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(d.a)(a,"btn"),g=A()(o,p,r&&"active",p+"-"+l,v&&p+"-block",n&&p+"-"+n);if(b.href)return u.a.createElement(m.a,Object(i.a)({},b,{as:f,ref:t,className:A()(g,b.disabled&&"disabled")}));t&&(b.ref=t),f||(b.type=s);var w=f||"button";return u.a.createElement(w,Object(i.a)({},b,{className:g}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var b=f,p=function(e){var t=e.title,l=e.description,n=e.tag,r=e.image,i=e.content;return u.a.createElement(o.Link,{to:"/post/",state:{image:r,title:t,content:i},style:{textDecoration:"none",color:"black"}},u.a.createElement("div",null,u.a.createElement("div",{className:"text-center"},u.a.createElement(v.a,{className:"thumbnail",src:a("a2qD")("./"+r),rounded:!0})),u.a.createElement("h5",null,t),u.a.createElement("p",null,l),u.a.createElement("div",null,u.a.createElement(b,{variant:"outline-warning"},n))),u.a.createElement("hr",null))},g=a("YdCC"),w=function(e){return u.a.forwardRef((function(t,a){return u.a.createElement("div",Object(i.a)({},t,{ref:a,className:A()(t.className,e)}))}))},h=a("Wzyw"),y=u.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,n=e.variant,r=e.as,o=void 0===r?"img":r,v=Object(c.a)(e,["bsPrefix","className","variant","as"]),s=Object(d.a)(a,"card-img");return u.a.createElement(o,Object(i.a)({ref:t,className:A()(n?s+"-"+n:s,l)},v))}));y.displayName="CardImg",y.defaultProps={variant:null};var E=y,C=w("h5"),I=w("h6"),j=Object(g.a)("card-body"),N=u.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,o=e.text,v=e.border,s=e.body,m=e.children,f=e.as,b=void 0===f?"div":f,p=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(d.a)(a,"card"),w=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return u.a.createElement(h.a.Provider,{value:w},u.a.createElement(b,Object(i.a)({ref:t},p,{className:A()(n,g,r&&"bg-"+r,o&&"text-"+o,v&&"border-"+v)}),s?u.a.createElement(j,null,m):m))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=E,N.Title=Object(g.a)("card-title",{Component:C}),N.Subtitle=Object(g.a)("card-subtitle",{Component:I}),N.Body=j,N.Link=Object(g.a)("card-link",{Component:"a"}),N.Text=Object(g.a)("card-text",{Component:"p"}),N.Header=Object(g.a)("card-header"),N.Footer=Object(g.a)("card-footer"),N.ImgOverlay=Object(g.a)("card-img-overlay");var O=N,k=function(){return u.a.createElement(O,{border:"warning"},u.a.createElement(O.Body,null,u.a.createElement("blockquote",{className:"blockquote mb-0"},u.a.createElement("p",null,"Live as if you were to die tomorrow. Learn as if you were to live forever."),u.a.createElement("footer",{className:"blockquote-footer"},"Mahatma Gandhi"))))},R=a("7vrA"),x=a("3Z9Z"),q=a("JI6e"),B=a("7XRO"),M=a.n(B);a("YwZP"),a("+ZDr"),t.default=function(){return u.a.createElement(n.a,null,u.a.createElement(r.a,{title:"Homepage"}),u.a.createElement(R.a,null,u.a.createElement(x.a,{className:"mt-2 mb-5"},u.a.createElement(q.a,{className:"text-center"},u.a.createElement(k,null))),M.a.posts.reverse().map((function(e,t){return u.a.createElement(x.a,{key:"item_"+t,className:"mt-2 mb-2"},u.a.createElement(q.a,null,u.a.createElement(p,{title:e.title,description:e.description,tag:e.tag,image:e.image,content:e.content})))}))))}},Yhqy:function(e,t){e.exports="data:image/png;base64,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"},a2qD:function(e,t,a){var l={"./favicon.png":"Yhqy","./gatsby-astronaut.png":"qRbu","./post1.jpg":"JDvq","./post2.jpg":"GiOv"};function u(e){var t=n(e);return a(t)}function n(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}u.keys=function(){return Object.keys(l)},u.resolve=n,e.exports=u,u.id="a2qD"},qRbu:function(e,t,a){e.exports=a.p+"static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-380bf9ffcdf5cc436e4a.js.map