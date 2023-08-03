import{e as C,j as l}from"./SideNavBar-ab45619e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"DeltaUI/Table",component:C,argTypes:{}},a=r=>l.jsx("div",{style:{width:"100%",height:"100vh",overflowY:"auto",backgroundColor:"#000000",padding:60},children:l.jsx(C,{...r})}),e=a.bind({}),t=a.bind({}),n=a.bind({}),o=a.bind({}),s=[{content:"First Name",numberOfColumns:3},{content:"Last Name",numberOfColumns:3},{content:"Email",numberOfColumns:3},{content:"Status"}],w=[{content:"First Name",numberOfColumns:3,options:[{item:"Option1",action:()=>console.log("Option 1 triggered")},{item:"Option2",action:()=>console.log("Option 2 triggered")}]},{content:"Last Name",numberOfColumns:3,options:[{item:"Option1",action:()=>console.log("Option 1 triggered")},{item:"Option2",action:()=>console.log("Option 2 triggered")}]},{content:"Email",numberOfColumns:3,options:[{item:"Option1",action:()=>console.log("Option 1 triggered")},{item:"Option2",action:()=>console.log("Option 2 triggered")}]},{content:"Status",options:[{item:"Option1",action:()=>console.log("Option 1 triggered")},{item:"Option2",action:()=>console.log("Option 2 triggered")}]}],i=[{firstName:"Eren",lastName:"Jaeger",email:"eren@mail.com",status:"Active",id:"@eren"},{firstName:"Levi",lastName:"Ackerman",email:"levi@mail.com",status:"Active",id:"@levi"},{firstName:"Erwin",lastName:"Smith",email:"erwin@mail.com",status:"Inactive",id:"@erwin"},{firstName:"Mikasa",lastName:"Ackerman",email:"mikasa@mail.com",status:"Active",id:"@mikasa"},{firstName:"Annie",lastName:"Leonhart",email:"annie@mail.com",status:"Active",id:"@annie"},{firstName:"Hange",lastName:"Zoe",email:"hange@mail.com",status:"Inactive",id:"@hange"},{firstName:"Reiner",lastName:"Braun",email:"reiner@mail.com",status:"Active",id:"@reiner"}];e.args={labels:s,items:i,justifyContent:"flex-start"};t.args={labels:s,items:i,justifyContent:"flex-start",underline:!0};n.args={labels:w,items:i,justifyContent:"flex-start",underline:!0};o.args={labels:s,items:i,justifyContent:"flex-start",underline:!0,checkboxSelection:!0,onRowsSelection:r=>console.log(r)};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: '#000000',
  padding: 60
}}>
    <Table {...args} />
  </div>`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: '#000000',
  padding: 60
}}>
    <Table {...args} />
  </div>`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: '#000000',
  padding: 60
}}>
    <Table {...args} />
  </div>`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,O,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: '#000000',
  padding: 60
}}>
    <Table {...args} />
  </div>`,...(N=(O=o.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const T=["Default","Underline","LabelOptions","CheckboxSelection"];export{o as CheckboxSelection,e as Default,n as LabelOptions,t as Underline,T as __namedExportsOrder,y as default};
//# sourceMappingURL=Table.stories-c9cc2ee8.js.map
