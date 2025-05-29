import{a as u}from"./index-B-lxVbXh.js";import{D as m}from"./DropdownInputField-DOXLFhVI.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-D_zvdyIk.js";import"./FormStyles-DUPA13CZ.js";import"./index-D4lIrffr.js";const F={title:"Form/Fields/DropdownInputField",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{field:{control:"object",description:"Configuration for the text input field"},value:{control:"text",description:"Current value of the input"},onChange:{action:"onChange",description:"Callback when the input value changes"}}},e={args:{field:{name:"gender",label:"Gender",type:"select",options:["Male","Female","Other"]},value:"",onChange:u("onChange")}},r={args:{...e.args,value:"Male"}},a={args:{...e.args,error:"Please select a gender"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    field: {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: ["Male", "Female", "Other"]
    } as Field,
    value: '',
    onChange: action('onChange')
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Male'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Please select a gender'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const b=["Default","WithValue","WithError"];export{e as Default,a as WithError,r as WithValue,b as __namedExportsOrder,F as default};
