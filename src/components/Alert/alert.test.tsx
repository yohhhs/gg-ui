import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Alert, { AlertProps } from "./alert";

const testContentProps: AlertProps = {
  title: 'hasContent',
  content: 'content'
}
const testTypeProps: AlertProps = {
  title: 'type',
  type: 'success'
}
const testCloseProps: AlertProps = {
  title: 'close',
  closed: true
}

describe('alert组件测试', () => {
  it('测试组件是否显示', () => {
    const wrapper = render(<Alert title='show' />)
    const element = wrapper.getByTestId('test-alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('gg-alert')
    expect(wrapper.getByText('show')).toHaveClass('alert-title')
  })
  it('测试content', () => {
    const wrapper = render(<Alert {...testContentProps} />)
    const element = wrapper.getByText('content')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert-content')
  })
  it('测试type', () => {
    const wrapper = render(<Alert {...testTypeProps} />)
    const element = wrapper.getByTestId('test-alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert-success')
  })
  it('测试关闭', () => {
    const wrapper = render(<Alert {...testCloseProps} />)
    const element = wrapper.getByTestId('test-alert')
    expect(element).toBeInTheDocument()
    const closeElement = wrapper.getByText('关闭')
    expect(closeElement).toBeInTheDocument()
    fireEvent.click(closeElement)
    expect(element).not.toBeInTheDocument()
  })
})