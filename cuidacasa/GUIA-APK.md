<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>CuidaCasa · Gestão de enfermagem em homecare</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap">
<style>
:root{--bg:#F6F8FA;--sf:#fff;--ink:#0E2A3B;--mut:#52687A;--ln:#E2E8EE;--bl:#1F78B4;--onbl:#fff;--blS:#DCEBF6;--aq:#14998B;--aqS:#D9F3EF;--rd:#C0262D;--rdS:#FDE8E8;--am:#B76E00;--amS:#FFF1D6;--gr:#1E8E4E;--grS:#DDF4E6;--sw:236px;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0B1B26;--sf:#122A3A;--ink:#EAF3F8;--mut:#9DB5C4;--ln:#23435A;--bl:#6BB6EA;--onbl:#06202F;--blS:#16415C;--aq:#43D1C0;--aqS:#0F4440;--rd:#FF8A8F;--rdS:#4A1C20;--am:#F2B04E;--amS:#4A3410;--gr:#5FD08D;--grS:#12402A}}
:root[data-theme="dark"]{--bg:#0B1B26;--sf:#122A3A;--ink:#EAF3F8;--mut:#9DB5C4;--ln:#23435A;--bl:#6BB6EA;--onbl:#06202F;--blS:#16415C;--aq:#43D1C0;--aqS:#0F4440;--rd:#FF8A8F;--rdS:#4A1C20;--am:#F2B04E;--amS:#4A3410;--gr:#5FD08D;--grS:#12402A}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*,*:before,*:after{box-sizing:inherit}
body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.45 "Atkinson Hyperlegible",system-ui,sans-serif}
button,input,select,textarea{font:inherit;color:inherit}
button{cursor:pointer}
:focus-visible{outline:3px solid var(--bl);outline-offset:2px}
.app{min-height:100vh}
main{padding:14px 14px 96px;max-width:980px;margin:0 auto}
nav{position:fixed;left:0;right:0;bottom:0;z-index:20;display:flex;background:var(--sf);border-top:1px solid var(--ln);padding-bottom:env(safe-area-inset-bottom,0px)}
nav .brand,nav .collapse{display:none}
nav button.it{flex:1;border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:2px;padding:9px 4px;min-height:60px;color:var(--mut);font-size:12.5px;font-weight:700}
nav button.it.on{color:var(--bl)}
nav button.it.on svg{background:var(--blS);border-radius:12px;padding:3px;width:36px;height:30px}
.top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
h1{font-size:22px;margin:0}h2{font-size:18px;margin:18px 0 8px}h3{font-size:16px;margin:0}
.mut{color:var(--mut);font-size:14px}
.card{background:var(--sf);border:1px solid var(--ln);border-radius:18px;padding:14px;margin-bottom:10px}
.btn{border:0;border-radius:14px;min-height:48px;padding:0 18px;font-weight:700;background:var(--bl);color:var(--onbl);display:inline-flex;align-items:center;justify-content:center;gap:8px}
.btn.sec{background:var(--blS);color:var(--bl)}.btn.ok{background:var(--aq);color:#fff}.btn.out{background:none;border:2px solid var(--ln);color:var(--ink)}.btn.wide{width:100%}.btn.sm{min-height:40px;padding:0 12px;font-size:14px}
.seg{display:flex;background:var(--blS);border-radius:14px;padding:4px;gap:4px;margin-bottom:12px}
.seg button{flex:1;border:0;background:none;border-radius:11px;min-height:42px;font-weight:700;color:var(--mut)}
.seg button.on{background:var(--sf);color:var(--bl);box-shadow:0 1px 3px rgba(14,42,59,.15)}
.sw{display:flex;align-items:center;gap:10px;background:var(--sf);border:1px solid var(--ln);border-radius:30px;padding:6px 12px 6px 8px;font-weight:700;font-size:14px}
.sw i{width:46px;height:28px;border-radius:20px;background:var(--mut);position:relative;transition:.2s;flex:none}
.sw i:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:.2s}
.sw.on i{background:var(--aq)}.sw.on i:after{left:21px}
.ap{border-left:8px solid var(--c);display:block}
.row{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.chip{display:inline-block;border-radius:20px;padding:3px 10px;font-size:13px;font-weight:700;background:var(--blS);color:var(--bl)}
.chip.t{background:color-mix(in srgb,var(--c) 18%,transparent);color:var(--c)}
.s-pend{background:var(--amS);color:var(--am)}.s-conf{background:var(--blS);color:var(--bl)}.s-and{background:var(--aqS);color:var(--aq)}.s-conc{background:var(--grS);color:var(--gr)}
.acts{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}.acts .btn{flex:1}
.dnav{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.dnav button{width:48px;height:48px;border-radius:14px;border:1px solid var(--ln);background:var(--sf);display:grid;place-items:center}
.mgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:12px}
.mgrid b{text-align:center;font-size:12px;color:var(--mut)}
.mgrid button{aspect-ratio:1;min-height:44px;border:1px solid var(--ln);border-radius:12px;background:var(--sf);font-weight:700;position:relative}
.mgrid button.sel{background:var(--bl);color:var(--onbl);border-color:var(--bl)}.mgrid button.td{border:2px solid var(--aq)}
.mgrid button i{position:absolute;bottom:5px;left:50%;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--aq)}
.alg{background:#B3141B;color:#fff;border-radius:16px;padding:14px;position:sticky;top:6px;z-index:5;margin-bottom:12px;box-shadow:0 4px 14px rgba(179,20,27,.4)}
.alg b{display:block;font-size:17px;margin-bottom:6px}.alg span{display:inline-block;background:#fff;color:#8E0F15;border-radius:20px;padding:4px 12px;margin:3px 4px 0 0;font-weight:700}
.hc .card{border:2px solid var(--ink)}.hc h3{font-size:19px}
.med{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--ln)}
.med:last-child{border:0}
.med input{width:32px;height:32px;accent-color:var(--aq);flex:none}
.med.done .nm{text-decoration:line-through;color:var(--mut)}
.med .nm{flex:1;font-size:17px;font-weight:700}
.ib{width:46px;height:46px;border-radius:14px;border:2px solid var(--ln);background:var(--sf);display:grid;place-items:center;color:var(--bl);flex:none}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:10px}.fg .full{grid-column:1/-1}
label{display:block;font-weight:700;font-size:14px;margin-bottom:4px}
input[type=text],input[type=number],input[type=date],input[type=time],select,textarea{width:100%;min-height:48px;border:2px solid var(--ln);border-radius:12px;padding:8px 12px;background:var(--sf)}
input[type=range]{width:100%;accent-color:var(--bl);height:32px}
.av{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--bl),var(--aq));color:#fff;display:grid;place-items:center;font-weight:700;font-size:20px;flex:none}
.coren{display:inline-flex;align-items:center;gap:5px;background:var(--grS);color:var(--gr);border-radius:20px;padding:3px 10px;font-size:13px;font-weight:700}
.star{color:#E0A100;font-weight:700}
table{width:100%;border-collapse:collapse}td,th{padding:9px 4px;border-bottom:1px solid var(--ln);text-align:left}td:last-child,th:last-child{text-align:right}
.sum{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}.sum .card{margin:0}.sum b{font-size:22px;display:block}
#modal{position:fixed;inset:0;background:rgba(8,24,36,.6);z-index:50;display:none;align-items:flex-end;justify-content:center}
#modal.open{display:flex}
.sheet{background:var(--sf);width:100%;max-width:520px;max-height:92vh;overflow:auto;border-radius:24px 24px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom,0px))}
#toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:12px 18px;border-radius:14px;font-weight:700;z-index:60;opacity:0;pointer-events:none;transition:.25s;max-width:90vw;text-align:center}
#toast.show{opacity:1}
.rcp{border:2px dashed var(--ln);border-radius:14px;padding:14px;margin:10px 0}
.rx{background:#FFFDF3;color:#222;border-radius:12px;padding:16px;font-family:Georgia,serif;border:1px solid #E6DFB8}
.empty{text-align:center;color:var(--mut);padding:26px 10px}
@media (min-width:900px){
 .app{display:grid;grid-template-columns:var(--sw) 1fr;transition:grid-template-columns .2s}
 .app.col{--sw:80px}
 main{padding:28px 32px 40px;width:100%}
 nav{position:sticky;top:0;height:100vh;flex-direction:column;border-top:0;border-right:1px solid var(--ln);padding:18px 12px;gap:6px}
 nav .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:19px;color:var(--bl);padding:4px 8px 18px}
 nav button.it{flex:none;flex-direction:row;gap:12px;justify-content:flex-start;padding:0 14px;min-height:52px;border-radius:14px;font-size:16px}
 nav button.it.on{background:var(--blS)}nav button.it.on svg{background:none;padding:0;width:22px;height:22px}
 nav .collapse{display:flex;margin-top:6px;border:1px solid var(--ln);background:none;border-radius:12px;min-height:44px;align-items:center;justify-content:center}
 .app.col nav .lb,.app.col nav .brand span{display:none}.app.col nav button.it{justify-content:center;padding:0}
 #modal{align-items:center}.sheet{border-radius:24px}
 #toast{bottom:30px}
 .two{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}
}
.login{min-height:80vh;display:grid;place-content:center;gap:14px;text-align:center;max-width:360px;margin:0 auto}
.login .logo{width:76px;height:76px;border-radius:24px;background:linear-gradient(135deg,var(--bl),var(--aq));color:#fff;display:grid;place-items:center;margin:0 auto}
.gbtn{background:#fff;color:#1f1f1f;border:2px solid #dadce0}
.app.out nav{display:none}.app.out{display:block}.app.out main{padding-bottom:24px}
.chks{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.chk{display:flex;align-items:center;gap:8px;border:2px solid var(--ln);border-radius:12px;padding:8px 12px;min-height:48px;margin:0;font-weight:400}
.chk input{width:22px;height:22px;accent-color:var(--bl)}
input.bad{border-color:var(--rd)}
.ib{position:relative}.ib .dot{position:absolute;top:-5px;right:-5px;width:15px;height:15px;border-radius:50%;background:var(--gr);border:2px solid var(--sf)}
.late{border-left-color:var(--rd)!important;background:var(--rdS)}
.alt{background:var(--rd);color:#fff;border-radius:12px;padding:10px 12px;margin-top:10px;font-weight:700}
.dly{display:flex;gap:6px;align-items:center;margin-top:8px;flex-wrap:wrap}
.xb{border:0;background:none;font-size:18px;line-height:1;color:inherit;padding:0 0 0 6px}
.fbar{display:flex;gap:8px;align-items:center}.fbar input{flex:1;min-width:0}
nav .fbk{display:none;color:var(--mut);font-size:14px}
@media (min-width:768px){.two{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}.two>*{min-width:0}}
@media (min-width:900px){nav .fbk{display:flex;margin-top:auto;border:0;background:none;min-height:44px;align-items:center;gap:10px;padding:0 14px;border-radius:12px;text-align:left}.app.col nav .fbk{justify-content:center;padding:0}}
.fg input[type=datetime-local]{width:100%;min-height:48px;border:2px solid var(--ln);border-radius:12px;padding:8px 12px;background:var(--sf)}
/* visual limpo: uma cor de destaque; cor só para alerta e estado */
.ap{border:1px solid var(--ln)}
.chip{background:color-mix(in srgb,var(--ink) 8%,transparent);color:var(--ink)}
.chip.t{background:none;padding:0;font-size:14px;color:var(--ink)}
.acts .btn{padding:0 8px}
[style*="text-transform:capitalize"]{text-transform:none!important}[style*="text-transform:capitalize"]::first-letter{text-transform:uppercase}
.chip.t::before{content:"";display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--c);margin-right:6px}
.s-pend,.s-conf{background:color-mix(in srgb,var(--ink) 8%,transparent);color:var(--mut)}
.s-and{background:var(--blS);color:var(--bl)}
.s-conc{background:none;color:var(--gr)}
.seg{background:color-mix(in srgb,var(--ink) 7%,transparent)}.seg button.on{color:var(--ink)}
.btn.ok{background:var(--bl);color:var(--onbl)}
.btn.sec{background:color-mix(in srgb,var(--ink) 8%,transparent);color:var(--ink)}
.sw.on i{background:var(--bl)}
.av{background:var(--blS);color:var(--bl)}
.login .logo{background:var(--bl);color:var(--onbl)}
.med input,.chk input{accent-color:var(--bl)}
.mgrid button.td{border-color:var(--bl)}.mgrid button i{background:var(--bl)}
.alt{background:var(--rdS);color:var(--rd);border:1px solid var(--rd)}
.late{border:2px solid var(--rd)!important}
.alg{box-shadow:none}
:root{color-scheme:light dark}:root[data-theme="light"]{color-scheme:light}:root[data-theme="dark"]{color-scheme:dark}
.top{flex-wrap:wrap}
.btn:disabled{opacity:.4;cursor:not-allowed}
@media print{body>*:not(#modal){display:none!important}#modal{position:static;background:none;display:block}.sheet{max-height:none;box-shadow:none}.noprint{display:none!important}}
</style>
</head>
<body>
<div class="app" id="app">
 <nav id="nav"></nav>
 <main id="main"></main>
</div>
<div id="modal"></div><div id="toast" role="status"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js"></script>
<script>
const I={cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-4 3.5-5.5 6.5-5.5s5.700 1.500 6.500 5.500M16 4.500a3.500 3.500 0 010 7M18 14.800c2 .6 3.200 2.300 3.500 5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',wallet:'<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',check:'<path d="M5 12l5 5 9-10"/>',doc:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7"/>',share:'<circle cx="6" cy="12" r="2.500"/><circle cx="18" cy="6" r="2.500"/><circle cx="18" cy="18" r="2.500"/><path d="M8.200 10.800l7.600-3.600M8.200 13.200l7.600 3.600"/>',back:'<path d="M15 5l-7 7 7 7"/>',fwd:'<path d="M9 5l7 7-7 7"/>',cross:'<path d="M12 4v16M4 12h16"/>',flag:'<path d="M5 21V4m0 0h11l-2 4 2 4H5"/>',edit:'<path d="M4 20h4l10-10-4-4L4 16zM13 7l4 4"/>',moon:'<path d="M20 14.500A8 8 0 019.500 4a8 8 0 1010.500 10.500z"/>',pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>'};
const ic=(n,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const $=s=>document.querySelector(s);
const brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const D0=d=>{d=new Date(d);d.setHours(0,0,0,0);return d};
const add=(d,n)=>{d=D0(d);d.setDate(d.getDate()+n);return d};
const key=d=>{d=new Date(d);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const hm=t=>new Date(t).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
const dl=(d,o)=>new Date(d).toLocaleDateString('pt-BR',o);
const TODAY=D0(new Date()),NOW=Date.now(),H=3600000;
const TY={p12:{l:'Plantão 12h',c:'var(--bl)',h:12},p24:{l:'Plantão 24h',c:'var(--aq)',h:24},visita:{l:'Visita pontual',c:'var(--am)',h:1}};
const ST={pend:'Pendente',conf:'Confirmado',and:'Em andamento',conc:'Concluído'};
const LS='cuidacasa-perfil';
const ME={n:'',role:'Técnico(a) de Enfermagem',coren:'',cpf:'',rg:'',rgOrg:'',nasc:'',tel:'',email:'',cidade:'',sp:[],r:5,rv:0,avail:true,uid:'',days:[1,2,3,4,5],h:['07:00','19:00'],loc:null};
try{Object.assign(ME,JSON.parse(localStorage.getItem(LS)||'{}'))}catch(x){}
const P=[];
try{const sv=JSON.parse(localStorage.getItem(LS+'-pac')||'null');if(Array.isArray(sv))P.push(...sv.filter(p=>p.custom))}catch(x){}
const pat=id=>P.find(p=>p.id==id),nid=()=>Math.max(0,...P.map(p=>p.id))+1;
P.forEach(p=>p.meds.forEach(m=>{if(m.done&&key(m.done)!=key(TODAY))m.done=null}));
let A=[];try{const sa=JSON.parse(localStorage.getItem(LS+'-ag')||'null');if(Array.isArray(sa))A=sa.filter(a=>a.valor!=null&&P.some(p=>p.id==a.p))}catch(x){}
const S={user:null,edit:false,tab:'agenda',view:'dia',date:TODAY,avail:true,pat:null,fsub:'fin',col:false};
S.lgpd=(()=>{try{return !!localStorage.getItem(LS+'-lgpd')}catch(x){return false}})();S.tmp=null;S.lock=false;S.fm=TODAY.getMonth();S.fy=TODAY.getFullYear();S.np=null;S.role='prof';S.fid=+((()=>{try{return localStorage.getItem(LS+'-fam')}catch(x){return 0}})()||0);
const RO='Cadastro feito pela família: somente leitura';const lk=p=>p.origem=='fam';
const FEEDBACK_WA='';
try{localStorage.removeItem(LS+'-pros')}catch(x){}
S.day=key(new Date());S.ftab='hoje';S.pf='all';S.pq='';S.pper=0;
const PRT={evo:'Evolução',inter:'Intercorrência',proc:'Procedimento',orient:'Orientação à família',obs:'Observação'};
function dayRoll(){const k=key(new Date());if(S.day!=k){S.day=k;P.forEach(p=>p.meds.forEach(m=>{if(m.done&&key(m.done)!=k)m.done=null}));save()}}
const ageOf=p=>{if(p.nasc){const b=new Date(p.nasc+'T00:00'),n=new Date();let a=n.getFullYear()-b.getFullYear();if(n<new Date(n.getFullYear(),b.getMonth(),b.getDate()))a--;return a}return p.age||0};
const waNum=t=>{const d=String(t||'').replace(/\D/g,'').replace(/^0+/,'');return d.startsWith('55')&&d.length>=12?d:'55'+d};
function saveMe(){if(!ME.uid)ME.uid=(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random());try{localStorage.setItem(LS,JSON.stringify(ME))}catch(x){toast('Sem espaço para salvar. Use uma foto menor.');return false}return true}
const hashPin=async p=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode('cc:'+p)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const pinOn=()=>{try{return !!localStorage.getItem(LS+'-pin')}catch(x){return false}};
S.locked=pinOn();S.tries=0;
function pinBtn(){return `<button class="btn out wide" style="margin-top:10px" data-a="pinmenu">${pinOn()?'PIN do aparelho: ativo':'Proteger este aparelho com PIN'}</button>`}
function vLock(){return `<div class="login"><div class="logo">${ic('cross',40)}</div><div><h1>CuidaCasa</h1><p class="mut" style="margin:4px 0 0">Digite seu PIN para abrir</p></div><input id="pin-in" type="password" inputmode="numeric" maxlength="6" autocomplete="off" style="text-align:center;font-size:24px;letter-spacing:8px"><button class="btn wide" data-a="unlock">Abrir</button></div>`}
S.tema=(()=>{try{return localStorage.getItem(LS+'-tema')||'auto'}catch(x){return 'auto'}})();
function applyTheme(){const r=document.documentElement;if(S.tema=='auto')r.removeAttribute('data-theme');else r.setAttribute('data-theme',S.tema)}
applyTheme();
function themeSeg(){return `<div class="seg" style="margin:14px 0 0">${[['auto','Automático'],['light','Claro'],['dark','Escuro']].map(x=>`<button class="${S.tema==x[0]?'on':''}" data-a="tema" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>`}
S.inv=null;S.invAsk=false;try{const m=location.hash.match(/[#&]cc=([^&]+)/);if(m)S.inv=JSON.parse(decodeURIComponent(escape(atob(m[1].replace(/-/g,'+').replace(/_/g,'/')))))}catch(x){}
const vis=p=>!p.del&&!p.trash&&(p.origem!='fam'||p.linked);
function restoreP(p){delete p.trash;if(p.trashAp){p.trashAp.forEach(a=>{a.id=Math.max(0,...A.map(q=>q.id))+1;A.push(a)});delete p.trashAp}save();saveA()}
const genCode=()=>{const al='ABCDEFGHJKMNPQRSTUVWXYZ23456789';let c;do{c='CC-'+[...crypto.getRandomValues(new Uint8Array(6))].map(x=>al[x%al.length]).join('')}while(P.some(p=>p.code==c));return c};
const normCode=t=>String(t||'').toUpperCase().replace(/^CUIDACASA:/,'').replace(/[^A-Z0-9]/g,'');
const E=x=>esc(unesc(String(x==null?'':x))).slice(0,200);
function parseInv(t){t=String(t||'').trim();const m=t.match(/[#&?]cc=([A-Za-z0-9_-]+)/),b=m?m[1]:(/^[A-Za-z0-9_-]{60,}$/.test(t)?t:null);if(!b)return null;try{return JSON.parse(decodeURIComponent(escape(atob(b.replace(/-/g,'+').replace(/_/g,'/')))))}catch(x){return null}}
function invLink(p){const o={c:p.code,n:p.n,a:ageOf(p),d:p.dx,e:p.end,p:p.dep,l:p.al,t:p.ct,m:p.meds.map(m=>[m.n,m.d,m.t])};return (window.ReactNativeWebView?'':location.href.split('#')[0])+'#cc='+btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function importInv(o){if(!o||typeof o!='object')return null;const code=normCode(o.c);if(!code)return null;
const ex=P.find(p=>!p.del&&p.code&&normCode(p.code)==code);if(ex&&ex.famOwner&&ex.trash)return null;if(ex){if(ex.trash)restoreP(ex);if(ex.origem=='fam'&&!ex.linked){ex.linked=true;save()}return ex}
const al={Medicamentos:[],Materiais:[],Alimentos:[]};if(o.l&&typeof o.l=='object')Object.keys(al).forEach(k=>{if(Array.isArray(o.l[k]))al[k]=o.l[k].slice(0,30).map(E).filter(Boolean)});
const ct=o.t&&typeof o.t=='object'?o.t:{};
const np={id:nid(),custom:true,origem:'fam',linked:true,src:'link',code:'CC-'+code.replace(/^CC/,'').slice(0,6),n:E(o.n)||'Paciente',age:Math.max(0,Math.min(120,+o.a||0)),dx:E(o.d),end:E(o.e),dep:['Independente','Dependência parcial','Dependência total'].includes(o.p)?o.p:'Independente',al,ct:{n:E(ct.n),par:E(ct.par),tel:E(ct.tel)},meds:(Array.isArray(o.m)?o.m:[]).slice(0,30).map(m=>({n:E(m&&m[0]),d:E(m&&m[1]),t:/^\d\d:\d\d$/.test(m&&m[2])?m[2]:'08:00',done:null,rx:null})).filter(m=>m.n),vit:[]};
P.push(np);save();return np}
function showInv(){modal(`<h2 style="margin-top:0">Adicionar paciente</h2><p>Você recebeu o cadastro de <b>${E(S.inv.n)||'um paciente'}</b>. Adicionar à sua lista?</p><p class="mut">Os dados vêm da família e ficam somente leitura para você.</p><div class="acts"><button class="btn ok" data-a="invok">Adicionar</button><button class="btn out" data-a="invno">Agora não</button></div>`)}
function scrub(p,full){delete p.trash;delete p.trashAp;p.del=true;p.dx='';p.end='';p.al={};p.ct={};p.meds=[];p.vit=[];p.pr=[];p.dl=[];p.code='';if(full){p.n='Paciente excluído';p.age=0}save()}
function drawQR(){const q=$('#fqr');if(!q||q.firstChild)return;try{new QRCode(q,{text:q.dataset.t,width:150,height:150,correctLevel:QRCode.CorrectLevel.M})}catch(x){q.textContent='QR Code indisponível'}}
async function readQR(file){let txt=null;try{const bmp=await createImageBitmap(file);
if('BarcodeDetector' in window){try{const r=await new BarcodeDetector({formats:['qr_code']}).detect(bmp);if(r[0])txt=r[0].rawValue}catch(x){}}
if(!txt&&window.jsQR){const k=Math.min(1,1100/Math.max(bmp.width,bmp.height)),c=document.createElement('canvas');c.width=bmp.width*k;c.height=bmp.height*k;const g=c.getContext('2d');g.drawImage(bmp,0,0,c.width,c.height);const d=g.getImageData(0,0,c.width,c.height),r=jsQR(d.data,d.width,d.height);if(r)txt=r.data}}catch(x){}return txt}
const over=a=>a.st=='and'&&Date.now()-a.ci>dh(a)*H;
const unesc=t=>String(t).replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const wa=(p,t)=>'https://wa.me/'+(p.ct&&p.ct.tel?waNum(unesc(p.ct.tel)):'')+'?text='+encodeURIComponent(t);
const save=()=>{try{localStorage.setItem(LS+'-pac',JSON.stringify(P))}catch(x){toast('Sem espaço para salvar. Use fotos menores.')}};
function pic(file,max,cb){const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.75))};i.src=r.result};r.readAsDataURL(file)}
const hrs=a=>a.co&&a.ci?(a.co-a.ci)/H:0;
const dh=a=>a.dur||TY[a.ty].h;
const val=a=>a.mode=='fixo'?a.valor:hrs(a)*a.valor;
const plan=a=>a.mode=='fixo'?a.valor:a.valor*dh(a);
const price=(pt,ty)=>{const k=ty=='visita'?'av':ty;return (pt&&pt.v&&pt.v[k])||0};
const saveA=()=>{try{localStorage.setItem(LS+'-ag',JSON.stringify(A))}catch(x){toast('Sem espaço para salvar os atendimentos.')}};
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.k);toast.k=setTimeout(()=>t.classList.remove('show'),2600)};
const modal=h=>{$('#modal').innerHTML='<div class="sheet">'+h+'</div>';$('#modal').classList.add('open')};
const close=()=>{S.lock=false;$('#modal').classList.remove('open')};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cpfOk=c=>{c=c.replace(/\D/g,'');if(c.length!=11||/^(\d)\1+$/.test(c))return false;for(let t=9;t<11;t++){let x=0;for(let i=0;i<t;i++)x+=c[i]*(t+1-i);if((x*10%11)%10!=c[t])return false}return true};
const mCpf=v=>v.replace(/\D/g,'').slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
const mTel=v=>{v=v.replace(/\D/g,'').slice(0,11);return v.length>10?v.replace(/(\d\d)(\d{5})(\d{4})/,'($1) $2-$3'):v.replace(/(\d\d)(\d{0,4})(\d{0,4})/,(m,a,b,c)=>c?`(${a}) ${b}-${c}`:b?`(${a}) ${b}`:a)};
const ini=n=>n.split(' ').map(x=>x[0]).slice(0,2).join('');
const fh=h=>{const m=Math.round(h*60);return Math.floor(m/60)+'h'+String(m%60).padStart(2,'0')};

function navR(){const T=S.role=='fam'?[['meu','users','Paciente'],['acomp','pulse','Acompanhar']]:[['agenda','cal','Agenda'],['pac','users','Pacientes'],['fin','wallet','Finanças']];
$('#nav').innerHTML='<div class="brand">'+ic('cross',26)+'<span>CuidaCasa</span></div>'+T.map(t=>`<button class="it ${S.tab==t[0]?'on':''}" data-a="tab" data-v="${t[0]}" aria-label="${t[2]}">${ic(t[1])}<span class="lb">${t[2]}</span></button>`).join('')+`<button class="fbk" data-a="fb">${ic('flag',20)}<span class="lb">Enviar feedback / Reportar erro</span></button><button class="collapse" data-a="col" aria-label="Recolher menu">${ic('menu')}</button>`}

function card(a,d){const t=TY[a.ty],p=pat(a.p);let b='';
if(a.st=='pend')b=`<button class="btn sec" data-a="conf" data-v="${a.id}">Confirmar atendimento</button>`;
if(a.st=='conf')b=`<button class="btn ok" data-a="ci" data-v="${a.id}">Check-in no local</button>`;
if(a.st=='and')b=`<button class="btn" data-a="co" data-v="${a.id}">Check-out</button>`;
const reg=a.ci?`<div class="mut">Entrada ${hm(a.ci)}${a.co?' · Saída '+hm(a.co)+' · '+fh(hrs(a)):' · em curso há '+fh((Date.now()-a.ci)/H)}${a.loc?' · 📍 local registrado':''}</div>`:'';
const ear=(a.co?'Ganho: '+brl(val(a)):'Previsto: '+brl(plan(a)))+(a.mode=='fixo'?' (valor fixo)':' · '+brl(a.valor)+'/h');
const ov=over(a);
const dly=(a.st=='pend'||a.st=='conf')?`<div class="dly"><span class="mut">Avisar atraso:</span><button class="btn sec sm" data-a="dly" data-v="${a.id}" data-m="15">+15 min</button><button class="btn sec sm" data-a="dly" data-v="${a.id}" data-m="30">+30 min</button></div>`:'';
const dc=a.delay?`<div class="dly"><span class="chip s-pend">Atraso avisado: +${a.delay} min</span><a class="chip" style="text-decoration:none" target="_blank" rel="noopener" href="${wa(p,'Olá! Vou me atrasar cerca de '+a.delay+' min para o atendimento de '+unesc(p.n)+' (previsto '+a.s+'). Obrigado(a) pela compreensão.')}">Enviar no WhatsApp</a>${(a.st=='pend'||a.st=='conf')?`<button class="btn sec sm" data-a="dly" data-v="${a.id}" data-m="-15">−15 min</button><button class="btn out sm" data-a="dly" data-v="${a.id}" data-m="0">Desfazer atraso</button>`:''}</div>`:'';
const al=ov?`<div class="alt" role="alert">⚠ Check-out pendente: o tempo previsto (${dh(a)}h) foi excedido há ${fh((Date.now()-a.ci)/H-dh(a))}. Confirme sua saída.</div>`:'';
if(ov)b=b.replace('class="btn"','class="btn" style="background:var(--rd);color:#fff"');
return `<div class="card ap ${ov?'late':''}" style="--c:${t.c}"><div class="row"><div><span class="chip t">${t.l}</span><h3 style="margin-top:6px">${p.n}</h3><div class="mut">${a.s} · ${p.end}</div>${d&&a.d!=key(d)?'<div class="mut">Continuação do plantão iniciado em '+dl(a.d+'T00:00',{day:'2-digit',month:'short'})+'</div>':''}${reg}<div style="font-weight:700;margin-top:4px">${ear}</div></div><span class="chip s-${a.st}">${ST[a.st]}</span></div>${al}${dc}${dly}<div class="acts">${b}<button class="btn out" data-a="pat" data-v="${p.id}">Ficha</button><button class="btn out" data-a="editap" data-v="${a.id}">Editar</button></div></div>`}
const cross=(a,d)=>a.d<key(d)&&new Date(a.d+'T'+a.s).getTime()+dh(a)*H>D0(d).getTime();
const list=(d)=>{const l=A.filter(a=>a.d==key(d)||cross(a,d)).sort((x,y)=>(cross(x,d)?'':x.s).localeCompare(cross(y,d)?'':y.s));return l.length?l.map(a=>card(a,d)).join(''):'<div class="empty">Nenhum atendimento neste dia. Toque em "+ Novo atendimento" para criar o primeiro.</div>'};

function vAgenda(){const d=S.date;let body='';
const seg=`<div class="seg">${[['dia','Dia'],['sem','Semana'],['mes','Mês']].map(x=>`<button class="${S.view==x[0]?'on':''}" data-a="view" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>`;
const step=S.view=='mes'?30:S.view=='sem'?7:1;
const ttl=S.view=='mes'?dl(d,{month:'long',year:'numeric'}):S.view=='sem'?'Semana de '+dl(add(d,-((d.getDay()+6)%7)),{day:'numeric',month:'short'}):dl(d,{weekday:'long',day:'numeric',month:'long'});
const nv=`<div class="dnav"><button data-a="nav" data-v="-${step}" aria-label="Anterior">${ic('back')}</button><h2 style="margin:0;text-transform:capitalize">${ttl}</h2><button data-a="nav" data-v="${step}" aria-label="Próximo">${ic('fwd')}</button></div>`;
if(S.view=='dia')body=list(d);
if(S.view=='sem'){const m=add(d,-((d.getDay()+6)%7));body=[0,1,2,3,4,5,6].map(i=>{const x=add(m,i);return `<h3 style="margin:14px 0 8px;text-transform:capitalize">${dl(x,{weekday:'long',day:'numeric'})}</h3>`+list(x)}).join('')}
if(S.view=='mes'){const f=new Date(d.getFullYear(),d.getMonth(),1),n=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();let c='';for(let i=0;i<(f.getDay()+6)%7;i++)c+='<span></span>';
for(let i=1;i<=n;i++){const x=new Date(d.getFullYear(),d.getMonth(),i);c+=`<button class="${key(x)==key(d)?'sel':''} ${key(x)==key(TODAY)?'td':''}" data-a="day" data-v="${key(x)}">${i}${A.some(a=>a.d==key(x))?'<i></i>':''}</button>`}
body=`<div class="mgrid">${['S','T','Q','Q','S','S','D'].map(x=>`<b>${x}</b>`).join('')}${c}</div><h3 style="margin-bottom:8px;text-transform:capitalize">${dl(d,{weekday:'long',day:'numeric',month:'long'})}</h3>`+list(d)}
const od=A.filter(over),ban=od.length?`<div class="alt" role="alert" style="margin:0 0 12px">⚠ ${od.length} check-out pendente${od.length>1?'s':''}: ${od.map(a=>pat(a.p).n).join(', ')}</div>`:'';
const rg=S.view=='dia'?[d,d]:S.view=='sem'?[add(d,-((d.getDay()+6)%7)),add(d,-((d.getDay()+6)%7)+6)]:[new Date(d.getFullYear(),d.getMonth(),1),new Date(d.getFullYear(),d.getMonth()+1,0)];
const pa=A.filter(a=>a.d>=key(rg[0])&&a.d<=key(rg[1])),tot=pa.reduce((x,a)=>x+(a.co?val(a):plan(a)),0);
const sumc=`<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><span class="mut">${pa.length} atendimento${pa.length==1?'':'s'} no período<br>ganho + previsto</span><b style="font-size:22px">${brl(tot)}</b></div>`;
return `<div class="top"><div><h1>Olá, ${esc(ME.n.split(' ')[0]||'profissional')}</h1><div class="mut">${esc(ME.role)}</div></div><div style="display:flex;gap:8px;align-items:center"><button class="ib" data-a="tema2" aria-label="Alternar tema claro ou escuro">${ic('moon')}</button><button class="sw ${ME.avail?'on':''}" data-a="avail" role="switch" aria-checked="${ME.avail}"><i></i>${ME.avail?'Disponível':'Indisponível'}</button></div></div>${ban}<button class="btn wide" style="margin-bottom:12px" data-a="newap">+ Novo atendimento</button>${seg}${nv}${sumc}${body}`}

function vLixeira(){const L=P.filter(p=>p.trash&&!p.del&&!p.famOwner);
return `<button class="btn out sm" data-a="pat" data-v="0" style="margin-bottom:10px">${ic('back',18)} Pacientes</button><div class="top"><h1>Lixeira</h1></div><p class="mut">Pacientes excluídos ficam aqui por 30 dias e depois são apagados de vez.</p>`+(L.length?L.map(p=>{const d=Math.max(0,30-Math.floor((Date.now()-p.trash)/864e5));return `<div class="card"><h3>${p.n}</h3><div class="mut">Excluído em ${dl(p.trash,{day:'2-digit',month:'short'})} · apaga em ${d} dia${d==1?'':'s'}</div><div class="acts"><button class="btn ok" data-a="restore" data-v="${p.id}">Restaurar</button><button class="btn out" data-a="askdel" data-k="perm" data-v="${p.id}">Apagar de vez</button></div></div>`}).join(''):'<div class="empty">A lixeira está vazia.</div>')}
function vPacs(){if(S.pat=='trash')return vLixeira();if(S.pat=='new')return vNovo();if(S.pat)return vFicha(pat(S.pat));return `<div class="top"><h1>Pacientes</h1><div class="dly" style="margin:0"><button class="btn sec sm" data-a="addcode">Adicionar por código</button><button class="btn sm" data-a="newpac">+ Novo paciente</button></div></div>`+(P.filter(vis).length?'':'<div class="empty">Nenhum paciente ainda. Toque em "+ Novo paciente" ou "Adicionar por código".</div>')+P.filter(vis).map(p=>`<button class="card" style="width:100%;text-align:left;display:block" data-a="pat" data-v="${p.id}"><div class="row"><div><h3>${p.n}, ${ageOf(p)} anos</h3><div class="mut">${p.dx}</div><div class="mut">${p.end}</div>${lk(p)?'<span class="chip" style="margin-top:6px">🔒 Cadastrado pela família</span>':''}</div><span class="chip" style="background:var(--rdS);color:var(--rd)">${Object.values(p.al).flat().length} alergias</span></div></button>`).join('')+`<button class="btn out wide" style="margin-top:6px" data-a="lixo">Lixeira (${P.filter(p=>p.trash&&!p.del&&!p.famOwner).length})</button>`}

function vFichaHoje(p){const al=Object.entries(p.al).map(([k,v])=>`${v.map(x=>`<span>${x}</span>`).join('')}`).join('');
const ea=Object.entries(p.al).filter(e=>e[1].length);
const alg=!ea.length?'<div class="alg" style="background:#52687A">Nenhuma alergia informada. Confirme com a família.</div>':`<div class="alg" role="alert"><b>⚠ ALERGIAS</b>${ea.map(([k,v])=>`<div style="margin-top:4px;font-size:13px;opacity:.9">${k}</div>${v.map(x=>`<span>${x}</span>`).join('')}`).join('')}</div>`;
return `<div class="hc"><button class="btn out sm" data-a="pat" data-v="0" style="margin-bottom:10px">${ic('back',18)} Pacientes</button>${alg}<h1>${p.n}, ${ageOf(p)} anos</h1><div class="mut" style="margin-bottom:12px">${p.dx} · ${p.end}</div>${p.dep?'<span class="chip">'+p.dep+'</span>':''}<div class="mut" style="margin:8px 0 12px">Combinado com a família: ${[['12h','p12'],['24h','p24'],['visita','visita']].filter(x=>price(p,x[1])).map(x=>x[0]+' '+brl(price(p,x[1]))).join(' · ')||'valores ainda não combinados'}</div>${lk(p)?`<div class="chip" style="display:block;margin-bottom:8px">🔒 Cadastrado pela família: somente leitura</div><div class="dly" style="margin:0 0 12px"><button class="btn sec sm" data-a="editvals" data-v="${p.id}">Editar meus valores</button><button class="btn out sm" data-a="askdel" data-k="unlink" data-v="${p.id}">Remover da minha lista</button></div>`:`<div class="dly" style="margin:0 0 12px"><button class="btn sec sm" data-a="editpac" data-v="${p.id}">Editar paciente</button><button class="btn out sm" data-a="askdel" data-k="trash" data-v="${p.id}">Excluir paciente</button></div>`}${p.ct?`<div class="card" style="margin-top:12px"><h3>Contato de emergência</h3><div>${p.ct.n||'Familiar'}${p.ct.par?' ('+p.ct.par+')':''}</div><div class="acts"><a class="btn ok" style="text-decoration:none" href="tel:${p.ct.tel.replace(/\D/g,'')}">Ligar ${p.ct.tel}</a></div></div>`:''}
<div class="two"><div><div class="card"><h3 style="margin-bottom:6px">Medicação de hoje</h3>${p.meds.map((m,i)=>`<div class="med ${m.done?'done':''}"><input type="checkbox" ${m.done?'checked':''} data-a="med" data-p="${p.id}" data-v="${i}" aria-label="Administrado: ${m.n}"><div class="nm">${m.n}<div class="mut" style="font-weight:400">${m.d} · ${m.t}${m.done?' · feito às '+hm(m.done):''}</div></div>${lk(p)?'':`<button class="ib" data-a="editmed" data-p="${p.id}" data-v="${i}" aria-label="Editar medicamento">${ic('edit')}</button>`}<button class="ib" data-a="rx" data-p="${p.id}" data-v="${i}" aria-label="${m.rx?'Ver receita anexada':'Anexar receita'}">${ic('doc')}${m.rx?'<span class="dot"></span>':''}</button></div>`).join('')}${p.meds.length?'':'<p class="mut">Nenhum medicamento cadastrado.</p>'}${lk(p)?'':`<button class="btn sec wide" style="margin-top:10px" data-a="addmed" data-v="${p.id}">+ Adicionar medicamento</button>`}</div></div>
<div><div class="card"><h3 style="margin-bottom:10px">Sinais vitais do turno</h3><div class="fg"><div><label for="pa">Pressão (mmHg)</label><input id="pa" type="text" placeholder="120/80"></div><div><label for="gl">Glicemia (mg/dL)</label><input id="gl" type="number" placeholder="98"></div><div><label for="tp">Temperatura (°C)</label><input id="tp" type="number" step=".1" placeholder="36.5"></div><div></div><div class="full"><label for="ob">Observações</label><textarea id="ob" rows="3" placeholder="Como o paciente passou o turno?"></textarea></div><div class="full"><button class="btn ok wide" data-a="vit" data-v="${p.id}">Salvar registro</button></div></div></div>
${dosesCard(p)}${p.vit.length?`<div class="card"><h3>Registros</h3>${p.vit.map(v=>`<div class="med" style="display:block"><b>${v.t}</b> · PA ${v.pa||'–'} · Glic ${v.gl||'–'} · ${v.tp||'–'} °C${v.ob?`<div class="mut">${v.ob}</div>`:''}</div>`).join('')}</div>`:''}</div></div></div>`}

function vFicha(p){const h=vFichaHoje(p),i=h.indexOf('<div class="two">');
const seg=`<div class="seg" style="margin:0 0 12px"><button class="${S.ftab!='pront'?'on':''}" data-a="ftab" data-v="hoje">Hoje</button><button class="${S.ftab=='pront'?'on':''}" data-a="ftab" data-v="pront">Prontuário</button></div>`;
return S.ftab=='pront'?h.slice(0,i)+seg+vPront(p)+'</div>':h.slice(0,i)+seg+h.slice(i)}
function prItems(p){const it=[];(p.pr||[]).forEach(r=>it.push({ts:r.ts,k:r.tipo,t:PRT[r.tipo]||'Registro',txt:r.txt,by:r.by,coren:r.coren,id:r.id,ret:r.ret,retd:(p.pr||[]).some(x=>x.ret==r.id)}));
p.vit.forEach(v=>v.ts&&it.push({ts:v.ts,k:'vit',t:'Sinais vitais',txt:esc('PA '+(v.pa||'–')+' · Glic '+(v.gl||'–')+' · '+(v.tp||'–')+' °C'+(v.ob?' · '+v.ob:''))}));
(p.dl||[]).forEach(x=>it.push({ts:x.ts,k:'dose',t:'Dose',txt:x.n}));
A.filter(a=>a.p==p.id&&a.co).forEach(a=>it.push({ts:a.co,k:'visita',t:'Visita',txt:TY[a.ty].l+' · '+hm(a.ci)+' às '+hm(a.co)+' ('+fh(hrs(a))+')'}));return it}
function prList(p){const it=prItems(p),q=(S.pq||'').toLowerCase(),lim=S.pper?Date.now()-S.pper*864e5:0;
const L=it.filter(x=>(S.pf=='all'||x.k==S.pf)&&x.ts>=lim&&(!q||(x.txt+' '+x.t+' '+(x.by||'')).toLowerCase().includes(q))).sort((a,b)=>b.ts-a.ts);
if(!L.length)return '<div class="empty">'+(it.length?'Nada encontrado com esses filtros.':'Ainda não há registros. Toque em "+ Novo registro".')+'</div>';
let out='',day='';
L.forEach(x=>{const k=key(x.ts);if(k!=day){day=k;out+=`<h3 style="margin:14px 0 6px">${dl(k+'T00:00',{weekday:'short',day:'2-digit',month:'long'})}</h3>`}
out+=`<div class="card" style="margin-bottom:8px"><div class="row"><span class="chip" ${x.k=='inter'?'style="background:var(--rdS);color:var(--rd)"':''}>${x.t}</span><span class="mut">${hm(x.ts)}</span></div>${x.txt?`<div style="margin-top:6px;white-space:pre-wrap">${x.txt}</div>`:''}${x.by?`<div class="mut" style="margin-top:6px">por ${x.by}${x.coren?' · COREN '+x.coren:''}${x.retd?' · retificado depois':''}${x.ret?' · retifica um registro anterior':''}</div>`:''}${x.id&&!x.retd?`<button class="btn out sm" style="margin-top:8px" data-a="retpr" data-p="${p.id}" data-v="${x.id}">Retificar</button>`:''}</div>`});return out}
function vPront(p){const F=[['all','Todos'],['evo','Evolução'],['inter','Intercorrência'],['proc','Procedimento'],['orient','Orientação'],['obs','Observação'],['vit','Sinais vitais'],['dose','Doses'],['visita','Visitas']];
return `<button class="btn wide" data-a="newpr" data-p="${p.id}" style="margin-bottom:12px">+ Novo registro</button><div class="fg"><div class="full"><input id="pq" type="text" placeholder="Buscar no prontuário" value="${esc(S.pq||'')}"></div><div class="full"><select id="ppr"><option value="0" ${!S.pper?'selected':''}>Todo o período</option><option value="7" ${S.pper==7?'selected':''}>Últimos 7 dias</option><option value="30" ${S.pper==30?'selected':''}>Últimos 30 dias</option></select></div></div><div class="dly" style="margin:10px 0">${F.map(x=>`<button class="btn ${S.pf==x[0]?'':'sec'} sm" data-a="pf" data-v="${x[0]}">${x[1]}</button>`).join('')}</div><div id="prlist">${prList(p)}</div>`}
function prForm(pid,tipo,apid,ret){return `<h2 style="margin-top:0">${ret?'Retificar registro':'Novo registro'}</h2><p class="mut" style="margin:0 0 10px">${pat(pid).n}. Depois de salvo, o registro não pode ser editado. Para corrigir, use Retificar.</p><label for="pr-t">Tipo</label><select id="pr-t">${Object.keys(PRT).map(k=>`<option value="${k}" ${k==tipo?'selected':''}>${PRT[k]}</option>`).join('')}</select><label for="pr-x" style="margin-top:10px">${ret?'O que está sendo corrigido':'O que aconteceu'}</label><textarea id="pr-x" rows="5" maxlength="1000" placeholder="${ret?'Descreva a correção':'Ex.: paciente calmo, aceitou a dieta, curativo seco e sem sinais de infecção'}"></textarea><div class="acts"><button class="btn ok" data-a="savepr" data-p="${pid}" data-ap="${apid||''}" data-r="${ret||''}">Salvar registro</button><button class="btn out" data-a="close">Agora não</button></div>`}
function chips(c){return S.np.al[c].map((x,i)=>`<span class="chip" style="background:var(--rdS);color:var(--rd)">${x}<button class="xb" data-a="delal" data-c="${c}" data-v="${i}" aria-label="Remover ${x}">×</button></span>`).join(' ')}
function mchips(){return S.np.meds.map((m,i)=>`<span class="chip">${m.n}${m.d?' '+m.d:''} · ${m.t}<button class="xb" data-a="delm2" data-v="${i}" aria-label="Remover ${m.n}">×</button></span>`).join(' ')}
function vNovo(){const E=S.np.id?pat(S.np.id):null,ed=!!E,ct=(E&&E.ct)||{},fam=S.role=='fam';
const f=(id,l,ex,c,v)=>`<div class="${c==null?'full':c}"><label for="n-${id}">${l}</label><input id="n-${id}" type="text" value="${v==null?'':v}" ${ex||''}></div>`;
const AC={Medicamentos:'Ex.: Dipirona',Materiais:'Ex.: Látex',Alimentos:'Ex.: Camarão'};
const nv=(id,l,k,c)=>`<div class="${c||''}"><label for="n-${id}">${l}</label><input id="n-${id}" type="number" min="0" value="${price(E,k)||''}"></div>`;
return `${fam?(ed?'<button class="btn out sm" data-a="cancelnp" style="margin-bottom:10px">Cancelar edição</button>':''):`<button class="btn out sm" data-a="pat" data-v="${ed?E.id:0}" style="margin-bottom:10px">${ic('back',18)} ${ed?'Ficha':'Pacientes'}</button>`}<div class="card"><h2 style="margin:0 0 4px">${ed?'Editar paciente':fam?'Cadastre o paciente':'Cadastrar paciente'}</h2><p class="mut" style="margin:0 0 14px">${fam?'Preencha uma vez. O profissional que atender verá estes dados, mas não poderá alterá-los.':'Paciente criado por você: você pode editar quando quiser.'}</p><h3 style="margin-bottom:8px">Identificação</h3><div class="fg">${f('nome','Nome completo','autocomplete="off"',null,ed?E.n:'')}<div><label for="n-nasc">Nascimento</label><input id="n-nasc" type="date" value="${ed&&E.nasc?E.nasc:''}"></div><div><label for="n-dep">Nível de dependência</label><select id="n-dep">${['Independente','Dependência parcial','Dependência total'].map(x=>`<option ${ed&&E.dep==x?'selected':''}>${x}</option>`).join('')}</select></div>${f('end','Endereço do atendimento','',null,ed?E.end:'')}${f('dx','Diagnóstico principal','',null,ed?E.dx:'')}</div>
<h3 style="margin:18px 0 8px">Contato de emergência</h3><div class="fg">${f('cn','Familiar responsável','',null,ct.n)}${f('cp','Parentesco','placeholder="Filha, esposo..."','',ct.par)}${f('ct','Telefone / WhatsApp','inputmode="tel" placeholder="(41) 99999-9999"','',ct.tel)}</div>
${fam?'':`<h3 style="margin:18px 0 8px">Valores combinados com a família (R$)</h3><div class="fg">${nv('v12','Plantão 12h','p12')}${nv('v24','Plantão 24h','p24')}${nv('vav','Visita / procedimento avulso','visita','full')}</div>`}
<h3 style="margin:18px 0 8px">Alergias</h3>${Object.keys(AC).map(c=>`<div style="margin-bottom:12px"><label for="al-${c}">${c}</label><div class="fbar"><input id="al-${c}" class="alin" data-c="${c}" type="text" placeholder="${AC[c]}"><button class="btn sec" data-a="addal" data-c="${c}">Adicionar</button></div><div id="chips-${c}" style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${chips(c)}</div></div>`).join('')}
${fam?`<h3 style="margin:18px 0 8px">Medicamentos de uso diário</h3><div class="fg"><div class="full"><label for="n-mn">Nome</label><input id="n-mn" type="text"></div><div><label for="n-md">Dose</label><input id="n-md" type="text" placeholder="50 mg"></div><div><label for="n-mt">Horário</label><input id="n-mt" type="time" value="08:00"></div><div class="full"><button class="btn sec wide" data-a="addm2">Adicionar medicamento</button></div></div><div id="mchips" style="margin:8px 0 0;display:flex;gap:6px;flex-wrap:wrap">${mchips()}</div>${ed?'':'<label class="chk" style="margin-top:14px"><input type="checkbox" id="n-cons"> Autorizo que o profissional que me atende veja estes dados de saúde. Ele poderá ler, mas não alterar.</label>'}`:''}<div class="acts"><button class="btn ok" data-a="savepac">${ed?'Salvar alterações':'Cadastrar paciente'}</button></div></div>`}
function apForm(a){const n=!a.id;
const sel=(id,o,v)=>`<select id="${id}">${o.map(x=>`<option value="${x[0]}" ${x[0]==v?'selected':''}>${x[1]}</option>`).join('')}</select>`;
const dt=ms=>ms?key(ms)+'T'+new Date(ms).toTimeString().slice(0,5):'';
const rp=n?`<div class="full"><label for="e-rep">Repetir</label>${sel('e-rep',[['none','Não repetir'],['daily','Todos os dias'],['alt','Dia sim, dia não']],'none')}<p class="mut" style="margin:4px 0 0">Exemplo: plantão de 12h em dia sim, dia não.</p></div><div class="full" id="e-nbox" style="display:none"><label for="e-n">Quantos atendimentos no total</label><input id="e-n" type="number" min="2" max="60" value="10"></div>`:(a.g?`<div class="full mut">Este atendimento faz parte de uma série de ${A.filter(q=>q.g==a.g).length}.</div>`:'');
const tm=a.ci||a.co?`<div class="full"><label for="e-ci">Entrada (check-in)</label><input id="e-ci" type="datetime-local" value="${dt(a.ci)}"></div><div class="full"><label for="e-co">Saída (check-out)</label><input id="e-co" type="datetime-local" value="${dt(a.co)}"></div>`:'';
return `<h2 style="margin-top:0">${n?'Novo atendimento':'Editar atendimento'}</h2><div class="fg"><div class="full"><label for="e-p">Paciente</label>${sel('e-p',P.filter(p=>vis(p)||p.id==a.p).map(p=>[p.id,p.n]),a.p)}</div><div><label for="e-d">Data</label><input id="e-d" type="date" value="${a.d}"></div><div><label for="e-s">Início</label><input id="e-s" type="time" value="${a.s}"></div><div class="full"><label for="e-ty">Tipo</label>${sel('e-ty',[['p12','Plantão 12h'],['p24','Plantão 24h'],['visita','Visita pontual']],a.ty)}</div><div class="full"><label for="e-m">Como você cobra</label>${sel('e-m',[['fixo','Valor fixo do plantão'],['hora','Valor por hora']],a.mode)}</div><div><label for="e-v">Valor (R$)</label><input id="e-v" type="number" min="0" step="0.01" value="${a.valor==null?'':a.valor}"></div><div><label for="e-dur">Duração (h)</label><input id="e-dur" type="number" min="0.5" step="0.5" value="${dh(a)}"></div>${rp}${tm}</div><div id="e-pv" class="card" style="margin:12px 0 0;background:var(--aqS)"></div><div class="acts"><button class="btn ok" data-a="saveap" data-v="${a.id||''}">Salvar</button><button class="btn out" data-a="close">Cancelar</button>${n?'':`<button class="btn out" style="color:var(--rd)" data-a="delap" data-v="${a.id}">Excluir</button>`}${a.g?`<button class="btn out" style="color:var(--rd)" data-a="delserie" data-v="${a.id}">Excluir a série</button>`:''}</div>`}
function serie(d0,mode,n){const out=[],st=mode=='alt'?2:1;n=Math.max(2,Math.min(60,n||2));for(let i=0;i<n;i++)out.push(key(add(D0(d0+'T00:00'),i*st)));return out}
function epv(){const g=x=>$('#e-'+x),ty=g('ty').value,dur=g('dur');dur.disabled=ty!='visita';if(dur.disabled)dur.value=TY[ty].h;
const v=+g('v').value||0,m=g('m').value,h=+dur.value||TY[ty].h,tot=m=='fixo'?v:v*h,rp=g('rep');
let html=!v?'<span class="mut">Informe o valor combinado com a família para ver quanto você recebe.</span>':`<span class="mut">Você recebe por este atendimento</span><b style="font-size:22px;display:block">${brl(tot)}</b><span class="mut">${m=='fixo'?'Valor fixo, independente das horas trabalhadas.':brl(v)+'/h × '+h+'h previstas. Ao fechar, vale o tempo real entre check-in e check-out.'}</span>`;
if(rp){g('nbox').style.display=rp.value=='none'?'none':'block';if(rp.value!='none'&&g('d').value){const ds=serie(g('d').value,rp.value,+g('n').value),f=x=>dl(x+'T00:00',{weekday:'short',day:'2-digit',month:'short'});html+=`<div class="mut" style="margin-top:8px"><b>${ds.length} atendimentos</b>${v?' · total previsto '+brl(tot*ds.length):''}<br>${ds.slice(0,6).map(f).join(' · ')}${ds.length>6?' … '+f(ds[ds.length-1]):''}</div>`}}
g('pv').innerHTML=html}
function vMeu(){const p=P.find(x=>x.id==S.fid);if(!p&&!S.np)S.np={al:{Medicamentos:[],Materiais:[],Alimentos:[]},meds:[]};
if(S.np)return vNovo();
if(p&&p.trash){const d=Math.max(0,30-Math.floor((Date.now()-p.trash)/864e5));return `<div class="top"><h1>Meu paciente</h1></div><div class="card"><h3>Cadastro na lixeira</h3><p class="mut">O cadastro de ${p.n} foi excluído e some de vez em ${d} dia${d==1?'':'s'}. Enquanto isso, você pode restaurar.</p><div class="acts"><button class="btn ok" data-a="restore" data-v="${p.id}">Restaurar cadastro</button><button class="btn out" data-a="askdel" data-k="famperm" data-v="${p.id}">Apagar de vez</button></div></div>${themeSeg()}<button class="btn out wide" style="margin-top:14px" data-a="logout">Sair da conta</button>`}
const al=Object.entries(p.al).filter(e=>e[1].length).map(e=>`<div class="mut" style="margin-top:6px">${e[0]}</div>`+e[1].map(x=>`<span class="chip" style="background:var(--rdS);color:var(--rd);margin-right:4px">${x}</span>`).join('')).join('');
if(!p.code){p.code=genCode();save()}
const msg='Olá! Segue o cadastro de '+unesc(p.n)+' no CuidaCasa. No app, entre como profissional, toque em Pacientes > Adicionar por código e cole este texto'+(window.ReactNativeWebView?'':' (ou abra o link)')+': '+invLink(p);
const sh=`<div class="card"><h3>Compartilhar com o profissional</h3><p class="mut" style="margin:4px 0 10px">O profissional só vê o paciente depois de adicionar este código ou ler este QR Code.</p><div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><div id="fqr" data-t="CUIDACASA:${p.code}" style="background:#fff;color:#222;padding:8px;border-radius:12px;min-height:60px;min-width:60px"></div><div><div class="mut">Código</div><div style="font-size:26px;font-weight:700;letter-spacing:2px">${p.code}</div><button class="btn sec sm" data-a="copycode" data-v="${p.code}" style="margin-top:8px">Copiar código</button></div></div><a class="btn wide" style="margin-top:12px;text-decoration:none" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(msg)}">Enviar cadastro pelo WhatsApp</a><p class="mut" style="margin:8px 0 0">Se o profissional usa outro aparelho, envie a mensagem pelo WhatsApp. Atenção: ela contém dados de saúde, então envie só ao profissional, em conversa privada.</p></div>`;
return `<div class="top"><h1>Meu paciente</h1><button class="btn sm" data-a="editpac" data-v="${p.id}">Editar dados</button></div><div class="card"><h2 style="margin:0">${p.n}, ${ageOf(p)} anos</h2><div class="mut">${p.dx} · ${p.end}</div><div style="margin-top:8px"><span class="chip">${p.dep}</span></div></div><div class="card"><h3>Alergias</h3>${al||'<p class="mut">Nenhuma informada.</p>'}</div><div class="card"><h3>Contato de emergência</h3><div>${p.ct.n||''} ${p.ct.par?'('+p.ct.par+')':''} · ${p.ct.tel}</div></div><div class="card"><h3>Medicamentos</h3>${p.meds.length?p.meds.map(m=>`<div class="med"><div class="nm">${m.n}<div class="mut" style="font-weight:400">${m.d} · ${m.t}</div></div></div>`).join(''):'<p class="mut">Nenhum informado.</p>'}</div>${sh}<p class="mut">O profissional que atender verá estes dados, mas não poderá alterá-los. Só você edita.</p><button class="btn out wide" style="margin-top:10px" data-a="fb">Enviar feedback / Reportar erro</button>${themeSeg()}${pinBtn()}<button class="btn out wide" style="margin-top:14px" data-a="askdel" data-k="famtrash" data-v="${p.id}">Excluir cadastro do paciente</button><button class="btn out wide" style="margin-top:10px" data-a="logout">Sair da conta</button>`}
function vAcomp(){const p=P.find(x=>x.id==S.fid);
if(!p)return `<div class="top"><h1>Acompanhamento</h1></div><div class="empty">Cadastre o paciente na aba Paciente para acompanhar por aqui.</div>`;
const mine=A.filter(a=>a.p==p.id).sort((x,y)=>(x.d+x.s).localeCompare(y.d+y.s)),cur=mine.find(a=>a.st=='and'),nx=mine.find(a=>!a.co&&a.st!='and'&&a.d>=key(TODAY)),hist=mine.filter(a=>a.co).reverse().slice(0,5);
const nowS=new Date().toTimeString().slice(0,5),who=esc(ME.n||'O profissional'),meds=[...p.meds].sort((x,y)=>x.t.localeCompare(y.t)),al=[];
if(cur&&over(cur))al.push('O plantão passou do tempo previsto e o check-out ainda não foi confirmado.');
if(nx&&nx.delay)al.push(`Atraso avisado: o profissional chega cerca de ${nx.delay} min depois das ${nx.s}.`);
meds.filter(m=>!m.done&&m.t<nowS).forEach(m=>al.push(`Medicação sem confirmação: ${m.n} (${m.t}).`));
const st=cur?`<span class="chip s-and">Em atendimento</span><h3 style="margin-top:6px">${who} está no local</h3><div class="mut">Chegou às ${hm(cur.ci)} · há ${fh((Date.now()-cur.ci)/H)}</div>`:nx?`<span class="chip s-conf">Próximo atendimento</span><h3 style="margin-top:6px;text-transform:capitalize">${dl(nx.d+'T00:00',{weekday:'long',day:'numeric',month:'long'})}, ${nx.s}</h3><div class="mut">${TY[nx.ty].l} · ${ST[nx.st]}</div>`:'<div class="mut">Nenhum atendimento agendado. Quando o profissional agendar, você acompanha por aqui.</div>';
const mr=meds.map(m=>{const ok=!!m.done,late=!ok&&m.t<nowS;return `<div class="med"><div class="nm">${m.n}<div class="mut" style="font-weight:400">${m.d} · ${m.t}</div></div><span class="chip ${ok?'s-conc':late?'':'s-pend'}" ${late?'style="background:var(--rdS);color:var(--rd)"':''}>${ok?'✓ '+hm(m.done):late?'Atrasada':'Pendente'}</span></div>`}).join('');
return `<div class="top"><div><h1>Acompanhamento</h1><div class="mut">${p.n} · atualizado às ${hm(Date.now())}</div></div><button class="btn out sm" data-a="refresh">Atualizar</button></div>
${al.length?`<div class="card" style="border:2px solid var(--rd)"><h3>Alertas</h3>${al.map(x=>`<div style="margin-top:6px">⚠ ${x}</div>`).join('')}</div>`:''}
<div class="two"><div><div class="card">${st}</div><div class="card"><h3>Medicação de hoje · ${meds.filter(m=>m.done).length} de ${meds.length}</h3>${mr||'<p class="mut">Nenhum medicamento cadastrado.</p>'}</div></div>
<div><div class="card"><h3 style="margin-bottom:6px">Sinais vitais registrados</h3>${p.vit.length?p.vit.slice(0,5).map(v=>`<div class="med" style="display:block"><b>${v.ts?dl(v.ts,{day:'2-digit',month:'short'})+' · ':''}${v.t}</b> · PA ${v.pa||'–'} · Glic ${v.gl||'–'} · ${v.tp||'–'} °C${v.ob?`<div class="mut">${v.ob}</div>`:''}</div>`).join(''):'<p class="mut">Ainda não há registros do profissional.</p>'}<p class="mut" style="margin:8px 0 0">Os valores são do registro do profissional. Dúvidas sobre eles, fale com ele.</p></div>
${dosesCard(p)}<div class="card"><h3 style="margin-bottom:6px">Últimas visitas</h3>${hist.length?hist.map(a=>`<div class="med" style="display:block"><b>${dl(a.ci,{day:'2-digit',month:'short'})}</b> · ${hm(a.ci)} às ${hm(a.co)} · ${fh(hrs(a))} · ${TY[a.ty].l}</div>`).join(''):'<p class="mut">Nenhuma visita concluída ainda.</p>'}</div></div></div>`}
function dosesCard(p){const g={};(p.dl||[]).forEach(x=>{const k=key(x.ts);(g[k]=g[k]||[]).push(x)});const ks=Object.keys(g).sort().reverse().slice(0,7);
return `<div class="card"><h3 style="margin-bottom:6px">Doses registradas (7 dias)</h3>${ks.length?ks.map(k=>`<div class="med" style="display:block"><b>${dl(k+'T00:00',{weekday:'short',day:'2-digit',month:'short'})}</b> · ${g[k].length} dose${g[k].length==1?'':'s'}<div class="mut">${g[k].map(x=>x.n+' '+hm(x.ts)).join(' · ')}</div></div>`).join(''):'<p class="mut">Ainda não há doses registradas.</p>'}</div>`}
function lgpd(){S.lock=true;modal(`<h2 style="margin-top:0">Dados sensíveis de saúde</h2><p>A ficha do paciente reúne informações de saúde, que a LGPD (Lei 13.709/2018) trata como dados pessoais sensíveis.</p><p>Use esses dados só para o cuidado deste paciente. Não compartilhe em grupos ou redes sociais e evite capturas de tela.</p><label class="chk" style="margin-bottom:12px"><input type="checkbox" id="lg"> Li e concordo</label><div class="acts"><button class="btn ok" data-a="lgok">Continuar</button><button class="btn out" data-a="lgno">Voltar</button></div>`)}
function stars(r){return `<span class="star">★ ${r.toFixed(1).replace('.',',')}</span>`}

function vFin(){const sub=`<div class="seg"><button class="${S.fsub=='fin'?'on':''}" data-a="fsub" data-v="fin">Finanças</button><button class="${S.fsub=='perf'?'on':''}" data-a="fsub" data-v="perf">Meu perfil</button></div>`;
if(S.fsub=='perf')return `<div class="top"><h1>Meu perfil</h1></div>${sub}${S.edit?vForm():perfil(ME,true)}`;
const AL=A.filter(a=>a.co).sort((x,y)=>y.co-x.co),R=AL.filter(a=>{const d=new Date(a.ci);return d.getFullYear()==S.fy&&(S.fm<0||d.getMonth()==S.fm)}),pg=R.filter(a=>a.paid).reduce((s,a)=>s+val(a),0),rc=R.filter(a=>!a.paid).reduce((s,a)=>s+val(a),0),ac=AL.filter(a=>new Date(a.ci).getFullYear()==S.fy).reduce((s,a)=>s+val(a),0),pv=A.filter(a=>{if(a.co)return false;const d=new Date(a.d+'T00:00');return d.getFullYear()==S.fy&&(S.fm<0||d.getMonth()==S.fm)}).reduce((x,a)=>x+plan(a),0),yrs=[...new Set([TODAY.getFullYear(),...AL.map(a=>new Date(a.ci).getFullYear())])].sort((a,b)=>b-a),MS=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const flt=`<div class="fg" style="margin-bottom:12px"><div><label for="fm">Mês</label><select id="fm"><option value="-1" ${S.fm<0?'selected':''}>Ano todo</option>${MS.map((m,i)=>`<option value="${i}" ${S.fm==i?'selected':''}>${m}</option>`).join('')}</select></div><div><label for="fy">Ano</label><select id="fy">${yrs.map(y=>`<option ${y==S.fy?'selected':''}>${y}</option>`).join('')}</select></div></div>`;
return `<div class="top"><h1>Finanças</h1></div>${sub}${flt}<div class="sum"><div class="card"><span class="mut">A receber</span><b>${brl(rc)}</b></div><div class="card"><span class="mut">Recebido</span><b>${brl(pg)}</b></div><div class="card"><span class="mut">Previsto (agendado)</span><b>${brl(pv)}</b></div><div class="card"><span class="mut">Acumulado em ${S.fy}</span><b>${brl(ac)}</b></div></div><p class="mut">O valor é calculado pelo tempo entre check-in e check-out. O pagamento é feito direto pelo paciente; aqui você só dá baixa.</p>`+(R.length?R.map(a=>`<div class="card"><div class="row"><div><h3>${pat(a.p).n}</h3><div class="mut">${dl(a.ci,{day:'2-digit',month:'short'})} · ${hm(a.ci)} às ${hm(a.co)} · ${TY[a.ty].l}</div><div class="mut">${fh(hrs(a))} · ${a.mode=='fixo'?'valor fixo':brl(a.valor)+'/h'}</div></div><div style="text-align:right"><b style="font-size:19px">${brl(val(a))}</b><br><span class="chip ${a.paid?'s-conc':'s-pend'}">${a.paid?'Pago via '+a.paid:'A receber'}</span></div></div><div class="acts">${a.paid?'':`<button class="btn ok" data-a="pay" data-v="${a.id}">Marcar como pago</button>`}<button class="btn out" data-a="rec" data-v="${a.id}">${ic('doc',18)} Recibo</button><button class="btn out" data-a="editap" data-v="${a.id}">Editar</button></div></div>`).join(''):'<div class="empty">Nenhum atendimento concluído neste período.</div>')}

function dados(){const m=ME.cpf?'***.'+ME.cpf.slice(4,7)+'.'+ME.cpf.slice(8,11)+'-**':'';
const R=[['CPF',m],['RG',ME.rg?ME.rg+(ME.rgOrg?' · '+ME.rgOrg:''):''],['Nascimento',ME.nasc?dl(ME.nasc+'T00:00'):''],['Telefone',ME.tel],['E-mail',ME.email],['Cidade',ME.cidade],['Atende',ME.days.length?ME.days.map(i=>['dom','seg','ter','qua','qui','sex','sáb'][i]).join(', ')+' · '+ME.h[0]+' às '+ME.h[1]:'defina em Editar dados'],['Localização',ME.loc?'salva (aproximada)':'não definida']];
return `<div class="card"><div class="row" style="align-items:center"><h3>Dados pessoais</h3><button class="btn sec sm" data-a="edit">Editar dados</button></div><table>${R.map(r=>`<tr><td class="mut">${r[0]}</td><td>${esc(r[1])||'–'}</td></tr>`).join('')}</table></div>`}
function vForm(){const done=ME.n&&ME.cpf&&ME.coren;
const f=(id,l,v,ex,c)=>`<div class="${c||'full'}"><label for="f-${id}">${l}</label><input id="f-${id}" type="text" value="${esc(v)}" ${ex||''}></div>`;
const SP=['Geriatria','Pediatria','Curativos','Pós-operatório','Cuidados paliativos'];
return `<div class="card"><h2 style="margin:0 0 4px">${done?'Editar meus dados':'Complete seu cadastro'}</h2><p class="mut" style="margin:0 0 14px">${done?'Atualize quando precisar.':'Preencha uma vez. CPF e COREN saem no recibo de reembolso.'}</p>
<h3 style="margin-bottom:8px">Dados pessoais</h3><div class="fg"><div class="full" style="display:flex;align-items:center;gap:14px"><div id="fprev" class="av" style="width:72px;height:72px;font-size:26px${ME.foto?';background:url('+ME.foto+') center/cover':''}">${ME.foto?'':esc(ini(ME.n||'?'))}</div><label class="btn sec" style="cursor:pointer">Escolher foto<input id="f-foto" type="file" accept="image/*" hidden></label></div>${f('n','Nome completo',ME.n,'autocomplete="name"')}${f('cpf','CPF',ME.cpf,'inputmode="numeric" placeholder="000.000.000-00" maxlength="14"')}${f('rg','RG',ME.rg,'inputmode="numeric"','')}${f('org','Órgão emissor',ME.rgOrg,'placeholder="SSP/PR"','')}${f('nasc','Nascimento',ME.nasc,'','').replace('type="text"','type="date"')}${f('tel','Telefone / WhatsApp',ME.tel,'inputmode="tel" placeholder="(41) 99999-9999"','')}${f('em','E-mail',ME.email,'inputmode="email" autocomplete="email"')}${f('cid','Cidade / UF',ME.cidade,'placeholder="Colombo/PR"')}</div>
<p class="mut" style="margin:6px 0 0">Seus dados ficam salvos só neste navegador.</p>
<h3 style="margin:18px 0 8px">Dados profissionais</h3><div class="fg"><div class="full"><label for="f-cat">Categoria</label><select id="f-cat">${['Enfermeiro(a)','Técnico(a) de Enfermagem','Auxiliar de Enfermagem'].map(x=>`<option ${ME.role==x?'selected':''}>${x}</option>`).join('')}</select></div>${f('coren','Nº do COREN',ME.coren,'placeholder="PR-123456-TEC"')}<div class="full"><label>Especialidades</label><div class="chks">${SP.map(x=>`<label class="chk"><input type="checkbox" class="spc" value="${x}" ${ME.sp.includes(x)?'checked':''}> ${x}</label>`).join('')}</div></div></div>
<h3 style="margin:18px 0 8px">Disponibilidade e localização</h3><div class="chks" style="grid-template-columns:repeat(4,1fr)">${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map((x,i)=>`<label class="chk" style="padding:8px"><input type="checkbox" class="dyc" value="${i}" ${ME.days.includes(i)?'checked':''}> ${x}</label>`).join('')}</div><div class="fg" style="margin-top:10px"><div><label for="f-h1">Das</label><input id="f-h1" type="time" value="${ME.h[0]}"></div><div><label for="f-h2">Até</label><input id="f-h2" type="time" value="${ME.h[1]}"></div><div class="full"><button class="btn sec wide" data-a="setloc">${ME.loc?'Atualizar minha localização':'Usar minha localização atual'}</button><p class="mut" id="locmsg" style="margin:6px 0 0">${ME.loc?'Localização aproximada salva.':'Localização ainda não definida.'}</p></div></div><p class="mut" style="margin:18px 0 0">Seus valores não aparecem no perfil. Você combina o valor direto com cada família, porque ele muda com distância, horário e tipo de cuidado.</p><div class="acts"><button class="btn ok" data-a="saveperf">Salvar dados</button>${done?'<button class="btn out" data-a="cancel">Cancelar</button>':''}</div></div>`}
function perfil(n,own){return `<div class="card"><div style="display:flex;gap:14px;align-items:center"><div class="av" style="width:72px;height:72px;font-size:26px${n.foto?';background:url('+n.foto+') center/cover':''}">${n.foto?'':esc(ini(n.n))}</div><div><h2 style="margin:0">${esc(n.n)}</h2><div class="mut">${esc(n.role)}</div><div style="margin-top:4px">${n.coren?'<span class="chip s-pend">COREN informado</span> ':''}<span class="mut">${esc(n.coren)}</span></div></div></div><div style="margin:12px 0">${n.rv?stars(n.r)+' <span class="mut">'+n.rv+' avaliações</span>':'<span class="mut">Sem avaliações ainda</span>'}</div><div>${n.sp.map(s=>`<span class="chip" style="margin-right:6px">${s}</span>`).join('')}</div></div>
${own?dados():''}
${own?`${window.ReactNativeWebView?'':`<button class="btn wide" data-a="share">${ic('share',20)} Compartilhar perfil (WhatsApp / QR Code)</button>`}<button class="btn out wide" style="margin-top:10px" data-a="logout">Sair da conta${S.user&&S.user.e?' ('+S.user.e+')':''}</button><button class="btn out wide" style="margin-top:10px" data-a="fb">Enviar feedback / Reportar erro</button>${themeSeg()}${pinBtn()}<button class="btn out wide" style="margin-top:14px;color:var(--rd)" data-a="askwipe">Apagar todos os dados deste aparelho</button>`:''}`}

function recibo(a){const p=pat(a.p),tx=['RECIBO DE PRESTAÇÃO DE SERVIÇO','Profissional: '+ME.n+' ('+ME.role+')','COREN '+ME.coren+' · CPF '+ME.cpf,'Paciente: '+unesc(p.n),'Serviço: '+TY[a.ty].l+' · '+dl(a.ci,{day:'2-digit',month:'long',year:'numeric'})+', '+hm(a.ci)+' às '+hm(a.co)+' ('+fh(hrs(a))+')','Valor: '+brl(val(a)),'Pagamento: '+(a.paid||'a receber')].join('\n');return `<h2 style="margin-top:0">Recibo de prestação de serviço</h2><div class="rcp"><p><b>Profissional:</b> ${esc(ME.n)}<br>${esc(ME.role)}<br>COREN ${esc(ME.coren)} · CPF ${esc(ME.cpf)}</p><p><b>Paciente:</b> ${p.n}<br>${p.end}</p><p><b>Serviço:</b> ${TY[a.ty].l}<br>${dl(a.ci,{day:'2-digit',month:'long',year:'numeric'})}, das ${hm(a.ci)} às ${hm(a.co)} (${fh(hrs(a))})</p><p><b>Valor:</b> ${brl(val(a))}<br><b>Forma de pagamento:</b> ${a.paid?a.paid:'a receber'}</p><p class="mut" style="margin-bottom:0">Documento para pedido de reembolso ao plano de saúde.</p></div><div class="acts noprint"><a class="btn" style="text-decoration:none" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(tx)}">Enviar pelo WhatsApp</a><button class="btn sec" data-a="copyrec" data-t="${esc(tx)}">Copiar texto</button>${window.ReactNativeWebView?'':'<button class="btn out" data-a="print">Imprimir ou salvar PDF</button>'}<button class="btn out" data-a="close">Fechar</button></div>`}

const GOOGLE_CLIENT_ID='';
function enter(u){S.user=u;S.pat=null;S.np=null;if(S.role=='fam'){S.tab='meu';return}if(!ME.n)ME.n=u.n||'';if(!ME.email)ME.email=u.e||'';if(!(ME.n&&ME.cpf&&ME.coren)){S.tab='fin';S.fsub='perf';S.edit=true}}
function vLogin(){return `<div class="login"><div class="logo">${ic('cross',40)}</div><div><h1>CuidaCasa</h1><p class="mut" style="margin:4px 0 0">Gestão de enfermagem em homecare</p></div><div class="seg" style="margin:0"><button class="${S.role!='fam'?'on':''}" data-a="role" data-v="prof">Sou profissional</button><button class="${S.role=='fam'?'on':''}" data-a="role" data-v="fam">Sou da família</button></div><div id="gbtn" style="display:grid;place-items:center"></div><button class="btn gbtn wide gfall" data-a="glogin"><b style="font-size:21px;color:#4285F4">G</b> Entrar com Google</button><button class="btn sec wide" data-a="demo">Entrar em modo demonstração</button><p class="mut" style="margin:0">O modo demonstração usa dados de exemplo. O que você preencher fica salvo só neste navegador.</p>${themeSeg()}</div>`}
function renderG(){if(!GOOGLE_CLIENT_ID||!window.google)return;google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:r=>{try{const b=r.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'),p=JSON.parse(decodeURIComponent(escape(atob(b))));enter({n:p.name||'',e:p.email});render()}catch(x){toast('Não foi possível entrar com o Google')}}});google.accounts.id.renderButton($('#gbtn'),{theme:'outline',size:'large',width:300,text:'signin_with',locale:'pt-BR'});$('.gfall').style.display='none'}
function render(){$('#app').classList.toggle('out',!S.user||S.locked);if(S.locked){$('#main').innerHTML=vLock();return}if(!S.user){$('#main').innerHTML=vLogin();renderG();return}navR();$('#app').classList.toggle('col',S.col);$('#main').innerHTML={agenda:vAgenda,pac:vPacs,fin:vFin,meu:vMeu,acomp:vAcomp}[S.tab]();drawQR()}

document.addEventListener('click',e=>{const t=e.target.closest('[data-a]');
if(e.target.id=='modal'){if(!S.lock)close();return}
if(!t)return;const a=t.dataset.a,v=t.dataset.v,id=+v;
const ap=A.find(x=>x.id==id);
switch(a){
case'demo':enter({n:'',e:''});break;
case'edit':S.edit=true;S.fsub='perf';S.tab='fin';break;
case'cancel':S.edit=false;break;
case'glogin':toast('O login real do Google precisa do app no seu domínio, com um Client ID. Por ora, use o modo demonstração.');return;
case'logout':S.user=null;S.edit=false;S.np=null;S.tab='agenda';S.pat=null;break;
case'tab':S.tab=v;S.pat=null;S.np=null;break;
case'dly':{const m=+t.dataset.m,old=ap.delay||0;ap.delay=m==0?0:Math.max(0,old+m);if(!ap.delay)delete ap.delay;
toast(m>0?'Atraso de +'+m+' min registrado. Total: '+ap.delay+' min':ap.delay?'Atraso reduzido para '+ap.delay+' min. Se já avisou a família, avise da correção.':'Atraso removido. Se já avisou a família, avise da correção.');break}
case'col':S.col=!S.col;break;
case'view':S.view=v;break;
case'nav':S.date=S.view=='mes'?new Date(S.date.getFullYear(),S.date.getMonth()+Math.sign(id),1):add(S.date,id);break;
case'day':S.date=D0(v+'T00:00');break;
case'avail':ME.avail=!ME.avail;saveMe();toast(ME.avail?'Você está disponível para novos atendimentos':'Você está indisponível');break;
case'conf':ap.st='conf';toast('Atendimento confirmado');break;
case'ci':ap.st='and';ap.ci=Date.now();toast('Check-in registrado às '+hm(ap.ci));if(navigator.geolocation)navigator.geolocation.getCurrentPosition(g=>{ap.loc=[+g.coords.latitude.toFixed(3),+g.coords.longitude.toFixed(3)];saveA();render()},()=>{},{timeout:6000,maximumAge:60000});break;
case'co':{const end=Math.min(new Date(ap.d+'T'+ap.s).getTime()+dh(ap)*H,ap.ci+dh(ap)*H);
if(Date.now()<end){const done=(Date.now()-ap.ci)/H,fim=new Date(end).toDateString()==new Date().toDateString()?hm(end):dl(end,{weekday:'short',day:'2-digit',month:'short'})+' às '+hm(end);
const vl=ap.mode=='fixo'?'Valor fixo deste atendimento: <b>'+brl(ap.valor)+'</b>.':'Pelo tempo no local ('+fh(done)+') você recebe <b>'+brl(ap.valor*done)+'</b>.';
modal(`<h2 style="margin-top:0">Sair antes do horário?</h2><p>Este atendimento vai até <b>${fim}</b>. Ainda faltam <b>${fh((end-Date.now())/H)}</b>.</p><p class="mut" style="margin:0 0 10px">Você está há ${fh(done)} no local. ${vl}</p><div class="acts"><button class="btn" data-a="close">Voltar, ainda estou aqui</button><button class="btn out" style="color:var(--rd)" data-a="co2" data-v="${ap.id}">Registrar saída agora</button></div><p class="mut" style="margin:10px 0 0">Saiu na hora certa e esqueceu de marcar? Depois, use Editar para ajustar o horário.</p>`);return}}
case'co2':ap.st='conc';ap.co=Date.now();toast('Check-out às '+hm(ap.co)+' · '+brl(val(ap))+' a receber');modal(prForm(ap.p,'evo',ap.id,null));break;
case'pat':if(id&&(pat(id).del||pat(id).trash)){toast('Paciente excluído');return}S.tab='pac';S.pat=id||null;S.ftab='hoje';scrollTo(0,0);break;
case'med':{const pp=pat(+t.dataset.p),m=pp.meds[id];m.done=t.checked?Date.now():null;pp.dl=pp.dl||[];if(t.checked)pp.dl.unshift({n:m.n,ts:m.done});else{const i=pp.dl.findIndex(x=>x.n==m.n&&key(x.ts)==key(Date.now()));if(i>=0)pp.dl.splice(i,1)}pp.dl=pp.dl.slice(0,300);save();toast(t.checked?m.n+' administrado às '+hm(m.done):'Marcação removida');break}
case'rx':{const p=pat(+t.dataset.p),m=p.meds[id];
const up=`<label class="btn ${m.rx?'out':''} wide" style="margin-top:10px;cursor:pointer">${m.rx?'Trocar foto da receita':'Anexar foto da receita'}<input id="rxf" type="file" accept="image/*" hidden data-p="${p.id}" data-i="${id}"></label>`;
modal(`<h2 style="margin-top:0">Receita · ${m.n}</h2>`+(m.rx?(m.rx=='demo'?`<div class="rx"><b>Dr(a). Exemplo, CRM 00000</b><hr><p>Paciente: ${p.n}</p><p>${m.n} ${m.d}<br>Administrar às ${m.t}, uso contínuo.</p><p style="margin-top:30px;opacity:.5">[receita de demonstração]</p></div>`:`<img src="${m.rx}" alt="Foto da receita" style="width:100%;border-radius:12px">`):'<div class="empty">Nenhuma receita anexada a este medicamento.</div>')+up+'<button class="btn out wide" style="margin-top:8px" data-a="close">Fechar</button>');return}
case'addmed':if(lk(pat(id))){toast(RO);return}modal(`<h2 style="margin-top:0">Adicionar medicamento</h2><div class="fg"><div class="full"><label for="m-n">Nome</label><input id="m-n" type="text"></div><div><label for="m-d">Dose</label><input id="m-d" type="text" placeholder="50 mg"></div><div><label for="m-t">Horário</label><input id="m-t" type="time" value="08:00"></div></div><div class="acts"><button class="btn ok" data-a="savemed" data-v="${id}">Adicionar</button><button class="btn out" data-a="close">Cancelar</button></div>`);return;
case'savemed':{if(lk(pat(id))){toast(RO);return}const n=$('#m-n').value.trim();if(!n){toast('Informe o nome do medicamento');return}const p=pat(id),i=t.dataset.i,o={n:esc(n),d:esc($('#m-d').value.trim()),t:$('#m-t').value||'08:00'};if(i!==undefined&&i!=='')Object.assign(p.meds[+i],o);else p.meds.push({...o,done:null,rx:null});p.meds.sort((x,y)=>x.t.localeCompare(y.t));save();close();toast('Medicamento salvo');break}
case'newpac':S.pat='new';S.np={al:{Medicamentos:[],Materiais:[],Alimentos:[]}};scrollTo(0,0);break;
case'addal':{const c=t.dataset.c,i=$('#al-'+c),x=esc(i.value.trim());if(x&&!S.np.al[c].includes(x))S.np.al[c].push(x);i.value='';$('#chips-'+c).innerHTML=chips(c);i.focus();return}
case'delal':{const c=t.dataset.c;S.np.al[c].splice(id,1);$('#chips-'+c).innerHTML=chips(c);return}
case'savepac':{const g=x=>$('#n-'+x).value.trim(),bad=[],fam=S.role=='fam';['nome','nasc','dx','ct'].forEach(x=>$('#n-'+x).classList.remove('bad'));
if(S.np.id&&!fam&&lk(pat(S.np.id))){toast(RO);return}
if(!g('nome'))bad.push('nome');if(!g('nasc')||new Date(g('nasc')+'T00:00')>new Date())bad.push('nasc');if(!g('dx'))bad.push('dx');if(g('ct').replace(/\D/g,'').length<10)bad.push('ct');
if(bad.length){bad.forEach(x=>$('#n-'+x).classList.add('bad'));$('#n-'+bad[0]).focus();toast(bad[0]=='ct'?'Informe o telefone do familiar com DDD':'Preencha os campos marcados');return}
if(fam&&!S.np.id&&!$('#n-cons').checked){toast('Marque a autorização para continuar');return}
const dat={n:esc(g('nome')),nasc:g('nasc'),age:ageOf({nasc:g('nasc')}),dx:esc(g('dx')),end:esc(g('end'))||'Endereço não informado',dep:$('#n-dep').value,al:S.np.al,ct:{n:esc(g('cn')),par:esc(g('cp')),tel:esc(g('ct'))}};
if(!fam)dat.v={p12:+g('v12')||0,p24:+g('v24')||0,av:+g('vav')||0};
const old=S.np.id?pat(S.np.id):null;
if(fam)dat.meds=S.np.meds.map(m=>{const o=old&&old.meds.find(x=>x.n==m.n&&x.t==m.t);return {n:m.n,d:m.d,t:m.t,done:o?o.done:null,rx:o?o.rx:null}});
if(old){Object.assign(old,dat);if(!fam)S.pat=old.id}
else{const np={id:nid(),custom:true,origem:fam?'fam':'prof',famOwner:fam,linked:!fam,code:fam?genCode():'',meds:[],vit:[],...dat};if(fam)np.consent=new Date().toISOString();P.push(np);if(fam){S.fid=np.id;try{localStorage.setItem(LS+'-fam',np.id)}catch(x){}}else S.pat=np.id}
save();S.np=null;toast('Paciente salvo');scrollTo(0,0);break}
case'newap':{const pt=P.find(vis);if(!pt){toast('Cadastre ou adicione um paciente primeiro');return}modal(apForm({d:key(S.date),s:'07:00',ty:'p12',p:pt.id,mode:'fixo',valor:price(pt,'p12')||''}));epv();return}
case'editap':modal(apForm(ap));epv();return;
case'saveap':{const g=x=>$('#e-'+x),pid=+g('p').value,ty=g('ty').value;
if(!g('d').value||!g('s').value){toast('Informe data e horário');return}
if(g('v').value===''||+g('v').value<0){toast('Informe o valor combinado');return}
const o={p:pid,d:g('d').value,s:g('s').value,ty,mode:g('m').value,valor:+g('v').value,dur:ty=='visita'?(+g('dur').value||1):undefined};
const x=id?A.find(q=>q.id==id):null;
if(x){let ci=x.ci,co=x.co;if(g('ci')){ci=g('ci').value?new Date(g('ci').value).getTime():null;co=g('co').value?new Date(g('co').value).getTime():null;if(ci&&co&&co<=ci){toast('A saída precisa ser depois da entrada');return}}
Object.assign(x,o);if(g('ci')){x.ci=ci;x.co=co;x.st=co?'conc':ci?'and':(x.st=='conc'||x.st=='and'?'conf':x.st)}}
else{const rp=g('rep')?g('rep').value:'none',nn=+(g('n')?g('n').value:0);if(rp!='none'&&!(nn>=2&&nn<=60)){toast('Informe de 2 a 60 atendimentos');return}
const ds=rp=='none'?[o.d]:serie(o.d,rp,nn),gid=ds.length>1?'g'+Date.now():undefined;
ds.forEach(d=>A.push({id:Math.max(0,...A.map(q=>q.id))+1,...o,d,g:gid,st:'pend',ci:null,co:null,paid:null}));
S.date=D0(o.d+'T00:00');close();toast(ds.length>1?ds.length+' atendimentos criados':'Atendimento salvo');break}
S.date=D0(o.d+'T00:00');close();toast('Atendimento salvo');break}
case'delserie':t.dataset.a='delserie2';t.textContent='Toque de novo para excluir a série';return;
case'delserie2':{const x=A.find(q=>q.id==id);if(x&&x.g)A=A.filter(q=>q.g!=x.g||q.ci||q.co);close();toast('Série excluída. Os atendimentos já iniciados foram mantidos.');break}
case'delap':t.dataset.a='delap2';t.textContent='Toque de novo para excluir';return;
case'delap2':A=A.filter(q=>q.id!=id);close();toast('Atendimento excluído');break;
case'editpac':{const p=pat(id);if(S.role!='fam'&&lk(p)){toast(RO);return}S.np={id:p.id,al:Object.assign({Medicamentos:[],Materiais:[],Alimentos:[]},JSON.parse(JSON.stringify(p.al))),meds:p.meds.map(m=>({n:m.n,d:m.d,t:m.t}))};S.pat='new';scrollTo(0,0);break}
case'editmed':{const p=pat(+t.dataset.p),m=p.meds[id];if(lk(p)){toast(RO);return}modal(`<h2 style="margin-top:0">Editar medicamento</h2><div class="fg"><div class="full"><label for="m-n">Nome</label><input id="m-n" type="text" value="${m.n}"></div><div><label for="m-d">Dose</label><input id="m-d" type="text" value="${m.d}"></div><div><label for="m-t">Horário</label><input id="m-t" type="time" value="${m.t}"></div></div><div class="acts"><button class="btn ok" data-a="savemed" data-v="${p.id}" data-i="${id}">Salvar</button><button class="btn out" data-a="close">Cancelar</button><button class="btn out" style="color:var(--rd)" data-a="delmed" data-p="${p.id}" data-v="${id}">Excluir</button></div>`);return}
case'delmed':{if(lk(pat(+t.dataset.p))){toast(RO);return}pat(+t.dataset.p).meds.splice(id,1);save();close();toast('Medicamento removido');break}
case'role':S.role=v;break;
case'cancelnp':S.np=null;break;
case'addm2':{const n=$('#n-mn').value.trim();if(!n){toast('Informe o nome do medicamento');return}S.np.meds.push({n:esc(n),d:esc($('#n-md').value.trim()),t:$('#n-mt').value||'08:00'});S.np.meds.sort((x,y)=>x.t.localeCompare(y.t));$('#mchips').innerHTML=mchips();$('#n-mn').value='';$('#n-md').value='';$('#n-mn').focus();return}
case'delm2':S.np.meds.splice(id,1);$('#mchips').innerHTML=mchips();return;
case'editvals':{const p=pat(id);modal(`<h2 style="margin-top:0">Meus valores com esta família</h2><div class="fg"><div><label for="q12">Plantão 12h</label><input id="q12" type="number" min="0" value="${price(p,'p12')||''}"></div><div><label for="q24">Plantão 24h</label><input id="q24" type="number" min="0" value="${price(p,'p24')||''}"></div><div class="full"><label for="qav">Visita / procedimento avulso</label><input id="qav" type="number" min="0" value="${price(p,'visita')||''}"></div></div><div class="acts"><button class="btn ok" data-a="savevals" data-v="${id}">Salvar</button><button class="btn out" data-a="close">Cancelar</button></div>`);return}
case'savevals':{pat(id).v={p12:+$('#q12').value||0,p24:+$('#q24').value||0,av:+$('#qav').value||0};save();close();toast('Valores salvos');break}
case'tema':S.tema=v;try{localStorage.setItem(LS+'-tema',v)}catch(x){}applyTheme();break;
case'tema2':{const dk=S.tema=='dark'||(S.tema=='auto'&&matchMedia('(prefers-color-scheme: dark)').matches);S.tema=dk?'light':'dark';try{localStorage.setItem(LS+'-tema',S.tema)}catch(x){}applyTheme();break}
case'addcode':modal(`<h2 style="margin-top:0">Adicionar paciente</h2><p class="mut">Peça à família o código ou o QR Code que aparece em "Compartilhar com o profissional".</p><label for="cc-in">Código ou texto recebido</label><input id="cc-in" type="text" placeholder="CC-ABC123 ou cole o texto da família" maxlength="6000" autocomplete="off"><div class="acts"><button class="btn ok" data-a="doaddcode">Adicionar</button></div><label class="btn out wide" style="margin-top:10px;cursor:pointer">Ler QR Code com a câmera<input id="qrf" type="file" accept="image/*" capture="environment" hidden></label><button class="btn out wide" style="margin-top:8px" data-a="close">Cancelar</button>`);return;
case'doaddcode':{const inv=parseInv($('#cc-in').value);if(inv){const pp=importInv(inv);close();S.tab='pac';S.pat=null;toast(pp?'Paciente adicionado':'Texto inválido');break}const c=normCode($('#cc-in').value);if(!c){toast('Digite o código');return}const p=P.find(x=>!x.del&&!x.trash&&x.code&&normCode(x.code)==c);
if(!p){toast('Código não encontrado neste aparelho. Peça à família o link pelo WhatsApp.');return}
if(p.origem!='fam'||p.linked){toast('Este paciente já está na sua lista');return}
p.linked=true;save();close();S.tab='pac';S.pat=null;toast(unesc(p.n)+' adicionado');break}
case'invok':{const p=importInv(S.inv);S.inv=null;try{history.replaceState(null,'',location.pathname+location.search)}catch(x){}close();S.tab='pac';S.pat=null;toast(p?'Paciente adicionado':'Link inválido');break}
case'invno':S.inv=null;close();return;
case'copycode':try{navigator.clipboard.writeText(v);toast('Código copiado')}catch(x){toast('Copie manualmente: '+v)}return;
case'askdel':{const k=t.dataset.k,p=pat(id);S.seq=[...crypto.getRandomValues(new Uint8Array(5))].map(x=>'ABCDEFGHJKLMNPQRSTUVWXYZ'[x%24]).join('');
const T={trash:['Mover para a lixeira','O paciente sai da sua lista e vai para a lixeira. Você pode restaurar em até 30 dias.'],unlink:['Remover da minha lista','O paciente sai da sua lista. Os dados continuam com a família, e você pode adicionar de novo pelo código.'],perm:['Apagar definitivamente','Os dados de saúde serão apagados de vez. Não dá para desfazer.'],famtrash:['Mover cadastro para a lixeira','O cadastro sai do seu acesso e do acesso do profissional. Você pode restaurar em até 30 dias.'],famperm:['Apagar definitivamente','Todos os dados do paciente, inclusive o nome, serão apagados de vez. Não dá para desfazer.']}[k];
modal(`<h2 style="margin-top:0">${T[0]}?</h2><p><b>${p.n}</b></p><p>${T[1]}</p><p>Para confirmar, digite a sequência abaixo:</p><div style="font-size:30px;font-weight:700;letter-spacing:8px;text-align:center;margin:8px 0">${S.seq}</div><input id="dsq" type="text" autocomplete="off" autocapitalize="characters" maxlength="5" style="text-align:center;letter-spacing:6px;font-size:20px"><div class="acts"><button class="btn" id="dbtn" disabled data-a="doconf" data-k="${k}" data-v="${id}" style="background:var(--rd);color:#fff">${T[0]}</button><button class="btn out" data-a="close">Cancelar</button></div>`);return}
case'doconf':{const k=t.dataset.k,p=pat(id);if(!p||$('#dsq').value.trim().toUpperCase()!=S.seq){toast('A sequência não confere');return}
if(k=='trash'||k=='famtrash'){p.trashAp=A.filter(a=>a.p==p.id&&!a.co);A=A.filter(a=>a.p!=p.id||a.co);p.trash=Date.now();save();toast('Movido para a lixeira. Dá para restaurar em até 30 dias.')}
else if(k=='unlink'){A=A.filter(a=>a.p!=p.id||a.co);p.linked=false;save();toast('Removido da sua lista. Adicione de novo pelo código.')}
else{A=A.filter(a=>a.p!=p.id||a.co);scrub(p,k=='famperm');toast('Apagado definitivamente')}
if(k=='famperm'){S.fid=0;try{localStorage.removeItem(LS+'-fam')}catch(x){}}
close();S.pat=k=='perm'?'trash':null;S.np=null;break}
case'restore':restoreP(pat(id));toast('Paciente restaurado');break;
case'lixo':S.pat='trash';break;
case'setloc':if(navigator.geolocation)navigator.geolocation.getCurrentPosition(g=>{S.tmpLoc=[+g.coords.latitude.toFixed(2),+g.coords.longitude.toFixed(2)];$('#locmsg').textContent='Localização capturada. Toque em Salvar dados.'},()=>toast('Não consegui acessar a localização. Verifique a permissão do navegador.'),{timeout:8000});else toast('Seu navegador não oferece localização.');return;
case'copyrec':try{navigator.clipboard.writeText(t.dataset.t);toast('Recibo copiado')}catch(x){toast('Não foi possível copiar')}return;
case'askwipe':S.seq=[...crypto.getRandomValues(new Uint8Array(5))].map(x=>'ABCDEFGHJKLMNPQRSTUVWXYZ'[x%24]).join('');modal(`<h2 style="margin-top:0">Apagar todos os dados deste aparelho?</h2><p>Isso apaga perfil, pacientes, atendimentos, lixeira e preferências guardados neste navegador. Não dá para desfazer.</p><p>Para confirmar, digite a sequência abaixo:</p><div style="font-size:30px;font-weight:700;letter-spacing:8px;text-align:center;margin:8px 0">${S.seq}</div><input id="dsq" type="text" autocomplete="off" autocapitalize="characters" maxlength="5" style="text-align:center;letter-spacing:6px;font-size:20px"><div class="acts"><button class="btn" id="dbtn" disabled data-a="dowipe" style="background:var(--rd);color:#fff">Apagar tudo</button><button class="btn out" data-a="close">Cancelar</button></div>`);return;
case'dowipe':if($('#dsq').value.trim().toUpperCase()!=S.seq){toast('A sequência não confere');return}try{Object.keys(localStorage).filter(k=>k.startsWith(LS)).forEach(k=>localStorage.removeItem(k))}catch(x){}try{history.replaceState(null,'',location.pathname+location.search)}catch(x){}location.reload();return;
case'pinmenu':modal(pinOn()?`<h2 style="margin-top:0">PIN do aparelho</h2><p>Para desativar, digite o PIN atual.</p><input id="pin-a" type="password" inputmode="numeric" maxlength="6" style="text-align:center;font-size:22px;letter-spacing:6px"><div class="acts"><button class="btn" data-a="pindel">Desativar PIN</button><button class="btn out" data-a="close">Cancelar</button></div>`:`<h2 style="margin-top:0">Proteger com PIN</h2><p class="mut">O PIN impede que outra pessoa abra o app neste aparelho. Ele não criptografa os dados guardados no navegador.</p><label for="pin-a">PIN (4 a 6 números)</label><input id="pin-a" type="password" inputmode="numeric" maxlength="6" style="text-align:center;font-size:22px;letter-spacing:6px"><label for="pin-b" style="margin-top:10px">Repita o PIN</label><input id="pin-b" type="password" inputmode="numeric" maxlength="6" style="text-align:center;font-size:22px;letter-spacing:6px"><div class="acts"><button class="btn ok" data-a="pinsave">Ativar PIN</button><button class="btn out" data-a="close">Cancelar</button></div>`);return;
case'pinsave':{const a=$('#pin-a').value,b=$('#pin-b').value;if(!/^\d{4,6}$/.test(a)){toast('Use de 4 a 6 números');return}if(a!=b){toast('Os PINs não são iguais');return}hashPin(a).then(h=>{try{localStorage.setItem(LS+'-pin',h)}catch(x){}close();toast('PIN ativado');render()});return}
case'pindel':hashPin($('#pin-a').value).then(h=>{if(h==localStorage.getItem(LS+'-pin')){localStorage.removeItem(LS+'-pin');close();toast('PIN desativado');render()}else toast('PIN incorreto')});return;
case'unlock':{if(S.tries>=5){toast('Muitas tentativas. Recarregue a página e tente de novo.');return}hashPin($('#pin-in').value).then(h=>{if(h==localStorage.getItem(LS+'-pin')){S.locked=false;S.tries=0;render()}else{S.tries++;toast('PIN incorreto')}});return}
case'ftab':S.ftab=v;break;
case'pf':S.pf=v;break;
case'newpr':modal(prForm(+t.dataset.p,'evo',null,null));return;
case'retpr':{const p=pat(+t.dataset.p),o=(p.pr||[]).find(x=>x.id==id);modal(prForm(p.id,o?o.tipo:'obs',o?o.ap:null,id));return}
case'savepr':{const p=pat(+t.dataset.p),tx=$('#pr-x').value.trim();if(!ME.n||!ME.coren){toast('Complete seu nome e COREN no perfil para assinar registros.');return}if(tx.length<3){toast('Escreva o registro');return}
p.pr=p.pr||[];p.pr.push({id:Date.now(),ts:Date.now(),tipo:$('#pr-t').value,txt:esc(tx),by:esc(ME.n),coren:esc(ME.coren),ap:+t.dataset.ap||null,ret:+t.dataset.r||null});save();close();toast('Registro salvo');break}
case'lgok':if(!$('#lg').checked){toast('Marque "Li e concordo" para continuar');return}{const pp=pat(S.pat);if(pp){pp.ack=Date.now();save()}}close();return;
case'lgno':close();S.pat=null;break;
case'fb':modal(`<h2 style="margin-top:0">Enviar feedback / Reportar erro</h2><label for="fbt">Tipo</label><select id="fbt"><option>Erro</option><option>Sugestão</option><option>Dúvida</option></select><label for="fbx" style="margin-top:10px">O que aconteceu?</label><textarea id="fbx" rows="4" maxlength="500" placeholder="Conte em poucas palavras. Não inclua dados de pacientes."></textarea><div class="acts"><button class="btn ok" data-a="fbsend">Enviar por WhatsApp</button><button class="btn out" data-a="fbsave">Só salvar</button></div>`);return;
case'fbsend':case'fbsave':{const x=$('#fbx').value.trim();if(!x){toast('Escreva uma mensagem curta');return}const r={t:new Date().toISOString(),tipo:$('#fbt').value,tela:S.tab,msg:x};try{const l=JSON.parse(localStorage.getItem(LS+'-fb')||'[]');l.push(r);localStorage.setItem(LS+'-fb',JSON.stringify(l))}catch(x2){}
if(a=='fbsend')open('https://wa.me/'+FEEDBACK_WA+'?text='+encodeURIComponent('CuidaCasa · '+r.tipo+' (tela: '+r.tela+'): '+x),'_blank');close();toast('Obrigado! Feedback registrado');return}
case'vit':{const p=pat(id),g=x=>$('#'+x).value.trim();if(!g('pa')&&!g('gl')&&!g('tp')){toast('Preencha ao menos um sinal vital');return}p.vit.unshift({ts:Date.now(),t:hm(Date.now()),pa:g('pa'),gl:g('gl'),tp:g('tp'),ob:g('ob')});save();toast('Registro salvo');break}
case'fsub':S.fsub=v;break;
case'pay':modal(`<h2 style="margin-top:0">Baixa manual</h2><p>Como o paciente pagou ${brl(val(ap))}?</p><div class="acts"><button class="btn ok" data-a="paid" data-v="${id}" data-m="PIX">PIX</button><button class="btn sec" data-a="paid" data-v="${id}" data-m="Dinheiro">Dinheiro</button></div>`);return;
case'paid':ap.paid=t.dataset.m;close();toast('Pagamento registrado via '+ap.paid);break;
case'rec':if(!ME.cpf||!ME.coren){toast('Preencha CPF e COREN no seu perfil para emitir o recibo');S.fsub='perf';S.edit=true;break}modal(recibo(ap));return;
case'saveperf':{const g=x=>$('#f-'+x).value.trim(),bad=[];['n','cpf','coren'].forEach(x=>$('#f-'+x).classList.remove('bad'));
if(!g('n'))bad.push('n');if(!cpfOk(g('cpf')))bad.push('cpf');if(g('coren').length<4)bad.push('coren');
if(bad.length){bad.forEach(x=>$('#f-'+x).classList.add('bad'));$('#f-'+bad[0]).focus();toast(bad[0]=='cpf'?'CPF inválido. Confira os 11 números':'Preencha os campos marcados');return}
Object.assign(ME,{n:g('n'),cpf:g('cpf'),rg:g('rg'),rgOrg:g('org'),nasc:g('nasc'),tel:g('tel'),email:g('em'),cidade:g('cid'),role:$('#f-cat').value,coren:g('coren'),sp:[...document.querySelectorAll('.spc:checked')].map(x=>x.value),foto:S.tmp||ME.foto||'',days:[...document.querySelectorAll('.dyc:checked')].map(x=>+x.value),h:[g('h1')||'07:00',g('h2')||'19:00'],loc:S.tmpLoc||ME.loc||null});S.tmp=null;S.tmpLoc=null;
if(!saveMe())return;
S.edit=false;toast('Dados salvos');break}
case'print':try{print()}catch(x){toast('Use o menu do navegador para imprimir')}return;
case'close':close();return;
case'share':{const u=location.href.split('#')[0]+'#perfil';modal(`<h2 style="margin-top:0">Compartilhar perfil</h2><div id="qr" style="display:grid;place-items:center;padding:14px;background:#fff;border-radius:14px"></div><div class="acts"><a class="btn ok" style="text-decoration:none" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent('Perfil de '+ME.n+' ('+ME.role+', COREN '+ME.coren+'): '+u)}">Enviar no WhatsApp</a><button class="btn out" data-a="copy">Copiar link</button></div><button class="btn sec wide" style="margin-top:8px" data-a="close">Fechar</button>`);try{new QRCode($('#qr'),{text:u,width:180,height:180})}catch(x){$('#qr').textContent='QR Code indisponível offline'}return}
case'copy':try{navigator.clipboard.writeText(location.href);toast('Link copiado')}catch(x){toast('Não foi possível copiar')}return;
}saveA();render();if(S.user&&S.role=='prof'&&S.inv&&!S.invAsk&&!S.edit){S.invAsk=true;showInv()}if(S.tab=='pac'&&S.pat&&S.pat!='new'&&S.pat!='trash'&&!(pat(S.pat)||{}).ack)lgpd()});
document.addEventListener('input',e=>{if(e.target.id=='f-cpf')e.target.value=mCpf(e.target.value);if(e.target.id=='f-tel'||e.target.id=='n-ct')e.target.value=mTel(e.target.value);if(e.target.id=='km')$('#kmv').textContent=e.target.value});
if(GOOGLE_CLIENT_ID){const g=document.createElement('script');g.src='https://accounts.google.com/gsi/client';g.onload=render;document.head.appendChild(g)}
document.addEventListener('change',e=>{const i=e.target;
if(i.id=='rxf'&&i.files[0]){const m=pat(+i.dataset.p).meds[+i.dataset.i];pic(i.files[0],1000,u=>{m.rx=u;save();close();toast('Receita anexada');render()})}
if(i.id=='f-foto'&&i.files[0])pic(i.files[0],240,u=>{S.tmp=u;const p=$('#fprev');p.style.background='url('+u+') center/cover';p.textContent=''});
if(i.id=='fm'||i.id=='fy'){S[i.id]=+i.value;render()}
if(i.id=='qrf'&&i.files[0])readQR(i.files[0]).then(t=>{if(!t){toast('Não consegui ler o QR Code. Tente com mais luz ou digite o código.');return}$('#cc-in').value=t;document.querySelector('[data-a=doaddcode]').click()})});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.classList&&e.target.classList.contains('alin')){e.preventDefault();document.querySelector('[data-a=addal][data-c="'+e.target.dataset.c+'"]').click()}});
document.addEventListener('input',e=>{if(e.target.id&&e.target.id.startsWith('e-')&&$('#e-pv'))epv();if(e.target.id=='dsq')$('#dbtn').disabled=e.target.value.trim().toUpperCase()!=S.seq});
document.addEventListener('change',e=>{const i=e.target;if((i.id=='e-p'||i.id=='e-ty')&&$('#e-pv')){const pt=pat(+$('#e-p').value);if(i.id=='e-ty')$('#e-dur').value=TY[i.value].h;$('#e-m').value='fixo';$('#e-v').value=price(pt,$('#e-ty').value)||'';epv()}else if((i.id=='e-m'||i.id=='e-rep')&&$('#e-pv'))epv()});
addEventListener('storage',e=>{try{if(e.key==LS+'-pac'){const v=JSON.parse(e.newValue||'null');if(Array.isArray(v)&&v.length)P.splice(0,P.length,...v)}if(e.key==LS+'-ag'){const v=JSON.parse(e.newValue||'null');if(Array.isArray(v))A=v}}catch(x){}
const ae=document.activeElement;if(S.user&&!$('#modal').classList.contains('open')&&!S.np&&!S.edit&&!(ae&&/INPUT|TEXTAREA|SELECT/.test(ae.tagName)))render()});
document.addEventListener('input',e=>{if(e.target.id=='pq'){S.pq=e.target.value;const l=$('#prlist');if(l)l.innerHTML=prList(pat(S.pat))}});
document.addEventListener('change',e=>{if(e.target.id=='ppr'){S.pper=+e.target.value;const l=$('#prlist');if(l)l.innerHTML=prList(pat(S.pat))}});
setInterval(()=>{dayRoll();if(S.user&&(S.tab=='agenda'||S.tab=='acomp')&&!$('#modal').classList.contains('open'))render()},60000);
P.forEach(p=>{if(p.trash&&Date.now()-p.trash>30*864e5)scrub(p,!!p.famOwner)});
render();
</script>
</body>
</html>
