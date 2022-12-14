import React, {memo, FC, useState, useRef, useEffect, ReactNode, useCallback} from 'react'
import styles from "./RatioBox.module.scss"
import useComputedStyle from "~/hooks/useComputedStyle";
import classNames from "classnames";
import useResizeWindow from "~/hooks/useResizeWindow";

interface Props {
  children: ReactNode
}

const RatioBox: FC<Props> = memo(({children}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [length, setLength] = useState<number>(0)


  const setComputedLength = useCallback(() => {
    const style = useComputedStyle(ref.current);
    if (style) {
      setLength(style.width)
    }
  }, [length])

  useEffect(() => {
    setComputedLength()
  }, [ref])

  useResizeWindow(setComputedLength)

  return (
    <div className={classNames(styles.RatioBox)} style={{height: length}} ref={ref}>
      {children}
    </div>
  )
});

export default RatioBox
