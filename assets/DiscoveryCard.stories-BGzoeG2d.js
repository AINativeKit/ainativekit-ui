import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{D as r}from"./DiscoveryCard-CH3SMBzS.js";import{P as l}from"./PropsTable-Cl6IQ_go.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Dng2PzYd.js";import"./Chip-DUrCjCup.js";import"./Features-DcYKce8P.js";const y={title:"Composed Components/Cards",component:r,parameters:{layout:"padded"}},i=[{id:"tony-pizzeria",title:"Tony's Pizzeria",subtitle:"123 Main Street",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-1.png",description:"Award-winning Neapolitan pizzas with wood-fired oven.",badge:"4.8",features:["$$$","Neapolitan","Wood-fired"]},{id:"slice-haven",title:"Slice Haven",subtitle:"456 Park Avenue",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-3.png",description:"New York style slices with fresh mozzarella.",badge:"4.6",features:["$$","Slices","Fresh"]},{id:"pesto-kitchen",title:"Pesto Kitchen",subtitle:"789 Garden Lane",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-5.png",description:"Creative pesto-based pizzas with seasonal ingredients.",badge:"4.7",features:["$$","Pesto","Creative"]},{id:"margherita-express",title:"Margherita Express",subtitle:"321 Market Street",image:"https://persistent.oaistatic.com/pizzaz/pizzaz-6.png",description:"Fresh mozzarella and basil prepared daily with authentic Italian ingredients.",badge:"4.5",features:["$$","Margherita","Fresh"]}],o=()=>e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{marginBottom:"12px",fontSize:"32px",fontWeight:"700"},children:"🎴 DiscoveryCard"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--ai-color-text-secondary)",margin:0},children:"A discovery/browsing card optimized for carousels and discovery interfaces. Perfect for restaurant listings, product catalogs, and content discovery experiences."})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Single Card Example"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[e.jsx(r,{width:"220px",image:i[0].image,imageAlt:i[0].title,title:i[0].title,subtitle:i[0].subtitle,badge:i[0].badge,badgeIcon:"star",features:i[0].features,description:i[0].description,buttonText:"Order now",onButtonClick:()=>alert("Card clicked!")}),e.jsx("div",{style:{flex:1,background:"#1e1e1e",color:"#d4d4d4",padding:"24px",borderRadius:"12px",fontFamily:"monospace",fontSize:"13px",overflow:"auto"},children:e.jsx("pre",{style:{margin:0,lineHeight:"1.6"},children:`<DiscoveryCard
  width="220px"
  image="https://..."
  imageAlt="Tony's Pizzeria"
  title="Tony's Pizzeria"
  subtitle="123 Main Street"
  badge="4.8"
  badgeIcon="star"
  features={['$$$', 'Neapolitan', 'Wood-fired']}
  description="Award-winning Neapolitan pizzas..."
  buttonText="Order now"
  onButtonClick={() => handleOrder()}
/>`})})]})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Multiple Cards in Grid"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"24px"},children:i.map(t=>e.jsx(r,{width:"100%",image:t.image,imageAlt:t.title,title:t.title,subtitle:t.subtitle,badge:t.badge,badgeIcon:"star",features:t.features,description:t.description,buttonText:"Order now",onButtonClick:()=>alert(`Ordering from ${t.title}`)},t.id))})]}),e.jsxs("section",{style:{marginBottom:"64px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Key Features"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[{emoji:"🖼️",title:"4:3 Aspect Ratio Images",desc:"Natural, balanced image proportions optimized for content preview"},{emoji:"⭐",title:"Icon-Enabled Badge",desc:"Flexible badge with optional icon support (star, verified, etc.)"},{emoji:"✨",title:"Flexible Features & Pricing",desc:"Display feature tags, pricing, and metadata with optional icons"},{emoji:"📝",title:"2-Line Description",desc:"Clamped description with ellipsis for consistent card height"},{emoji:"🎨",title:"Design Token Integration",desc:"Uses typography and color tokens for consistent theming"},{emoji:"🔘",title:"Primary Action Button",desc:"Built-in call-to-action button with click handler"}].map(t=>e.jsxs("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{style:{fontSize:"24px",marginBottom:"8px"},children:t.emoji}),e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600",color:"var(--ai-color-text-primary)"},children:t.title}),e.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--ai-color-text-secondary)",lineHeight:"1.5"},children:t.desc})]},t.title))})]}),e.jsxs("section",{style:{marginBottom:"48px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Component Props"}),e.jsx(l,{hideThemeColumn:!0,rows:[{name:"image",description:"Card image URL (4:3 aspect ratio recommended)"},{name:"imageAlt",description:"Alt text for image (accessibility)"},{name:"title",description:"Main heading/title (uses bodyEmph typography)"},{name:"subtitle",description:"Location or subtitle text (uses caption typography)"},{name:"badge",description:'Rating or badge content (e.g., "4.8", "9.2")'},{name:"badgeIcon",description:'Icon to display in the badge (e.g., "star", "star-filled")'},{name:"features",description:'Array of feature items (strings or icon-label pairs). Can include pricing like "$$$", "$$", "$"'},{name:"description",description:"Short description (clamped to 2 lines with ellipsis)"},{name:"buttonText",description:'Primary button text (default: "Order now")'},{name:"onButtonClick",description:"Callback when primary button is clicked"},{name:"width",description:'Card width (default: "220px")'},{name:"className",description:"Optional className for custom styling"},{name:"style",description:"Optional inline styles"}]})]}),e.jsxs("section",{style:{marginBottom:"48px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Use Cases"}),e.jsx("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"24px",fontSize:"14px",lineHeight:"1.8",color:"var(--ai-color-text-secondary)"},children:e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Restaurant Discovery:"})," Browse restaurants with ratings, pricing, and cuisine types in a carousel"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Product Catalogs:"})," Display products with images, prices, and features in grid or carousel layouts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hotel/Travel Search:"})," Show accommodations with amenities and booking options"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Content Discovery:"})," Browse articles, videos, or other content with rich previews"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"E-commerce Listings:"})," Product showcase with quick-buy actions and ratings"]})]})})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"24px"},children:"Related Components"}),e.jsxs("div",{style:{background:"var(--ai-color-bg-secondary)",border:"1px solid var(--ai-color-border)",borderRadius:"8px",padding:"24px",fontSize:"14px",lineHeight:"1.8",color:"var(--ai-color-text-secondary)"},children:[e.jsxs("p",{style:{margin:"0 0 12px 0"},children:[e.jsx("strong",{children:"DiscoveryCard"})," pairs well with these components:"]}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Carousel"})," - Horizontal scrolling layout perfect for DiscoveryCard collections"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SummaryCard"})," - General-purpose cards with flexible image layouts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Chip"})," - For displaying feature tags and badges"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Button"})," - Call-to-action buttons (built-in to DiscoveryCard)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Icon"})," - Icon support in badges and throughout the card"]})]})]})]})]});o.__docgenInfo={description:"",methods:[],displayName:"DiscoveryCards"};var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div style={{
  maxWidth: '1200px',
  margin: '0 auto'
}}>
      <div style={{
    marginBottom: '48px'
  }}>
        <h1 style={{
      marginBottom: '12px',
      fontSize: '32px',
      fontWeight: '700'
    }}>
          🎴 DiscoveryCard
        </h1>
        <p style={{
      fontSize: '16px',
      color: 'var(--ai-color-text-secondary)',
      margin: 0
    }}>
          A discovery/browsing card optimized for carousels and discovery interfaces. Perfect for
          restaurant listings, product catalogs, and content discovery experiences.
        </p>
      </div>

      {/* Single Card Example */}
      <section style={{
    marginBottom: '64px'
  }}>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Single Card Example
        </h2>
        <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
          <DiscoveryCard width="220px" image={sampleRestaurants[0].image} imageAlt={sampleRestaurants[0].title} title={sampleRestaurants[0].title} subtitle={sampleRestaurants[0].subtitle} badge={sampleRestaurants[0].badge} badgeIcon="star" features={sampleRestaurants[0].features} description={sampleRestaurants[0].description} buttonText="Order now" onButtonClick={() => alert('Card clicked!')} />

          {/* Code Display */}
          <div style={{
        flex: 1,
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '24px',
        borderRadius: '12px',
        fontFamily: 'monospace',
        fontSize: '13px',
        overflow: 'auto'
      }}>
            <pre style={{
          margin: 0,
          lineHeight: '1.6'
        }}>
          {\`<DiscoveryCard
  width="220px"
  image="https://..."
  imageAlt="Tony's Pizzeria"
  title="Tony's Pizzeria"
  subtitle="123 Main Street"
  badge="4.8"
  badgeIcon="star"
  features={['$$$', 'Neapolitan', 'Wood-fired']}
  description="Award-winning Neapolitan pizzas..."
  buttonText="Order now"
  onButtonClick={() => handleOrder()}
/>\`}
            </pre>
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <section style={{
    marginBottom: '64px'
  }}>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Multiple Cards in Grid
        </h2>
        <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '24px'
    }}>
          {sampleRestaurants.map(restaurant => <DiscoveryCard key={restaurant.id} width="100%" image={restaurant.image} imageAlt={restaurant.title} title={restaurant.title} subtitle={restaurant.subtitle} badge={restaurant.badge} badgeIcon="star" features={restaurant.features} description={restaurant.description} buttonText="Order now" onButtonClick={() => alert(\`Ordering from \${restaurant.title}\`)} />)}
        </div>
      </section>

      {/* Key Features */}
      <section style={{
    marginBottom: '64px'
  }}>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Key Features
        </h2>
        <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px'
    }}>
          {[{
        emoji: '🖼️',
        title: '4:3 Aspect Ratio Images',
        desc: 'Natural, balanced image proportions optimized for content preview'
      }, {
        emoji: '⭐',
        title: 'Icon-Enabled Badge',
        desc: 'Flexible badge with optional icon support (star, verified, etc.)'
      }, {
        emoji: '✨',
        title: 'Flexible Features & Pricing',
        desc: 'Display feature tags, pricing, and metadata with optional icons'
      }, {
        emoji: '📝',
        title: '2-Line Description',
        desc: 'Clamped description with ellipsis for consistent card height'
      }, {
        emoji: '🎨',
        title: 'Design Token Integration',
        desc: 'Uses typography and color tokens for consistent theming'
      }, {
        emoji: '🔘',
        title: 'Primary Action Button',
        desc: 'Built-in call-to-action button with click handler'
      }].map(feature => <div key={feature.title} style={{
        background: 'var(--ai-color-bg-secondary)',
        border: '1px solid var(--ai-color-border)',
        borderRadius: '8px',
        padding: '16px'
      }}>
              <div style={{
          fontSize: '24px',
          marginBottom: '8px'
        }}>{feature.emoji}</div>
              <h4 style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: 'var(--ai-color-text-primary)'
        }}>
                {feature.title}
              </h4>
              <p style={{
          margin: 0,
          fontSize: '13px',
          color: 'var(--ai-color-text-secondary)',
          lineHeight: '1.5'
        }}>
                {feature.desc}
              </p>
            </div>)}
        </div>
      </section>

      {/* Component Props */}
      <section style={{
    marginBottom: '48px'
  }}>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Component Props
        </h2>
        <PropsTable hideThemeColumn rows={[{
      name: 'image',
      description: 'Card image URL (4:3 aspect ratio recommended)'
    }, {
      name: 'imageAlt',
      description: 'Alt text for image (accessibility)'
    }, {
      name: 'title',
      description: 'Main heading/title (uses bodyEmph typography)'
    }, {
      name: 'subtitle',
      description: 'Location or subtitle text (uses caption typography)'
    }, {
      name: 'badge',
      description: 'Rating or badge content (e.g., "4.8", "9.2")'
    }, {
      name: 'badgeIcon',
      description: 'Icon to display in the badge (e.g., "star", "star-filled")'
    }, {
      name: 'features',
      description: 'Array of feature items (strings or icon-label pairs). Can include pricing like "$$$", "$$", "$"'
    }, {
      name: 'description',
      description: 'Short description (clamped to 2 lines with ellipsis)'
    }, {
      name: 'buttonText',
      description: 'Primary button text (default: "Order now")'
    }, {
      name: 'onButtonClick',
      description: 'Callback when primary button is clicked'
    }, {
      name: 'width',
      description: 'Card width (default: "220px")'
    }, {
      name: 'className',
      description: 'Optional className for custom styling'
    }, {
      name: 'style',
      description: 'Optional inline styles'
    }]} />
      </section>

      {/* Use Cases */}
      <section style={{
    marginBottom: '48px'
  }}>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Use Cases
        </h2>
        <div style={{
      background: 'var(--ai-color-bg-secondary)',
      border: '1px solid var(--ai-color-border)',
      borderRadius: '8px',
      padding: '24px',
      fontSize: '14px',
      lineHeight: '1.8',
      color: 'var(--ai-color-text-secondary)'
    }}>
          <ul style={{
        margin: 0,
        paddingLeft: '20px'
      }}>
            <li>
              <strong>Restaurant Discovery:</strong> Browse restaurants with ratings, pricing, and
              cuisine types in a carousel
            </li>
            <li>
              <strong>Product Catalogs:</strong> Display products with images, prices, and features
              in grid or carousel layouts
            </li>
            <li>
              <strong>Hotel/Travel Search:</strong> Show accommodations with amenities and booking
              options
            </li>
            <li>
              <strong>Content Discovery:</strong> Browse articles, videos, or other content with
              rich previews
            </li>
            <li>
              <strong>E-commerce Listings:</strong> Product showcase with quick-buy actions and
              ratings
            </li>
          </ul>
        </div>
      </section>

      {/* Related Components */}
      <section>
        <h2 style={{
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>
          Related Components
        </h2>
        <div style={{
      background: 'var(--ai-color-bg-secondary)',
      border: '1px solid var(--ai-color-border)',
      borderRadius: '8px',
      padding: '24px',
      fontSize: '14px',
      lineHeight: '1.8',
      color: 'var(--ai-color-text-secondary)'
    }}>
          <p style={{
        margin: '0 0 12px 0'
      }}>
            <strong>DiscoveryCard</strong> pairs well with these components:
          </p>
          <ul style={{
        margin: 0,
        paddingLeft: '20px'
      }}>
            <li>
              <strong>Carousel</strong> - Horizontal scrolling layout perfect for DiscoveryCard
              collections
            </li>
            <li>
              <strong>SummaryCard</strong> - General-purpose cards with flexible image layouts
            </li>
            <li>
              <strong>Chip</strong> - For displaying feature tags and badges
            </li>
            <li>
              <strong>Button</strong> - Call-to-action buttons (built-in to DiscoveryCard)
            </li>
            <li>
              <strong>Icon</strong> - Icon support in badges and throughout the card
            </li>
          </ul>
        </div>
      </section>
    </div>`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const f=["DiscoveryCards"];export{o as DiscoveryCards,f as __namedExportsOrder,y as default};
