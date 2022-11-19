import React, {useEffect, useState} from "react";
import type {NextPage} from 'next'
import Layout from "~/component/common/Layout/Layout";
import Wrapper from "~/component/common/Wrapper/Wrapper";
import styles from "./index.module.scss"
import Card from "~/component/Card/Card";
import RatioBox from "~/component/common/RatioBox/RatioBox";
import Canvas from "~/component/svg/canvas";
import Youtube from "~/component/svg/youtube";
import Log from "~/component/svg/log";
import classNames from "classnames";
import Count from "~/component/Count/Count";

const Home: NextPage = () => {
  const [isClickCanvas, setIsClickCanvas] = useState<boolean>(false)
  const [isClickYoutube, setIsClickYoutube] = useState<boolean>(false)
  const [isClickLog, setIsClickLog] = useState<boolean>(false)

  return (
    <Layout>
      <Wrapper width={80} height={90} style={styles.index}>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
            </div>
          </RatioBox>
          <div className={styles.information} onClick={() => {
            setIsClickCanvas(true)
          }}>
            {isClickCanvas && <Canvas styles={classNames(styles.svg, styles.canvas)} className={"canvas"}/>}
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <Count/>
          </RatioBox>
          <div className={styles.information} onClick={() => {
            setIsClickYoutube(true)
          }}>
            {isClickYoutube && <Youtube styles={classNames(styles.svg, styles.youtube)} className={"youtube"}/>}
          </div>
        </Card>
        <Card style={styles.today}>
          <RatioBox>
            <div className={styles.imgBox}>
              <img src="" alt=""/>
            </div>
          </RatioBox>
          <div className={styles.information} onClick={() => {
            setIsClickLog(true)
          }}>
            {isClickLog && <Log styles={classNames(styles.svg, styles.log)} className={"log"}/>}
          </div>
        </Card>
      </Wrapper>
    </Layout>
  )
}

export default Home
