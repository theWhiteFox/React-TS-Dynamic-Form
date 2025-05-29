import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./FormStyles-DUPA13CZ.js";/**
 * Renders a labeled dropdown select input with options and optional error message.
 *
 * Displays a select field with a default placeholder and options provided via the {@link field} prop. When the selection changes, calls {@link onChange} with the field name and selected value. If an error message is provided, it is shown below the input.
 *
 * @template T
 * @param {Object} props
 * @param {{ label: string, name: string, required?: boolean, type: string, options?: string[] }} props.field - Field metadata and options for the dropdown.
 * @param {T} props.value - The currently selected value.
 * @param {(name: string, value: T) => void} props.onChange - Callback invoked when the selected value changes.
 * @param {string} [props.error] - Optional error message to display.
 */
function u({field:e,value:s,onChange:l,error:t}){var i;return n.jsxs("div",{children:[n.jsx(a.Label,{htmlFor:e.name,children:e.label}),n.jsxs(a.Select,{id:e.name,name:e.name,value:s,onChange:r=>l(e.name,r.target.value),title:`Input for ${e.name}`,children:[n.jsx(a.Option,{value:"",children:"-- Select --"}),(i=e.options)==null?void 0:i.map(r=>n.jsx(a.Option,{value:r,children:r},r))]}),t&&n.jsx(a.ErrorText,{children:t})]})}u.__docgenInfo={description:"",methods:[],displayName:"DropdownInputField",props:{field:{required:!0,tsType:{name:"intersection",raw:"BaseField & { type: FieldType; options?: string[] }",elements:[{name:"signature",type:"object",raw:`{
    label: string
    name: string
    required?: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"required",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ type: FieldType; options?: string[] }",signature:{properties:[{key:"type",value:{name:"union",raw:"'text' | 'number' | 'checkbox' | 'select' | 'date' | 'textarea'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'select'"},{name:"literal",value:"'date'"},{name:"literal",value:"'textarea'"}],required:!0}},{key:"options",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:""},value:{required:!0,tsType:{name:"T"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string, value: T) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};export{u as D};
