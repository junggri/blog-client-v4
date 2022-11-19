import React, {memo, FC, useEffect, useRef} from 'react'
import styles from "./Count.module.scss"
import {CountCanvas} from "~/canvas/CountCanvas/CountCanvas";
import useComputedStyle from "~/hooks/useComputedStyle";

interface Props {
}

const Count: FC<Props> = memo(() => {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const parent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current && !parent.current) return;
    const style = useComputedStyle(parent.current);

    if (style) {
      const animation = new CountCanvas(ref.current, parent.current)
    }
  }, [ref.current, parent.current])

  return (
    <div className={styles.Count} ref={parent}>
      <canvas ref={ref}/>
    </div>
  )
});

export default Count
