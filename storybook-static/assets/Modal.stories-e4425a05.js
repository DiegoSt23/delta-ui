import{M as _,j as e,f as F,B as c,T as U}from"./Accordion-19862036.js";import{r as G}from"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";const P={title:"DeltaUI/Modal",component:_,argTypes:{}},n=D=>{const[u,R]=G.useState(!1),m=()=>R(!u);return e.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",padding:60},children:[e.jsx(c,{onClick:m,children:"Open"}),e.jsx(_,{...D,isOpen:u,onClose:m})]})},t=n.bind({}),o=n.bind({}),a=n.bind({}),i=n.bind({}),r=n.bind({}),l=n.bind({}),d=n.bind({}),p=n.bind({}),s=e.jsx(U,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore possimus labore quis nam praesentium, cumque quae corporis, vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias minus quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore possimus labore quis nam praesentium, cumque quae corporis, vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias minus quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore possimus labore quis nam praesentium, cumque quae corporis, vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias minus quos."});t.args={children:s,size:"sm"};o.args={children:s,size:"md"};a.args={children:s,size:"lg"};i.args={children:s,size:"xl"};r.args={children:s,headerTitle:"Modal Title"};l.args={children:s,headerTitle:"Modal Title",headerElement:e.jsx(F,{position:"left",width:90,items:[{title:"Option 1",onClick:()=>console.log("Option 1 triggered")},{title:"Option 2",onClick:()=>console.log("Option 1 triggered")},{title:"Option 3",onClick:()=>console.log("Option 1 triggered")}]})};d.args={children:s,footer:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx(c,{small:!0,children:"Cancel"}),e.jsx(c,{variant:"filled",small:!0,children:"Accept"})]})};p.args={children:s,headerTitle:"Card Title",headerElement:e.jsx(F,{position:"left",width:90,items:[{title:"Option 1",onClick:()=>console.log("Option 1 triggered")},{title:"Option 2",onClick:()=>console.log("Option 1 triggered")},{title:"Option 3",onClick:()=>console.log("Option 1 triggered")}]}),footer:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx(c,{small:!0,children:"Cancel"}),e.jsx(c,{variant:"filled",small:!0,children:"Accept"})]})};var g,O,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(h=(O=t.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var C,M,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(f=(M=o.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var y,v,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,b,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var j,S,B;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var q,w,T;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var E,L,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var A,z,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Button onClick={handleOpenModal}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal} />
    </div>;
}`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const Q=["Small","Mid","Large","ExtraLarge","WithHeader","WithHeaderElement","WithFooter","Complete"];export{p as Complete,i as ExtraLarge,a as Large,o as Mid,t as Small,d as WithFooter,r as WithHeader,l as WithHeaderElement,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=Modal.stories-e4425a05.js.map
