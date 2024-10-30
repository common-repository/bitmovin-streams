!function(){"use strict";var e,t={169:function(e,t,n){var i=n(848),a=window.wp.blocks,r=window.wp.element;const s=e=>{const t=`https://streams.bitmovin.com/${e.streamId}/embed`;return(0,i.jsx)("div",{className:"bitmovin-stream-wrapper",children:(0,i.jsx)("iframe",{src:t,title:"bitmovin-streams",allow:"fullscreen"})})},o=({errorMessage:e,onReset:t})=>(0,i.jsx)("div",{className:"bitmovin-upload-wrapper bitmovin-has-upload-error",children:(0,i.jsxs)("div",{className:"bitmovin-error-wrapper",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-alert-circle",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}),(0,i.jsx)("path",{d:"M12 8l0 4"}),(0,i.jsx)("path",{d:"M12 16l.01 0"})]}),(0,i.jsx)("div",{className:"bitmovin-error-message",children:e}),(0,i.jsx)("button",{className:"bitmovin-button bitmovin-upload-reset-button",onClick:()=>t(),children:"Reset"})]})});var l=window.wp.components;const c=e=>{const[t,n]=(0,r.useState)(),[a,s]=(0,r.useState)(),[c,d]=(0,r.useState)(),[u,h]=(0,r.useState)(!1),m=(0,r.useRef)(),p=(0,r.useRef)(c),v=e=>{p.current=e,d(e)},g=t=>{return i=void 0,a=void 0,o=function*(){const i={method:"POST",headers:{"x-api-key":e.apiKey,"Content-Type":"application/json"},body:JSON.stringify({})};if(t.size/1048576>5e3)return void s("Max video size is limited to 5GB.");n(0),h(!0);const a=yield fetch("https://api.bitmovin.com/v1/encoding/inputs/direct-file-upload",i),r=yield a.json(),o=r.data.result.uploadUrl,l=r.data.result.id;v(l),b(o,t)},new((r=void 0)||(r=Promise))((function(e,t){function n(e){try{l(o.next(e))}catch(e){t(e)}}function s(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,s)}l((o=o.apply(i,a||[])).next())}));var i,a,r,o},b=(e,t)=>{const n=new XMLHttpRequest;var i;i=n,m.current=i,n.upload.onprogress=e=>y(e),n.upload.onerror=()=>f(n.status),n.onreadystatechange=()=>x(n),n.open("PUT",e),n.overrideMimeType(t.type),n.send(t)},f=e=>{j(!1),s("Upload failed, something went wrong")},y=e=>{if(e.lengthComputable){const t=Math.ceil(e.loaded/e.total*100);n(t)}},x=t=>{4===t.readyState&&(t.status>=400?f(t.status):200===t.status&&(n(100),(null==p?void 0:p.current)&&e.onUploadDone(p.current)),h(!1))},j=e=>{var t;null===(t=null==m?void 0:m.current)||void 0===t||t.abort(),h(!1),n(void 0),v(void 0),e&&s(void 0)};return a?(0,i.jsx)(o,{errorMessage:a,onReset:()=>s(void 0)}):(0,i.jsx)("div",{className:"bitmovin-upload-wrapper",children:void 0!==t?(e=>u?(0,i.jsxs)("div",{className:"bitmovin-upload-progress-wrapper",children:[(0,i.jsxs)("div",{className:"bitmovin-upload-progress-text",children:[(0,i.jsx)("div",{children:"Uploading video"}),(0,i.jsx)("div",{children:"Please do not leave this page until the upload is finished."})]}),e<100?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"bitmovin-upload-progressbar","data-label":`${e}%`,style:{color:e>55?"white":"black"},children:(0,i.jsx)("span",{className:"bitmovin-upload-progressbar-value",style:{width:`${e}%`}})}),(0,i.jsx)("button",{className:"bitmovin-button bitmovin-upload-cancel-button",onClick:()=>j(!0),children:"Cancel upload"})]}):(0,i.jsx)("div",{className:"bitmovin-upload-progress-text",children:"Verifying Upload"})]}):(0,i.jsx)("div",{className:"bitmovin-upload-progress-wrapper",children:(0,i.jsx)("div",{className:"bitmovin-upload-progress-text",children:"Upload done"})}))(t):(0,i.jsxs)("div",{className:"bitmovin-input-hint",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"Drop video here"}),(0,i.jsx)("div",{children:"or"})]}),(0,i.jsxs)("div",{className:"file-picker",children:[(0,i.jsx)(l.DropZone,{onFilesDrop:(e,t)=>{g(e[0])}}),(0,i.jsx)("label",{htmlFor:"upload-input",className:"bitmovin-select-label",children:(0,i.jsx)("button",{className:"bitmovin-button bitmovin-upload-select-button",children:"Choose a file"})}),(0,i.jsx)("input",{id:"upload-input",type:"file",style:{display:"none"},onChange:e=>{const t=e.target;t&&t.files&&t.files.length>0?g(t.files[0]):s("Input file is not allowed")}})]})]})})},d=e=>{const[t,n]=(0,r.useState)(),[a,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(),[u,h]=(0,r.useState)(function(){const e=["admiring","adoring","affectionate","agitated","amazing","angry","awesome","beautiful","blissful","bold","boring","brave","busy","charming","clever","cool","compassionate","competent","condescending","confident","cranky","crazy","dazzling","determined","distracted","dreamy","eager","ecstatic","elastic","elated","elegant","eloquent","epic","exciting","fervent","festive","flamboyant","focused","friendly","frosty","funny","gallant","gifted","goofy","gracious","great","happy","hardcore","heuristic","hopeful","hungry","infallible","inspiring","intelligent","interesting","jolly","jovial","keen","kind","laughing","loving","lucid","magical","mystifying","modest","musing","naughty","nervous","nice","nifty","nostalgic","objective","optimistic","peaceful","pedantic","pensive","practical","priceless","quirky","quizzical","recursing","relaxed","reverent","romantic","sad","serene","sharp","silly","sleepy","stoic","strange","stupefied","suspicious","sweet","tender","thirsty","trusting","unruffled","upbeat","vibrant","vigilant","vigorous","wizardly","wonderful","xenodochial","youthful","zealous","zen"],t=["agnesi","albattani","allen","almeida","antonelli","archimedes","ardinghelli","aryabhata","austin","babbage","banach","banzai","bardeen","bartik","bassi","beaver","bell","benz","bhabha","bhaskara","black","blackburn","blackwell","bohr","booth","borg","bose","bouman","boyd","brahmagupta","brattain","brown","buck","burnell","cannon","carson","cartwright","carver","cerf","chandrasekhar","chaplygin","chatelet","chatterjee","chaum","chebyshev","clarke","cohen","colden","cori","cray","curran","curie","darwin","davinci","dewdney","dhawan","diffie","dijkstra","dirac","driscoll","dubinsky","easley","edison","einstein","elbakyan","elgamal","elion","ellis","engelbart","euclid","euler","faraday","feistel","fermat","fermi","feynman","franklin","gagarin","galileo","galois","ganguly","gates","gauss","germain","goldberg","goldstine","goldwasser","golick","goodall","gould","greider","grothendieck","haibt","hamilton","haslett","hawking","hellman","heisenberg","hermann","herschel","hertz","heyrovsky","hodgkin","hofstadter","hoover","hopper","hugle","hypatia","ishizaka","jackson","jang","jemison","jennings","jepsen","johnson","joliot","jones","kalam","kapitsa","kare","keldysh","keller","kepler","khayyam","khorana","kilby","kirch","knuth","kowalevski","lalande","lamarr","lamport","leakey","leavitt","lederberg","lehmann","lewin","lichterman","liskov","lovelace","lumiere","mahavira","margulis","matsumoto","maxwell","mayer","mccarthy","mcclintock","mclaren","mclean","mcnulty","mendel","mendeleev","meitner","meninsky","merkle","mestorf","mirzakhani","montalcini","moore","morse","murdock","moser","napier","nash","neumann","newton","nightingale","nobel","noether","northcutt","noyce","panini","pare","pascal","pasteur","payne","perlman","pike","poincare","poitras","proskuriakova","ptolemy","raman","ramanujan","ride","ritchie","rhodes","robinson","roentgen","rosalind","rubin","saha","sammet","sanderson","satoshi","shamir","shannon","shaw","shirley","shockley","shtern","sinoussi","snyder","solomon","spence","stonebraker","sutherland","swanson","swartz","swirles","taussig","tereshkova","tesla","tharp","thompson","torvalds","tu","turing","varahamihira","vaughan","villani","visvesvaraya","volhard","wescoff","wilbur","wiles","williams","williamson","wilson","wing","wozniak","wright","wu","yalow","yonath","zhukovsky"],n=Math.floor(Math.random()*e.length),i=Math.floor(Math.random()*t.length);return`${e[n]} ${t[i]}`}()),m=window.bitmovinApiKey;return(0,r.useEffect)((()=>{t&&(t=>{const n=JSON.stringify({assetUrl:"https://api.bitmovin.com/v1/encoding/inputs/direct-file-upload/"+t,title:u}),i={"Content-Type":"application/json","x-api-key":m};s(!0),fetch("https://api.bitmovin.com/v1/streams/video",{method:"POST",body:n,headers:i}).then((e=>e.json())).then((t=>{e.onDone(t.data.result.id)})).catch((()=>{d("Something went wrong, creating your Stream.")})).finally((()=>{s(!1)}))})(t)}),[t]),""===m?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Bitmovin API key is missing!"}),(0,i.jsxs)("p",{children:["Please go to the"," ",(0,i.jsx)("a",{href:"/wp-admin/options-general.php?page=bitmovin",target:"_blank",children:"plugin settings"})," ","and enter you API key first."]})]}):(0,i.jsxs)("div",{children:[(0,i.jsxs)("svg",{id:"d2fbfec9-d416-44cd-8db1-7bc57cfb0335","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",className:"bitmovin-logo",viewBox:"0 0 238 51",children:[(0,i.jsx)("title",{children:"bitmovin-logo-long-notag"}),(0,i.jsx)("path",{d:"M86.76,32.54a6.07,6.07,0,0,1-.67,2.91,6.21,6.21,0,0,1-1.82,2.1,8.83,8.83,0,0,1-2.69,1.29,11.89,11.89,0,0,1-3.26.44H65.67V13.11h14a5.21,5.21,0,0,1,2.47.59A6.09,6.09,0,0,1,84,15.23a7.12,7.12,0,0,1,1.2,2.14,7.24,7.24,0,0,1,.42,2.41,7.14,7.14,0,0,1-1,3.6,5.85,5.85,0,0,1-2.8,2.48,6.79,6.79,0,0,1,3.56,2.38A6.9,6.9,0,0,1,86.76,32.54Zm-16-15.08v6.6h6.78a3.05,3.05,0,0,0,2.2-.89,3.25,3.25,0,0,0,.9-2.43,3.38,3.38,0,0,0-.83-2.4,2.73,2.73,0,0,0-2-.88ZM81.63,31.58a3.84,3.84,0,0,0-.24-1.35,3.72,3.72,0,0,0-.64-1.12,3.08,3.08,0,0,0-1-.76,2.73,2.73,0,0,0-1.22-.27H70.76V35h7.56a3.32,3.32,0,0,0,1.3-.26A3.11,3.11,0,0,0,80.68,34a3.71,3.71,0,0,0,.7-1.09A3.44,3.44,0,0,0,81.63,31.58Z"}),(0,i.jsx)("path",{d:"M90,39.28V13.15h5.09V39.28Z"}),(0,i.jsx)("path",{d:"M120.13,17.57h-8.32V39.28h-5.09V17.57H98.35V13.11h21.78Z"}),(0,i.jsx)("path",{d:"M144.76,39.28V22L138,34.86h-2.76L128.5,22V39.28h-5.08V13.11h5.45L136.61,28l7.81-14.89h5.42V39.28Z"}),(0,i.jsx)("path",{d:"M166.17,39.46a11.27,11.27,0,0,1-5-1.12,12.58,12.58,0,0,1-3.93-3,13.37,13.37,0,0,1-2.52-4.25,14,14,0,0,1-.88-4.9,13.7,13.7,0,0,1,3.55-9.26,12.92,12.92,0,0,1,4-2.93,11.55,11.55,0,0,1,5-1.08,10.91,10.91,0,0,1,5.05,1.16,12.84,12.84,0,0,1,3.91,3,14.26,14.26,0,0,1,3.39,9.14,13.57,13.57,0,0,1-.94,5,13.84,13.84,0,0,1-2.6,4.21,12.74,12.74,0,0,1-4,2.91A11.47,11.47,0,0,1,166.17,39.46ZM158.91,26.2a10.65,10.65,0,0,0,.5,3.28,9,9,0,0,0,1.43,2.8,7.24,7.24,0,0,0,2.31,1.95,6.42,6.42,0,0,0,3.09.74,6.22,6.22,0,0,0,3.12-.76,7,7,0,0,0,2.26-2A9.1,9.1,0,0,0,173,29.38a11.08,11.08,0,0,0,.47-3.18,10.61,10.61,0,0,0-.51-3.28,9.37,9.37,0,0,0-1.46-2.81,7.06,7.06,0,0,0-2.28-1.93,6.35,6.35,0,0,0-3-.72,6.22,6.22,0,0,0-3.12.76,7.14,7.14,0,0,0-2.28,2,8.7,8.7,0,0,0-1.42,2.8A10.77,10.77,0,0,0,158.91,26.2Z"}),(0,i.jsx)("path",{d:"M203.6,39.28V13.15h5.08V39.28Z"}),(0,i.jsx)("path",{d:"M219.22,22.51V39.28h-5.08V13.11h3.94l13.64,17.18V13.15h5.09V39.28h-4.13Z"}),(0,i.jsx)("path",{d:"M195.87,13.15l-6,16.84-6-16.84h-5.24l9.83,25a1.62,1.62,0,0,0,3,0l9.62-25Z"}),(0,i.jsx)("path",{d:"M18.83,1V12.47L36.58,24.86a1.25,1.25,0,0,1,0,2.05L18.83,39.3V50.75L52.66,27.13a1.52,1.52,0,0,0,0-2.49Z"}),(0,i.jsx)("path",{d:"M8.86,9.34v8.79l9.64,6.73a1.24,1.24,0,0,1,0,2L8.86,33.63v8.79L30.77,27.13a1.52,1.52,0,0,0,0-2.49Z"}),(0,i.jsx)("path",{d:"M1.19,16.62v5.53l3.89,2.71a1.25,1.25,0,0,1,0,2.05L1.19,29.62v5.53l11.5-8a1.5,1.5,0,0,0,0-2.47Z"})]}),a?(0,i.jsx)("div",{children:"Creating stream..."}):l?(0,i.jsx)(o,{errorMessage:l,onReset:()=>d(void 0)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"bitmovin-title-wrapper",children:[(0,i.jsx)("p",{children:"Stream Title:"}),(0,i.jsx)("input",{value:u,type:"text",onChange:e=>h(e.currentTarget.value)})]}),(0,i.jsx)(c,{onUploadDone:e=>n(e),apiKey:m})]})]})};var u;!function(e){e.PUBLISHED="PUBLISHED",e.UNPUBLISHED="UNPUBLISHED"}(u||(u={}));const h=e=>{const t=new Date(e);return`${t.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})} ${t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:void 0})}`},m=e=>{const[t,n]=(0,r.useState)(),[a,s]=(0,r.useState)(0),[o,c]=(0,r.useState)(0),[d,m]=(0,r.useState)(!1),[p,v]=(0,r.useState)([]);return(0,r.useEffect)((()=>{((...e)=>{var t,n,i,a;t=void 0,n=[...e],a=function*(e=0,t,n,i){t(!0);try{const i=encodeURI("createdAt:DESC"),a=yield fetch(`https://api.bitmovin.com/v1/streams/video?limit=10&offset=${e}&sort=${i}`,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":window.bitmovinApiKey}}),r=yield a.json();t(!1),n(r.data.result.items,r.data.result.totalCount)}catch(e){i("Something went wrong while fetching existing streams.")}},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function o(e){try{l(a.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,o)}l((a=a.apply(t,n||[])).next())}))})(a,m,((e,t)=>{v(e.filter((e=>e.status===u.PUBLISHED))),c(t)}),n)}),[a]),""===window.bitmovinApiKey?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Bitmovin API key is missing!"}),(0,i.jsxs)("p",{children:["Please go to the"," ",(0,i.jsx)("a",{href:"/wp-admin/options-general.php?page=bitmovin",target:"_blank",children:"plugin settings"})," ","and enter you API key first."]})]}):(0,i.jsxs)(i.Fragment,{children:[null!=t?t:(0,i.jsx)("p",{className:"bitmovin-error",children:t}),d&&(0,i.jsxs)("p",{children:["Loading ",a>0?"more":""," streams..."]}),(0,i.jsx)("ul",{className:"bitmovin-streams-list",children:p.map((t=>(0,i.jsxs)("li",{className:e.selected===t.id?"selected":"",onClick:()=>e.onSelect(t.id),children:[(0,i.jsx)("span",{className:"bitmovin-stream-title",children:t.title}),(0,i.jsx)("span",{className:"bitmovin-created-at",children:h(t.createdAt)})]},t.id)))}),o<10?null:(0,i.jsx)("div",{className:"bitmovin-paginator",children:(0,i.jsxs)(l.ButtonGroup,{children:[(0,i.jsx)(l.Button,{variant:"primary",disabled:0===a,onClick:()=>s(a-1),children:(0,i.jsx)(l.Dashicon,{icon:"arrow-left"})}),(0,i.jsx)(l.Button,{variant:"primary",disabled:10*(a+1)>=o,onClick:()=>s(a+1),children:(0,i.jsx)(l.Dashicon,{icon:"arrow-right"})})]})})]})};var p;!function(e){e.Streams="streams",e.CreateOrPreview="createPreview"}(p||(p={}));var v=JSON.parse('{"UU":"bitmovin/bitmovin"}');(0,a.registerBlockType)(v.UU,{title:"Bitmovin Video",category:"embed",attributes:{streamId:{type:"string",default:null},url:{type:"string",default:null}},icon:{src:(0,i.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M8.11938 0V5.52537L16.303 11.5067C16.3776 11.5631 16.4384 11.6372 16.4804 11.7229C16.5223 11.8087 16.5442 11.9037 16.5442 12C16.5442 12.0963 16.5223 12.1913 16.4804 12.2771C16.4384 12.3628 16.3776 12.4369 16.303 12.4933L8.11938 18.4746V24L23.7157 12.5997C23.8079 12.5319 23.8833 12.442 23.9353 12.3373C23.9872 12.2327 24.0144 12.1164 24.0144 11.9985C24.0144 11.8805 23.9872 11.7643 23.9353 11.6596C23.8833 11.555 23.8079 11.465 23.7157 11.3973L8.11938 0Z",fill:"#1AB3FF"}),(0,i.jsx)("path",{d:"M3.53937 4.03723V8.27968L7.98322 11.528C8.05898 11.5832 8.12088 11.6567 8.16363 11.7423C8.20637 11.8279 8.2287 11.9231 8.2287 12.0198C8.2287 12.1164 8.20637 12.2116 8.16363 12.2972C8.12088 12.3828 8.05898 12.4563 7.98322 12.5115L3.53937 15.7598V20.0023L13.6451 12.6209C13.7376 12.5536 13.8132 12.4638 13.8654 12.3593C13.9177 12.2547 13.9449 12.1385 13.9449 12.0205C13.9449 11.9025 13.9177 11.7863 13.8654 11.6817C13.8132 11.5772 13.7376 11.4874 13.6451 11.4201L3.53937 4.03723Z",fill:"#1AB3FF"}),(0,i.jsx)("path",{d:"M-1.10761e-07 7.49399V10.1662L1.79003 11.4735C1.86467 11.5298 1.92547 11.6039 1.9674 11.6897C2.00933 11.7754 2.03119 11.8704 2.03119 11.9667C2.03119 12.0631 2.00933 12.158 1.9674 12.2438C1.92547 12.3295 1.86467 12.4036 1.79003 12.46L-1.10761e-07 13.7687V16.4395L5.30039 12.5649C5.39263 12.4978 5.46799 12.4084 5.52004 12.3042C5.57209 12.2001 5.59927 12.0843 5.59927 11.9667C5.59927 11.8492 5.57209 11.7334 5.52004 11.6292C5.46799 11.525 5.39263 11.4356 5.30039 11.3686L-1.10761e-07 7.49399Z",fill:"#1AB3FF"})]})},edit:function(e){const[t,n]=(0,r.useState)(p.Streams),[a,o]=(0,r.useState)(e.attributes.streamId),[c,u]=(0,r.useState)(void 0!==a),h=(0,r.useRef)(null);(0,r.useEffect)((()=>{a&&n(p.CreateOrPreview)}),[a]),function(e,t){(0,r.useEffect)((()=>{const n=n=>{e.current&&!e.current.contains(n.target)&&t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(h,(()=>{c||u(!0)}));const v=t=>{e.setAttributes({streamId:t}),o(t)},g=t=>{e.setAttributes({streamId:t}),o(t)};return(0,i.jsxs)("div",{style:{position:"relative"},ref:h,children:[c&&(0,i.jsx)("div",{onClick:()=>u(!1),className:"bitmovin-block-editor-overlay"}),(0,i.jsx)(l.TabPanel,{className:"bitmovin-tab-panel",activeClass:"active-tab",onSelect:e=>{n(e)},initialTabName:t,tabs:[{name:p.Streams,title:"Select Stream",className:"tab-two"},{name:p.CreateOrPreview,title:a?"Preview":"Create Stream",className:"tab-one"}],children:e=>(e=>{switch(e.name){case p.CreateOrPreview:return a?(0,i.jsx)(s,{streamId:a}):(0,i.jsx)("div",{className:"bitmovin-stream-creator-wrapper",children:(0,i.jsx)(d,{onDone:v})});case p.Streams:return(0,i.jsx)(m,{selected:a,onSelect:g});default:return null}})(e)},t)]})},save:function(e){const t=e.attributes.streamId;return t?(0,i.jsx)(s,{streamId:t}):(0,i.jsx)("p",{children:"Bitmovin Uploader here!!"})}})},20:function(e,t,n){var i=n(609),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:c,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},848:function(e,t,n){e.exports=n(20)},609:function(e){e.exports=window.React}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=function(t,n,a,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<s&&(s=r));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={57:0,350:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,s=n[0],o=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var d=l(i)}for(t&&t(n);c<s.length;c++)r=s[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},n=self.webpackChunkbitmovin=self.webpackChunkbitmovin||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[350],(function(){return i(169)}));a=i.O(a)}();