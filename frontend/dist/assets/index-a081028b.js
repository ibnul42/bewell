import{G as M,j as e,u as L,a as z,r as j,b as H,g as D,c as _,d as F,e as k,f as S,Q as q,h as C,L as d,M as g,l as G,i as V,k as I}from"./index-b0f3b1a5.js";import{A as o}from"./index.esm-7fb49c04.js";function T(l){return M({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"}},{tag:"path",attr:{d:"M3 6l9 6l9 -6"}},{tag:"path",attr:{d:"M15 18h6"}},{tag:"path",attr:{d:"M18 15l3 3l-3 3"}}]})(l)}function $(l){return M({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"}}]})(l)}const J=({setCurrentContact:l,user:s})=>{const a=c=>{c.target.id&&l(null)},p=()=>{l(null)},i=c=>["January","February","March","April","May","June","July","August","September","October","November","December"][c-1];return e.jsx("div",{id:"container",onClick:a,className:"fixed inset-0 bg-opacity-20 flex items-center justify-center px-2 z-50",children:e.jsxs("div",{className:"bg-[#FAFAFA] shadow-[0_0px_50px_0px_rgba(0,0,0,0.3)] rounded-2xl md:min-w-[450px] lg:min-w-[500px] xl:min-w-[550px] 2xl:min-w-[600px] 3xl:min-w-[650px] flex flex-col  gap-12 px-14 py-20 z-50",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Name"}),e.jsxs("p",{className:"border px-3 py-2 rounded-md",children:[s.firstName," ",s.lastName]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Email"}),e.jsx("p",{className:"border px-3 py-2 rounded-md",children:s.email})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Phone"}),e.jsx("p",{className:"border px-3 py-2 rounded-md",children:s.phone})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Birthdate"}),e.jsxs("p",{className:"border px-3 py-2 rounded-md",children:[s.birthday.day," ",i(s.birthday.month),", ",s.birthday.year]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Appointtime"}),e.jsx("p",{className:"border px-3 py-2 rounded-md",children:s.appointtime})]}),e.jsxs("div",{className:"space-y-2 col-span-2",children:[e.jsx("p",{className:"text-lg font-bold",children:"Message"}),e.jsx("p",{className:"border px-3 py-2 rounded-md",children:s.message})]})]}),e.jsx("div",{className:"flex justify-around gap-4",children:e.jsx("button",{onClick:p,className:"border border-[#FE6E6E] bg-[#FE6E6E] text-white transition-all py-3 px-16 rounded-full",children:"Close"})})]})})},f=["steps","contacts","weightLoss","generalFaq","service"],P=()=>{var w;const l=L(),s=z(),[a,p]=j.useState((w=l==null?void 0:l.state)!=null&&w.redirect?l.state.redirect:f[0]),[i,c]=j.useState(null),{contacts:n,steps:x,weightLossFaqs:m,isFaqDeleted:N,msg:h,generalFaqs:b,isGeneralFaqDeleted:u,services:y}=H(r=>r.admin);j.useEffect(()=>{a&&(a==="steps"?s(D()):a==="contacts"?s(_()):a==="weightLoss"?s(F()):a==="generalFaq"?s(k()):a==="service"&&s(S())),N&&(q.success(h),s(C()),s(F())),u&&(q.success(h),s(C()),s(k()))},[a,s,N,h,u]);const A=r=>{c(r)},B=()=>{s(G())},E=r=>{confirm("Are you sure you want to delete")&&s(V(r._id))},v=r=>{confirm("Are you sure you want to delete")&&s(I(r._id))};return e.jsxs("div",{className:"flex gap-2 min-h-[70vh]",children:[e.jsxs("div",{className:"w-64 flex flex-col justify-between text-center bg-[rgba(132,191,181,0.6)]",children:[e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsx(d,{to:"/admin/dashboard",className:"py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-orange-500",children:"Home"}),e.jsx(d,{to:"/admin/blog",className:"py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white",children:"Blog"})]}),e.jsx(d,{onClick:B,className:"py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white",children:"Logout"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"flex flex-wrap gap-3 my-5",children:f&&f.map((r,t)=>e.jsx("button",{onClick:()=>p(r),className:"px-4 py-2 border rounded-md hover:bg-slate-100 font-semibold capitalize",children:r},t))}),e.jsxs("div",{children:[a==="steps"&&e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex justify-between",children:e.jsx("h1",{className:"px-3 py-2 text-center text-xl font-semibold",children:"Steps"})}),e.jsxs("table",{className:"table-auto border my-5 border-primary mx-2 px-2",style:{width:"-webkit-fill-available"},children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{className:"bg-primary grid grid-cols-12",children:[e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Title"}),e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Name"}),e.jsx("th",{className:"px-4 py-2 col-span-4 border-r",children:"Description"}),e.jsx("th",{className:"px-4 py-2 col-span-2",children:"Action"})]})}),e.jsx("tbody",{children:x&&x.length>0?x.map((r,t)=>e.jsxs("tr",{className:"even:bg-[#84BFB5] grid grid-cols-12",children:[e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center",children:e.jsx("p",{children:r.title})}),e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.name}),e.jsx("td",{className:"px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.desc}),e.jsx("td",{className:"px-4 py-2 col-span-2 flex justify-center items-center gap-3",children:e.jsx(d,{to:`/admin/dashboard/${r._id}`,className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(o,{})})})]},t)):e.jsx("tr",{className:"odd:bg-gray-100 grid grid-cols-3",children:e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary text-center",children:"No data available"})})})]})]}),a==="contacts"&&e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex justify-between",children:e.jsx("p",{className:"px-3 py-2 text-center text-xl font-semibold",children:"Contacts"})}),e.jsxs("table",{className:"table-auto border my-5 border-primary mx-2 px-2",style:{width:"-webkit-fill-available"},children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{className:"bg-primary grid grid-cols-12",children:[e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Name"}),e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Email"}),e.jsx("th",{className:"px-4 py-2 col-span-4 border-r",children:"Phone"}),e.jsx("th",{className:"px-4 py-2 col-span-2",children:"Action"})]})}),e.jsx("tbody",{children:n&&n.length>0?n.map((r,t)=>e.jsxs("tr",{className:"even:bg-[#84BFB5] grid grid-cols-12",children:[e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center",children:e.jsxs("p",{children:[r.firstName," ",r.lastName]})}),e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.email}),e.jsx("td",{className:"px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.phone}),e.jsxs("td",{className:"px-4 py-2 col-span-2 flex justify-center items-center gap-3",children:[e.jsx("button",{onClick:()=>A(r),className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx($,{})}),e.jsx("a",{className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",href:`mailto:${r.email}`,children:e.jsx(T,{})})]})]},t)):e.jsx("tr",{className:"odd:bg-gray-100 grid grid-cols-3",children:e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary text-center",children:"No data available"})})})]})]}),a==="weightLoss"&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between items-center pr-3",children:[e.jsx("p",{className:"px-3 py-2 text-center text-xl font-semibold capitalize",children:"weight Loss Faqs"}),e.jsx(d,{to:"/admin/dashboard/loss-faq/create",className:"py-2 px-6 rounded-full border hover:bg-slate-100",children:"Create"})]}),e.jsxs("table",{className:"table-auto border my-5 border-primary mx-2 px-2",style:{width:"-webkit-fill-available"},children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{className:"bg-primary grid grid-cols-12",children:[e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Title"}),e.jsx("th",{className:"px-4 py-2 col-span-7 border-r",children:"Description"}),e.jsx("th",{className:"px-4 py-2 col-span-2",children:"Action"})]})}),e.jsx("tbody",{children:m&&m.length>0?m.map((r,t)=>e.jsxs("tr",{className:"even:bg-[#84BFB5] grid grid-cols-12",children:[e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center",children:e.jsx("p",{children:r.title})}),e.jsx("td",{className:"px-4 py-2 col-span-7 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.description}),e.jsxs("td",{className:"px-4 py-2 col-span-2 flex justify-center items-center gap-3",children:[e.jsx(d,{to:`/admin/dashboard/loss-faq/${r._id}`,className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(o,{})}),e.jsx("button",{onClick:()=>E(r),className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(g,{})})]})]},t)):e.jsx("tr",{className:"odd:bg-gray-100 grid grid-cols-3",children:e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary text-center",children:"No data available"})})})]})]}),a==="generalFaq"&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between items-center pr-3",children:[e.jsx("p",{className:"px-3 py-2 text-center text-xl font-semibold capitalize",children:"general Faqs"}),e.jsx(d,{to:"/admin/dashboard/general-faq/create",className:"py-2 px-6 rounded-full border hover:bg-slate-100",children:"Create"})]}),e.jsxs("table",{className:"table-auto border my-5 border-primary mx-2 px-2",style:{width:"-webkit-fill-available"},children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{className:"bg-primary grid grid-cols-12",children:[e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Title"}),e.jsx("th",{className:"px-4 py-2 col-span-7 border-r",children:"Description"}),e.jsx("th",{className:"px-4 py-2 col-span-2",children:"Action"})]})}),e.jsx("tbody",{children:b&&b.length>0?b.map((r,t)=>e.jsxs("tr",{className:"even:bg-[#84BFB5] grid grid-cols-12",children:[e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center",children:e.jsx("p",{children:r.title})}),e.jsx("td",{className:"px-4 py-2 col-span-7 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.description}),e.jsxs("td",{className:"px-4 py-2 col-span-2 flex justify-center items-center gap-3",children:[e.jsx(d,{to:`/admin/dashboard/general-faq/${r._id}`,className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(o,{})}),e.jsx("button",{onClick:()=>v(r),className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(g,{})})]})]},t)):e.jsx("tr",{className:"odd:bg-gray-100 grid grid-cols-3",children:e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary text-center",children:"No data available"})})})]})]}),a==="service"&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between items-center pr-3",children:[e.jsx("p",{className:"px-3 py-2 text-center text-xl font-semibold capitalize",children:"Services"}),e.jsx(d,{to:"/admin/dashboard/general-faq/create",className:"py-2 px-6 rounded-full border hover:bg-slate-100",children:"Create"})]}),e.jsxs("table",{className:"table-auto border my-5 border-primary mx-2 px-2",style:{width:"-webkit-fill-available"},children:[e.jsx("thead",{className:"border-b",children:e.jsxs("tr",{className:"bg-primary grid grid-cols-12",children:[e.jsx("th",{className:"px-4 py-2 col-span-3 border-r",children:"Title"}),e.jsx("th",{className:"px-4 py-2 col-span-7 border-r",children:"Description"}),e.jsx("th",{className:"px-4 py-2 col-span-2",children:"Action"})]})}),e.jsx("tbody",{children:y&&y.length>0?y.map((r,t)=>e.jsxs("tr",{className:"even:bg-[#84BFB5] grid grid-cols-12",children:[e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center",children:e.jsx("p",{children:r.title})}),e.jsx("td",{className:"px-4 py-2 col-span-7 border-r border-primary flex items-center justify-center max-h-44 overflow-y-auto",children:r.description}),e.jsxs("td",{className:"px-4 py-2 col-span-2 flex justify-center items-center gap-3",children:[e.jsx(d,{to:`/admin/dashboard/service/${r._id}`,className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(o,{})}),e.jsx("button",{onClick:()=>v(r),className:"px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max",children:e.jsx(g,{})})]})]},t)):e.jsx("tr",{className:"odd:bg-gray-100 grid grid-cols-3",children:e.jsx("td",{className:"px-4 py-2 col-span-3 border-r border-primary text-center",children:"No data available"})})})]})]})]})]}),i&&e.jsx(J,{setCurrentContact:c,user:i})]})};export{P as default};