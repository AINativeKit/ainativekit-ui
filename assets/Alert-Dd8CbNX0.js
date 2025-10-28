import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as o}from"./index-B2-qRKKC.js";import{c as S,I as g,B as N}from"./Button-Dng2PzYd.js";const j="_skeleton_jq6h1_2",y={skeleton:j,"skeleton--rectangular":"_skeleton--rectangular_jq6h1_9","skeleton--text":"_skeleton--text_jq6h1_15","skeleton--circular":"_skeleton--circular_jq6h1_23","skeleton--animated":"_skeleton--animated_jq6h1_30","skeleton-wave":"_skeleton-wave_jq6h1_1"},I=o.forwardRef((n,t)=>{const{variant:r="rectangular",width:s,height:l,borderRadius:i,animation:c=!0,className:f,style:p,"data-testid":_,...h}=n,d=typeof s=="number"?`${s}px`:s,u=typeof l=="number"?`${l}px`:l,m=typeof i=="number"?`${i}px`:i,b={...d&&{width:d},...u&&{height:u},...m&&{borderRadius:m},...p};return e.jsx("div",{ref:t,className:S(y.skeleton,y[`skeleton--${r}`],c&&y["skeleton--animated"],f),style:b,"data-testid":_,"aria-busy":"true","aria-live":"polite",...h})});I.displayName="Skeleton";I.__docgenInfo={description:`Skeleton component for loading states

@example
\`\`\`tsx
// Text skeleton
<Skeleton variant="text" width="80%" />

// Rectangular skeleton (default)
<Skeleton width={200} height={100} />

// Circular skeleton (avatar)
<Skeleton variant="circular" width={40} height={40} />

// Without animation
<Skeleton animation={false} />
\`\`\``,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'rectangular' | 'circular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'circular'"}]},description:`The shape variant of the skeleton
@default 'rectangular'`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the skeleton. Can be a number (px) or CSS string"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height of the skeleton. Can be a number (px) or CSS string"},borderRadius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Border radius of the skeleton. Can be a number (px) or CSS string"},animation:{required:!1,tsType:{name:"boolean"},description:`Whether to animate the skeleton
@default true`},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional test ID for testing purposes"}},composes:["ComponentPropsWithoutRef"]};const v=o.forwardRef((n,t)=>e.jsx(g,{ref:t,name:"error",...n}));v.displayName="Error";v.__docgenInfo={description:`Error icon from chat-tools category

@example
\`\`\`tsx
import { Error } from '@ainativekit/ui/icons';

// Action button with icon
<Button variant="secondary" leftIcon="error">
  Action
</Button>

// Toolbar icon button
<Button iconOnly="error" aria-label="error" />
\`\`\`

@accessibility
Chat tool icons are usually decorative in action buttons. Icon-only toolbar buttons require aria-label.`,methods:[],displayName:"Error"};const k=o.forwardRef((n,t)=>e.jsx(g,{ref:t,name:"check-circle",...n}));k.displayName="CheckCircle";k.__docgenInfo={description:`CheckCircle icon from settings category

@example
\`\`\`tsx
import { CheckCircle } from '@ainativekit/ui/icons';

// Settings action
<Button variant="secondary" leftIcon="check-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="check-circle">
  Configure
</Button>
\`\`\`

@accessibility
Settings icons are decorative when accompanied by descriptive text labels.`,methods:[],displayName:"CheckCircle"};const w=o.forwardRef((n,t)=>e.jsx(g,{ref:t,name:"info-circle",...n}));w.displayName="InfoCircle";w.__docgenInfo={description:`InfoCircle icon from settings category

@example
\`\`\`tsx
import { InfoCircle } from '@ainativekit/ui/icons';

// Settings action
<Button variant="secondary" leftIcon="info-circle">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="info-circle">
  Configure
</Button>
\`\`\`

@accessibility
Settings icons are decorative when accompanied by descriptive text labels.`,methods:[],displayName:"InfoCircle"};const x=o.forwardRef((n,t)=>e.jsx(g,{ref:t,name:"triangle-exclamation-error-warning",...n}));x.displayName="TriangleExclamationErrorWarning";x.__docgenInfo={description:`TriangleExclamationErrorWarning icon from settings category

@example
\`\`\`tsx
import { TriangleExclamationErrorWarning } from '@ainativekit/ui/icons';

// Settings action
<Button variant="secondary" leftIcon="triangle-exclamation-error-warning">
  Settings
</Button>

// Settings menu item
<Button variant="ghost" leftIcon="triangle-exclamation-error-warning">
  Configure
</Button>
\`\`\`

@accessibility
Settings icons are decorative when accompanied by descriptive text labels.`,methods:[],displayName:"TriangleExclamationErrorWarning"};const q="_alert_1kwgz_3",E="_alert__icon_1kwgz_47",R="_alert__content_1kwgz_81",B="_alert__title_1kwgz_96",z="_alert__message_1kwgz_105",W="_alert__actions_1kwgz_113",a={alert:q,"alert--default":"_alert--default_1kwgz_13","alert--card":"_alert--card_1kwgz_17","alert--error":"_alert--error_1kwgz_26","alert--warning":"_alert--warning_1kwgz_31","alert--info":"_alert--info_1kwgz_36","alert--success":"_alert--success_1kwgz_41",alert__icon:E,alert__content:R,alert__title:B,alert__message:z,alert__actions:W},L={error:"Something went wrong",warning:"Warning",info:"Information",success:"Success"},D={error:e.jsx(v,{"aria-hidden":"true"}),warning:e.jsx(x,{"aria-hidden":"true"}),info:e.jsx(w,{"aria-hidden":"true"}),success:e.jsx(k,{"aria-hidden":"true"})},T=o.forwardRef((n,t)=>{const{variant:r="error",layout:s="default",title:l,message:i,onAction:c,actionLabel:f,icon:p,hideIcon:_=!1,className:h,"data-testid":d,...u}=n,m=l??L[r],A=f??(r==="error"?"Try Again":"Dismiss"),C=!_&&(p??D[r]);return e.jsxs("div",{ref:t,className:S(a.alert,a[`alert--${r}`],a[`alert--${s}`],h),role:"alert","aria-live":"polite","data-testid":d,...u,children:[C&&e.jsx("div",{className:a.alert__icon,children:C}),e.jsxs("div",{className:a.alert__content,children:[e.jsx("h3",{className:a.alert__title,children:m}),i&&e.jsx("p",{className:a.alert__message,children:i})]}),c&&e.jsx("div",{className:a.alert__actions,children:e.jsx(N,{variant:"secondary",onClick:c,children:A})})]})});T.displayName="Alert";T.__docgenInfo={description:`Alert component for displaying feedback messages

Supports multiple severity levels (error, warning, info, success) 
following standard design system patterns from Material UI, Chakra UI, etc.

@example
\`\`\`tsx
// Error alert
<Alert 
  variant="error"
  title="Failed to load"
  message="Unable to fetch data"
  onAction={handleRetry}
/>

// Success alert
<Alert 
  variant="success"
  title="Saved"
  message="Your changes have been saved"
/>

// Warning alert
<Alert 
  variant="warning"
  message="Your session will expire soon"
/>

// Info alert
<Alert 
  variant="info"
  message="New features are available"
/>

// Card layout (centered)
<Alert 
  variant="error"
  layout="card"
  title="No results found"
  message="Try adjusting your filters"
/>

// Custom icon
<Alert 
  icon={<CustomIcon />}
  title="Custom alert"
/>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity/type
- 'error': Error state (red)
- 'warning': Warning state (orange)
- 'info': Informational state (blue)
- 'success': Success state (green)
@default 'error'`},layout:{required:!1,tsType:{name:"union",raw:"'default' | 'card'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'card'"}]},description:`Layout style
- 'default': Standard alert display
- 'card': Centered layout optimized for card containers
@default 'default'`},title:{required:!1,tsType:{name:"string"},description:`Alert title/heading
@default Auto-generated based on variant`},message:{required:!1,tsType:{name:"string"},description:"Detailed alert message or description"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Optional action handler (typically for retry or dismiss)
When provided, shows an action button`},actionLabel:{required:!1,tsType:{name:"string"},description:`Label for the action button
@default 'Try Again' for error, 'Dismiss' for others`},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon to display instead of default variant icon"},hideIcon:{required:!1,tsType:{name:"boolean"},description:`Hide the icon completely
@default false`},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional test ID for testing purposes"}},composes:["ComponentPropsWithoutRef"]};export{T as A,I as S};
