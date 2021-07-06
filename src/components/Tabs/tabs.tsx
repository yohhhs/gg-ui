import React, { createContext, useState } from "react";
import classNames from "classnames";

import { TabItemProps } from "./tabItem";

type SelectCallback = (selectIndex: string) => void

export interface TabsProps {
  defaultIndex?: string;
  className?: string;
  onSelect?: SelectCallback;
}
interface ITabItem {
  index: string,
  onSelect?: SelectCallback;
}

export const TabsContext = createContext<ITabItem>({
  index: '0'
})

const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultIndex, onSelect, className, children } = props
  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('gg-tabs', className)
  const handleSelect = (selectIndex: string) => {
    setActive(selectIndex)
    if (onSelect) {
      onSelect(selectIndex)
    }
  }
  const passedContext: ITabItem = {
    index: currentActive ?? '0',
    onSelect: handleSelect
  }

  const renderChildren = () => {
    let panel: React.ReactNode
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      if (childElement.type.displayName === 'tabItem') {
        if (index.toString() === currentActive) {
          panel = childElement.props.children
        }
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('waring !!!')
      }
    })
    return (
      <>
        <div className="tabs-bar">
          {childrenComponent}
        </div>
        <div className="tabs-content">
          {panel}
        </div>
      </>

    )
  }

  return (
    <div className={classes} data-testid='test-tabs'>
      <TabsContext.Provider value={passedContext}>
        {renderChildren()}
      </TabsContext.Provider>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: '0'
}


export default Tabs