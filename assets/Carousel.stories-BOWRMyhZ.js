import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{C as n}from"./Carousel-B89HBjdh.js";import{D as l}from"./DiscoveryCard-CH3SMBzS.js";import{P as o}from"./PropsTable-Cl6IQ_go.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Dng2PzYd.js";import"./Alert-Dd8CbNX0.js";import"./Chip-DUrCjCup.js";import"./Features-DcYKce8P.js";const c=()=>null,C={title:"Gallery/Carousel",component:c,parameters:{layout:"padded"}},d=[{id:"little-nonas",title:"Little Nona's",subtitle:"1427 Via Campania",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-1.png",description:"Award-winning Neapolitan pies in North Beach.",badge:"4.8",features:["$$$","Neapolitan","Wood-fired"]},{id:"dough-re-mi",title:"Dough-Re-Mi",subtitle:"512 Harmony Avenue",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-4.png",description:"Focaccia-style squares, late-night favorite.",badge:"4.6",features:["$$","Focaccia","Late-night"]},{id:"slice-society",title:"Slice Society",subtitle:"839 Valencia Street",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-3.png",description:"Lively slice shop with a cult following.",badge:"4.9",features:["$","Slices","Casual"]},{id:"wood-fired-heaven",title:"Wood Fired Heaven",subtitle:"234 Mission Street",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-2.png",description:"Traditional wood-fired with imported ingredients.",badge:"4.7",features:["$$$","Wood-fired","Traditional"]},{id:"margherita-express",title:"Margherita Express",subtitle:"678 Columbus Avenue",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-6.png",description:"Fresh mozzarella and basil prepared daily with authentic Italian ingredients.",badge:"4.5",features:["$$","Margherita","Fresh"]},{id:"pesto-dreams",title:"Pesto Dreams",subtitle:"456 Grant Avenue",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-5.png",description:"Unique pesto-based variations and seasonal specials.",badge:"4.4",features:["Pesto","Creative"]}],i={render:()=>e.jsxs("div",{style:{maxWidth:"768px",margin:"0 auto",fontFamily:'var(--ai-font-family-base, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'},children:[e.jsxs("section",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"12px",color:"var(--ai-color-text-primary)"},children:"🎠 Carousel - Restaurant Showcase"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--ai-color-text-secondary)",margin:0,lineHeight:"1.6"},children:"A horizontal scrolling carousel showcasing rich card content. Perfect for restaurant listings, product catalogs, or content discovery experiences in your ChatGPT App."})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px",color:"var(--ai-color-text-primary)"},children:"Live Demo"}),e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx(n,{children:d.map(t=>e.jsx(l,{width:"220px",image:t.image,imageAlt:t.title,title:t.title,subtitle:t.subtitle,badge:t.badge,badgeIcon:"star",features:t.features,description:t.description,buttonText:"Order now",onButtonClick:()=>alert(`Order from ${t.title}`)},t.id))})}),e.jsxs("div",{style:{padding:"16px",background:"var(--ai-color-bg-secondary)",borderRadius:"8px",fontSize:"13px",color:"var(--ai-color-text-secondary)",border:"1px solid var(--ai-color-border)"},children:[e.jsx("strong",{style:{color:"var(--ai-color-text-primary)"},children:"✨ Features:"}),e.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px",lineHeight:"1.6"},children:[e.jsx("li",{children:"Scroll horizontally to browse restaurants"}),e.jsx("li",{children:"Rich cards with images, descriptions, and actions"}),e.jsx("li",{children:"Interactive time slot selection"}),e.jsx("li",{children:"Touch/swipe support on mobile devices"}),e.jsx("li",{children:"Smooth snap-to-item carousel behavior"})]})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px",color:"var(--ai-color-text-primary)"},children:"Data Structure"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--ai-color-text-secondary)",marginBottom:"16px",lineHeight:"1.6"},children:"Define your carousel items with rich content including images, descriptions, and metadata."}),e.jsx("div",{style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px",borderRadius:"12px",overflow:"auto",marginBottom:"16px"},children:e.jsx("pre",{style:{margin:0,fontFamily:'ui-monospace, Menlo, Monaco, "Courier New", monospace',fontSize:"13px",lineHeight:"1.6"},children:`type FeatureItem = string | { icon?: IconName; label: string };

interface DiscoveryCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  badge: string;
  badgeIcon?: IconName;     // Optional icon in badge (e.g., "star")
  features: FeatureItem[];  // Flexible: strings or icon-label pairs
}

// Example:
const items: DiscoveryCardItem[] = [
  {
    id: 'item-1',
    title: 'Restaurant Name',
    subtitle: '123 Main Street',
    image: 'https://example.com/image.jpg',
    description: 'A brief description of the restaurant',
    badge: '4.8',
    badgeIcon: 'star',
    features: [
      '$$$',                              // Price level
      'Italian Cuisine',                  // Type
      { icon: 'check-circle-filled', label: 'Verified' }, // With icon
    ],
  },
  // ... more items
];`})}),e.jsx("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"16px",fontSize:"13px",color:"var(--ai-color-text-secondary)"},children:e.jsxs("p",{style:{margin:"0 0 12px 0"},children:[e.jsx("strong",{style:{color:"var(--ai-color-text-primary)"},children:"💡 Pro Tip:"})," Use the"," ",e.jsx("code",{style:{background:"var(--ai-color-bg-primary)",padding:"2px 6px",borderRadius:"4px",fontFamily:"monospace"},children:"badgeIcon"})," ","prop to display icons alongside ratings (e.g., star-filled, verified). DiscoveryCard is optimized for discovery/carousel layouts with 4:3 images and compact content."]})})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px",color:"var(--ai-color-text-primary)"},children:"Quick Start"}),e.jsx("div",{style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px",borderRadius:"12px",overflow:"auto"},children:e.jsx("pre",{style:{margin:0,fontFamily:'ui-monospace, Menlo, Monaco, "Courier New", monospace',fontSize:"13px",lineHeight:"1.6"},children:`import { Carousel } from '@ainativekit/ui';
import { DiscoveryCard } from '@ainativekit/ui';

// 1. Define your carousel items with flexible features
const items = [
  {
    id: 'item-1',
    title: 'Restaurant Name',
    subtitle: 'Location Address',
    image: 'https://example.com/image.jpg',
    description: 'Award-winning restaurant with seasonal menu',
    badge: '4.8',
    badgeIcon: 'star',
    // Features can be strings OR objects with icons
    features: [
      '$$$',                              // Simple string
      'Italian',                          // Simple string
      { icon: 'check-circle-filled', label: 'Verified' }, // With icon
    ],
  },
  {
    id: 'item-2',
    title: 'Another Restaurant',
    subtitle: 'Downtown Location',
    image: 'https://example.com/image2.jpg',
    description: 'Popular spot for casual dining',
    badge: '4.6',
    badgeIcon: 'star',
    features: ['$$', 'Casual', 'Open Late'],
  },
  // ... more items
];

// 2. Render the carousel with DiscoveryCard
function MyCarousel() {
  return (
    <CarouselComponent>
      {items.map((item) => (
        <DiscoveryCard
          key={item.id}
          width="220px"
          image={item.image}
          imageAlt={item.title}
          title={item.title}
          subtitle={item.subtitle}
          badge={item.badge}
          badgeIcon={item.badgeIcon}
          features={item.features}
          description={item.description}
          buttonText="Order now"
          onButtonClick={() => handleOrder(item.id)}
        />
      ))}
    </CarouselComponent>
  );
}`})})]}),e.jsxs("section",{style:{marginBottom:"48px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px",color:"var(--ai-color-text-primary)"},children:"Component Props"}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"16px",color:"var(--ai-color-text-primary)"},children:"Carousel Component"}),e.jsx(o,{hideThemeColumn:!0,rows:[{name:"children",description:"Array of carousel items (typically cards wrapped in divs)"},{name:"align",description:'Carousel alignment: "start" | "center" (default: "center")'},{name:"loop",description:"Enable infinite loop carousel (default: false)"}]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"16px",color:"var(--ai-color-text-primary)"},children:"DiscoveryCard Component (Card Content)"}),e.jsx(o,{hideThemeColumn:!0,rows:[{name:"image",description:"Card image URL (4:3 aspect ratio recommended)"},{name:"imageAlt",description:"Alt text for the image (accessibility)"},{name:"title",description:"Main heading text (uses bodyEmph typography)"},{name:"subtitle",description:"Location or secondary text (uses caption typography)"},{name:"badge",description:'Rating or badge content (e.g., "4.8", "9.2")'},{name:"badgeIcon",description:'Icon for the badge (e.g., "star", "star-filled", "verified")'},{name:"features",description:"Array of feature items (strings or {icon, label} objects with dot separator)"},{name:"description",description:"Short description (clamped to 2 lines with ellipsis)"},{name:"buttonText",description:'Primary button text (default: "Order now")'},{name:"onButtonClick",description:"Callback when the primary button is clicked"},{name:"width",description:'Card width (default: "220px")'}]})]})]}),e.jsxs("section",{style:{marginBottom:"48px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px",color:"var(--ai-color-text-primary)"},children:"Use Cases"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[{emoji:"🍕",title:"Restaurant Listings",desc:"Browse restaurants with ratings, reviews, and availability"},{emoji:"🛍️",title:"Product Showcase",desc:"Display product catalogs with images, prices, and descriptions"},{emoji:"🏨",title:"Hotel/Travel Search",desc:"Show accommodations with amenities and booking options"},{emoji:"🎬",title:"Content Discovery",desc:"Browse movies, shows, articles with rich previews"}].map(t=>e.jsxs("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{style:{fontSize:"24px",marginBottom:"8px"},children:t.emoji}),e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600",color:"var(--ai-color-text-primary)"},children:t.title}),e.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--ai-color-text-secondary)",lineHeight:"1.5"},children:t.desc})]},t.title))})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"16px",color:"var(--ai-color-text-primary)"},children:"Related Components"}),e.jsxs("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"16px",fontSize:"14px",lineHeight:"1.6",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("p",{style:{margin:"0 0 12px 0"},children:["This carousel gallery uses ",e.jsx("strong",{children:"DiscoveryCard"}),", which pairs well with:"]}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DiscoveryCard"})," - Optimized for discovery/carousel layouts with 4:3 images and compact content"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SummaryCard"})," - General-purpose cards with flexible image layouts (1 or multiple images)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ImageCard"})," - Image-focused cards with minimal text overlay"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Chip"})," - For feature tags, ratings, and interactive badges in cards"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Icon"})," - Icon support in badges and throughout card content"]})]})]})]})]})};var r,a,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      maxWidth: '768px',
      margin: '0 auto',
      fontFamily: 'var(--ai-font-family-base, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'
    }}>
        {/* Header Section */}
        <section style={{
        marginBottom: '48px'
      }}>
          <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '12px',
          color: 'var(--ai-color-text-primary)'
        }}>
            🎠 Carousel - Restaurant Showcase
          </h1>
          <p style={{
          fontSize: '16px',
          color: 'var(--ai-color-text-secondary)',
          margin: 0,
          lineHeight: '1.6'
        }}>
            A horizontal scrolling carousel showcasing rich card content. Perfect for restaurant listings, product
            catalogs, or content discovery experiences in your ChatGPT App.
          </p>
        </section>

        {/* Live Demo */}
        <section style={{
        marginBottom: '64px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Live Demo
          </h2>

          <div style={{
          marginBottom: '24px'
        }}>
            <CarouselComponent>
              {pizzaRestaurants.map(restaurant => <DiscoveryCard key={restaurant.id} width="220px" image={restaurant.image} imageAlt={restaurant.title} title={restaurant.title} subtitle={restaurant.subtitle} badge={restaurant.badge} badgeIcon="star" features={restaurant.features} description={restaurant.description} buttonText="Order now" onButtonClick={() => alert(\`Order from \${restaurant.title}\`)} />)}
            </CarouselComponent>
          </div>

          <div style={{
          padding: '16px',
          background: 'var(--ai-color-bg-secondary)',
          borderRadius: '8px',
          fontSize: '13px',
          color: 'var(--ai-color-text-secondary)',
          border: '1px solid var(--ai-color-border)'
        }}>
            <strong style={{
            color: 'var(--ai-color-text-primary)'
          }}>✨ Features:</strong>
            <ul style={{
            margin: '8px 0 0 0',
            paddingLeft: '20px',
            lineHeight: '1.6'
          }}>
              <li>Scroll horizontally to browse restaurants</li>
              <li>Rich cards with images, descriptions, and actions</li>
              <li>Interactive time slot selection</li>
              <li>Touch/swipe support on mobile devices</li>
              <li>Smooth snap-to-item carousel behavior</li>
            </ul>
          </div>
        </section>

        {/* Data Structure Section */}
        <section style={{
        marginBottom: '64px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Data Structure
          </h2>

          <p style={{
          fontSize: '14px',
          color: 'var(--ai-color-text-secondary)',
          marginBottom: '16px',
          lineHeight: '1.6'
        }}>
            Define your carousel items with rich content including images, descriptions, and metadata.
          </p>

          <div style={{
          background: '#1e1e1e',
          color: '#d4d4d4',
          padding: '24px',
          borderRadius: '12px',
          overflow: 'auto',
          marginBottom: '16px'
        }}>
            <pre style={{
            margin: 0,
            fontFamily: 'ui-monospace, Menlo, Monaco, "Courier New", monospace',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>
            {\`type FeatureItem = string | { icon?: IconName; label: string };

interface DiscoveryCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  badge: string;
  badgeIcon?: IconName;     // Optional icon in badge (e.g., "star")
  features: FeatureItem[];  // Flexible: strings or icon-label pairs
}

// Example:
const items: DiscoveryCardItem[] = [
  {
    id: 'item-1',
    title: 'Restaurant Name',
    subtitle: '123 Main Street',
    image: 'https://example.com/image.jpg',
    description: 'A brief description of the restaurant',
    badge: '4.8',
    badgeIcon: 'star',
    features: [
      '$$$',                              // Price level
      'Italian Cuisine',                  // Type
      { icon: 'check-circle-filled', label: 'Verified' }, // With icon
    ],
  },
  // ... more items
];\`}
            </pre>
          </div>

          <div style={{
          background: 'var(--ai-color-bg-secondary)',
          border: '1px solid var(--ai-color-border)',
          borderRadius: '8px',
          padding: '16px',
          fontSize: '13px',
          color: 'var(--ai-color-text-secondary)'
        }}>
            <p style={{
            margin: '0 0 12px 0'
          }}>
              <strong style={{
              color: 'var(--ai-color-text-primary)'
            }}>💡 Pro Tip:</strong> Use the{' '}
              <code style={{
              background: 'var(--ai-color-bg-primary)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontFamily: 'monospace'
            }}>
                badgeIcon
              </code>{' '}
              prop to display icons alongside ratings (e.g., star-filled, verified). DiscoveryCard is optimized
              for discovery/carousel layouts with 4:3 images and compact content.
            </p>
          </div>
        </section>

        {/* Usage Section */}
        <section style={{
        marginBottom: '64px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Quick Start
          </h2>

          <div style={{
          background: '#1e1e1e',
          color: '#d4d4d4',
          padding: '24px',
          borderRadius: '12px',
          overflow: 'auto'
        }}>
            <pre style={{
            margin: 0,
            fontFamily: 'ui-monospace, Menlo, Monaco, "Courier New", monospace',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>
            {\`import { Carousel } from '@ainativekit/ui';
import { DiscoveryCard } from '@ainativekit/ui';

// 1. Define your carousel items with flexible features
const items = [
  {
    id: 'item-1',
    title: 'Restaurant Name',
    subtitle: 'Location Address',
    image: 'https://example.com/image.jpg',
    description: 'Award-winning restaurant with seasonal menu',
    badge: '4.8',
    badgeIcon: 'star',
    // Features can be strings OR objects with icons
    features: [
      '$$$',                              // Simple string
      'Italian',                          // Simple string
      { icon: 'check-circle-filled', label: 'Verified' }, // With icon
    ],
  },
  {
    id: 'item-2',
    title: 'Another Restaurant',
    subtitle: 'Downtown Location',
    image: 'https://example.com/image2.jpg',
    description: 'Popular spot for casual dining',
    badge: '4.6',
    badgeIcon: 'star',
    features: ['$$', 'Casual', 'Open Late'],
  },
  // ... more items
];

// 2. Render the carousel with DiscoveryCard
function MyCarousel() {
  return (
    <CarouselComponent>
      {items.map((item) => (
        <DiscoveryCard
          key={item.id}
          width="220px"
          image={item.image}
          imageAlt={item.title}
          title={item.title}
          subtitle={item.subtitle}
          badge={item.badge}
          badgeIcon={item.badgeIcon}
          features={item.features}
          description={item.description}
          buttonText="Order now"
          onButtonClick={() => handleOrder(item.id)}
        />
      ))}
    </CarouselComponent>
  );
}\`}
            </pre>
          </div>
        </section>

        {/* Component Props Section */}
        <section style={{
        marginBottom: '48px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Component Props
          </h2>

          <div style={{
          marginBottom: '32px'
        }}>
            <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'var(--ai-color-text-primary)'
          }}>
              Carousel Component
            </h3>

            <PropsTable hideThemeColumn rows={[{
            name: 'children',
            description: 'Array of carousel items (typically cards wrapped in divs)'
          }, {
            name: 'align',
            description: 'Carousel alignment: "start" | "center" (default: "center")'
          }, {
            name: 'loop',
            description: 'Enable infinite loop carousel (default: false)'
          }]} />
          </div>

          <div>
            <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'var(--ai-color-text-primary)'
          }}>
              DiscoveryCard Component (Card Content)
            </h3>

            <PropsTable hideThemeColumn rows={[{
            name: 'image',
            description: 'Card image URL (4:3 aspect ratio recommended)'
          }, {
            name: 'imageAlt',
            description: 'Alt text for the image (accessibility)'
          }, {
            name: 'title',
            description: 'Main heading text (uses bodyEmph typography)'
          }, {
            name: 'subtitle',
            description: 'Location or secondary text (uses caption typography)'
          }, {
            name: 'badge',
            description: 'Rating or badge content (e.g., "4.8", "9.2")'
          }, {
            name: 'badgeIcon',
            description: 'Icon for the badge (e.g., "star", "star-filled", "verified")'
          }, {
            name: 'features',
            description: 'Array of feature items (strings or {icon, label} objects with dot separator)'
          }, {
            name: 'description',
            description: 'Short description (clamped to 2 lines with ellipsis)'
          }, {
            name: 'buttonText',
            description: 'Primary button text (default: "Order now")'
          }, {
            name: 'onButtonClick',
            description: 'Callback when the primary button is clicked'
          }, {
            name: 'width',
            description: 'Card width (default: "220px")'
          }]} />
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{
        marginBottom: '48px'
      }}>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Use Cases
          </h2>

          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
            {[{
            emoji: '🍕',
            title: 'Restaurant Listings',
            desc: 'Browse restaurants with ratings, reviews, and availability'
          }, {
            emoji: '🛍️',
            title: 'Product Showcase',
            desc: 'Display product catalogs with images, prices, and descriptions'
          }, {
            emoji: '🏨',
            title: 'Hotel/Travel Search',
            desc: 'Show accommodations with amenities and booking options'
          }, {
            emoji: '🎬',
            title: 'Content Discovery',
            desc: 'Browse movies, shows, articles with rich previews'
          }].map(useCase => <div key={useCase.title} style={{
            background: 'var(--ai-color-bg-secondary)',
            border: '1px solid var(--ai-color-border)',
            borderRadius: '8px',
            padding: '16px'
          }}>
                <div style={{
              fontSize: '24px',
              marginBottom: '8px'
            }}>{useCase.emoji}</div>
                <h4 style={{
              margin: '0 0 8px 0',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--ai-color-text-primary)'
            }}>
                  {useCase.title}
                </h4>
                <p style={{
              margin: 0,
              fontSize: '13px',
              color: 'var(--ai-color-text-secondary)',
              lineHeight: '1.5'
            }}>
                  {useCase.desc}
                </p>
              </div>)}
          </div>
        </section>

        {/* Related Components */}
        <section>
          <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '16px',
          color: 'var(--ai-color-text-primary)'
        }}>
            Related Components
          </h2>

          <div style={{
          background: 'var(--ai-color-bg-secondary)',
          border: '1px solid var(--ai-color-border)',
          borderRadius: '8px',
          padding: '16px',
          fontSize: '14px',
          lineHeight: '1.6',
          color: 'var(--ai-color-text-secondary)'
        }}>
            <p style={{
            margin: '0 0 12px 0'
          }}>
              This carousel gallery uses <strong>DiscoveryCard</strong>, which pairs well with:
            </p>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>
                <strong>DiscoveryCard</strong> - Optimized for discovery/carousel layouts with 4:3 images and compact content
              </li>
              <li>
                <strong>SummaryCard</strong> - General-purpose cards with flexible image layouts (1 or multiple images)
              </li>
              <li>
                <strong>ImageCard</strong> - Image-focused cards with minimal text overlay
              </li>
              <li>
                <strong>Chip</strong> - For feature tags, ratings, and interactive badges in cards
              </li>
              <li>
                <strong>Icon</strong> - Icon support in badges and throughout card content
              </li>
            </ul>
          </div>
        </section>
      </div>;
  }
}`,...(s=(a=i.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Carousel"];export{i as Carousel,w as __namedExportsOrder,C as default};
