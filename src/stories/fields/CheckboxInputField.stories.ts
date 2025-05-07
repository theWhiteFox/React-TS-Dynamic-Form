import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CheckboxInputField from '../../components/fields/CheckboxInputField'
import type { Field } from '../../lib/definitions'

const meta: Meta<typeof CheckboxInputField> = {
    title: 'Form/Fields/CheckboxInputField',
    component: CheckboxInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        field: {
            control: 'object',
            description: 'Field config',
        },
        value: {
            control: 'boolean',
            description: 'Current checked state',
        },
        onChange: {
            action: 'onChange',
            description: 'Handler for toggle',
        },
        error: {
            control: 'text',
            description: 'Error message (if any)',
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        field: {
            name: 'agreeTerms',
            label: 'Subscribe',
            type: 'checkbox',
        } as Field,
        value: false,
        onChange: action('onChange'),
        error: '',
    },
}

export const Checked: Story = {
    args: {
        ...Default.args,
        value: true,
    },
}

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'You must agree to continue',
    },
}
