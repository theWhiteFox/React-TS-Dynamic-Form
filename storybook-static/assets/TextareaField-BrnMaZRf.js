import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./FormStyles-DUPA13CZ.js";/**
 * Renders a labeled textarea input field with optional error display for use in forms.
 *
 * @template T
 * @param {Object} props
 * @param {{ label: string, name: string, required?: boolean, type: string, options?: string[] }} props.field - Field metadata including label, name, and type.
 * @param {T} props.value - The current value of the textarea.
 * @param {(name: string, value: T) => void} props.onChange - Callback invoked when the textarea value changes.
 * @param {string} [props.error] - Optional error message to display below the textarea.
 *
 * @returns {JSX.Element} A form row containing a label, textarea, and optional error message.
 */
function l({field:e,value:t,onChange:i,error:n}){return r.jsxs(a.FormRow,{children:[r.jsx(a.Label,{htmlFor:e.name,children:e.label}),r.jsx(a.Textarea,{id:e.name,name:e.name,value:t,onChange:s=>i(e.name,s.target.value),rows:4,placeholder:`Enter ${e.label}`}),n&&r.jsx(a.ErrorText,{children:n})]})}l.__docgenInfo={description:"",methods:[],displayName:"TextareaField",props:{field:{required:!0,tsType:{name:"intersection",raw:"BaseField & { type: FieldType; options?: string[] }",elements:[{name:"signature",type:"object",raw:`{
    label: string
    name: string
    required?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"required",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ type: FieldType; options?: string[] }",signature:{properties:[{key:"type",value:{name:"union",raw:"'text' | 'number' | 'checkbox' | 'select' | 'date' | 'textarea'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'select'"},{name:"literal",value:"'date'"},{name:"literal",value:"'textarea'"}],required:!0}},{key:"options",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:""},value:{required:!0,tsType:{name:"T"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string, value: T) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};export{l as T};
