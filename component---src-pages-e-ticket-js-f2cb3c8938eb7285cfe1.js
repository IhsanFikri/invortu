(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2NmH":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),s=a("Zttt"),c=a("QuvX"),o=a.n(c),r=a("Wbzz"),d=a("qKvR");var l={name:"856bu7",styles:"@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');.container{margin:30px auto;overflow:hidden;box-shadow:0 0 10px rgb(202,202,204);background-color:;border-radius:2px;padding:0 16px;}.ticket{display:flex;#qrcode{justify-content:center;align-content:center;margin:12px auto;}}.details{color:#828282;padding:16px 0;border-top:1px dashed #c3c3c3;}.tinfo{font-size:10px;font-weight:300;color:#555;font-family:'Roboto',sans-serif;text-transform:uppercase;letter-spacing:1px;margin:16px 0 0 0;}.tdata{font-size:1em;font-weight:400;font-family:'Roboto',sans-serif;letter-spacing:0.5px;margin:0;}.additional{font-size:10px;}.name{font-size:1.3em;font-weight:500;}.masinfo{display:block;}.left,.right{width:49%;display:inline-table;}.nesp{letter-spacing:0px;}.btn{margin-right:4px;margin-bottom:4px;font-family:'Work Sans',Arial,sans-serif;font-size:12px;font-weight:400;border-radius:30px;transition:0.5s;padding:8px 20px;}.primary{background:#f14e95;color:#fff;border:none;}"},u={name:"y31k05",styles:"display:flex;justify-content:center;align-items:center;min-height:calc(100vh - 18px);padding:0 20px;.homepage{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%;}.title{font-family:'Cookie',cursive;font-weight:600;letter-spacing:4px;font-size:45px;user-select:none;margin-top:20px;text-align:center;}.sub-title-ticket{font-weight:500;text-transform:uppercase;letter-spacing:1px;font-size:1.7rem;user-select:none;margin-top:20px;text-align:center;}.input-ticket{width:85vw;min-width:auto;input{font-family:'Work Sans',Courier,monospace;font-size:18px;width:100%;text-align:center;border-radius:12px;padding:10px 30px 10px 10px;background:transparent;border:0.5px solid rgba(0,0,0,0.3);}input[type='text']:disabled{background:#dddddd;}}"};function b(t){var e,a=t.guest,n=t.configData;return Object(d.b)("div",{css:l},Object(d.b)("div",{class:"container"},Object(d.b)("div",{class:"ticket"},Object(d.b)("div",{id:"qrcode"},Object(d.b)(o.a,{value:a.code,size:250}))),Object(d.b)("div",{class:"details"},Object(d.b)("div",{class:"tinfo"},"Nama"),Object(d.b)("div",{class:"tdata name"},a.name),Object(d.b)("div",{class:"tinfo"},"Keterangan"),Object(d.b)("div",{class:"tdata"},a.desc),Object(d.b)("div",{class:"tinfo"},"Syukuran Pernikahan / Shift"),Object(d.b)("div",{class:"tdata"},(null===(e=n.shiftType)||void 0===e?void 0:e[a.shift])+" / "+a.shift||"11.00 WIB - 13.00 WIB"),a.isAttended?Object(d.b)(i.a.Fragment,null,Object(d.b)("div",{class:"tinfo"},"Sudah hadir pada"),Object(d.b)("div",{class:"tdata"},Object(d.b)("span",{class:"badge badge-success"},a.attendedAt))):null,a.isExchanged?Object(d.b)(i.a.Fragment,null,Object(d.b)("div",{class:"tinfo"},"Sudah menukarkan souvenir pada"),Object(d.b)("div",{class:"tdata"},Object(d.b)("span",{class:"badge badge-success"},a.exchangedAt))):null,Object(d.b)("div",{class:"tinfo"},"Penting"),Object(d.b)("div",{class:"tdata additional"},Object(d.b)("ul",{style:{paddingLeft:"16px"}},Object(d.b)("li",null,"Setiap tamu yang hadir wajib menunjukkan QRCode ini sebagai pengganti buku tamu untuk untuk meminimalisir kontak fisik melalui pena."),Object(d.b)("li",{style:{textTransform:"uppercase"}},"Dalam rangka mematuhi protokol kesehatan,",Object(d.b)("span",{style:{color:"#f14e95",textTransform:"uppercase"}}," 1 undangan hanya berlaku untuk 2 orang tamu"))),Object(d.b)("br",null)))),Object(d.b)(r.a,{to:"/?type=invitation&to="+a.name+"&code="+a.code},Object(d.b)("button",{className:"btn primary"},"< Kembali ke Homepage")))}b.defaultProps={guest:{},configData:{}};var p=b,f=a("qHiO"),g=a("QrHz"),m=a("HaE+"),x=a("o0o1"),h=a.n(x),j=a("PC/x");var O=function(){var t=Object(n.useState)(!1),e=t[0],a=t[1],i=Object(n.useState)({}),s=i[0],c=i[1],o=function(){var t=Object(m.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(!0);try{c(j||{}),a(!1)}catch(e){console.error("ERR_WHEN_HIT_DATA"),c({}),a(!1)}case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),{data:s,loading:e,refetch:o}};e.default=function(t){var e=t.location,a=Object(f.a)(e,"code")||"",i=Object(f.a)(e,"name")||"",c=Object(n.useRef)(!1),o=Object(n.useState)(""),r=o[0],l=o[1],b=Object(n.useState)({}),m=b[0],x=b[1],h=Object(n.useState)(!1),j=h[0],v=h[1],k=Object(g.a)(),y=k.data,w=k.loading,S=O().data,z=Object(n.useCallback)((function(t){var e=(t||r).toUpperCase(),a=y.find((function(t){return(t.code||"").toUpperCase()===e}));if(a&&a.name.toUpperCase().includes(i.toUpperCase()))return x(a),void v(!0);alert("Maaf, Kode data "+e+" tidak ditemukan. Mohon di cek lagi.."),window.location.assign("https://thekusuma.com")}),[y,i,r]);return Object(n.useEffect)((function(){""!==a&&y.length>0&&!c.current&&(c.current=!0,l(a),setTimeout((function(){z(a)}),1e3))}),[a,y.length,z,w]),Object(d.b)(s.a,null,Object(d.b)("div",{css:u},Object(d.b)("div",{className:"homepage"},j?Object(d.b)(p,{guest:m,configData:S}):Object(d.b)("h3",{style:{fontSize:"1.7rem"}},"🧑‍💻Validasi data tamu.. Mohon tunggu.."))))}},"PC/x":function(t){t.exports=JSON.parse('{"currentShift":1,"isUseShift":true,"shiftType":[null,"10.30 - 12.00 WIB","12.00 - 13.30 WIB"],"totalSouvenir":264}')},qHiO:function(t,e,a){"use strict";function n(t,e){var a=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]"),n=new RegExp("[\\?&]"+a+"=([^&#]*)").exec(t.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-e-ticket-js-f2cb3c8938eb7285cfe1.js.map