import React, {memo, FC} from 'react'
import styles from "./youtube.module.scss"

interface Props {
}

const index: FC<Props> = memo(() => {
  return (
    <div className={styles.youtube}>123</div>
  )
});

export default index
