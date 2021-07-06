import React, { useState } from "react";
import classNames from "classnames";

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  type?: AlertType;
  title: string;
  content?: string;
  closed?: boolean;
  className?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { type, title, content, closed, className } = props
  const [isClose, setClose] = useState(false)
  const classes = classNames('gg-alert', className, {
    [`alert-${type}`]: type,
    'has-content': content
  })
  const closeAlert = () => {
    setClose(true)
  }
  if (isClose) {
    return null
  } else {
    return (
      <div className={classes} data-testid='test-alert'>
        <div className="alert-title">
          {
            title
          }
        </div>
        <div className="alert-content">
          {
            content
          }
        </div>
        {
          closed && <div className="alert-close" onClick={closeAlert}>关闭</div>
        }
      </div>
    )
  }
}

Alert.defaultProps = {
  closed: false,
  type: 'default'
}

export default Alert