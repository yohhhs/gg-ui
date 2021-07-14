import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Upload } from './upload'

export default {
  title: 'my/upload',
  component: Upload,
  argTypes: {
  }
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />

export const Primary = Template.bind({})
Primary.args = {
  action: 'https://jsonplaceholder.typicode.com/posts/'
}

