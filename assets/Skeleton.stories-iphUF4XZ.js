import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as f}from"./index-B2-qRKKC.js";import{S as t}from"./Alert-Dd8CbNX0.js";import{C as r}from"./Card-Dc6H-pJz.js";import"./ImageCard-D9AzDWPM.js";import"./SummaryCard-CMET0rie.js";import"./ListCard-Ctbi2qeC.js";import"./DiscoveryCard-CH3SMBzS.js";import{P as j}from"./PropsTable-Cl6IQ_go.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Dng2PzYd.js";import"./Badge-BePEr_L6.js";import"./Chip-DUrCjCup.js";import"./Features-DcYKce8P.js";const I={title:"Primitive Components/Skeletons",component:t,parameters:{layout:"padded"}},s=({variant:i,width:o,height:n,label:c,description:m})=>{const[h,l]=f.useState(!1),g=()=>{const v=o?` width={${typeof o=="string"?`"${o}"`:o}}`:"",y=n?` height={${typeof n=="string"?`"${n}"`:n}}`:"",u=`<Skeleton variant="${i}"${v}${y} />`;navigator.clipboard.writeText(u),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs(r,{elevationLevel:"1",interactive:!0,onClick:g,style:{cursor:"pointer",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",minWidth:"180px"},title:"Click to copy code",children:[e.jsx(t,{variant:i,width:o,height:n}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"4px"},children:[c,h&&e.jsx("span",{style:{marginLeft:"4px",color:"var(--ai-color-accent-green)"},children:"✓"})]}),e.jsx("div",{style:{fontSize:"11px",color:"var(--ai-color-text-secondary)",lineHeight:"1.4"},children:m})]})]})},S=()=>e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("h1",{style:{marginBottom:"32px"},children:"Skeleton System"}),e.jsx("section",{style:{marginBottom:"64px"},children:e.jsx("p",{style:{marginBottom:"24px",color:"var(--ai-color-text-secondary)",fontSize:"16px",lineHeight:"1.6"},children:"Loading state placeholders that indicate content is loading. Use skeletons to reduce perceived wait time and improve user experience. Click any skeleton to copy its code."})}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Skeleton Variants"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"3 variants for different content types"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"16px"},children:[e.jsx(s,{variant:"rectangular",width:160,height:80,label:"Rectangular",description:"Default shape for images, cards"}),e.jsx(s,{variant:"text",width:"100%",label:"Text",description:"For text content with line height"}),e.jsx(s,{variant:"circular",width:56,height:56,label:"Circular",description:"For avatars and icons"})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"8px"},children:"Animation"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Control animation for reduced motion or static designs"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"With Animation (Default)"}),e.jsx(r,{elevationLevel:"1",style:{padding:"16px"},children:e.jsx(t,{width:200,height:100})}),e.jsx("p",{style:{fontSize:"12px",color:"var(--ai-color-text-secondary)",marginTop:"8px"},children:"Smooth wave animation"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"Without Animation"}),e.jsx(r,{elevationLevel:"1",style:{padding:"16px"},children:e.jsx(t,{width:200,height:100,animation:!1})}),e.jsx("p",{style:{fontSize:"12px",color:"var(--ai-color-text-secondary)",marginTop:"8px"},children:"Static placeholder"})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px"},children:"Real-World Examples"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"Card Loading"}),e.jsxs(r,{elevationLevel:"1",style:{padding:"16px"},children:[e.jsx(t,{variant:"rectangular",height:180,style:{marginBottom:12}}),e.jsx(t,{variant:"text",width:"60%",style:{marginBottom:8}}),e.jsx(t,{variant:"text",width:"80%"})]}),e.jsxs("details",{style:{marginTop:"8px",fontSize:"12px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("summary",{style:{cursor:"pointer",userSelect:"none"},children:"View code"}),e.jsx("pre",{style:{marginTop:"8px",padding:"8px",background:"var(--ai-color-bg-secondary)",borderRadius:"4px",overflow:"auto"},children:`<Skeleton height={180} style={{ marginBottom: 12 }} />
<Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
<Skeleton variant="text" width="80%" />`})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"Profile Loading"}),e.jsx(r,{elevationLevel:"1",style:{padding:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(t,{variant:"circular",width:48,height:48}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"40%",style:{marginBottom:8}}),e.jsx(t,{variant:"text",width:"60%"})]})]})}),e.jsxs("details",{style:{marginTop:"8px",fontSize:"12px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("summary",{style:{cursor:"pointer",userSelect:"none"},children:"View code"}),e.jsx("pre",{style:{marginTop:"8px",padding:"8px",background:"var(--ai-color-bg-secondary)",borderRadius:"4px",overflow:"auto"},children:`<div style={{ display: 'flex', gap: 12 }}>
  <Skeleton variant="circular" width={48} height={48} />
  <div style={{ flex: 1 }}>
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="text" width="60%" />
  </div>
</div>`})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"List Loading"}),e.jsx(r,{elevationLevel:"1",style:{padding:"16px"},children:[1,2,3].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:i<3?16:0},children:[e.jsx(t,{variant:"circular",width:32,height:32}),e.jsx("div",{style:{flex:1},children:e.jsx(t,{variant:"text",width:"70%"})})]},i))}),e.jsxs("details",{style:{marginTop:"8px",fontSize:"12px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("summary",{style:{cursor:"pointer",userSelect:"none"},children:"View code"}),e.jsx("pre",{style:{marginTop:"8px",padding:"8px",background:"var(--ai-color-bg-secondary)",borderRadius:"4px",overflow:"auto"},children:`{items.map(item => (
  <div key={item.id} style={{ display: 'flex', gap: 12 }}>
    <Skeleton variant="circular" width={32} height={32} />
    <Skeleton variant="text" width="70%" />
  </div>
))}`})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,marginBottom:"12px"},children:"Table Loading"}),e.jsxs(r,{elevationLevel:"1",style:{padding:"16px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr 1fr",gap:12,marginBottom:12},children:[e.jsx(t,{variant:"text",width:"100%"}),e.jsx(t,{variant:"text",width:"100%"}),e.jsx(t,{variant:"text",width:"100%"})]}),[1,2,3].map(i=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr 1fr",gap:12,marginBottom:i<3?8:0},children:[e.jsx(t,{variant:"text",width:"80%"}),e.jsx(t,{variant:"text",width:"90%"}),e.jsx(t,{variant:"text",width:"60%"})]},i))]}),e.jsxs("details",{style:{marginTop:"8px",fontSize:"12px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("summary",{style:{cursor:"pointer",userSelect:"none"},children:"View code"}),e.jsx("pre",{style:{marginTop:"8px",padding:"8px",background:"var(--ai-color-bg-secondary)",borderRadius:"4px",overflow:"auto"},children:`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 12 }}>
  <Skeleton variant="text" />
  <Skeleton variant="text" />
  <Skeleton variant="text" />
</div>`})]})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px"},children:"Usage"}),e.jsxs("details",{style:{marginBottom:"16px"},children:[e.jsx("summary",{style:{cursor:"pointer",fontWeight:600,padding:"12px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",userSelect:"none"},children:"Basic Card Loading"}),e.jsx("pre",{style:{marginTop:"12px",padding:"16px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",overflow:"auto"},children:`import { Skeleton } from '@ainativekit/ui/primitives';

function CardLoading() {
  return (
    <div>
      <Skeleton height={200} style={{ marginBottom: 12 }} />
      <Skeleton variant="text" width="60%" style={{ marginBottom: 8 }} />
      <Skeleton variant="text" width="80%" />
    </div>
  );
}`})]}),e.jsxs("details",{style:{marginBottom:"16px"},children:[e.jsx("summary",{style:{cursor:"pointer",fontWeight:600,padding:"12px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",userSelect:"none"},children:"With Loading State"}),e.jsx("pre",{style:{marginTop:"12px",padding:"16px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",overflow:"auto"},children:`import { Skeleton } from '@ainativekit/ui/primitives';

function UserProfile({ loading, user }) {
  if (loading) {
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}`})]}),e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",fontWeight:600,padding:"12px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",userSelect:"none"},children:"Custom Width and Height"}),e.jsx("pre",{style:{marginTop:"12px",padding:"16px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",overflow:"auto"},children:`import { Skeleton } from '@ainativekit/ui/primitives';

function CustomSkeleton() {
  return (
    <div>
      {/* Using pixel values */}
      <Skeleton width={200} height={100} />
      
      {/* Using CSS strings */}
      <Skeleton width="100%" height="auto" />
      <Skeleton width="20rem" height="8rem" />
      
      {/* Text variant respects line-height automatically */}
      <Skeleton variant="text" width="80%" />
    </div>
  );
}`})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"24px",marginBottom:"16px"},children:"Props"}),e.jsx(j,{hideThemeColumn:!0,rows:[{name:"variant",description:'Shape variant. Options: "rectangular" | "text" | "circular". Default: "rectangular"'},{name:"width",description:'Width of skeleton. Accepts number (px) or CSS string (e.g., "100%", "20rem")'},{name:"height",description:"Height of skeleton. Accepts number (px) or CSS string"},{name:"animation",description:"Enable wave animation. Default: true"},{name:"className",description:"Additional CSS classes"},{name:"style",description:"Inline styles"},{name:"data-testid",description:"Test ID for testing purposes"}]})]})]}),a={render:()=>e.jsx(S,{})};var d,p,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SkeletonsComponent />
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const U=["Skeletons"];export{a as Skeletons,U as __namedExportsOrder,I as default};
