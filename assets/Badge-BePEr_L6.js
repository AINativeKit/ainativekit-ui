import{j as b}from"./jsx-runtime-DF2Pcvd1.js";import{R as u}from"./index-B2-qRKKC.js";import{c as m}from"./Button-Dng2PzYd.js";const f="_badge_1cvgn_2",p="_badgeSm_1cvgn_26",v="_badgeMd_1cvgn_32",_="_badgeLg_1cvgn_37",B="_badgeDefault_1cvgn_46",L="_badgeFilled_1cvgn_56",w="_badgeSuccess_1cvgn_62",x="_badgeWarning_1cvgn_72",y="_badgeError_1cvgn_82",S="_badgeNeutral_1cvgn_92",a={badge:f,badgeSm:p,badgeMd:v,badgeLg:_,badgeDefault:B,badgeFilled:L,badgeSuccess:w,badgeWarning:x,badgeError:y,badgeNeutral:S},n=u.forwardRef((r,s)=>{const{variant:i="default",size:d="md",ariaLabel:e,className:t,children:l,...g}=r,o={default:a.badgeDefault,filled:a.badgeFilled,success:a.badgeSuccess,warning:a.badgeWarning,error:a.badgeError,neutral:a.badgeNeutral}[i],c={sm:a.badgeSm,md:a.badgeMd,lg:a.badgeLg}[d];return b.jsx("span",{ref:s,className:m(a.badge,o,c,t),"aria-label":e,role:e?"status":void 0,...g,children:l})});n.displayName="Badge";n.__docgenInfo={description:`Badge component following OpenAI design system.

A compact, circular indicator for displaying status, counts, ratings, or labels.
Optimized for ChatGPT app interfaces with dark mode support.

@example
\`\`\`tsx
// Counter/Rating (provide ariaLabel for accessibility)
<Badge ariaLabel="Rating 9.2 out of 10">9.2</Badge>

// Notification count
<Badge variant="filled" size="sm" ariaLabel="5 unread messages">5</Badge>
<Badge variant="filled" size="lg" ariaLabel="99+ notifications">99+</Badge>

// Status indicators (always use ariaLabel for icons)
<Badge variant="success" ariaLabel="Verified">✓</Badge>
<Badge variant="warning" ariaLabel="Warning">!</Badge>
<Badge variant="error" ariaLabel="Error">×</Badge>

// Compact labels
<Badge variant="neutral" size="sm">AI</Badge>
\`\`\``,methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:`Visual variant of the badge.
@default 'default'`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the badge.
- sm: 32px (--ai-spacing-16)
- md: 40px (--ai-spacing-20) - default
- lg: 48px (--ai-spacing-24)
@default 'md'`},ariaLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for screen readers when content is not descriptive.\nUse when badge contains only icons, numbers, or abbreviated text.\n@example\n```tsx\n<Badge ariaLabel="5 unread messages">5</Badge>\n<Badge ariaLabel="Verified" variant="success">✓</Badge>\n```'}},composes:["Omit"]};export{n as B};
