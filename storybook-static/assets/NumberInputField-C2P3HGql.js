import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./FormStyles-DUPA13CZ.js";/**
 * Renders a labeled numeric input field with optional error display.
 *
 * Displays a label, a number input, and, if provided, an error message. Invokes the supplied callback with the field name and new numeric value when the input changes.
 *
 * @param {object} props - Component props.
 * @param {object} props.field - Field metadata including name, label, type, and optional options.
 * @param {number} props.value - Current numeric value of the input.
 * @param {function} props.onChange - Callback invoked with the field name and new numeric value on change.
 * @param {string} [props.error] - Optional error message to display.
 * @returns {JSX.Element} The rendered number input field component.
 */
function u({field:e,value:t,onChange:i,error:n}){return r.jsxs("div",{children:[r.jsx(a.Label,{htmlFor:e.name,children:e.label}),r.jsx(a.SmallInput,{id:e.name,type:"number",name:e.name,value:t,onChange:l=>i(e.name,Number(l.target.value)),"aria-label":e.label,placeholder:`Enter ${e.name}`,title:`Input for ${e.name}`}),n&&r.jsx(a.ErrorText,{children:n})]})}u.__docgenInfo={description:"",methods:[],displayName:"NumberInputField",props:{field:{required:!0,tsType:{name:"intersection",raw:"BaseField & { type: FieldType; options?: string[] }",elements:[{name:"signature",type:"object",raw:`{
    label: string
    name: string
    required?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"required",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ type: FieldType; options?: string[] }",signature:{properties:[{key:"type",value:{name:"union",raw:"'text' | 'number' | 'checkbox' | 'select' | 'date' | 'textarea'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'select'"},{name:"literal",value:"'date'"},{name:"literal",value:"'textarea'"}],required:!0}},{key:"options",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:""},value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string, value: T) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};export{u as N};
