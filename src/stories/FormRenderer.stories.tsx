// stories/FormRenderer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import FormRenderer from '../components/FormRenderer'
import { schema, myFormSchema } from '../lib/schema' // or wherever your schema lives

const meta: Meta<typeof FormRenderer> = {
    title: 'Form/FormRenderer',
    component: FormRenderer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        schema,
        zodSchema: myFormSchema,
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
