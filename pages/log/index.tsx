import React, {memo, FC} from 'react'
import styles from "./log.module.scss"

interface Props {
}

const index: FC<Props> = memo(() => {
  return (
    <div className={styles.log}>123</div>
  )
});

export default index
