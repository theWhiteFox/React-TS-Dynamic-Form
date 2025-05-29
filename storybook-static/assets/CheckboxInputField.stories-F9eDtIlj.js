import{a as p}from"./index-B-lxVbXh.js";import{C as d}from"./CheckboxInputField-CTqYtQEx.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-D_zvdyIk.js";import"./FormStyles-DUPA13CZ.js";import"./index-D4lIrffr.js";const x={title:"Form/Fields/CheckboxInputField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{field:{control:"object",description:"Field config"},value:{control:"boolean",description:"Current checked state"},onChange:{action:"onChange",description:"Handler for toggle"},error:{control:"text",description:"Error message (if any)"}}},e={args:{field:{name:"agreeTerms",label:"Subscribe",type:"checkbox"},value:!1,onChange:p("onChange"),error:""}},r={args:{...e.args,value:!0}},o={args:{...e.args,error:"You must agree to continue"}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    field: {
      name: 'agreeTerms',
      label: 'Subscribe',
      type: 'checkbox'
    } as Field,
    value: false,
    onChange: action('onChange'),
    error: ''
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: true
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,u,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'You must agree to continue'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const F=["Default","Checked","WithError"];export{r as Checked,e as Default,o as WithError,F as __namedExportsOrder,x as default};
