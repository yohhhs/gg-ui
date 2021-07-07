import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    /**
     * 样式
     */
    className?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 大小
     */
    size?: ButtonSize;
    /**
     * 类型
     */
    btnType?: ButtonType;
    /**
     * 按钮文字
     */
    children: React.ReactNode,
    /**
     * 当btnType为link时生效
     */
    href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 组件引入
 *
 * ~~~ js
 * import { Button } from 'gg-ui'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        size,
        className,
        disabled,
        children,
        href,
        ...restProps
    } = props

    const classes = classNames(
        'btn',
        {
            [`btn-${btnType}`]: btnType,
            [`btn-${size}`]: size,
            'disabled': (btnType === 'link') && disabled
        },
        className
    )

    if (btnType === 'link' && href) {
        return (
          <a {...restProps} className={classes} href={href}>
              {children}
          </a>
        )
    } else {
        return (
          <button {...restProps} className={classes} disabled={disabled}>
              {
                  children
              }
          </button>
        )
    }
}

Button.defaultProps = {
    btnType: 'default',
    disabled: false
}

export default Button