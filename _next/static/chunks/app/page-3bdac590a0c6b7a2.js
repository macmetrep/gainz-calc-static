(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{63963:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,48173,23)),Promise.resolve().then(t.t.bind(t,87970,23)),Promise.resolve().then(t.bind(t,76291))},76291:(e,a,t)=>{"use strict";t.d(a,{Sf:()=>B,MuscleGainCalculator:()=>et,rg:()=>G,fi:()=>W,QN:()=>Y,TX:()=>q,HD:()=>X,Lj:()=>ee,r_:()=>J});var r=t(95155),n=t(12115),s=t(43463),i=t(69795);function l(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,i.QP)((0,s.$)(a))}let o=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,r.jsx)("div",{ref:a,className:l("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});o.displayName="Card";let d=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,r.jsx)("div",{ref:a,className:l("flex flex-col space-y-1.5 p-6",t),...n})});d.displayName="CardHeader";let c=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,r.jsx)("h3",{ref:a,className:l("text-2xl font-semibold leading-none tracking-tight",t),...n})});c.displayName="CardTitle";let h=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,r.jsx)("div",{ref:a,className:l("p-6 pt-0",t),...n})});h.displayName="CardContent";var m=t(91290);let g=(0,t(31027).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=n.forwardRef((e,a)=>{let{className:t,variant:n,size:s,asChild:i=!1,...o}=e,d=i?m.DX:"button";return(0,r.jsx)(d,{className:l(g({variant:n,size:s,className:t})),ref:a,...o})});u.displayName="Button";var x=t(30814);let f="w-full h-6 sm:h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700",b=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:["Weight (",e.unit===Y.METRIC?"kg":"lbs",")"]}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("input",{type:"range",name:"weight",value:e.weight,onChange:a,min:e.unit===Y.METRIC?"30":"66",max:e.unit===Y.METRIC?"200":"440",step:"0.1",className:f}),(0,r.jsx)("input",{type:"number",name:"weight",value:e.weight,onChange:a,className:"w-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),p=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Height (cm)"}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("input",{type:"range",name:"height",value:e.height,onChange:a,min:"120",max:"220",step:"0.5",className:f}),(0,r.jsx)("input",{type:"number",name:"height",value:e.height,onChange:a,className:"w-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),y=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Height (ft & in)"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,r.jsx)("input",{type:"number",name:"feet",value:e.feet,onChange:a,placeholder:"Feet",className:"w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"}),(0,r.jsx)("input",{type:"number",name:"inches",value:e.inches,onChange:a,placeholder:"Inches",step:"0.1",className:"w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),v=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Body Fat %"}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("input",{type:"range",name:"bodyFat",value:e.bodyFat,onChange:a,min:"3",max:"50",step:"0.1",className:f}),(0,r.jsx)("input",{type:"number",name:"bodyFat",value:e.bodyFat,onChange:a,className:"w-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),k=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Age"}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("input",{type:"range",name:"age",value:e.age,onChange:a,min:"18",max:"100",className:f}),(0,r.jsx)("input",{type:"number",name:"age",value:e.age,onChange:a,className:"w-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),M=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Units"}),(0,r.jsxs)("select",{name:"unit",value:e.unit,onChange:a,className:"w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",children:[(0,r.jsx)("option",{value:Y.METRIC,children:"Metric (kg/cm)"}),(0,r.jsx)("option",{value:Y.IMPERIAL,children:"Imperial (lbs/inches)"})]})]}),j=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Sex"}),(0,r.jsxs)("select",{name:"sex",value:e.sex,onChange:a,className:"w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",children:[(0,r.jsx)("option",{value:G.MALE,children:"Male"}),(0,r.jsx)("option",{value:G.FEMALE,children:"Female"})]})]}),N=(e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Projection Years"}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("input",{type:"range",name:"years",value:e.years,onChange:a,min:"1",max:"10",step:"1",className:f}),(0,r.jsx)("input",{type:"number",name:"years",value:e.years,onChange:a,min:"1",max:"10",step:"1",className:"w-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"})]})]}),E=(e,a)=>{var t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium mb-1 dark:text-gray-100",children:"Training Level"}),(0,r.jsx)("select",{name:"trainingLevel",value:e.trainingLevel,onChange:a,className:"w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",children:Object.entries(W).map(e=>{let[a,t]=e;return(0,r.jsx)("option",{value:a,children:t.label},a)})}),(0,r.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:null===(t=W[e.trainingLevel])||void 0===t?void 0:t.description})]})},I=(e,a)=>(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex flex-col space-y-2",children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("input",{type:"checkbox",name:"enhanced",checked:!!e.enhanced,onChange:e=>a(a=>({...a,enhanced:e.target.checked})),className:"w-6 h-6"}),(0,r.jsx)("span",{className:"text-md dark:text-gray-100",children:"Enhanced Athlete (Roid's Mode)"})]})})}),w=e=>{var a,t,s;let{ffmiData:i,metrics:l}=e,[o,d]=(0,n.useState)(!0);return(0,r.jsxs)("div",{className:"p-4 bg-gray-100 dark:bg-gray-900 rounded",children:[(0,r.jsx)("h3",{className:"font-bold mb-2",children:"Current Stats:"}),(0,r.jsxs)("p",{children:["Lean Mass: ",null===(a=i[0])||void 0===a?void 0:a.leanMass," ",l.unit===Y.METRIC?"kg":"lbs"]}),(0,r.jsxs)("p",{children:["FFMI (Fat Free Mass Index): ",null===(t=i[0])||void 0===t?void 0:t.ffmi]}),(0,r.jsxs)("p",{children:["BMI (Body Mass Index): ",null===(s=i[0])||void 0===s?void 0:s.bmi]}),(0,r.jsxs)("button",{onClick:()=>d(!o),className:"mt-4 text-blue-500 hover:text-blue-700 underline flex items-center gap-1",children:[(0,r.jsx)("span",{className:"inline-block transform transition-transform",children:o?"▼":"▶"}),o?"Hide Info":"More Info"]}),o&&(0,r.jsxs)("div",{className:"mt-4 space-y-4",children:[(0,r.jsxs)("p",{children:["This calculator models how people slow down in their muscle growth as they become more advanced, and get fast results as a newbie.  ",(0,r.jsx)("a",{href:"https://x.com/meta_boli/status/1884449062210212098",target:"_blank",className:"text-blue-500 hover:text-blue-700 underline",rel:"noopener",children:"The formula is based on 1 hour of AI research"}),", so it is not authoritative and could be much better, but it's a good start to figure out how fast you will grow."]}),(0,r.jsxs)("p",{children:["We use the concept of ",(0,r.jsx)("a",{href:"https://www.youtube.com/watch?v=o_FgDsH8CBY",target:"_blank",className:"text-blue-500 hover:text-blue-700 underline",rel:"noopener",children:"FFMI (Fat Free Mass Index)"})," to model how much muscle you have, and how much you have left to grow independently of your body fat percentage and height."]})]})]})},F=(e,a)=>(0,r.jsx)(w,{ffmiData:e,metrics:a}),A=e=>{let{metrics:a,ffmiData:t}=e,n=window.location.href,s=a.unit===Y.METRIC?"kg":"lbs",i=async()=>{try{await navigator.clipboard.writeText(n),x.o.success("Link copied to clipboard!")}catch(e){x.o.error("Failed to copy link")}};return(0,r.jsxs)("div",{className:"flex justify-center sm:justify-start gap-2",children:[(0,r.jsx)(u,{variant:"secondary",onClick:i,className:"whitespace-nowrap dark:text-gray-100 dark:bg-gray-700",children:"Copy Link"}),(0,r.jsx)(u,{variant:"secondary",onClick:()=>{var e,r;let i="Check out my gainz projection! Starting at ".concat(null===(e=t[0])||void 0===e?void 0:e.leanMass," ").concat(s," of lean mass and projecting to ").concat(null===(r=t[t.length-1])||void 0===r?void 0:r.leanMass," ").concat(s," in ").concat(a.years," years."),l="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(i),"&url=").concat(encodeURIComponent(n));window.open(l,"_blank")},className:"whitespace-nowrap dark:text-gray-100 dark:bg-gray-700",children:"Share on X"})]})};var C=t(58581),L=t(28091),R=t(15255),T=t(12800),D=t(66963),_=t(27112),P=t(86354),S=t(16161),O=t(69665),H=t(43322);let U=(e,a)=>(0,r.jsx)("div",{className:"h-96 -mx-6 sm:mx-0",children:(0,r.jsx)(C.u,{width:"100%",height:"100%",children:(0,r.jsxs)(L.b,{data:e,margin:{top:25,right:-30,left:5,bottom:25},children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"8",height:"8",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 8 0 L 0 0 0 8",fill:"none",stroke:"rgba(0, 0, 0, 0.1)",strokeWidth:"0.5"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"rgb(243 244 246)",className:"dark:fill-gray-900"}),(0,r.jsx)(R.d,{strokeDasharray:"3 3",stroke:"rgba(0, 0, 0, 0.2)",className:"dark:stroke-gray-700"}),(0,r.jsx)(T.W,{dataKey:"month",label:{value:"Months",position:"insideBottom",offset:-15},padding:{left:0,right:0},stroke:"#666666",className:"dark:text-gray-300"}),(0,r.jsx)(D.h,{yAxisId:"ffmi",orientation:"right",label:{value:"FFMI",angle:90,position:"insideRight"},domain:[e=>J(e,a).ffmi,e=>ee(e,a).ffmi],tick:{fill:"#666666"},tickLine:{stroke:"#666666"},axisLine:{stroke:"#666666"},className:"dark:text-gray-300"}),(0,r.jsx)(D.h,{yAxisId:"leanMass",orientation:"left",label:{value:"Lean Mass (".concat(a.unit===Y.METRIC?"kg":"lbs",")"),angle:-90,position:"insideLeft",offset:10,style:{textAnchor:"middle",dy:"50%"}},padding:{left:10},domain:[e=>J(e,a).leanMass,e=>ee(e,a).leanMass],className:"dark:text-gray-300"}),(0,r.jsx)(_.m,{contentStyle:{backgroundColor:"rgb(31 41 55)",border:"1px solid rgb(75 85 99)",borderRadius:"0.375rem",color:"rgb(243 244 246)"},itemStyle:{color:"rgb(243 244 246)"},labelFormatter:e=>"Month ".concat(e)}),(0,r.jsx)(P.s,{layout:"horizontal",verticalAlign:"bottom",align:"center",height:36,wrapperStyle:{paddingTop:"20pt"}}),(0,r.jsx)(S.N,{yAxisId:"ffmi",type:"monotone",dataKey:"ffmi",stroke:"#6366f1",strokeWidth:2,name:"FFMI",legendType:"none"}),(0,r.jsx)(S.N,{yAxisId:"leanMass",type:"monotone",dataKey:"leanMass",stroke:"#059669",strokeWidth:2,name:"Lean Mass (".concat(a.unit===Y.METRIC?"kg":"lbs",")")}),Object.values(B).map((e,t,n)=>{let s=X(a.height,a.unit),i=a.sex===G.MALE?e.maleFFMI:e.femaleFFMI,l=q(i,s,a.unit),o=n[t-1];if(!a.enhanced&&(e===B.ENHANCED_TERRITORY||e===B.ENHANCED_ELITE))return null;let d=o?q(a.sex===G.MALE?o.maleFFMI:o.femaleFFMI,s,a.unit):q(i+2,s,a.unit);return(0,r.jsx)(O.T,{yAxisId:"leanMass",y1:l,y2:d,fill:e.stroke,fillOpacity:.1,stroke:"none",label:{value:e.label,position:"insideRight",fill:e.stroke,fontSize:12}},"lean-mass-range-".concat(e.label))}),Array.from({length:a.years},(e,a)=>(0,r.jsx)(H.e,{x:(a+1)*12,yAxisId:"leanMass",stroke:"#666666",className:"dark:stroke-gray-500",strokeDasharray:"3 3",label:{value:"Year ".concat(a+1),position:"top",fill:"#666666",className:"dark:fill-gray-300",fontSize:12}},"year-".concat(a+1)))]})})}),z={male:{natural:{rate:.3,ceiling:25},enhanced:{rate:.54,ceiling:28}},female:{natural:{rate:.18,ceiling:20.5},enhanced:{rate:.324,ceiling:23}}},W={MAINTENANCE:{level:0,label:"Maintenance",description:"Zero net change, just doing enough to not lose lean mass"},RECREATIONAL:{level:.33,label:"Recreational Lifter",description:"Steady gains, doing enough to gain muscle and getting started. Nutrition, sleep and recovery are not optimal."},DEDICATED:{level:.66,label:"Dedicated Training",description:"Good training, good nutrition, good recovery"},ELITE:{level:.99,label:"Elite Programming",description:"Very good training, nutrition, recovery, sleep, and almost no injuries. Hard to pull off, takes a good amount of time per week."}},B={ENHANCED_ELITE:{label:"Unlikely Natural/Enhanced Elite",maleFFMI:30,femaleFFMI:25,stroke:"#c026d3"},ENHANCED_TERRITORY:{label:"Advanced Enhanced Territory",maleFFMI:27,femaleFFMI:23,stroke:"#d946ef"},NATURAL_LIMIT:{label:"Suspicious/Enhanced Territory",maleFFMI:25,femaleFFMI:21,stroke:"#ff0000"},ADVANCED:{label:"Advanced/Competitive (Near Natural Limit)",maleFFMI:23,femaleFFMI:19,stroke:"#ff7300"},EXPERIENCED:{label:"Experienced Lifter",maleFFMI:21,femaleFFMI:17,stroke:"#eab308"},RECREATIONAL:{label:"Recreational Lifter",maleFFMI:19,femaleFFMI:15,stroke:"#22c55e"},UNTRAINED:{label:"Untrained Average",maleFFMI:17,femaleFFMI:13,stroke:"#0ea5e9"},BELOW_AVERAGE:{label:"Below Average",maleFFMI:15,femaleFFMI:11,stroke:"#3b82f6"},UNDERWEIGHT:{label:"Underweight (Dangerous?)",maleFFMI:13,femaleFFMI:9,stroke:"#60a5fa"}},Y={METRIC:"metric",IMPERIAL:"imperial"},G={MALE:"male",FEMALE:"female"},K={weight:e=>.453592*e,height:e=>2.54*e},V={weight:e=>2.20462*e,height:e=>e/2.54},X=(e,a)=>a===Y.IMPERIAL?.0254*e:e/100,Q=(e,a)=>a===Y.IMPERIAL?K.weight(e):e,Z=(e,a)=>Object.values(B).filter(e=>a||e!==B.ENHANCED_TERRITORY&&e!==B.ENHANCED_ELITE).map(a=>e===G.MALE?a.maleFFMI:a.femaleFFMI),$=(e,a)=>e/(a*a),q=(e,a,t)=>{let r=a*a*e;return t===Y.IMPERIAL?V.weight(r):r},J=(e,a)=>{let t=X(a.height,a.unit),r=$(Q(e,a.unit),t),n=Math.floor(q(Math.max(...Z(a.sex,a.enhanced).filter(e=>e<r)),t,a.unit)-.2),s=$(n,t);return{leanMass:n,ffmi:s}},ee=(e,a)=>{let t=X(a.height,a.unit),r=$(Q(e,a.unit),t),n=Math.ceil(q(Math.min(...Z(a.sex,a.enhanced).filter(e=>e>r)),t,a.unit)+4),s=$(n,t);return{leanMass:n,ffmi:s}},ea=()=>{let[e,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{a(window.innerWidth<640)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e};function et(){let e=ea(),[a,t]=(0,n.useState)({weight:178,height:71,bodyFat:25,age:27,sex:G.MALE,unit:Y.IMPERIAL,feet:5,inches:11,enhanced:!1,years:4,trainingLevel:"DEDICATED"});(0,n.useEffect)(()=>{let a=(e,a,t)=>{let r;let n=new URLSearchParams(window.location.search).get(e);if(!n)return a;try{if("boolean"==typeof a)r="true"===n.toLowerCase();else if("number"==typeof a){if(r=parseFloat(n),isNaN(r))return a}else r=n;return t?t(r):r}catch(e){return a}},r=a("unit",Y.IMPERIAL,e=>Object.values(Y).includes(e)?e:Y.IMPERIAL),n=a("feet",5,e=>Math.max(4,Math.min(8,e))),s=a("inches",11,e=>Math.max(0,Math.min(11.9,e))),i=r===Y.IMPERIAL?12*n+s:a("height",71,e=>Math.max(120,Math.min(220,e)));console.log(i),t({weight:a("weight",178,e=>Math.max(30,Math.min(440,e))),height:i,bodyFat:a("bodyFat",25,e=>Math.max(3,Math.min(50,e))),age:a("age",27,e=>Math.max(18,Math.min(100,e))),sex:a("sex",G.MALE,e=>Object.values(G).includes(e)?e:G.MALE),unit:r,feet:n,inches:s,enhanced:a("enhanced",!1),years:a("years",e?2:4,e=>Math.max(1,Math.min(10,e))),trainingLevel:a("trainingLevel","DEDICATED",e=>Object.keys(W).includes(e)?e:"DEDICATED")})},[]),(0,n.useEffect)(()=>{let e=new URLSearchParams;Object.entries(a).forEach(a=>{let[t,r]=a;null!=r&&e.set(t,r.toString())});let t="".concat(window.location.pathname,"?").concat(e.toString());window.history.replaceState({},"",t)},[a]);let[s,i]=(0,n.useState)([]);(0,n.useEffect)(()=>{let{ffmi:e,bmi:t}=((e,t,r)=>{let n=a.unit===Y.IMPERIAL?K.weight(e):e,s=X(t,a.unit);return{ffmi:n*(1-r/100)/(s*s),bmi:n/(s*s)}})(a.weight,a.height,a.bodyFat),r=[],n=e,s=12*a.years;for(let e=0;e<=s;e++){let s=X(a.height,a.unit),i=s*s*n,l=a.unit===Y.IMPERIAL?V.weight(i):i;r.push({month:e,ffmi:n.toFixed(2),bmi:t.toFixed(2),leanMass:l.toFixed(1)});let o=function(e){let{gender:a,pedUse:t,trainingLevelKey:r,currentFFMI:n,age:s}=e,i=z[a][t?"enhanced":"natural"];return W[r].level*i.rate*(i.ceiling-n)/(t?6:8)*1.1*Math.exp(-.0175*(s-18))}({gender:a.sex,pedUse:a.enhanced,trainingLevelKey:a.trainingLevel,currentFFMI:n,age:a.age});n+=o}i(r)},[a]),(0,n.useEffect)(()=>{t(a=>({...a,years:e?2:4}))},[e]);let l=e=>{let{name:a,value:r}=e.target;t(e=>{let t={...e,[a]:"sex"===a||"unit"===a||"trainingLevel"===a?r:Math.round(100*parseFloat(r))/100};return"feet"===a||"inches"===a?t.height=Math.round((12*parseFloat(t.feet||0)+parseFloat(t.inches||0))*100)/100:"unit"===a&&(r===Y.IMPERIAL?(t.height=V.height(e.height),t.weight=V.weight(e.weight),t.feet=Math.floor(t.height/12),t.inches=Math.round(t.height%12*100)/100):(t.height=K.height(e.height),t.weight=K.weight(e.weight)),t.height=Math.round(100*t.height)/100,t.weight=Math.round(100*t.weight)/100),t})};return(0,r.jsxs)(o,{className:"w-full max-w-none mx-0 rounded-none sm:rounded-lg dark:bg-gray-900 dark:text-gray-100",children:[(0,r.jsx)(d,{children:(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[(0,r.jsx)(c,{className:"text-center sm:text-left",children:"Max Lean Mass Gained Per Month Calculator"}),(0,r.jsx)(A,{metrics:a,ffmiData:s})]})}),(0,r.jsxs)(h,{children:[U(s,a),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-6",children:[(0,r.jsx)("div",{className:"space-y-4 md:col-span-2",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[b(a,l),a.unit===Y.METRIC?p(a,l):y(a,l),v(a,l),k(a,l),M(a,l),j(a,l),N(a,l),E(a,l),I(a,t)]})}),(0,r.jsx)("div",{className:"space-y-4",children:F(s,a)})]})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[814,963,441,517,358],()=>a(63963)),_N_E=e.O()}]);