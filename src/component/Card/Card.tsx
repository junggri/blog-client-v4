import React, {memo, FC, useState, useEffect, useRef, useCallback, ReactNode} from 'react'
import styles from "./Card.module.scss"
import config from "~/core/constant";
import useResizeWindow from "~/component/hooks/useResizeWindow";
import classNames from "classnames";

interface Props {
  width?: number
  height?: number
  isGoldenRatio?: boolean
  children: ReactNode
  style?: string
}

const Card: FC<Props> = memo(({width = 30, isGoldenRatio = true, children, style}) => {
  // 1.618
  const [ratio, setRatio] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);


  const setGoldenRatioHeight = useCallback(() => {
    if (!isGoldenRatio || !ref.current) return
    const style = window.getComputedStyle(ref.current);
    const width = Math.floor(parseInt(style.width, 10));
    const height = Math.floor(width * config.GOLDEN_RATIO)
    setRatio(height)
  }, [ratio])

  useEffect(() => {
    setGoldenRatioHeight()
  }, [])

  useResizeWindow(setGoldenRatioHeight)


  return (
    <div className={classNames(styles.Card, style)} style={{width: `${width}%`, height: ratio}} ref={ref}>
      {children}
    </div>
  )
});

export default Card
