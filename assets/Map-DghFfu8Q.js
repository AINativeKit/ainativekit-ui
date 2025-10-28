import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{R as E}from"./index-B2-qRKKC.js";import{C as q}from"./CompactMap-Du4AN_BF.js";import{F as v}from"./FullscreenMap-Cjm3dYgf.js";const P=({locations:s,selectedId:o,activeId:t,onLocationSelect:l,onLocationActive:r,defaultCenter:p,defaultZoom:i,markerColor:m,selectedMarkerColor:c,isInspectorOpen:u,loading:f=!1,error:d=!1,isFullscreen:M,onToggleFullscreen:e,compactMapProps:C,fullscreenMapProps:y})=>{const[F,x]=E.useState(!1),n=M!==void 0,w=n?M:F,h=()=>{n||x(!0),e==null||e(!0)},b=()=>{n||x(!1),e==null||e(!1)},V={locations:s,selectedId:o,activeId:t,onLocationSelect:l,onLocationActive:r,defaultCenter:p,defaultZoom:i,markerColor:m,selectedMarkerColor:c,isInspectorOpen:u,loading:f,error:d};return a.jsxs(a.Fragment,{children:[!w&&a.jsx(q,{...V,onExpand:h,...C}),w&&a.jsx(v,{locations:s,selectedId:o,onLocationSelect:l,activeId:t,onLocationActive:r,defaultCenter:p,defaultZoom:i,markerColor:m,selectedMarkerColor:c,isInspectorOpen:u,loading:f,error:d,onCollapse:b,...y})]})};P.displayName="Map";P.__docgenInfo={description:`Map component - Main orchestrator for compact and fullscreen map views.

Features:
- Displays either CompactMap or FullscreenMap based on fullscreen state
- Manages fullscreen toggle (can be controlled or uncontrolled)
- Expand button in CompactMap to enter fullscreen
- Collapse button in FullscreenMap to exit fullscreen

Following the Album component pattern for ChatGPT Apps SDK integration.

@example
\`\`\`tsx
// Uncontrolled (component manages its own state)
<Map locations={locations} />

// Controlled (external state)
<Map
  locations={locations}
  isFullscreen={isFullscreen}
  onToggleFullscreen={setIsFullscreen}
/>
\`\`\``,methods:[],displayName:"Map",props:{isFullscreen:{required:!1,tsType:{name:"boolean"},description:"Controlled fullscreen state (optional - for external state control)"},onToggleFullscreen:{required:!1,tsType:{name:"signature",type:"function",raw:"(isFullscreen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isFullscreen"}],return:{name:"void"}}},description:"Callback when user toggles fullscreen mode (optional - for external state control)"},compactMapProps:{required:!1,tsType:{name:"Omit",elements:[{name:"CompactMapProps"},{name:"union",raw:"keyof MapViewProps | 'onExpand'",elements:[{name:"MapViewProps"},{name:"literal",value:"'onExpand'"}]}],raw:"Omit<CompactMapProps, keyof MapViewProps | 'onExpand'>"},description:"Props passed to CompactMap when not in fullscreen"},fullscreenMapProps:{required:!1,tsType:{name:"Omit",elements:[{name:"FullscreenMapProps"},{name:"union",raw:"keyof MapViewProps | 'onCollapse'",elements:[{name:"MapViewProps"},{name:"literal",value:"'onCollapse'"}]}],raw:"Omit<FullscreenMapProps, keyof MapViewProps | 'onCollapse'>"},description:"Props passed to FullscreenMap when in fullscreen"},loading:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{P as M};
