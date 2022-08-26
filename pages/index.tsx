import React from "react";
import type {NextPage} from 'next'
import Layout from "~/component/common/Layout/Layout";
import Wrapper from "~/component/common/Wrapper/Wrapper";
import styles from "./index.module.scss"
import Card from "~/component/Card/Card";
import RatioBox from "~/component/common/RatioBox/RatioBox";
import Texts from "~/component/common/Texts/Texts";

const Home: NextPage = () => {


  return (
    <Layout>
      <Wrapper width={80} height={90} style={styles.index}>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Texts style={styles.text} size={100}>Canvas</Texts>
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Texts style={styles.text} size={100}>Youtube</Texts>
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Texts style={styles.text} size={100}>Log</Texts>
          </div>
        </Card>
      </Wrapper>
    </Layout>
  )
}

export default Home
