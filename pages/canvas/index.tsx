import React, {memo, FC} from 'react'
import styles from "./canvas.module.scss"
import Layout from "~/component/common/Layout/Layout";

interface Props {
}

const index: FC<Props> = memo(() => {
  return (
    <Layout>
      <div className={styles.canvas}>

      </div>
    </Layout>
  )
});

export default index
