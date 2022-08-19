import React, {memo, FC, ReactNode} from 'react'
import styles from "./Wrapper.module.scss"
import classNames from "classnames";

interface Props {
  width: number
  height?: number
  children: ReactNode
  style?: string
}

const Wrapper: FC<Props> = memo(({width, height = 100, children, style}) => {
  return (
    <div className={classNames(styles.Wrapper, style)} style={{width: `${width}%`, height: `${height}%`, maxWidth: '1300px'}}>
      {children}
    </div>
  )
});

export default Wrapper
