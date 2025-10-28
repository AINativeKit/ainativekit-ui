import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as x}from"./index-B2-qRKKC.js";import{L as i}from"./List-BPVtH18g.js";import{B as a}from"./Button-Dng2PzYd.js";import{P as g}from"./PropsTable-Cl6IQ_go.js";import{L as r}from"./ListItem-BU60guJh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Alert-Dd8CbNX0.js";import"./Features-DcYKce8P.js";const E={title:"Composed Components/Lists",component:i,parameters:{layout:"centered"},decorators:[s=>e.jsx("div",{style:{width:"100%",maxWidth:"800px",margin:"0 auto"},children:e.jsx(s,{})})]},b=[{id:"1",title:"Review pull request #247",completed:!1},{id:"2",title:"Update dependencies",completed:!0},{id:"3",title:"Write documentation",completed:!1},{id:"4",title:"Fix responsive layout issue",completed:!1}],p=[{id:"1",name:"Alice Chen",email:"alice@example.com",avatar:"https://i.pravatar.cc/150?img=5"},{id:"2",name:"Bob Martinez",email:"bob@example.com",avatar:"https://i.pravatar.cc/150?img=12"},{id:"3",name:"Carol Williams",email:"carol@example.com",avatar:"https://i.pravatar.cc/150?img=9"}],o=[{id:"1",name:"Tony's Pizza Napoletana",city:"North Beach",rating:4.8,thumbnail:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop"},{id:"2",name:"Golden Boy Pizza",city:"North Beach",rating:4.6,thumbnail:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"},{id:"3",name:"Pizzeria Delfina (Mission)",city:"Mission",rating:4.5,thumbnail:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop"},{id:"4",name:"Little Star Pizza",city:"Alamo Square",rating:4.5,thumbnail:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200&h=200&fit=crop"},{id:"5",name:"Il Casaro Pizzeria",city:"North Beach",rating:4.6,thumbnail:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=200&h=200&fit=crop"},{id:"6",name:"Capo's",city:"North Beach",rating:4.4,thumbnail:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop"},{id:"7",name:"Ragazza",city:"Lower Haight",rating:4.4,thumbnail:"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=200&h=200&fit=crop"}],B=()=>{const[s,d]=x.useState(!1),[m,c]=x.useState(!1),h=()=>{d(!0),c(!1),setTimeout(()=>d(!1),3e3)},f=()=>{c(!0),d(!1)},v=()=>{c(!1),h()};return e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("h1",{style:{marginBottom:"32px"},children:"Lists System"}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("p",{style:{marginBottom:"24px",color:"var(--ai-color-text-secondary)",fontSize:"16px",lineHeight:"1.6"},children:"Flexible list component for displaying data collections with rich metadata, features, and interactive elements. Perfect for tasks, contacts, ranked items, and more."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"14px"},children:[e.jsx("div",{children:e.jsx("strong",{children:"Key Features:"})}),e.jsxs("ul",{style:{marginLeft:"24px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("li",{children:"Customizable header with title, subtitle, thumbnail, and actions"}),e.jsx("li",{children:"Rich list items with media, features, metadata, and ranks"}),e.jsx("li",{children:"Loading, error, and empty states built-in"}),e.jsx("li",{children:"Interactive items with hover/focus states"}),e.jsx("li",{children:"Responsive design (mobile/desktop)"}),e.jsx("li",{children:"Keyboard accessible (ARIA roles, tab navigation)"})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px",alignItems:"start"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Complete Example"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Production-ready ranked list inspired by OpenAI's design patterns"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"National Best Pizza List"}),e.jsx(i,{header:{title:"National Best Pizza List",subtitle:"A ranking of the best pizzerias in the world",thumbnail:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80&h=80&fit=crop",action:e.jsx(a,{variant:"primary",children:"Save List"})},items:o,renderItem:(t,n)=>e.jsx(r,{rank:n+1,title:t.name,features:[{icon:"star",label:`${t.rating}`}],media:t.thumbnail,mediaAlt:t.name,metadata:t.city,action:e.jsx(a,{iconOnly:"plus-circle-add","aria-label":`Add ${t.name}`,variant:"ghost"}),onActionClick:()=>console.log("Add",t.name)},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  header={{
    title: 'National Best Pizza List',
    subtitle: 'A ranking of the best pizzerias in the world',
    thumbnail: pizzaIcon,
    action: <Button variant="primary">Save List</Button>,
  }}
  items={pizzaPlaces}
  renderItem={(place, index) => (
    <ListItem
      key={place.id}
      rank={index + 1}
      title={place.name}
      features={[{ icon: 'star', label: \`\${place.rating}\` }]}
      media={place.thumbnail}
      mediaAlt={place.name}
      metadata={place.city}
      action={
        <Button
          iconOnly="plus-circle-add"
          aria-label={\`Add \${place.name}\`}
          variant="ghost"
        />
      }
      onActionClick={() => console.log('Add', place.name)}
    />
  )}
/>`})})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px",alignItems:"start"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Basic Lists"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Simple lists for common use cases"})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Task List"}),e.jsx(i,{items:b,renderItem:t=>e.jsx(r,{title:t.title,action:e.jsx(a,{iconOnly:t.completed?"check-circle-filled":"empty-circle","aria-label":t.completed?"Mark incomplete":"Mark complete",variant:"ghost"}),onActionClick:()=>console.log("Toggle task",t.id)},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  items={tasks}
  renderItem={(task) => (
    <ListItem
      key={task.id}
      title={task.title}
      action={<IconButton icon="circle" />}
      onActionClick={() => console.log(task.id)}
    />
  )}
/>`})})]})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"With Header"}),e.jsx(i,{header:{title:"Team Members",subtitle:"3 active members",action:e.jsx(a,{variant:"primary",children:"Invite"})},items:p,renderItem:t=>e.jsx(r,{title:t.name,subtitle:t.email,media:t.avatar,mediaAlt:t.name},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  header={{
    title: 'Team Members',
    subtitle: '3 active members',
    action: <Button variant="primary">Invite</Button>,
  }}
  items={contacts}
  renderItem={(contact) => (
    <ListItem
      key={contact.id}
      title={contact.name}
      subtitle={contact.email}
      media={contact.avatar}
    />
  )}
/>`})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Interactive Items"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"Items with onClick handlers get hover/focus states and keyboard support"}),e.jsx(i,{items:p,renderItem:t=>e.jsx(r,{title:t.name,subtitle:t.email,media:t.avatar,onClick:()=>console.log("View contact",t.id)},t.id)})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px",alignItems:"start"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Advanced Features"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Rich metadata, rankings, features, and more"})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Ranked List"}),e.jsx(i,{header:{title:"Best Pizza Places",subtitle:"Top rated pizzerias worldwide",thumbnail:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80&h=80&fit=crop"},items:o,renderItem:(t,n)=>e.jsx(r,{rank:n+1,title:t.name,subtitle:t.city,media:t.thumbnail,mediaAlt:t.name,metadata:`${t.rating} ⭐`},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  header={{
    title: 'Best Pizza Places',
    subtitle: 'Top rated pizzerias',
    thumbnail: pizzaIcon,
  }}
  items={pizzaPlaces}
  renderItem={(place, index) => (
    <ListItem
      key={place.id}
      rank={index + 1}
      title={place.name}
      subtitle={place.city}
      media={place.thumbnail}
      metadata={\`\${place.rating} ⭐\`}
    />
  )}
/>`})})]})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"With Features"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"Add feature badges with icons to list items"}),e.jsx(i,{items:o.slice(0,3),renderItem:t=>e.jsx(r,{title:t.name,subtitle:t.city,media:t.thumbnail,features:[{icon:"star",label:`${t.rating}`},{icon:"map-pin",label:"Nearby"}],metadata:"$$$"},t.id)})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Without Dividers"}),e.jsx(i,{items:p,showDividers:!1,renderItem:t=>e.jsx(r,{title:t.name,subtitle:t.email,media:t.avatar},t.id)})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px",alignItems:"start"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Loading, Error & Empty States"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Built-in state management for async data"})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Loading State (Recommended Pattern)"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"Best UX: Render actual items with loading prop for seamless transition"}),e.jsx(i,{loading:!0,items:o.slice(0,3),renderItem:t=>e.jsx(r,{loading:!0,title:t.name,subtitle:t.city,media:t.thumbnail,metadata:`${t.rating} ⭐`},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  loading
  items={places}
  renderItem={(place) => (
    <ListItem
      key={place.id}
      loading
      title={place.name}
      subtitle={place.city}
      media={place.thumbnail}
      metadata={\`\${place.rating} ⭐\`}
    />
  )}
/>`})})]})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Loading State (Fallback)"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"When no items available, shows generic skeleton items"}),e.jsx(i,{loading:!0,loadingItems:4,items:[],renderItem:()=>null}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  loading
  loadingItems={4}
  items={[]}
  renderItem={() => null}
/>`})})]})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Error State"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"Error display with optional retry button"}),e.jsx(i,{header:{title:"Team Members",subtitle:"Failed to load"},error:!0,errorTitle:"Failed to load team members",errorMessage:"Could not connect to the server. Please try again.",onErrorRetry:()=>console.log("Retry clicked"),items:[],renderItem:()=>null}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  error
  errorTitle="Failed to load team members"
  errorMessage="Could not connect to server"
  onErrorRetry={() => handleRetry()}
  items={[]}
  renderItem={() => null}
/>`})})]})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Empty State (Default)"}),e.jsx(i,{emptyTitle:"No contacts",emptyMessage:"You haven't added any contacts yet. Start by inviting team members.",items:[],renderItem:()=>null}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  emptyTitle="No contacts"
  emptyMessage="You haven't added any contacts yet."
  items={[]}
  renderItem={() => null}
/>`})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"Empty State (Custom)"}),e.jsx(i,{emptyState:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"📋"}),e.jsx("div",{style:{fontSize:"18px",fontWeight:600,marginBottom:"8px"},children:"No tasks yet"}),e.jsx("div",{style:{color:"var(--ai-color-text-secondary)",marginBottom:"16px"},children:"Create your first task to get started"}),e.jsx(a,{variant:"primary",children:"Create Task"})]}),items:[],renderItem:()=>null}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`<List
  emptyState={
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '48px' }}>📋</div>
      <div style={{ fontSize: '18px', fontWeight: 600 }}>
        No tasks yet
      </div>
      <Button variant="primary">Create Task</Button>
    </div>
  }
  items={[]}
  renderItem={() => null}
/>`})})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsxs("header",{style:{marginBottom:"24px",alignItems:"start"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Real-World Example"}),e.jsx("p",{style:{color:"var(--ai-color-text-secondary)",margin:0,fontSize:"14px"},children:"Async data fetching with state management"})]}),e.jsxs("div",{style:{marginBottom:"16px",display:"flex",gap:"8px"},children:[e.jsx(a,{variant:"secondary",onClick:h,children:"Simulate Loading"}),e.jsx(a,{variant:"secondary",onClick:f,children:"Simulate Error"})]}),e.jsx(i,{header:{title:"Pizza Places",subtitle:s?"Loading...":m?"Error":`${o.length} places`},loading:s,error:m,errorTitle:"Failed to load pizza places",errorMessage:"Could not fetch data from the server",onErrorRetry:v,loadingItems:4,items:s?o.slice(0,3):m?[]:o,renderItem:(t,n)=>e.jsx(r,{loading:s,rank:n+1,title:t.name,subtitle:t.city,media:t.thumbnail,metadata:`${t.rating} ⭐`,onClick:()=>console.log("View",t.id)},t.id)}),e.jsxs("details",{style:{marginTop:"16px",cursor:"pointer"},children:[e.jsx("summary",{style:{fontWeight:600,marginBottom:"12px"},children:"Show code"}),e.jsx("div",{style:{backgroundColor:"var(--ai-color-bg-tertiary)",padding:"16px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",marginTop:"12px"},children:e.jsx("code",{style:{whiteSpace:"pre"},children:`const [isLoading, setIsLoading] = React.useState(false);
const [hasError, setHasError] = React.useState(false);
const [data, setData] = React.useState([]);

React.useEffect(() => {
  setIsLoading(true);
  fetchData()
    .then(setData)
    .catch(() => setHasError(true))
    .finally(() => setIsLoading(false));
}, []);

return (
  <List
    loading={isLoading}
    error={hasError}
    errorTitle="Failed to load"
    onErrorRetry={handleRetry}
    items={isLoading ? placeholders : hasError ? [] : data}
    renderItem={(item) => (
      <ListItem
        key={item.id}
        loading={isLoading}
        title={item.name}
        subtitle={item.description}
      />
    )}
  />
);`})})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("header",{style:{marginBottom:"24px",alignItems:"start"},children:e.jsx("h2",{style:{marginBottom:"8px"},children:"Props Documentation"})}),e.jsx("h3",{style:{fontSize:"16px",marginBottom:"16px"},children:"List Props"}),e.jsx(g,{hideThemeColumn:!0,rows:[{name:"items",description:"Array of data items to render. Type: T[] (required)"},{name:"renderItem",description:"Render function for list rows. Type: (item: T, index: number) => ReactNode (required)"},{name:"header",description:"Optional header configuration with title, subtitle, thumbnail, and action. Type: ListHeaderProps"},{name:"loading",description:"Loading state - renders items with loading context or skeleton items. Type: boolean. Default: false"},{name:"loadingItems",description:"Number of skeleton items to show when loading and no items provided. Type: number. Default: 3"},{name:"error",description:"Error state - shows error message. Type: boolean. Default: false"},{name:"errorTitle",description:'Custom error title. Type: string. Default: "Failed to load items"'},{name:"errorMessage",description:"Custom error message. Type: string"},{name:"onErrorRetry",description:"Error retry handler - shows retry button when provided. Type: () => void"},{name:"emptyTitle",description:'Empty state title when no items provided. Type: string. Default: "No items"'},{name:"emptyMessage",description:'Message to show when the list is empty. Type: ReactNode. Default: "No items found."'},{name:"emptyState",description:"Custom empty state content (replaces default). Type: ReactNode"},{name:"showDividers",description:"Controls whether divider lines are rendered between rows. Type: boolean. Default: true"}]}),e.jsx("h3",{style:{fontSize:"16px",marginTop:"32px",marginBottom:"16px"},children:"ListItem Props"}),e.jsx(g,{hideThemeColumn:!0,rows:[{name:"title",description:"Primary title for the row. Type: ReactNode (required)"},{name:"subtitle",description:"Optional supporting text (e.g., city, description). Type: ReactNode"},{name:"media",description:"Optional visual shown to the left of the text. Type: string | ReactNode"},{name:"mediaAlt",description:"Accessible alternative text for the media when a URL is provided. Type: string"},{name:"rank",description:"Optional rank or index shown on desktop. Type: ReactNode"},{name:"metadata",description:"Optional metadata rendered inline on mobile and in a separate column on desktop. Type: ReactNode"},{name:"features",description:"Optional feature list displayed below the subtitle. Type: FeatureItem[] (string | { icon?: IconName; label: string })"},{name:"action",description:"Optional trailing action element (icon button, button, etc.). Type: ReactNode"},{name:"onActionClick",description:"Handler for trailing action clicks. Type: (event: React.MouseEvent) => void"},{name:"onClick",description:"Row click handler - enables hover/focus states. Type: (event: React.MouseEvent) => void"},{name:"interactive",description:"Enable hover/focus states even without an onClick handler. Type: boolean. Default: false"},{name:"loading",description:"Loading state for individual list items. Type: boolean. Default: false"},{name:"hideMetadataOnMobile",description:"Hide metadata from the inline mobile row. Type: boolean. Default: false"}]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("header",{style:{marginBottom:"24px",alignItems:"start"},children:e.jsx("h2",{style:{marginBottom:"8px"},children:"Best Practices"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",fontSize:"14px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Loading Patterns:"}),e.jsxs("ul",{style:{marginLeft:"24px",marginTop:"8px",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("li",{children:["Prefer rendering actual items with ",e.jsx("code",{children:"loading"})," prop for better UX (seamless transition)"]}),e.jsx("li",{children:"Use fallback skeleton items only when you don't have placeholder data"}),e.jsxs("li",{children:["Set ",e.jsx("code",{children:"loading"})," on both ",e.jsx("code",{children:"List"})," and ",e.jsx("code",{children:"ListItem"})," components"]})]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Error Handling:"}),e.jsxs("ul",{style:{marginLeft:"24px",marginTop:"8px",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("li",{children:["Always provide ",e.jsx("code",{children:"onErrorRetry"})," handler for user recovery"]}),e.jsx("li",{children:"Use descriptive error titles and messages"}),e.jsx("li",{children:"Preserve the header during error state for context"})]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Empty States:"}),e.jsxs("ul",{style:{marginLeft:"24px",marginTop:"8px",color:"var(--ai-color-text-secondary)"},children:[e.jsx("li",{children:"Provide helpful guidance or actions in empty states"}),e.jsx("li",{children:"Use custom empty states for better engagement"}),e.jsx("li",{children:"Consider showing a CTA button to help users take action"})]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Accessibility:"}),e.jsxs("ul",{style:{marginLeft:"24px",marginTop:"8px",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("li",{children:["Always provide ",e.jsx("code",{children:"mediaAlt"})," for images"]}),e.jsx("li",{children:'Use semantic HTML (role="button" for interactive items)'}),e.jsx("li",{children:"Ensure keyboard navigation works (Tab, Enter, Space)"}),e.jsx("li",{children:"Test with screen readers"})]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Performance:"}),e.jsxs("ul",{style:{marginLeft:"24px",marginTop:"8px",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("li",{children:["Always provide unique ",e.jsx("code",{children:"key"})," prop in renderItem"]}),e.jsx("li",{children:"Avoid inline function definitions in renderItem when possible"}),e.jsx("li",{children:"Consider virtualization for very long lists (100+ items)"})]})]})]})]})]})},l=()=>e.jsx(B,{});l.__docgenInfo={description:"",methods:[],displayName:"Lists"};var y,u,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"() => <ListsComponent />",...(j=(u=l.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const A=["Lists"];export{l as Lists,A as __namedExportsOrder,E as default};
