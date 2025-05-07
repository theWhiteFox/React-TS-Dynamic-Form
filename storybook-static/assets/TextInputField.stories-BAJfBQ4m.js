import{a as m}from"./index-B-lxVbXh.js";import{T as g}from"./TextInputField-BjC4smUZ.js";import"./v4-CtRu48qb.js";import"./jsx-runtime-D_zvdyIk.js";import"./FormStyles-DUPA13CZ.js";import"./index-D4lIrffr.js";const F={title:"Form/Fields/TextInputField",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{field:{control:"object",description:"Configuration for the text input field"},value:{control:"text",description:"Current value of the input"},onChange:{action:"onChange",description:"Callback when the input value changes"}}},e={args:{field:{name:"name",label:"Name",type:"text",required:!0},value:"",onChange:m("onChange"),error:void 0}},r={args:{...e.args,value:"Stephen"}};var t;const a={args:{...e.args,field:{...(t=e.args)==null?void 0:t.field,required:!0},error:"Required"}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    field: {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    } as Field,
    value: '',
    onChange: action('onChange'),
    error: undefined
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Stephen'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    field: {
      ...Default.args?.field,
      required: true
    } as Field,
    error: 'Required'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Default","WithValue","RequiredField"];export{e as Default,a as RequiredField,r as WithValue,D as __namedExportsOrder,F as default};
