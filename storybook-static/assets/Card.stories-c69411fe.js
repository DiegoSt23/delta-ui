import{m as D,j as e,f as E,B as u,T as m}from"./Accordion-19862036.js";import{r as g}from"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";const h=()=>{const{innerWidth:n,innerHeight:i}=window;return{width:n,height:i}},T=()=>{const[n,i]=g.useState(h());return g.useEffect(()=>{const c=()=>{i(h())};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),n},z={title:"DeltaUI/Card",component:D,argTypes:{}},a=n=>{const{width:i}=T(),c=i<900;return e.jsx("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",padding:60},children:e.jsx("div",{style:{width:c?"100%":"50%"},children:e.jsx(D,{...n})})})},t=a.bind({}),s=a.bind({}),r=a.bind({}),o=a.bind({}),d=a.bind({}),l=e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:10},children:e.jsx(m,{type:"subtitle",children:"Generic content, you can place anything you want as children, could be buttons, text, inputs, images, tables, forms, etc."})}),e.jsx("br",{}),e.jsx(m,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis earum recusandae eligendi assumenda vel eius dignissimos harum eum consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis earum recusandae eligendi assumenda vel eius dignissimos harum eum consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis earum recusandae eligendi assumenda vel eius dignissimos harum eum consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis earum recusandae eligendi assumenda vel eius dignissimos harum eum consequatur sed velit, iure repellat quos doloribus quod unde? Magnam, in."})]});t.args={children:l};s.args={children:l,headerTitle:"Card Title"};r.args={children:l,headerTitle:"Card Title",headerElement:e.jsx(E,{position:"left",width:90,items:[{title:"Option 1",onClick:()=>console.log("Option 1 triggered")},{title:"Option 2",onClick:()=>console.log("Option 1 triggered")},{title:"Option 3",onClick:()=>console.log("Option 1 triggered")}]})};o.args={children:l,footer:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx(u,{small:!0,children:"Cancel"}),e.jsx(u,{variant:"filled",small:!0,children:"Accept"})]})};d.args={children:l,headerTitle:"Card Title",headerElement:e.jsx(E,{position:"left",width:90,items:[{title:"Option 1",onClick:()=>console.log("Option 1 triggered")},{title:"Option 2",onClick:()=>console.log("Option 1 triggered")},{title:"Option 3",onClick:()=>console.log("Option 1 triggered")}]}),footer:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx(u,{small:!0,children:"Cancel"}),e.jsx(u,{variant:"filled",small:!0,children:"Accept"})]})};var p,v,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    width
  } = useWindowDimensions();
  const isMobile = width < 900;
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <div style={{
      width: isMobile ? '100%' : '50%'
    }}>
        <Card {...args} />
      </div>
    </div>;
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,f,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const {
    width
  } = useWindowDimensions();
  const isMobile = width < 900;
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <div style={{
      width: isMobile ? '100%' : '50%'
    }}>
        <Card {...args} />
      </div>
    </div>;
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,x,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    width
  } = useWindowDimensions();
  const isMobile = width < 900;
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <div style={{
      width: isMobile ? '100%' : '50%'
    }}>
        <Card {...args} />
      </div>
    </div>;
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var M,W,I;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const {
    width
  } = useWindowDimensions();
  const isMobile = width < 900;
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <div style={{
      width: isMobile ? '100%' : '50%'
    }}>
        <Card {...args} />
      </div>
    </div>;
}`,...(I=(W=o.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var O,k,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const {
    width
  } = useWindowDimensions();
  const isMobile = width < 900;
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <div style={{
      width: isMobile ? '100%' : '50%'
    }}>
        <Card {...args} />
      </div>
    </div>;
}`,...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const B=["Default","WithHeader","WithHeaderElement","WithFooter","Complete"];export{d as Complete,t as Default,o as WithFooter,s as WithHeader,r as WithHeaderElement,B as __namedExportsOrder,z as default};
//# sourceMappingURL=Card.stories-c69411fe.js.map
