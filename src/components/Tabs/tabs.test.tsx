import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Tabs, { TabsProps } from './tabs'
import TabItem from "./tabItem";

const testProps: TabsProps = {
  defaultIndex: '0',
  onSelect: jest.fn()
}

const testComponent = (
  <Tabs {...testProps}>
    <TabItem label='1'>
      content1
    </TabItem>
    <TabItem label='2' disabled>
      content2
    </TabItem>
    <TabItem label='3'>
      content3
    </TabItem>
  </Tabs>
)


describe('tabs组件测试用例', () => {
  it('should render then correct tabs', () => {
    const wrapper = render(testComponent)
    const element = wrapper.getByTestId('test-tabs')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('gg-tabs')
  })
  it('should render disabled tabItem', () => {
    const wrapper = render(testComponent)
    const ele = wrapper.getByText('2')
    expect(ele).toBeInTheDocument()
    expect(ele).toHaveClass('is-disabled')
    fireEvent.click(ele)
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('onselect', () => {
    const wrapper = render(testComponent)
    const ele = wrapper.getByText('3')
    expect(ele).toBeInTheDocument()
    expect(ele).not.toHaveClass('is-active')
    fireEvent.click(ele)
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    expect(ele).toHaveClass('is-active')
  })
})