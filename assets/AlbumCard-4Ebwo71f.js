import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{R as H}from"./index-B2-qRKKC.js";import{c as s}from"./Button-Dng2PzYd.js";import{S as p,A as P}from"./Alert-Dd8CbNX0.js";import{B as F}from"./Badge-BePEr_L6.js";import{C as z}from"./Chip-DUrCjCup.js";const V="_albumCard_5453k_2",D="_loadingCard_5453k_21",O="_errorCard_5453k_27",W="_emptyCard_5453k_28",U="_imageContainer_5453k_36",G="_image_5453k_36",J="_content_5453k_54",K="_title_5453k_59",Q="_subtitle_5453k_72",X="_skeletonImage_5453k_82",Y="_skeletonTitle_5453k_88",Z="_skeletonSubtitle_5453k_92",$="_errorContainer_5453k_97",ee="_emptyContainer_5453k_109",te="_emptyTitle_5453k_122",ae="_emptyMessage_5453k_131",se="_badge_5453k_140",ne="_badgeTopLeft_5453k_146",ie="_badgeTopRight_5453k_151",re="_titleLines2_5453k_157",oe="_titleLines3_5453k_165",le="_subtitleLines2_5453k_173",de="_subtitleLines3_5453k_181",me="_visuallyHidden_5453k_190",e={albumCard:V,loadingCard:D,errorCard:O,emptyCard:W,imageContainer:U,image:G,content:J,title:K,subtitle:Q,skeletonImage:X,skeletonTitle:Y,skeletonSubtitle:Z,errorContainer:$,emptyContainer:ee,emptyTitle:te,emptyMessage:ae,badge:se,badgeTopLeft:ne,badgeTopRight:ie,titleLines2:re,titleLines3:oe,subtitleLines2:le,subtitleLines3:de,visuallyHidden:me},v=H.forwardRef((C,k)=>{const{album:a,onSelect:d,onClick:m,className:n,width:i="272px",style:r,loading:u=!1,error:g=!1,errorTitle:T="Failed to load",errorMessage:L,onErrorRetry:w,emptyTitle:x="No album",emptyMessage:b,imageLazy:N=!0,onImageLoad:j,onImageError:E,badge:o,badgePosition:q="top-right",badgeVariant:h="default",titleLines:y=1,subtitleLines:_=1,"data-testid":l,...I}=C,S=f=>{m==null||m(f),f.defaultPrevented||d==null||d(a)},c=a.photos.length,A=!a.cover&&!a.title&&c===0,M=u,B=!u&&g,R=!u&&!g&&A;return M?t.jsxs("div",{className:s(e.albumCard,e.loadingCard,n),style:{width:i,...r},role:"status","aria-live":"polite","data-testid":l,children:[t.jsx("span",{className:e.visuallyHidden,children:"Loading album"}),t.jsx("div",{className:e.imageContainer,children:t.jsx(p,{className:e.skeletonImage})}),t.jsxs("div",{className:e.content,children:[t.jsx(p,{width:"80%",height:16,className:e.skeletonTitle}),t.jsx(p,{width:"40%",height:14,className:e.skeletonSubtitle})]})]}):B?t.jsx("div",{className:s(e.albumCard,e.errorCard,n),style:{width:i,...r},"data-testid":l,children:t.jsx("div",{className:e.errorContainer,children:t.jsx(P,{title:T,message:L,onAction:w})})}):R?t.jsx("div",{className:s(e.albumCard,e.emptyCard,n),style:{width:i,...r},"data-testid":l,children:t.jsxs("div",{className:e.emptyContainer,children:[t.jsx("div",{className:e.emptyTitle,children:x}),b&&t.jsx("div",{className:e.emptyMessage,children:b})]})}):t.jsxs("button",{ref:k,type:"button",className:s(e.albumCard,n),onClick:S,style:{width:i,...r},"data-testid":l,...I,children:[t.jsxs("div",{className:e.imageContainer,children:[t.jsx("img",{src:a.cover,alt:a.title,className:e.image,loading:N?"lazy":"eager",onLoad:j,onError:E}),o&&t.jsx("div",{className:s(e.badge,q==="top-left"?e.badgeTopLeft:e.badgeTopRight),children:String(o).length>4?t.jsx(z,{variant:h,size:"sm",children:o}):t.jsx(F,{variant:h,children:o})})]}),t.jsxs("div",{className:e.content,children:[t.jsx("div",{className:s(e.title,y===2&&e.titleLines2,y===3&&e.titleLines3),children:a.title}),t.jsxs("div",{className:s(e.subtitle,_===2&&e.subtitleLines2,_===3&&e.subtitleLines3),children:[c," photo",c!==1?"s":""]})]})]})});v.displayName="AlbumCard";v.__docgenInfo={description:`AlbumCard component - Display album cover with title and photo count below.

Features:
- Shows album cover image with rounded corners and shadow
- Displays album title below the image
- Shows number of photos below the title
- Clickable to open album viewer
- Loading, error, and empty states
- Native lazy loading with callbacks
- Badge support for indicators
- Multi-line text support
- Matches OpenAI Albums design

@example
\`\`\`tsx
// With short badge (uses Badge component)
<AlbumCard
  album={{
    id: '1',
    title: 'Summer Vacation',
    cover: 'https://example.com/cover.jpg',
    photos: [...]
  }}
  onSelect={(album) => console.log('Selected:', album)}
  loading={isLoading}
  badge="New"
  badgeVariant="filled"
/>

// With longer badge (automatically uses Chip component)
<AlbumCard
  album={{...}}
  badge="Featured"
  badgeVariant="neutral"
/>
\`\`\``,methods:[],displayName:"AlbumCard",props:{album:{required:!0,tsType:{name:"Album"},description:"Album data to display"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(album: Album) => void",signature:{arguments:[{type:{name:"Album"},name:"album"}],return:{name:"void"}}},description:"Callback when album card is clicked"},width:{required:!1,tsType:{name:"string"},description:`Width of the card
@default '272px'`},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows skeleton UI
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`Error state - shows error message
@default false`},errorTitle:{required:!1,tsType:{name:"string"},description:`Custom error title
@default 'Failed to load'`},errorMessage:{required:!1,tsType:{name:"string"},description:"Custom error message"},onErrorRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Retry callback for error state"},emptyTitle:{required:!1,tsType:{name:"string"},description:`Empty state title
@default 'No album'`},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message"},imageLazy:{required:!1,tsType:{name:"boolean"},description:`Enable lazy loading for cover image
@default true`},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"}],raw:"SyntheticEvent<HTMLImageElement>"},name:"event"}],return:{name:"void"}}},description:"Callback when cover image loads"},onImageError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<HTMLImageElement>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLImageElement"}],raw:"SyntheticEvent<HTMLImageElement>"},name:"event"}],return:{name:"void"}}},description:"Callback when cover image fails to load"},badge:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Badge content (text or number).
- For short content (≤4 chars): Badge component is used (e.g., "New", "5", "✓")
- For longer content (>4 chars): Chip component is used (e.g., "Featured", "New Album")`},badgePosition:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"}]},description:`Badge position
@default 'top-right'`},badgeVariant:{required:!1,tsType:{name:"union",raw:"BadgeProps['variant'] | ChipProps['variant']",elements:[{name:"BadgeProps['variant']",raw:"BadgeProps['variant']"},{name:"ChipProps['variant']",raw:"ChipProps['variant']"}]},description:"Badge/Chip variant style"},titleLines:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:`Number of lines for title (1-3)
@default 1`},subtitleLines:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:`Number of lines for subtitle (1-3)
@default 1`},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional test ID for testing purposes"}},composes:["Omit"]};export{v as A};
