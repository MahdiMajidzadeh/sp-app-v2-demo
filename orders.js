/* Orders tab: next-month repayment card, filterable order list, order detail, payment sheet.
   Loaded before app.js; uses its helpers (ic, fa, money, link, appbar) at call time only. */

const TODAY = '1404/08/25';               // demo "today": 25 Aban 1404
const NEXT_MONTH = 9;                     // Azar
const MONTHS = ['','فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const FINE_RATE = 0.003;                  // overdue fine per day of the installment amount

const OTYPES = {payin1:'پرداخت در ۱ قسط', payin4:'پرداخت در ۴ قسط', cash:'نقدی'};
const OTYPE_SHORT = {payin1:'۱ قسط', payin4:'۴ قسط', cash:'نقدی'};
const MTYPES = {online:'آنلاین', social:'شبکه‌های اجتماعی', store:'حضوری'};

/* i: installments [due date, amount, paid] */
const ORDERS = [
  {id:'SP-48213', m:'دیجی‌کالا', c:'#ef394e', l:'د', mt:'online', ot:'payin4', d:'1404/07/20', a:8000000,
   i:[['1404/07/20',2000000,1],['1404/08/20',2000000,0],['1404/09/20',2000000,0],['1404/10/20',2000000,0]]},
  {id:'SP-48530', m:'تکنولایف', c:'#2d6cdf', l:'ت', mt:'online', ot:'payin4', d:'1404/08/10', a:12000000,
   i:[['1404/08/10',3000000,1],['1404/09/10',3000000,0],['1404/10/10',3000000,0],['1404/11/10',3000000,0]]},
  {id:'SP-48601', m:'علی‌بابا', c:'#f5a300', l:'ع', mt:'online', ot:'payin1', d:'1404/08/15', a:4800000,
   i:[['1404/09/15',4800000,0]]},
  {id:'SP-47790', m:'پوشاک نیلی', c:'#d6247f', l:'ن', mt:'social', ot:'payin4', d:'1404/06/05', a:2400000,
   i:[['1404/06/05',600000,1],['1404/07/05',600000,1],['1404/08/05',600000,1],['1404/09/05',600000,0]]},
  {id:'SP-48702', m:'کافه لمیز', c:'#8a6a2a', l:'ل', mt:'store', ot:'payin1', d:'1404/08/22', a:850000,
   i:[['1404/09/22',850000,0]]},
  {id:'SP-48120', m:'هایپراستار', c:'#12b76a', l:'ه', mt:'store', ot:'cash', d:'1404/08/12', a:1250000, i:[]},
  {id:'SP-47102', m:'اسنپ‌فود', c:'#ff00a6', l:'ا', mt:'online', ot:'payin4', d:'1404/05/10', a:640000,
   i:[['1404/05/10',160000,1],['1404/06/10',160000,1],['1404/07/10',160000,1],['1404/08/10',160000,1]]},
  {id:'SP-46555', m:'مزون رز', c:'#7a5af8', l:'ر', mt:'social', ot:'payin1', d:'1404/07/03', a:1900000,
   i:[['1404/08/03',1900000,1]]},
];

/* date helpers (demo: 30-day months are close enough) */
const dparts = s => s.split('/').map(Number);
const dnum = s => { const [y,m,d]=dparts(s); return y*360+(m-1)*30+d; };
const month = s => dparts(s)[1];
const jd = s => { const [,m,d]=dparts(s); return `${fa(d)} ${MONTHS[m]}`; };
const jdFull = s => { const [y,m,d]=dparts(s); return `${fa(d)} ${MONTHS[m]} ${fa(y)}`; };
const daysLate = s => dnum(TODAY)-dnum(s);
const fineOf = (amt,due) => Math.round(amt*FINE_RATE*daysLate(due)/1000)*1000;

/* derived info per order */
function info(o){
  const paid=o.i.filter(x=>x[2]).length, total=o.i.length;
  const unpaid=o.i.map((x,k)=>({o,k,due:x[0],amt:x[1]})).filter((x,k)=>!o.i[k][2]);
  const overdue=unpaid.filter(x=>dnum(x.due)<dnum(TODAY));
  const next=unpaid[0];
  let st;
  if(o.ot==='cash') st=['پرداخت شده','ok'];
  else if(!unpaid.length) st=['تسویه شده','ok'];
  else if(overdue.length) st=[`معوق · ${fa(daysLate(overdue[0].due))} روز`,'err'];
  else if(dnum(next.due)-dnum(TODAY)<=7) st=['سررسید نزدیک','warn'];
  else st=['در حال پرداخت','info'];
  return {paid,total,unpaid,overdue,next,st};
}
/* installments the user can pay now: overdue + due next month */
function payables(){
  const out=[];
  ORDERS.forEach(o=>info(o).unpaid.forEach(x=>{
    const late=dnum(x.due)<dnum(TODAY);
    if(late||month(x.due)===NEXT_MONTH) out.push({...x,late,fine:late?fineOf(x.amt,x.due):0,key:o.id+'#'+x.k});
  }));
  return out.sort((a,b)=>dnum(a.due)-dnum(b.due));
}

/* filter state */
const OF = {ot:null, mt:null, buy:null, repay:null};
const FILTERS = [
  {k:'ot', n:'نوع سفارش', opts:()=>Object.entries(OTYPES)},
  {k:'mt', n:'نوع فروشگاه', opts:()=>Object.entries(MTYPES)},
  {k:'buy', n:'تاریخ خرید', opts:()=>[5,6,7,8].map(m=>[m,MONTHS[m]+' '+fa(1404)])},
  {k:'repay', n:'تاریخ بازپرداخت', opts:()=>[8,9,10,11].map(m=>[m,MONTHS[m]+' '+fa(1404)])},
];
const fLabel = f => { const v=OF[f.k]; if(v==null) return f.n; const o=f.opts().find(x=>String(x[0])===String(v)); return o?o[1].replace(' '+fa(1404),''):f.n; };
function filtered(){
  return ORDERS.filter(o=>
    (!OF.ot||o.ot===OF.ot) && (!OF.mt||o.mt===OF.mt) &&
    (!OF.buy||month(o.d)===+OF.buy) &&
    (!OF.repay||o.i.some(x=>month(x[0])===+OF.repay)));
}

/* ---------- pages ---------- */
function ordersPage(){
  const p=payables(), due=p.filter(x=>!x.late), late=p.filter(x=>x.late);
  const dueSum=due.reduce((s,x)=>s+x.amt,0), lateSum=late.reduce((s,x)=>s+x.amt,0), fine=late.reduce((s,x)=>s+x.fine,0);
  const nOrders=new Set(due.map(x=>x.o.id)).size;
  const on=+OF.repay===NEXT_MONTH;
  const card = (!due.length && !late.length) ? `
    <div class="rp rp-empty"><span class="ic">${ic('shield')}</span><div><b>قسطی برای ${MONTHS[NEXT_MONTH]} ندارید</b><small>همه اقساط شما پرداخت شده است.</small></div></div>` : `
    <div class="rp">
      <small>اقساط ${MONTHS[NEXT_MONTH]} ماه</small>
      <div class="amt">${money(dueSum)}<span>تومان</span></div>
      <div class="sub">${fa(due.length)} قسط از ${fa(nOrders)} سفارش · اولین سررسید ${jd(due[0].due)}</div>
      ${late.length?`<div class="rp-late">${ic('info',16)}<span>معوق: <b>${money(lateSum)}</b> + جریمه دیرکرد <b>${money(fine)}</b> تومان</span></div>`:''}
      <div class="btns">
        <button class="b1" data-act="pay">پرداخت اقساط</button>
        <button class="b2 ${on?'on':''}" data-act="repayfilter">${on?ic('check',14):''}سفارش‌های ${MONTHS[NEXT_MONTH]}</button>
      </div>
    </div>`;
  const list=filtered(), active=Object.values(OF).filter(v=>v!=null).length;
  return `<div class="page">${appbar('سفارش‌ها',{actions:`<a class="icon-btn" href="${link('جستجوی سفارش')}">${ic('search')}</a>`})}
    <div class="sec" style="margin-top:0">${card}</div>
    <div class="fchips">
      ${FILTERS.map(f=>`<button class="fchip ${OF[f.k]!=null?'on':''}" data-act="filter" data-k="${f.k}">${fLabel(f)}${ic('down',14)}</button>`).join('')}
    </div>
    <div class="sec" style="margin-top:12px">
      <div class="lh"><b>${active?'نتایج فیلتر':'همه سفارش‌ها'}</b><span>${fa(list.length)} سفارش${active?` · <button data-act="clear">حذف فیلترها</button>`:''}</span></div>
      ${list.length?list.map(orderCard).join(''):`<div class="empty" style="padding:50px 20px"><div class="ic">${ic('box')}</div><b>سفارشی پیدا نشد</b><span>فیلترها را تغییر دهید.</span></div>`}
    </div></div>`;
}

function orderCard(o){
  const f=info(o), pct=f.total?Math.round(f.paid/f.total*100):100;
  const right = f.next ? `<div class="nx"><small>قسط بعدی · ${jd(f.next.due)}</small>${money(f.next.amt)}</div>` : '';
  return `<a class="card od" href="#/order/${o.id}">
    <div class="top">${`<div class="logo" style="background:${o.c}">${o.l}</div>`}
      <div class="t"><b>${o.m}</b><small>مبلغ سفارش: ${money(o.a)} تومان</small></div>${right}</div>
    ${o.ot==='cash'?'':`<div class="pr"><i class="${f.unpaid.length?(f.overdue.length?'late':''):'done'}" style="width:${pct}%"></i></div>`}
    <div class="meta"><span class="tag ${f.st[1]}">${f.st[0]}</span><span class="otype">${OTYPE_SHORT[o.ot]}</span>
      <span class="cnt">${o.ot==='cash'?jd(o.d):`${fa(f.paid)} از ${fa(f.total)} قسط`}</span></div>
  </a>`;
}

function orderDetail(id){
  const o=ORDERS.find(x=>x.id===id);
  if(!o) return pages.empty('سفارش');
  const f=info(o), pct=f.total?Math.round(f.paid/f.total*100):100;
  const remaining=f.unpaid.reduce((s,x)=>s+x.amt,0);
  return `<div class="page">${appbar('جزئیات سفارش',{back:true})}
    <div class="sec" style="margin-top:0"><div class="card od-head">
      <div class="logo" style="background:${o.c}">${o.l}</div>
      <b>${o.m}</b><small>${fa(o.id)} · ${jdFull(o.d)}</small>
      <div class="amt">${money(o.a)} <span>تومان</span></div>
      <span class="tag ${f.st[1]}">${f.st[0]}</span>
    </div></div>
    <div class="sec"><div class="card kv">
      <div><span>نوع سفارش</span><b>${OTYPES[o.ot]}</b></div>
      <div><span>نوع فروشگاه</span><b>${MTYPES[o.mt]}</b></div>
      ${o.ot==='cash'?'':`<div><span>پرداخت‌شده</span><b>${fa(f.paid)} از ${fa(f.total)} قسط</b></div>
      <div><span>مانده</span><b>${money(remaining)} تومان</b></div>`}
    </div></div>
    ${o.ot==='cash'?'':`<div class="sec"><div class="sec-h"><h2>اقساط</h2><span class="muted">${fa(pct)}٪ پرداخت‌شده</span></div>
      <div class="card tl">${o.i.map((x,k)=>{
        const late=!x[2]&&dnum(x[0])<dnum(TODAY), s=x[2]?'paid':late?'late':'up';
        return `<div class="tl-i ${s}"><span class="tl-d">${x[2]?ic('check',12):fa(k+1)}</span>
          <div class="t"><b>قسط ${['اول','دوم','سوم','چهارم'][k]||fa(k+1)}</b><small>${jdFull(x[0])}</small></div>
          <div class="a">${money(x[1])}<small>${x[2]?'پرداخت شده':late?`معوق · جریمه ${money(fineOf(x[1],x[0]))}`:'پرداخت نشده'}</small></div></div>`;}).join('')}
      </div></div>
      ${f.unpaid.length?`<div class="sec"><button class="btn" data-act="pay" data-order="${o.id}">پرداخت قسط ${f.overdue.length?'معوق':'بعدی'}</button></div>`:''}`}
    <div class="sec"><a class="btn ghost" href="${link('پشتیبانی سفارش')}">${ic('chat',18)} پشتیبانی سفارش</a></div>
  </div>`;
}

/* ---------- bottom sheets ---------- */
let sheetState=null;
function openSheet(html){
  closeSheet(true);
  const w=document.createElement('div'); w.className='sheet-wrap'; w.id='sheet';
  w.innerHTML=`<div class="ov" data-act="close"></div><div class="sheet" role="dialog" aria-modal="true"><i class="grab"></i><div id="sheet-body">${html}</div></div>`;
  phone.appendChild(w); requestAnimationFrame(()=>w.classList.add('show'));
}
function setSheet(html){ const b=document.getElementById('sheet-body'); if(b) b.innerHTML=html; }
function closeSheet(now){
  const w=document.getElementById('sheet'); if(!w) return;
  if(now){w.remove();return}
  w.classList.remove('show'); setTimeout(()=>w.remove(),250); sheetState=null;
}

function filterSheet(k){
  const f=FILTERS.find(x=>x.k===k);
  return `<h3>${f.n}</h3><div class="opts">
    <button class="opt ${OF[k]==null?'on':''}" data-act="setf" data-k="${k}" data-v="">همه</button>
    ${f.opts().map(o=>`<button class="opt ${String(OF[k])===String(o[0])?'on':''}" data-act="setf" data-k="${k}" data-v="${o[0]}">${o[1]}</button>`).join('')}
  </div>`;
}

function paySheet(){
  const s=sheetState, all=payables();
  const items=s.order?all.filter(x=>x.o.id===s.order):all;
  const sum=list=>list.reduce((t,x)=>t+x.amt+x.fine,0);
  if(s.step==='done') return `<div class="done"><span class="ic">${ic('check',34)}</span>
    <h3>پرداخت انجام شد</h3><p>${money(s.paid)} تومان با موفقیت پرداخت شد.<br><small>(نسخهٔ دمو؛ پرداخت واقعی انجام نمی‌شود)</small></p>
    <button class="btn" data-act="close">بازگشت</button></div>`;
  if(s.step==='choose'){
    return `<h3>پرداخت اقساط</h3><p class="muted">می‌خواهید همه اقساط را پرداخت کنید یا فقط چند مورد را انتخاب کنید؟</p>
      <button class="choice" data-act="payall"><span class="ic">${ic('wallet')}</span><span class="t"><b>پرداخت همه</b><small>${fa(items.length)} قسط${items.some(x=>x.late)?' + جریمه دیرکرد':''}</small></span><b>${money(sum(items))}</b></button>
      <button class="choice" data-act="payselect"><span class="ic">${ic('receipt')}</span><span class="t"><b>انتخاب اقساط</b><small>اقساط دلخواه را انتخاب کنید</small></span>${ic('left',18)}</button>`;
  }
  const sel=items.filter(x=>s.sel.has(x.key)), total=sum(sel);
  return `<div class="sh-h"><button class="icon-btn sm" data-act="back" aria-label="بازگشت">${ic('right')}</button><h3>انتخاب اقساط</h3></div>
    <div class="plist">${items.map(x=>`
      <button class="pi-row ${s.sel.has(x.key)?'on':''}" data-act="tog" data-key="${x.key}">
        <span class="cb">${ic('check',12)}</span>
        <span class="logo" style="background:${x.o.c}">${x.o.l}</span>
        <span class="t"><b>${x.o.m} · قسط ${fa(x.k+1)} از ${fa(x.o.i.length)}</b><small>${x.late?`<em>معوق · جریمه ${money(x.fine)}</em>`:jd(x.due)}</small></span>
        <span class="a">${money(x.amt)}</span>
      </button>`).join('')}</div>
    <button class="btn" data-act="confirm" ${sel.length?'':'disabled'}>${sel.length?`پرداخت ${money(total)} تومان`:'قسطی انتخاب نشده'}</button>`;
}
function startPay(order){
  sheetState={step:order?'select':'choose',order,sel:new Set()};
  if(order) payables().filter(x=>x.o.id===order).forEach(x=>sheetState.sel.add(x.key));
  openSheet(paySheet());
}

/* ---------- click handling (returns true when handled) ---------- */
function ordersClick(e){
  const a=e.target.closest('[data-act]'); if(!a) return false;
  const act=a.dataset.act, rerender=()=>{const y=screen.scrollTop; render(); screen.scrollTop=y;};
  switch(act){
    case 'pay': startPay(a.dataset.order); break;
    case 'repayfilter': OF.repay = +OF.repay===NEXT_MONTH ? null : NEXT_MONTH; rerender(); break;
    case 'filter': openSheet(filterSheet(a.dataset.k)); break;
    case 'setf': OF[a.dataset.k] = a.dataset.v===''?null:a.dataset.v; closeSheet(); rerender(); break;
    case 'clear': Object.keys(OF).forEach(k=>OF[k]=null); rerender(); break;
    case 'close': closeSheet(); break;
    case 'payall': { const items=payables(); sheetState.step='done'; sheetState.paid=items.reduce((t,x)=>t+x.amt+x.fine,0); setSheet(paySheet()); break; }
    case 'payselect': sheetState.step='select'; payables().forEach(x=>sheetState.sel.add(x.key)); setSheet(paySheet()); break;
    case 'back': sheetState.step='choose'; sheetState.sel.clear(); setSheet(paySheet()); break;
    case 'tog': { const k=a.dataset.key; sheetState.sel.has(k)?sheetState.sel.delete(k):sheetState.sel.add(k); setSheet(paySheet()); break; }
    case 'confirm': { const items=payables().filter(x=>sheetState.sel.has(x.key)); sheetState.step='done'; sheetState.paid=items.reduce((t,x)=>t+x.amt+x.fine,0); setSheet(paySheet()); break; }
    default: return false;
  }
  e.preventDefault(); return true;
}
