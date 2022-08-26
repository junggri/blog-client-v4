import React, {memo, FC, ReactNode} from 'react'
import styles from "./Texts.module.scss"
import classNames from "classnames";
import {store} from "next/dist/build/output/store";

interface Props {
  children: ReactNode
  style?: string
  stroke?: 'light' | 'normal' | 'bold'
  language?: 'ko' | 'en'
  size?: number
}

const Texts: FC<Props> = memo(({children, style, stroke = "bold", language = 'ko', size = 16}) => {

  return (
    <div className={
      classNames(
        styles.Texts,
        style,
        {[styles.light]: stroke === "light"},
        {[styles.normal]: stroke === "normal"},
        {[styles.bold]: stroke === "bold"},
      )} style={{fontSize: size}}>
      {children}
    </div>
  )
});

export default Texts
