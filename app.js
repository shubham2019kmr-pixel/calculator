const calculators = [
 {id:"inhandsalary",name:"In-Hand Salary Calculator",category:"Salary",icon:"₹",desc:"Estimate monthly take-home pay after common deductions.",fields:[
  {id:"ctc",label:"Annual CTC (₹)",type:"number",value:1200000,min:0,step:1000},
  {id:"basicPct",label:"Basic salary (% of CTC)",type:"number",value:40,min:0,max:100,step:1},
  {id:"employeePf",label:"Employee PF (% of basic)",type:"number",value:12,min:0,max:100,step:0.5},
  {id:"monthlyOther",label:"Other monthly deductions (₹)",type:"number",value:1000,min:0,step:100},
  {id:"employerPfIncluded",label:"Employer PF included in CTC?",type:"select",value:"yes",options:[["yes","Yes"],["no","No"]]}
 ],note:"Estimate only. Assumes employer PF may be included in CTC and uses your entered deduction assumptions. Professional tax, variable pay, insurance, gratuity, exemptions and payroll policy may change actual take-home."},
 {id:"ctc",name:"CTC Structure Calculator",category:"Salary",icon:"▤",desc:"Build a simple annual salary breakdown from your CTC.",fields:[
  {id:"ctc",label:"Annual CTC (₹)",type:"number",value:1200000,min:0,step:1000},
  {id:"basicPct",label:"Basic (% of CTC)",type:"number",value:40,min:0,max:100,step:1},
  {id:"hraPct",label:"HRA (% of basic)",type:"number",value:40,min:0,max:100,step:1},
  {id:"employerPfPct",label:"Employer PF (% of basic)",type:"number",value:12,min:0,max:100,step:0.5},
  {id:"gratuityPct",label:"Gratuity provision (% of basic)",type:"number",value:4.81,min:0,max:100,step:0.01}
 ],note:"Illustrative structure only. Actual CTC components and gratuity/PF treatment differ by employer and applicable rules. This does not generate a legally compliant payslip."},
 {id:"hike",name:"Salary Hike Calculator",category:"Salary",icon:"↗",desc:"Compare your current and offered salary, including hike percentage.",fields:[
  {id:"current",label:"Current annual salary (₹)",type:"number",value:600000,min:0,step:1000},
  {id:"new",label:"New annual salary (₹)",type:"number",value:750000,min:0,step:1000}
 ],note:"Compares the annual amounts you enter. Compare fixed pay with fixed pay for a fair offer comparison; CTC can include variable or employer-paid components."},
 {id:"increment",name:"Increment Calculator",category:"Salary",icon:"＋",desc:"Calculate your new salary after a percentage increment.",fields:[
  {id:"salary",label:"Current salary (₹ per year)",type:"number",value:600000,min:0,step:1000},
  {id:"incrementPct",label:"Increment (%)",type:"number",value:10,min:0,max:1000,step:0.5}
 ],note:"Assumes the increment applies to the full salary amount entered. Your employer may apply hikes to basic pay or fixed compensation only."},
 {id:"pf",name:"PF Calculator",category:"Deductions",icon:"◉",desc:"Estimate monthly employee and employer PF contributions.",fields:[
  {id:"basic",label:"Monthly basic + DA (₹)",type:"number",value:30000,min:0,step:100},
  {id:"employeePct",label:"Employee contribution (%)",type:"number",value:12,min:0,max:100,step:0.5},
  {id:"employerPct",label:"Employer EPF contribution (%)",type:"number",value:12,min:0,max:100,step:0.5},
  {id:"cap",label:"Apply ₹15,000 wage ceiling for estimate?",type:"select",value:"no",options:[["no","No — use full entered wage"],["yes","Yes — cap wage at ₹15,000"]]}
 ],note:"Simplified PF estimate. Actual EPF/EPS allocation, wage ceiling, eligibility, international-worker rules and employer policy can affect contributions. Confirm with HR/EPFO."},
 {id:"gratuity",name:"Gratuity Calculator",category:"Deductions",icon:"◷",desc:"Estimate gratuity using last-drawn basic pay plus DA and service years.",fields:[
  {id:"basic",label:"Last-drawn monthly basic + DA (₹)",type:"number",value:40000,min:0,step:100},
  {id:"years",label:"Completed years of service",type:"number",value:5,min:0,max:60,step:1},
  {id:"months",label:"Additional completed months (0–11)",type:"number",value:0,min:0,max:11,step:1}
 ],note:"Illustrative formula for eligible employees covered by the Payment of Gratuity framework: (last-drawn monthly basic + DA × 15 ÷ 26) × eligible service years, subject to eligibility and statutory limits. Service fractions are handled approximately; verify eligibility with HR."},
 {id:"tax",name:"Income Tax Estimate",category:"Tax",icon:"%",desc:"Estimate income tax under India's new tax regime for Tax Year 2026–27.",fields:[
  {id:"gross",label:"Annual salary income before standard deduction (₹)",type:"number",value:1200000,min:0,step:1000},
  {id:"otherIncome",label:"Other taxable income (₹)",type:"number",value:0,min:0,step:1000},
  {id:"resident",label:"Resident individual eligible for rebate?",type:"select",value:"yes",options:[["yes","Yes"],["no","No / not eligible"]]}
 ],note:'Simplified new-regime estimate for Tax Year 2026–27 using slabs shown by the Income Tax Department and a ₹75,000 standard-deduction assumption for salary income. Does not model special-rate income, all deductions, surcharge edge cases or individual exceptions. Verify with the official portal before making tax decisions.'},
 {id:"taxcompare",name:"Old vs New Tax Regime",category:"Tax",icon:"⇄",desc:"Compare simplified tax estimates under old and new regime assumptions.",fields:[
  {id:"salary",label:"Annual salary before standard deduction (₹)",type:"number",value:1200000,min:0,step:1000},
  {id:"deductions",label:"Eligible old-regime deductions/exemptions (₹)",type:"number",value:150000,min:0,step:1000},
  {id:"otherIncome",label:"Other taxable income (₹)",type:"number",value:0,min:0,step:1000}
 ],note:"Simplified comparison only. Uses new-regime slabs for Tax Year 2026–27 and simplified old-regime individual slabs with a ₹50,000 standard deduction. Deductions and rebate eligibility are simplified; not suitable for filing a return."},
 {id:"gross",name:"Gross Salary Calculator",category:"Salary",icon:"▦",desc:"Estimate gross salary from basic, HRA and allowances.",fields:[
  {id:"basic",label:"Monthly basic salary (₹)",type:"number",value:30000,min:0,step:100},
  {id:"hra",label:"Monthly HRA (₹)",type:"number",value:12000,min:0,step:100},
  {id:"allowances",label:"Other monthly allowances (₹)",type:"number",value:8000,min:0,step:100},
  {id:"bonus",label:"Annual bonus / variable pay (₹)",type:"number",value:60000,min:0,step:1000}
 ],note:"Gross salary here means the sum of entered cash salary components before deductions. It is not the same as CTC or take-home pay."},
 {id:"monthlyannual",name:"Monthly ↔ Annual Salary",category:"Salary",icon:"↕",desc:"Convert monthly salary to annual pay or annual pay to a monthly equivalent.",fields:[
  {id:"amount",label:"Salary amount (₹)",type:"number",value:50000,min:0,step:100},
  {id:"direction",label:"Amount entered is",type:"select",value:"monthly",options:[["monthly","Monthly salary"],["annual","Annual salary"]]}
 ],note:"Simple conversion: monthly × 12 = annual. It does not account for bonuses, unpaid leave, variable pay or deductions."}
];

const $ = (sel, root=document) => root.querySelector(sel);
const toolGrid = $("#toolGrid");
const searchInput = $("#searchInput");
let activeFilter = "All";
let activeCalc = null;

function renderCards(){
 const q = searchInput.value.trim().toLowerCase();
 const filtered = calculators.filter(c => (activeFilter==="All" || c.category===activeFilter) && (c.name+" "+c.desc+" "+c.category).toLowerCase().includes(q));
 toolGrid.innerHTML = "";
 filtered.forEach(c=>{
  const b=document.createElement("button"); b.type="button"; b.className="tool-card"; b.dataset.id=c.id;
  const icon=document.createElement("span");icon.className="tool-icon";icon.textContent=c.icon;
  const h=document.createElement("h3");h.textContent=c.name;
  const p=document.createElement("p");p.textContent=c.desc;
  const a=document.createElement("span");a.className="card-arrow";a.textContent="Open calculator ↗";
  b.append(icon,h,p,a);b.addEventListener("click",()=>openCalculator(c.id));toolGrid.append(b);
 });
 $("#emptyState").hidden = filtered.length>0;
}
function currency(n){ if(!Number.isFinite(n)) return "—"; return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(Math.round(n));}
function num(form,id){const el=form.elements[id];return el?Number(el.value||0):0;}
function fieldHTML(f){
 const id=`field-${f.id}`;
 let control="";
 if(f.type==="select"){
  control=`<select id="${id}" name="${f.id}">${f.options.map(o=>`<option value="${o[0]}" ${String(o[0])===String(f.value)?"selected":""}>${o[1]}</option>`).join("")}</select>`;
 } else {
  control=`<input id="${id}" name="${f.id}" type="number" value="${f.value}" min="${f.min??0}" ${f.max!==undefined?`max="${f.max}"`:""} step="${f.step??1}" required>`;
 }
 return `<div class="field"><label for="${id}">${f.label}</label>${control}</div>`;
}
function openCalculator(id){
 activeCalc=calculators.find(c=>c.id===id);if(!activeCalc)return;
 $("#modalCategory").textContent=activeCalc.category.toUpperCase()+" CALCULATOR";
 $("#modalTitle").textContent=activeCalc.name;$("#modalDescription").textContent=activeCalc.desc;
 const form=$("#calculatorForm");
 form.innerHTML=`<div class="form-grid">${activeCalc.fields.map(fieldHTML).join("")}</div><div class="form-actions"><button class="calculate-btn" type="submit">Calculate result</button><button class="reset-btn" id="resetCalc" type="button">Reset values</button></div>`;
 $("#calcNote").textContent=activeCalc.note;$("#resultPanel").hidden=true;
 form.onsubmit=(e)=>{e.preventDefault();try{const result=calculate(activeCalc.id,form);showResult(result);}catch(err){showResult({title:"Check your inputs",main:"Please review the values",items:[],note:err.message||"Enter valid non-negative numbers."});}};
 $("#resetCalc").addEventListener("click",()=>{activeCalc.fields.forEach(f=>{const el=form.elements[f.id];if(el)el.value=f.value;});$("#resultPanel").hidden=true;});
 $("#modalBackdrop").hidden=false;document.body.style.overflow="hidden";$("#closeModal").focus();
}
function closeCalculator(){ $("#modalBackdrop").hidden=true;document.body.style.overflow="";activeCalc=null;}
function showResult(r){
 const panel=$("#resultPanel");panel.innerHTML="";
 const eyebrow=document.createElement("div");eyebrow.className="result-eyebrow";eyebrow.textContent=r.title||"Estimated result";
 const main=document.createElement("div");main.className="result-main";main.textContent=r.main;
 panel.append(eyebrow,main);
 if(r.items?.length){const grid=document.createElement("div");grid.className="result-breakdown";r.items.forEach(it=>{const box=document.createElement("div");box.className="result-item";const s=document.createElement("span");s.textContent=it[0];const strong=document.createElement("strong");strong.textContent=it[1];box.append(s,strong);grid.append(box);});panel.append(grid);}
 if(r.note){const n=document.createElement("p");n.className="calc-note";n.textContent=r.note;panel.append(n);}
 panel.hidden=false;
}
function nonnegative(v,label){if(!Number.isFinite(v)||v<0)throw new Error(`${label} must be a valid non-negative number.`);return v;}
function progressiveTax(income, slabs){
 let tax=0, previous=0;
 for(const [limit,rate] of slabs){if(income>previous){tax+=(Math.min(income,limit)-previous)*rate;}previous=limit;if(income<=limit)break;}
 if(income>previous){tax+=(income-previous)*(slabs[slabs.length-1][1]);}
 return Math.max(0,tax);
}
function newRegimeTax(taxable){
 const slabs=[[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]];
 let tax=0, lower=0;
 for(const [upper,rate] of slabs){if(taxable>lower)tax+=(Math.min(taxable,upper)-lower)*rate; if(taxable<=upper)break;lower=upper;}
 // Resident individual rebate and marginal relief (simplified; excludes special-rate income).
 if(taxable<=1200000) tax=0;
 else if(taxable<=1270000){const excess=taxable-1200000;tax=Math.min(tax,excess);}
 return tax*1.04;
}
function oldRegimeTax(taxable){
 const slabs=[[250000,0],[500000,.05],[1000000,.20],[Infinity,.30]];
 let tax=0, lower=0;
 for(const [upper,rate] of slabs){if(taxable>lower)tax+=(Math.min(taxable,upper)-lower)*rate;if(taxable<=upper)break;lower=upper;}
 // Simplified resident individual rebate for taxable income up to ₹5 lakh.
 if(taxable<=500000)tax=Math.max(0,tax- Math.min(tax,12500));
 return tax*1.04;
}
function calculate(id,f){
 const n=(key,label)=>nonnegative(num(f,key),label);
 switch(id){
 case "inhandsalary":{
  const ctc=n("ctc","Annual CTC"), bp=Math.min(100,n("basicPct","Basic percentage"))/100;
  const basic=ctc*bp, pf=basic*Math.min(100,n("employeePf","Employee PF percentage"))/100;
  const employerPfIncluded=f.elements.employerPfIncluded.value==="yes";
  const annualCash=employerPfIncluded?Math.max(0,ctc-basic*0-(basic*Math.min(100,n("employeePf","Employee PF percentage"))/100*0)):ctc;
  const monthlyGross=(employerPfIncluded?ctc-(basic*.12):ctc)/12; // Simplified: employer PF assumed at 12% of basic if included.
  const monthlyPf=pf/12, other=n("monthlyOther","Other deductions");
  const inhand=Math.max(0,monthlyGross-monthlyPf-other);
  return {title:"Estimated monthly take-home",main:currency(inhand),items:[["Estimated monthly gross",currency(monthlyGross)],["Employee PF / month",currency(monthlyPf)],["Other deductions / month",currency(other)],["Estimated annual take-home",currency(inhand*12)]],note:"This is a simplified estimate. Employer PF assumption is 12% of basic when included in CTC; actual structure may differ."};
 }
 case "ctc":{
  const ctc=n("ctc","CTC"), b=ctc*Math.min(100,n("basicPct","Basic percentage"))/100;
  const hra=b*Math.min(100,n("hraPct","HRA percentage"))/100, epf=b*Math.min(100,n("employerPfPct","Employer PF percentage"))/100;
  const grat=b*Math.min(100,n("gratuityPct","Gratuity percentage"))/100;
  const allowance=Math.max(0,ctc-b-hra-epf-grat);
  return {title:"Illustrative annual CTC breakdown",main:currency(ctc),items:[["Basic salary / year",currency(b)],["HRA / year",currency(hra)],["Employer PF / year",currency(epf)],["Gratuity provision / year",currency(grat)],["Residual allowance / year",currency(allowance)],["Estimated monthly CTC",currency(ctc/12)]],note:"The categories are a template, not a mandated salary structure. Ensure entered percentages and components match your offer letter."};
 }
 case "hike":{
  const cur=n("current","Current salary"), next=n("new","New salary"), diff=next-cur, pct=cur===0?null:diff/cur*100;
  return {title:"Salary offer comparison",main:currency(diff)+" / year",items:[["Current annual salary",currency(cur)],["New annual salary",currency(next)],["Monthly difference",currency(diff/12)],["Hike percentage",pct===null?"Not defined":pct.toFixed(2)+"%"]],note:diff<0?"The entered new salary is lower than the current salary.": "Compare fixed pay with fixed pay, and separately review variable pay and benefits."};
 }
 case "increment":{
  const salary=n("salary","Current salary"), pct=n("incrementPct","Increment percentage"), next=salary*(1+pct/100);
  return {title:"Salary after increment",main:currency(next)+" / year",items:[["Current salary",currency(salary)],["Increment amount",currency(next-salary)],["New monthly equivalent",currency(next/12)],["New annual salary",currency(next)]],note:"This calculation applies the increment to the entire entered salary."};
 }
 case "pf":{
  let basic=n("basic","Basic + DA"), ep=n("employeePct","Employee PF rate")/100, er=n("employerPct","Employer PF rate")/100;
  if(f.elements.cap.value==="yes")basic=Math.min(basic,15000);
  const employee=basic*ep, employer=basic*er;
  return {title:"Estimated monthly PF",main:currency(employee)+" employee contribution",items:[["PF wage used",currency(basic)],["Employee contribution / month",currency(employee)],["Employer contribution / month",currency(employer)],["Combined contribution / month",currency(employee+employer)],["Employee contribution / year",currency(employee*12)]],note:"Employer's total contribution may be split between EPF and EPS. This estimate does not calculate EPS allocation."};
 }
 case "gratuity":{
  const basic=n("basic","Basic + DA"), years=n("years","Completed service years"), months=n("months","Additional months");
  const eligibleYears=years+(months>6?1:0);
  const amount=basic*15/26*eligibleYears;
  return {title:"Estimated gratuity",main:currency(amount),items:[["Monthly basic + DA",currency(basic)],["Service years used",String(eligibleYears)],["Formula", "Monthly basic + DA × 15 ÷ 26 × years"]],note:"This simplified calculator rounds additional months of 6 or more up by one year. Legal eligibility, service continuity and statutory ceilings must be checked."};
 }
 case "tax":{
  const gross=n("gross","Salary income"), other=n("otherIncome","Other income"), resident=f.elements.resident.value==="yes";
  const standardDeduction=75000, taxable=Math.max(0,gross-standardDeduction+other);
  let tax=newRegimeTax(taxable);
  if(!resident && taxable<=1200000){ // no rebate assumed for non-resident
   const slabs=[[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]];
   let raw=0,lo=0;for(const [up,rate] of slabs){if(taxable>lo)raw+=(Math.min(taxable,up)-lo)*rate;if(taxable<=up)break;lo=up;}tax=raw*1.04;
  }
  return {title:"Estimated annual tax (new regime)",main:currency(tax),items:[["Gross salary entered",currency(gross)],["Assumed standard deduction",currency(Math.min(gross,standardDeduction))],["Estimated taxable income",currency(taxable)],["Estimated tax incl. 4% cess",currency(tax)],["Monthly equivalent",currency(tax/12)]],note:"Simplified estimate for TY 2026–27; assumes no special-rate income and a standard deduction of ₹75,000. Rebate eligibility and marginal relief are simplified. Confirm current rules with the official Income Tax Department."};
 }
 case "taxcompare":{
  const salary=n("salary","Salary"), deductions=n("deductions","Deductions"), other=n("otherIncome","Other income");
  const newTaxable=Math.max(0,salary-75000+other), oldTaxable=Math.max(0,salary-50000-deductions+other);
  const nt=newRegimeTax(newTaxable), ot=oldRegimeTax(oldTaxable), diff=ot-nt;
  return {title:"Estimated tax comparison",main:(diff>=0?"New regime lower by ":"Old regime lower by ")+currency(Math.abs(diff)),items:[["New-regime taxable income",currency(newTaxable)],["New-regime tax estimate",currency(nt)],["Old-regime taxable income",currency(oldTaxable)],["Old-regime tax estimate",currency(ot)],["Difference per year",currency(Math.abs(diff))]],note:"Indicative comparison only; simplified assumptions and deductions. This is not a recommendation to choose a regime. Compare your full facts with the official calculator or a tax professional."};
 }
 case "gross":{
  const basic=n("basic","Basic"),hra=n("hra","HRA"),allow=n("allowances","Allowances"),bonus=n("bonus","Bonus");
  const monthly=basic+hra+allow, annual=monthly*12+bonus;
  return {title:"Estimated gross salary",main:currency(monthly)+" / month",items:[["Monthly basic",currency(basic)],["Monthly HRA",currency(hra)],["Other monthly allowances",currency(allow)],["Annual gross incl. bonus",currency(annual)],["Monthly average incl. bonus",currency(annual/12)]],note:"Gross cash salary before deductions; CTC may include employer contributions and non-cash benefits."};
 }
 case "monthlyannual":{
  const amount=n("amount","Salary amount"), monthly=f.elements.direction.value==="monthly"?amount:amount/12, annual=monthly*12;
  return {title:"Salary conversion",main:currency(f.elements.direction.value==="monthly"?annual:monthly)+(f.elements.direction.value==="monthly"?" / year":" / month"),items:[["Monthly equivalent",currency(monthly)],["Annual equivalent",currency(annual)]],note:"Simple 12-month conversion."};
 }
 default:throw new Error("This calculator is not available yet.");
 }
}
$("#closeModal").addEventListener("click",closeCalculator);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeCalculator();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#modalBackdrop").hidden)closeCalculator();});
searchInput.addEventListener("input",renderCards);
$("#filterRow").addEventListener("click",e=>{const btn=e.target.closest("[data-filter]");if(!btn)return;activeFilter=btn.dataset.filter;$("#filterRow").querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));renderCards();});
$("#year").textContent=new Date().getFullYear();
renderCards();
