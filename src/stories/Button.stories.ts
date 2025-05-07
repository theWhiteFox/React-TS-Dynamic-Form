import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['submit', 'reset'],
      description: 'Visual style variant of the button',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Submit: Story = {
  args: {
    label: 'Submit',
    variant: 'submit',
  },
}

export const Reset: Story = {
  args: {
    label: 'Reset',
    variant: 'reset',
  },
}
