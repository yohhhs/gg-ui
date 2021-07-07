import React from "react";
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps, CSSTransitionClassNames } from "react-transition-group/CSSTransition";

export type AnimationName = 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right'

type TransitionProps = {
  animation?: AnimationName;
  wrapper?: boolean;
}

const Transition: React.FC<TransitionProps & CSSTransitionProps> = (props) => {
  const { animation, classNames, children, wrapper, ...restProps } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>children</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  wrapper: false
}
export default Transition
