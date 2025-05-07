// stories/FormRenderer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import FormRenderer from '../components/FormRenderer'
import { FormProvider } from '../providers/useFormProvider'
import { uiSchema, validationZodSchema } from '../lib/schema' // or wherever your schema lives

const meta: Meta<typeof FormRenderer> = {
    title: 'Form/FormRenderer',
    component: FormRenderer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    render: () => (
        <FormProvider schema={uiSchema} zodSchema={validationZodSchema}>
            <FormRenderer />
        </FormProvider>
    )
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
