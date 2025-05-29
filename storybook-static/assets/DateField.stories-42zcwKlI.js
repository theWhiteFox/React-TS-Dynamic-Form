import{a as p}from"./index-B-lxVbXh.js";import{D as u}from"./DateField-CT_waCdu.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./index-CuAL4s_r.js";import"./index-DsJinFGm.js";import"./FormStyles-DUPA13CZ.js";const F={title:"Form/Fields/DateField",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{field:{control:"object",description:"Configuration for the number input field"},value:{control:"date",description:"Current value of the input"},onChange:{action:"onChange",description:"Callback when the input value changes"},error:{control:"text",description:"Optional error message"}}},e={args:{field:{name:"date",label:"D.O.B",type:"date"},value:"",onChange:p("onChange"),error:"",dateFormat:"dd-MM-yyyy"}},r={args:{...e.args,value:"2025-05-13"}},a={args:{...e.args,error:"Age must be 120 or less"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    field: {
      name: 'date',
      label: 'D.O.B',
      type: 'date'
    } as Field,
    value: '',
    onChange: action('onChange'),
    error: '',
    dateFormat: 'dd-MM-yyyy'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: '2025-05-13'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Age must be 120 or less'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["Default","WithValue","WithError"];export{e as Default,a as WithError,r as WithValue,M as __namedExportsOrder,F as default};
