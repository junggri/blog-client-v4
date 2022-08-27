import React from "react";
import type {NextPage} from 'next'
import Layout from "~/component/common/Layout/Layout";
import Wrapper from "~/component/common/Wrapper/Wrapper";
import styles from "./index.module.scss"
import Card from "~/component/Card/Card";
import RatioBox from "~/component/common/RatioBox/RatioBox";
import Texts from "~/component/common/Texts/Texts";
import Canvas from "~/component/svg/canvas";
import Youtube from "~/component/svg/youtube";
import Log from "~/component/svg/log";
import classNames from "classnames";

const Home: NextPage = () => {


  return (
    <Layout>
      <Wrapper width={80} height={90} style={styles.index}>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Canvas styles={classNames(styles.svg, styles.canvas)}/>
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Youtube styles={classNames(styles.svg, styles.youtube)}/>
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information}>
            <Log styles={classNames(styles.svg, styles.log)}/>
          </div>
        </Card>
      </Wrapper>
    </Layout>
  )
}

export default Home
