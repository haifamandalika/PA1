/*! For license information please see 7.b3947ec0.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[7],{188:function(e,a,t){"use strict";t.r(a);var l=t(8),n=t(0),r=t.n(n),o=t(34),c=t(50),s=t(51),i=t(65),m=t(61),u=t(33),d=t(32),g=t(62),b=t(39),p=t(38),f=t.n(p),E=t(14),v=t(64);a.default=function(){var e=Object(n.useState)(1),a=Object(l.a)(e,2),t=a[0],p=a[1],y=Object(n.useState)([]),x=Object(l.a)(y,2),C=x[0],h=x[1],k=b.a.length;return Object(n.useEffect)((function(){h(b.a.slice(10*(t-1),10*t))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,"Dashboard"),r.a.createElement(o.a,null),r.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},r.a.createElement(c.a,{title:"Definisi Umum",value:"6389"},r.a.createElement(g.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),r.a.createElement(c.a,{title:"Transmisi Pneumonia",value:"6389"},r.a.createElement(g.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),r.a.createElement(c.a,{title:"Faktor & Risiko Pneumonia",value:"6389"},r.a.createElement(g.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),r.a.createElement(c.a,{title:"Mencegah Pneumonia",value:"6389"},r.a.createElement(g.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"}))),r.a.createElement(E.TableContainer,null,r.a.createElement(E.Table,null,r.a.createElement(E.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(E.TableCell,null,"Kabupaten"),r.a.createElement(E.TableCell,null,"Tahun"),r.a.createElement(E.TableCell,null,"Status"),r.a.createElement(E.TableCell,null,"Date"))),r.a.createElement(E.TableBody,null,C.map((function(e,a){return r.a.createElement(E.TableRow,{key:a},r.a.createElement(E.TableCell,null,r.a.createElement("div",{className:"flex items-center text-sm"},r.a.createElement(E.Avatar,{className:"hidden mr-3 md:block",src:f.a,alt:"User image"}),r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.name),r.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},e.job)))),r.a.createElement(E.TableCell,null,r.a.createElement("span",{className:"text-sm"},"$ ",e.amount)),r.a.createElement(E.TableCell,null,r.a.createElement(E.Badge,{type:e.status},e.status)),r.a.createElement(E.TableCell,null,r.a.createElement("span",{className:"text-sm"},new Date(e.date).toLocaleDateString())))})))),r.a.createElement(E.TableFooter,null,r.a.createElement(E.Pagination,{totalResults:k,resultsPerPage:10,label:"Table navigation",onChange:function(e){p(e)}}))),r.a.createElement(u.a,null,"Charts"),r.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2"},r.a.createElement(s.a,{title:"Revenue"},r.a.createElement(i.b,v.d),r.a.createElement(m.a,{legends:v.c})),r.a.createElement(s.a,{title:"Traffic"},r.a.createElement(i.c,v.f),r.a.createElement(m.a,{legends:v.e}))))}},50:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(14);a.a=function(e){var a=e.title,t=e.value,l=e.children;return n.a.createElement(r.Card,null,n.a.createElement(r.CardBody,{className:"flex items-center"},l,n.a.createElement("div",null,n.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},a),n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}},51:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.children,t=e.title;return n.a.createElement("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},n.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),a)}},61:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.legends;return n.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},a.map((function(e){return n.a.createElement("div",{className:"flex items-center",key:e.title},n.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),n.a.createElement("span",null,e.title))})))}},62:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(63),o=t.n(r);a.a=function(e){var a=e.icon,t=e.iconColorClass,l=void 0===t?"text-purple-600 dark:text-purple-100":t,r=e.bgColorClass,c=void 0===r?"bg-purple-100 dark:bg-purple-600":r,s=e.className,i=o()("p-3 rounded-full",l,c,s);return n.a.createElement("div",{className:i},n.a.createElement(a,{className:"w-5 h-5"}))}},63:function(e,a,t){var l;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var l=arguments[a];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)&&l.length){var o=n.apply(null,l);o&&e.push(o)}else if("object"===r)for(var c in l)t.call(l,c)&&l[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(a,[]))||(e.exports=l)}()},64:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return n})),t.d(a,"a",(function(){return r})),t.d(a,"d",(function(){return o})),t.d(a,"f",(function(){return c})),t.d(a,"b",(function(){return s}));var l=[{title:"Tinggi",color:"bg-red-500"},{title:"Rendah",color:"bg-green-600"},{title:"Sedang",color:"bg-yellow-600"}],n=[{title:"Tinggi",color:"bg-red-600"},{title:"Rendah",color:"bg-green-600"}],r=[{title:"Rendah",color:"bg-green-600"},{title:"Sedang",color:"bg-yellow-600"}],o={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Tinggi","Rendah","Sedang"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},c={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Rendah",backgroundColor:"#0694a2",borderColor:"#0694a2",data:[43,48,40,54,67,73,70],fill:!1},{label:"Sedang",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}},s={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Shoes",backgroundColor:"#0694a2",borderWidth:1,data:[-3,14,52,74,33,90,70]},{label:"Bags",backgroundColor:"#7e3af2",borderWidth:1,data:[66,33,43,12,54,62,84]}]},options:{responsive:!0},legend:{display:!1}}}}]);
//# sourceMappingURL=7.b3947ec0.chunk.js.map