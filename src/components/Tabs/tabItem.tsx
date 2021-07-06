import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from './tabs'

export interface TabItemProps {
  label: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  index?: string;
  children?: React.ReactNode;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const context = useContext(TabsContext)
  const { label, className, disabled, index } = props
  const classes = classNames('gg-tab-item', className, {
    'is-active': context.index === index,
    'is-disabled': disabled
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && index) {
      context.onSelect(index)
    }
  }
  return (
    <div className={classes} onClick={handleClick}>
      {label}
    </div>
  )
}
TabItem.displayName = 'tabItem'
TabItem.defaultProps = {
  disabled: false
}

export default TabItem