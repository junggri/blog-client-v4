import React, {memo, FC} from 'react'
import styles from "./Texts.module.scss"

interface Props {
}

const Texts: FC<Props> = memo(() => {
  return (
    <div className={styles.Texts}>123</div>
  )
});

export default Texts
