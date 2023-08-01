import{M as r,j as s,B as p,T as u}from"./SideNavBar-6a0a2c9d.js";import{r as c}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"DeltaUI/Modal",component:r,argTypes:{}},m=l=>{const[n,d]=c.useState(!1),o=()=>d(!n);return s.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",padding:60},children:[s.jsx(p,{onClick:o,children:"Open"}),s.jsx(r,{...l,isOpen:n,onClose:o,children:s.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore possimus labore quis nam praesentium, cumque quae corporis, vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias minus quos. Soluta?"})})]})},e=m.bind({});e.args={headerTitle:"Modal Title",size:"md"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
      <Modal {...args} isOpen={isOpen} onClose={handleOpenModal}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dolore possimus labore quis nam praesentium, cumque quae corporis,
          vitae ducimus delectus ipsam maiores modi saepe tenetur, molestias
          minus quos. Soluta?
        </Typography>
      </Modal>
    </div>;
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,y as default};
//# sourceMappingURL=Modal.stories-95f01bdf.js.map
