import{c as M,j as p,B as X}from"./Accordion-3c3959d1.js";import{r as Z}from"./index-c4905b50.js";import{G as $}from"./index.esm-63fb9303.js";import"./_commonjsHelpers-042e6b4d.js";import"./iconBase-6076fe0b.js";const an={title:"DeltaUI/Toast",component:M,argTypes:{}},n=Q=>{const g=Z.useRef(null),V=()=>{var f;(f=g==null?void 0:g.current)==null||f.handleDisplayToast()};return p.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",padding:60},children:[p.jsx(M,{...Q,ref:g}),p.jsx(X,{onClick:V,children:"Trigger Toast"})]})},t=n.bind({}),e=n.bind({}),s=n.bind({}),r=n.bind({}),a=n.bind({}),o=n.bind({}),i=n.bind({}),l=n.bind({}),c=n.bind({}),d=n.bind({}),u=n.bind({});t.args={text:"Info toast message"};e.args={text:"Success toast message",variant:"success"};s.args={text:"Warning toast message",variant:"warning"};r.args={text:"Error toast message",variant:"error"};a.args={title:"Title",text:"You can display any message that you want"};o.args={text:"Im an alert with a custom icon",customIcon:p.jsx($,{size:25,color:"#4567ff"})};i.args={text:"You can display any message that you want",action:()=>alert("You can place any function that you want, this just triggers an alert. Also the content of the button could be string | ReactNode"),actionElement:"FUNC"};l.args={text:"Top left toast message",position:"topLeft"};c.args={text:"Bottom right toast message",position:"bottomRight"};d.args={text:"Bottom left toast message",position:"bottomLeft"};u.args={text:"I will close after 10 seconds, the default value is 5000(ms)",clearAfter:1e4};var h,m,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(T=(m=t.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var y,C,v;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(v=(C=e.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var D,x,B;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var R,b,k;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var I,j,w;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,P,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(E=(P=o.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var L,W,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var Y,_,G;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var N,U,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(z=(U=c.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var F,O,q;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const ref = useRef<ToastRefProps>(null);
  const handleDisplayToast = () => {
    ref?.current?.handleDisplayToast();
  };
  return <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 60
  }}>
      <Toast {...args} ref={ref} />
      <Button onClick={handleDisplayToast}>Trigger Toast</Button>
    </div>;
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const on=["Info","Success","Warning","Error","WithTitle","CustomIcon","Action","TopLeft","BottomRight","BottomLeft","CustomClearTime"];export{i as Action,d as BottomLeft,c as BottomRight,u as CustomClearTime,o as CustomIcon,r as Error,t as Info,e as Success,l as TopLeft,s as Warning,a as WithTitle,on as __namedExportsOrder,an as default};
//# sourceMappingURL=Toast.stories-efd781da.js.map
