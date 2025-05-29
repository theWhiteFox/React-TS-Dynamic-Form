import{a as p}from"./index-B-lxVbXh.js";import{N as g}from"./NumberInputField-C2P3HGql.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-D_zvdyIk.js";import"./FormStyles-DUPA13CZ.js";import"./index-D4lIrffr.js";const F={title:"Form/Fields/NumberInputField",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{field:{control:"object",description:"Configuration for the number input field"},value:{control:"number",description:"Current value of the input"},onChange:{action:"onChange",description:"Callback when the input value changes"}}},e={args:{field:{name:"age",label:"Age",type:"number"},value:"",onChange:p("onChange")}},r={args:{...e.args,value:"18"}},a={args:{...e.args,error:"Age must be 0 or more"}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    field: {
      name: 'age',
      label: 'Age',
      type: 'number'
    } as Field,
    value: '',
    onChange: action('onChange')
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var s,u,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '18'
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Age must be 0 or more'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["Default","WithValue","WithError"];export{e as Default,a as WithError,r as WithValue,y as __namedExportsOrder,F as default};
