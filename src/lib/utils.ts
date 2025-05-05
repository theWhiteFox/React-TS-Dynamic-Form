import { Field } from "./definitions"

export type FieldValue = string | number | boolean | null

export type FormDataFromSchema<T extends Field[]> = {
    [K in T[number]as K['name']]: K['type'] extends 'number'
    ? number
    : K['type'] extends 'checkbox'
    ? boolean
    : string
}