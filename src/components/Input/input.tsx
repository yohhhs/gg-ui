import React, {FC, InputHTMLAttributes, ReactElement} from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";

type InputSize = 'lg' | 'small' | 'middle'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  size?: InputSize;
  icon?: IconProp;
  disabled?: boolean;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
  const { size, icon, disabled, prepand, append, className } = props
  const classes = classNames('gg-input', className, {
    'is-disabled': disabled,
    [`input-${size}`]: size
  })
  return (
    <div></div>
  )
}

export default Input