import React, {memo, FC, ReactNode} from 'react'
import styles from "./Layout.module.scss"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = memo(({children}) => {
  return (
    <div className={styles.Layout}>
      {children}
    </div>
  )
});

export default Layout
