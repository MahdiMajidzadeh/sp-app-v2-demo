/* Snapp Pay – high-fidelity mobile demo. Hash router, no dependencies. */
const P = {
  bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  wallet:'<path d="M20 12V8a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h13"/><path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M21 12h-4a2 2 0 0 0 0 4h4z"/>',
  receipt:'<path d="M4 2v20l3-2 2.5 2 2.5-2 2.5 2 2.5-2 3 2V2l-3 2-2.5-2-2.5 2-2.5-2L7 4z"/><path d="M8 9h8M8 13h8"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  left:'<path d="m15 18-6-6 6-6"/>', right:'<path d="m9 18 6-6-6-6"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h3M20 17v4"/>',
  store:'<path d="M3 9 5 3h14l2 6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9"/>',
  gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  percent:'<path d="m19 5-14 14"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M17 4.5a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-4-6.3"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  food:'<path d="M3 2v7a3 3 0 0 0 3 3v10M9 2v7a3 3 0 0 1-3 3M19 22V2c-3 2-4 6-4 9s2 3 4 3"/>',
  shirt:'<path d="M20.4 6.6 16 3a4 4 0 0 1-8 0L3.6 6.6a1 1 0 0 0-.3 1.3l1.6 2.9a1 1 0 0 0 1.3.4L8 10.5V21h8V10.5l1.1.7a1 1 0 0 0 1.3-.4l1.6-2.9a1 1 0 0 0-.3-1.3"/>',
  home:'<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  car:'<path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><path d="M3 12h18"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/>',
  plane:'<path d="m22 2-9 20-3-9-8-3z"/><path d="M22 2 10 13"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  heartpulse:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/><path d="M3 12h4l2-3 3 6 2-3h3"/>',
  sofa:'<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11a2 2 0 0 1 4 0v3h12v-3a2 2 0 0 1 4 0v6H2z"/><path d="M5 20v-3M19 20v-3"/>',
  laptop:'<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20"/>',
  sparkle:'<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
  baby:'<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c1.5 1.5 4.5 1.5 6 0"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
};
const ic = (n, s) => `<svg viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''}>${P[n]||''}</svg>`;

/* Persian digits & money */
const fa = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const money = n => fa(Number(n).toLocaleString('en-US').replace(/,/g,'٬'));

/* Data */
const TABS = [
  {id:'home', label:'خرید', icon:'bag'},
  {id:'categories', label:'دسته‌بندی', icon:'grid'},
  {id:'credit', label:'اعتبار', icon:'wallet'},
  {id:'orders', label:'سفارش‌ها', icon:'receipt'},
  {id:'profile', label:'پروفایل', icon:'user'},
];
const STORES = [
  {n:'دیجی‌کالا',c:'#ef394e',l:'د',d:'تا ۱۲ قسط'},
  {n:'اسنپ‌فود',c:'#ff00a6',l:'ا',d:'تا ۴ قسط'},
  {n:'علی‌بابا',c:'#f5a300',l:'ع',d:'تا ۶ قسط'},
  {n:'دیوار',c:'#a62626',l:'د',d:'تا ۱۲ قسط'},
  {n:'تکنولایف',c:'#2d6cdf',l:'ت',d:'تا ۱۸ قسط'},
];
const CATS = [
  ['کالای دیجیتال','laptop','#e6f1ff','#2d6cdf'],['مد و پوشاک','shirt','#fde8f3','#d6247f'],
  ['خوراک و رستوران','food','#fff1e0','#e07b00'],['لوازم خانگی','home','#e7f8f0','#0b8a50'],
  ['سفر و گردشگری','plane','#e6f5fb','#0099d6'],['خودرو','car','#eee9ff','#6a47d6'],
  ['سلامت و زیبایی','heartpulse','#fdebea','#d63a2e'],['مبلمان و دکوراسیون','sofa','#f3efe6','#8a6a2a'],
  ['کتاب و آموزش','book','#e8f4ee','#1f7a55'],['کودک و نوزاد','baby','#fff5d9','#b58300'],
  ['هدیه و مناسبت','gift','#fde8ec','#d6314f'],['سایر','more','#eef0f3','#5b6675'],
];
const OFFERS = [
  {n:'هدفون بی‌سیم',s:'دیجی‌کالا',p:3490000,g:'#2d6cdf,#6a47d6',i:'phone'},
  {n:'کفش ورزشی',s:'مد و پوشاک',p:2150000,g:'#d6247f,#f5a300',i:'shirt'},
  {n:'بلیط تهران–مشهد',s:'علی‌بابا',p:4800000,g:'#0099d6,#12b76a',i:'plane'},
  {n:'جاروبرقی هوشمند',s:'لوازم خانگی',p:12900000,g:'#e07b00,#d6314f',i:'home'},
];
const ORDERS = [
  {id:'SP-48213',s:'دیجی‌کالا',c:'#ef394e',l:'د',t:'۱۴۰۴/۰۸/۲۱',a:8450000,st:['در حال پرداخت اقساط','info'],f:'active',paid:'۲ از ۶ قسط'},
  {id:'SP-47790',s:'علی‌بابا',c:'#f5a300',l:'ع',t:'۱۴۰۴/۰۸/۱۲',a:4800000,st:['اقساط جاری','info'],f:'active',paid:'۱ از ۳ قسط'},
  {id:'SP-47102',s:'اسنپ‌فود',c:'#ff00a6',l:'ا',t:'۱۴۰۴/۰۷/۲۸',a:640000,st:['تسویه شده','ok'],f:'done',paid:'۴ از ۴ قسط'},
  {id:'SP-46555',s:'تکنولایف',c:'#2d6cdf',l:'ت',t:'۱۴۰۴/۰۷/۰۹',a:21900000,st:['تسویه شده','ok'],f:'done',paid:'۱۲ از ۱۲ قسط'},
  {id:'SP-46010',s:'دیوار',c:'#a62626',l:'د',t:'۱۴۰۴/۰۶/۱۵',a:1200000,st:['لغو شده','err'],f:'canceled',paid:'—'},
];

/* helpers */
const link = (title) => `#/p/${encodeURIComponent(title)}`;
const appbar = (title, {back=false, actions=''}={}) => `
  <header class="appbar">
    ${back?`<button class="icon-btn" onclick="history.back()" aria-label="بازگشت">${ic('right')}</button>`:''}
    <h1>${title}</h1>${actions}
  </header>`;
const item = (icon, title, sub, to, extra='') => `
  <a class="item" href="${to}"><span class="ic">${ic(icon)}</span>
    <span class="t"><b>${title}</b>${sub?`<small>${sub}</small>`:''}</span>${extra}<span class="chev">${ic('left')}</span></a>`;
const logo = (o) => `<div class="logo" style="background:${o.c}">${o.l}</div>`;

/* Pages */
const pages = {
  home(){
    return `<div class="page">
      <div class="hello">
        <a class="avatar" href="#/profile">م</a>
        <div class="t"><small>سلام، وقت بخیر 👋</small><b>مهدی مجیدزاده</b></div>
        <a class="icon-btn" href="${link('اعلان‌ها')}" aria-label="اعلان‌ها">${ic('bell')}<i class="dot"></i></a>
      </div>
      <a class="search" href="${link('جستجوی فروشگاه‌ها و کالاها')}">${ic('search')}<span>جستجوی فروشگاه یا کالا…</span></a>

      <a class="credit-card" href="#/credit">
        <small>اعتبار قابل استفاده</small>
        <div class="amt">${money(18500000)}<span>تومان</span></div>
        <div class="bar"><i style="width:62%"></i></div>
        <div class="row"><span>اعتبار کل: ${money(30000000)} تومان</span><span>۶۲٪ آزاد</span></div>
      </a>

      <div class="sec"><div class="quick">
        <a class="q" href="${link('اسکن QR')}"><span class="ic">${ic('qr')}</span>اسکن QR</a>
        <a class="q" href="${link('خرید حضوری')}"><span class="ic">${ic('pin')}</span>خرید حضوری</a>
        <a class="q" href="${link('پرداخت قسط')}"><span class="ic">${ic('card')}</span>پرداخت قسط</a>
        <a class="q" href="${link('هدیه و تخفیف')}"><span class="ic">${ic('gift')}</span>تخفیف‌ها</a>
      </div></div>

      <div class="sec"><a class="banner" href="${link('افزایش اعتبار')}">
        <span class="ic">${ic('sparkle')}</span>
        <span style="flex:1"><b>اعتبارت رو بیشتر کن!</b><span>با تکمیل مدارک تا ۵۰ میلیون تومان</span></span>
        ${ic('left',18)}
      </a></div>

      <div class="sec"><div class="sec-h"><h2>فروشگاه‌های پرطرفدار</h2><a href="#/categories">همه ${ic('left')}</a></div>
        <div class="hscroll">${STORES.map(s=>`
          <a class="card store" href="${link(s.n)}">${logo(s)}<b>${s.n}</b><small>${s.d}</small></a>`).join('')}
        </div>
      </div>

      <div class="sec"><div class="sec-h"><h2>پیشنهادهای ویژه</h2><a href="${link('پیشنهادهای ویژه')}">بیشتر ${ic('left')}</a></div>
        <div class="offers">${OFFERS.map(o=>`
          <a class="card offer" href="${link(o.n)}">
            <div class="img" style="background:linear-gradient(135deg,${o.g})">${ic(o.i)}</div>
            <b>${o.n}</b><small>${o.s}</small>
            <div class="price">${money(o.p)} <small>تومان</small></div>
            <small style="color:var(--primary)">قسطی از ${money(Math.round(o.p/6/1000)*1000)}</small>
          </a>`).join('')}
        </div>
      </div>
    </div>`;
  },

  categories(){
    return `<div class="page">${appbar('دسته‌بندی‌ها',{actions:`<a class="icon-btn" href="${link('جستجو')}">${ic('search')}</a>`})}
      <div class="cats">${CATS.map(c=>`
        <a class="card cat" href="${link(c[0])}"><span class="ic" style="background:${c[2]};color:${c[3]}">${ic(c[1])}</span>${c[0]}</a>`).join('')}
      </div></div>`;
  },

  credit(){
    const C=2*Math.PI*65, used=0.38;
    return `<div class="page">${appbar('اعتبار من',{actions:`<a class="icon-btn" href="${link('راهنمای اعتبار')}">${ic('help')}</a>`})}
      <div class="sec" style="margin-top:4px">
        <div class="card big">
          <div class="ring">
            <svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="65" stroke="#eef0f3"/>
              <circle cx="75" cy="75" r="65" stroke="var(--primary)" stroke-dasharray="${C}" stroke-dashoffset="${C*used}"/></svg>
            <div class="c"><small>قابل استفاده</small><b>${money(18500000)}</b><small>تومان</small></div>
          </div>
          <a class="btn" href="${link('افزایش اعتبار')}">${ic('plus',18)} افزایش اعتبار</a>
        </div>
        <div class="stats">
          <div class="card stat"><small>اعتبار کل</small><b>${money(30000000)}</b></div>
          <div class="card stat"><small>استفاده‌شده</small><b>${money(11500000)}</b></div>
        </div>
      </div>

      <div class="sec"><div class="sec-h"><h2>قسط بعدی</h2></div>
        <div class="card" style="padding:14px">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="item" style="padding:0;border:0;width:auto"><span class="ic">${ic('cal')}</span></span>
            <div style="flex:1;line-height:1.5"><b>${money(1408000)} تومان</b><br><small style="color:var(--ink-2)">سررسید: ۵ آذر ۱۴۰۴ · دیجی‌کالا</small></div>
            <span class="tag warn">۳ روز مانده</span>
          </div>
          <div style="margin-top:12px"><a class="btn" href="${link('پرداخت قسط')}">پرداخت قسط</a></div>
        </div>
      </div>

      <div class="sec"><div class="sec-h"><h2>مدیریت اعتبار</h2></div>
        <div class="card list">
          ${item('clock','اقساط پیش رو','۴ قسط در ۳۰ روز آینده',link('اقساط پیش رو'))}
          ${item('doc','تاریخچه تراکنش‌ها','',link('تاریخچه تراکنش‌ها'))}
          ${item('percent','کد تخفیف و هدیه','۲ کد فعال',link('کد تخفیف و هدیه'))}
          ${item('shield','بیمه و امنیت اعتبار','',link('امنیت اعتبار'))}
        </div>
      </div>
    </div>`;
  },

  orders(f='all'){
    const chips=[['all','همه'],['active','جاری'],['done','تسویه شده'],['canceled','لغو شده']];
    const list=ORDERS.filter(o=>f==='all'||o.f===f);
    return `<div class="page">${appbar('سفارش‌ها')}
      <div class="chips">${chips.map(c=>`<button class="chip ${c[0]===f?'on':''}" data-filter="${c[0]}">${c[1]}</button>`).join('')}</div>
      <div class="sec" style="margin-top:14px">
        ${list.length?list.map(o=>`
          <a class="card order" href="${link('جزئیات سفارش '+fa(o.id.slice(3)))}">
            <div class="top">${logo(o)}<div class="t"><b>${o.s}</b><br><small>${o.t} · ${fa(o.id)}</small></div><span class="tag ${o.st[1]}">${o.st[0]}</span></div>
            <div class="bot"><span>اقساط: <b>${o.paid}</b></span><span>مبلغ: <b>${money(o.a)} تومان</b></span></div>
          </a>`).join(''):`<div class="empty"><div class="ic">${ic('box')}</div><b>سفارشی نیست</b></div>`}
      </div></div>`;
  },

  profile(){
    return `<div class="page">${appbar('پروفایل')}
      <a class="card pf" href="${link('ویرایش پروفایل')}">
        <span class="avatar">م</span>
        <div class="t"><b>مهدی مجیدزاده</b><br><small>${fa('09123456789')}</small></div>${ic('left',18)}
      </a>
      <div class="sec"><div class="card list">
        ${item('user','اطلاعات حساب','',link('اطلاعات حساب'))}
        ${item('card','کارت‌های بانکی','۲ کارت',link('کارت‌های بانکی'))}
        ${item('pin','آدرس‌های من','',link('آدرس‌های من'))}
        ${item('heart','علاقه‌مندی‌ها','',link('علاقه‌مندی‌ها'))}
        ${item('users','دعوت از دوستان','هدیه ۵۰ هزار تومانی',link('دعوت از دوستان'))}
      </div></div>
      <div class="sec"><div class="card list">
        ${item('bell','اعلان‌ها','',link('اعلان‌ها'))}
        ${item('shield','امنیت و رمز عبور','',link('امنیت و رمز عبور'))}
        ${item('chat','پشتیبانی','',link('پشتیبانی'))}
        ${item('help','سوالات متداول','',link('سوالات متداول'))}
        ${item('info','درباره اسنپ‌پی','',link('درباره اسنپ‌پی'))}
      </div></div>
      <div class="sec"><div class="card list">
        <a class="item" href="${link('خروج از حساب')}"><span class="ic" style="background:#fdebea;color:var(--err)">${ic('logout')}</span><span class="t"><b style="color:var(--err)">خروج از حساب</b></span></a>
      </div></div>
      <div class="ver">اسنپ‌پی · نسخه ${fa('2.0.0')} (دمو)</div>
    </div>`;
  },

  empty(title){
    return `<div class="page">${appbar(title,{back:true})}
      <div class="empty"><div class="ic">${ic('sparkle')}</div><b>به‌زودی</b>
      <span>این صفحه در نسخهٔ دمو خالی است و در مراحل بعد تکمیل می‌شود.</span></div></div>`;
  },
};

/* Router */
const screen = document.getElementById('screen');
const tabbar = document.getElementById('tabbar');
const phone = document.getElementById('phone');
tabbar.innerHTML = TABS.map(t=>`<a class="tab" data-tab="${t.id}" href="#/${t.id}">${ic(t.icon)}<span>${t.label}</span></a>`).join('');

let ordersFilter='all';
function render(){
  const parts=(location.hash.replace(/^#\/?/,'')||'home').split('/');
  const route=parts[0];
  if(route==='p'){
    phone.classList.add('hide-tabs');
    screen.innerHTML=pages.empty(decodeURIComponent(parts.slice(1).join('/')));
  }else{
    const r=pages[route]?route:'home';
    phone.classList.remove('hide-tabs');
    screen.innerHTML=pages[r](r==='orders'?ordersFilter:undefined);
    tabbar.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===r));
  }
  screen.scrollTop=0;
}
screen.addEventListener('click',e=>{
  const c=e.target.closest('[data-filter]');
  if(!c)return;
  const y=screen.scrollTop; ordersFilter=c.dataset.filter; render(); screen.scrollTop=y;
});
addEventListener('hashchange',render);
render();
