import React from "react";
import type {NextPage} from 'next'
import Layout from "~/component/common/Layout/Layout";
import Wrapper from "~/component/common/Wrapper/Wrapper";
import styles from "./index.module.scss"
import Card from "~/component/Card/Card";
import RatioBox from "~/component/common/RatioBox/RatioBox";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_TEST)

  return (
    <Layout>
      <Wrapper width={80} height={90} style={styles.index}>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
        </Card>
        <Card>
          <RatioBox>

          </RatioBox>
        </Card>
        <Card>
          <RatioBox>

          </RatioBox>
        </Card>
      </Wrapper>
    </Layout>
  )
}

export default Home
