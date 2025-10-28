import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as b}from"./index-B2-qRKKC.js";import{C as y}from"./Carousel-B89HBjdh.js";import{A as C}from"./AlbumCard-4Ebwo71f.js";import{c as f,B as v}from"./Button-Dng2PzYd.js";const x=({albums:t,onAlbumSelect:l,cardWidth:n="272px",loading:m=!1,loadingCardCount:i=4,error:s=!1,errorTitle:o="Failed to load albums",errorMessage:a,onErrorRetry:u,emptyTitle:d="No albums yet",emptyMessage:g,...c})=>m?e.jsx(y,{...c,children:Array.from({length:i}).map((p,A)=>e.jsx("div",{style:{width:n,flexShrink:0},children:e.jsx(C,{album:{id:`loading-${A}`,title:"",cover:"",photos:[]},loading:!0,width:n})},`skeleton-${A}`))}):s?e.jsx(y,{...c,error:!0,errorTitle:o,errorMessage:a,onErrorRetry:u}):t.length===0?e.jsx(y,{...c,emptyTitle:d,emptyMessage:g}):e.jsx(y,{...c,children:t.map(p=>e.jsx("div",{style:{width:n,flexShrink:0},children:e.jsx(C,{album:p,onSelect:l,width:n})},p.id))});x.displayName="AlbumCarousel";x.__docgenInfo={description:`AlbumCarousel component - Horizontal carousel of album cards.

Features:
- Uses the existing Carousel component
- Renders AlbumCard children
- Handles album selection
- Customizable card width
- Loading, error, and empty states
- Consistent state management pattern

@example
\`\`\`tsx
<AlbumCarousel
  albums={albumsData}
  onAlbumSelect={(album) => openViewer(album)}
  align="center"
  showNavigation
  loading={isLoading}
/>
\`\`\``,methods:[],displayName:"AlbumCarousel",props:{albums:{required:!0,tsType:{name:"Array",elements:[{name:"Album"}],raw:"Album[]"},description:"Array of albums to display"},onAlbumSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(album: Album) => void",signature:{arguments:[{type:{name:"Album"},name:"album"}],return:{name:"void"}}},description:"Callback when an album is selected"},cardWidth:{required:!1,tsType:{name:"string"},description:`Width for each album card
@default '272px'`,defaultValue:{value:"'272px'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows skeleton cards
@default false`,defaultValue:{value:"false",computed:!1}},loadingCardCount:{required:!1,tsType:{name:"number"},description:`Number of skeleton cards to show while loading
@default 4`,defaultValue:{value:"4",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:`Error state - shows error message
@default false`,defaultValue:{value:"false",computed:!1}},errorTitle:{required:!1,tsType:{name:"string"},description:`Custom error title
@default 'Failed to load albums'`,defaultValue:{value:"'Failed to load albums'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Custom error message"},onErrorRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Retry callback for error state"},emptyTitle:{required:!1,tsType:{name:"string"},description:`Empty state title
@default 'No albums yet'`,defaultValue:{value:"'No albums yet'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message"}},composes:["Omit"]};const T="_filmStrip_15r4o_2",j="_thumbnailList_15r4o_13",k="_thumbnail_15r4o_13",q="_thumbnailSelected_15r4o_73",V="_thumbnailImageWrapper_15r4o_83",I="_thumbnailImage_15r4o_83",h={filmStrip:T,thumbnailList:j,thumbnail:k,thumbnailSelected:q,thumbnailImageWrapper:V,thumbnailImage:I},_=({photos:t,selectedIndex:l,onSelect:n,albumTitle:m,className:i})=>e.jsx("div",{className:f(h.filmStrip,i),role:"navigation","aria-label":"Photo thumbnails",children:e.jsx("div",{className:h.thumbnailList,children:t.map((s,o)=>{const a=o===l;return e.jsx("button",{type:"button",onClick:()=>n==null?void 0:n(o),className:f(h.thumbnail,a&&h.thumbnailSelected),"aria-label":s.title||`Photo ${o+1} of ${t.length}`,"aria-current":a?"true":void 0,children:e.jsx("div",{className:h.thumbnailImageWrapper,children:e.jsx("img",{src:s.url,alt:s.alt||s.title||`${m} - Photo ${o+1}`,className:h.thumbnailImage,loading:"lazy"})})},s.id)})})});_.displayName="FilmStrip";_.__docgenInfo={description:`FilmStrip component - Vertical thumbnail navigation for photos.

Features:
- Vertical scrollable thumbnail list
- Highlights selected photo
- Click to navigate between photos
- Keyboard accessible

@example
\`\`\`tsx
<FilmStrip
  photos={album.photos}
  selectedIndex={currentIndex}
  onSelect={(index) => setCurrentIndex(index)}
  albumTitle="Summer Vacation"
/>
\`\`\``,methods:[],displayName:"FilmStrip",props:{photos:{required:!0,tsType:{name:"Array",elements:[{name:"Photo"}],raw:"Photo[]"},description:"Array of photos to display as thumbnails"},selectedIndex:{required:!0,tsType:{name:"number"},description:"Currently selected photo index"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when a thumbnail is clicked"},albumTitle:{required:!1,tsType:{name:"string"},description:"Album title for accessibility"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const S="_albumViewer_7cm63_2",B="_header_7cm63_13",F="_closeButton_7cm63_21",P="_content_7cm63_27",E="_filmStripContainer_7cm63_36",L="_photoContainer_7cm63_51",$="_photoWrapper_7cm63_69",O="_photo_7cm63_51",R="_noPhoto_7cm63_91",W="_navButton_7cm63_99",M="_navButtonPrev_7cm63_125",D="_navButtonNext_7cm63_129",z="_footer_7cm63_140",H="_counter_7cm63_152",r={albumViewer:S,header:B,closeButton:F,content:P,filmStripContainer:E,photoContainer:L,photoWrapper:$,photo:O,noPhoto:R,navButton:W,navButtonPrev:M,navButtonNext:D,footer:z,counter:H},w=({album:t,initialPhotoIndex:l=0,onClose:n,className:m})=>{const[i,s]=b.useState(l);b.useEffect(()=>{s(l)},[t.id,l]),b.useEffect(()=>{const a=u=>{switch(u.key){case"Escape":n==null||n();break;case"ArrowLeft":s(d=>Math.max(0,d-1));break;case"ArrowRight":s(d=>Math.min(t.photos.length-1,d+1));break}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[t.photos.length,n]),b.useEffect(()=>{const a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}},[]);const o=t.photos[i];return e.jsxs("div",{className:f(r.albumViewer,m),role:"dialog","aria-modal":"true","aria-label":`${t.title} viewer`,children:[e.jsx("div",{className:r.header,children:e.jsx(v,{variant:"ghost",iconOnly:"x-crossed",onClick:n,"aria-label":"Close viewer",className:r.closeButton})}),e.jsxs("div",{className:r.content,children:[e.jsx("div",{className:r.filmStripContainer,children:e.jsx(_,{photos:t.photos,selectedIndex:i,onSelect:s,albumTitle:t.title})}),e.jsx("div",{className:r.photoContainer,children:o?e.jsx("div",{className:r.photoWrapper,children:e.jsx("img",{src:o.url,alt:o.alt||o.title||`${t.title} - Photo ${i+1}`,className:r.photo})}):e.jsx("div",{className:r.noPhoto,children:"No photo available"})})]}),t.photos.length>1&&e.jsxs(e.Fragment,{children:[i>0&&e.jsx(v,{variant:"ghost",iconOnly:"arrow-left-sm",onClick:()=>s(a=>a-1),"aria-label":"Previous photo",className:f(r.navButton,r.navButtonPrev)}),i<t.photos.length-1&&e.jsx(v,{variant:"ghost",iconOnly:"arrow-right-sm",onClick:()=>s(a=>a+1),"aria-label":"Next photo",className:f(r.navButton,r.navButtonNext)})]}),e.jsx("div",{className:r.footer,children:e.jsxs("div",{className:r.counter,children:[i+1," / ",t.photos.length]})})]})};w.displayName="AlbumViewer";w.__docgenInfo={description:`AlbumViewer component - Fullscreen photo viewer with thumbnail navigation.

Features:
- Fullscreen overlay display
- Large centered photo
- Film strip thumbnail navigation (desktop only)
- Keyboard navigation (arrow keys, escape)
- Close button

@example
\`\`\`tsx
<AlbumViewer
  album={selectedAlbum}
  initialPhotoIndex={0}
  onClose={() => setViewerOpen(false)}
/>
\`\`\``,methods:[],displayName:"AlbumViewer",props:{album:{required:!0,tsType:{name:"Album"},description:"Album to display"},initialPhotoIndex:{required:!1,tsType:{name:"number"},description:`Initial photo index to display
@default 0`,defaultValue:{value:"0",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when viewer is closed"},className:{required:!1,tsType:{name:"string"},description:"Additional class name"}}};const N=({albums:t,onAlbumSelect:l,selectedAlbum:n,initialPhotoIndex:m=0,...i})=>{const[s,o]=b.useState(null),a=n!==void 0,u=a?n:s,d=p=>{a||o(p),l==null||l(p)},g=()=>{a||o(null),l==null||l(null)},c=u!==null;return e.jsxs(e.Fragment,{children:[!c&&e.jsx(x,{albums:t,onAlbumSelect:d,...i}),c&&u&&e.jsx(w,{album:u,initialPhotoIndex:m,onClose:g})]})};N.displayName="Album";N.__docgenInfo={description:`Album component - Main orchestrator for album carousel and viewer.

Features:
- Displays carousel of albums
- Opens fullscreen viewer on album selection
- Manages viewer state (can be controlled or uncontrolled)
- Smooth transitions between views

@example
\`\`\`tsx
// Uncontrolled (manages its own state)
<Album albums={albumsData} />

// Controlled (external state)
<Album
  albums={albumsData}
  selectedAlbum={currentAlbum}
  onAlbumSelect={setCurrentAlbum}
/>
\`\`\``,methods:[],displayName:"Album",props:{albums:{required:!0,tsType:{name:"Array",elements:[{name:"AlbumType"}],raw:"AlbumType[]"},description:"Array of albums to display"},onAlbumSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(album: AlbumType | null) => void",signature:{arguments:[{type:{name:"union",raw:"AlbumType | null",elements:[{name:"AlbumType"},{name:"null"}]},name:"album"}],return:{name:"void"}}},description:"Callback when an album is selected (optional - external state control)"},selectedAlbum:{required:!1,tsType:{name:"union",raw:"AlbumType | null",elements:[{name:"AlbumType"},{name:"null"}]},description:"Controlled selected album (optional - for external state control)"},initialPhotoIndex:{required:!1,tsType:{name:"number"},description:`Initial photo index when opening viewer
@default 0`,defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};export{N as A,x as a,w as b};
