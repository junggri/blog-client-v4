import React, {memo, FC} from 'react'
import styles from "./canvas.module.scss"

interface Props {
}

const index: FC<Props> = memo(() => {
  return (
    <div className={styles.canvas}>

    </div>
  )
});

export default index
