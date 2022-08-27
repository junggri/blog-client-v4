import React, {memo, FC, useRef, useEffect} from 'react'
import style from "./canvas.module.scss"
import classNames from "classnames";

interface Props {
  styles?: string
}

const Canvas: FC<Props> = memo(({styles}) => {
  const svg = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svg.current) return
    const paths = svg.current.childNodes[0].childNodes;

    paths.forEach((e) => {
      const length = (e as SVGPathElement).getTotalLength();
      (e as SVGPathElement).style.strokeDasharray = String(length);
      (e as SVGPathElement).style.strokeDashoffset = String(length);

      (e as SVGPathElement).classList.add("draw")

      const keyframes = document.createElement('style');

      keyframes.innerHTML = `
        @keyframes draw {
          from {
             stroke-dashoffset: ${length};
          }
          to {
             stroke-dashoffset: 0;
          }
        }
      
        .draw {
          animation: draw 1s ease infinite;
        }
      `;

      // e.appendChild(keyframes)
    })


  }, [svg])

  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209 50.5" className={classNames(styles)} ref={svg}>
      <g>
        <path
          d="M24.92,41.48c2.76,0,5.34-.65,7.74-1.94v7.55c-2.51,.89-5.09,1.34-7.74,1.34-6.41,0-11.89-2.27-16.44-6.82C3.94,37.06,1.67,31.58,1.67,25.17S3.94,13.27,8.48,8.73C13.03,4.18,18.51,1.91,24.92,1.91c2.65,0,5.23,.44,7.74,1.31v7.58c-2.4-1.32-4.98-1.98-7.74-1.98-4.5,0-8.35,1.6-11.53,4.81-3.19,3.19-4.78,7.03-4.78,11.53s1.59,8.35,4.78,11.53,7.03,4.78,11.53,4.78Z"/>
        <path d="M71.97,2.39V47.97h-6.94v-10.64h-15.48l-6.72,10.64h-8.19L63.47,2.39h8.51Zm-18.06,28.03h11.12V12.87l-11.12,17.55Z"/>
        <path d="M112.94,2.39V47.97h-7.23L86.21,15.39V47.97h-6.91V2.39h7.23l19.46,32.59V2.39h6.94Z"/>
        <path d="M126.89,2.39V36.95L147.24,2.39h8.03l-26.85,45.58h-8.47V2.39h6.94Z"/>
        <path d="M171.26,2.39V47.97h-6.94v-10.64h-15.48l-6.72,10.64h-8.19L162.76,2.39h8.51Zm-18.06,28.03h11.12V12.87l-11.12,17.55Z"/>
        <path
          d="M191.17,48.39c-3.02-.13-5.8-.93-8.35-2.42-2.89-1.68-4.85-3.93-5.89-6.75l6.5-2.39c.53,1.4,1.62,2.54,3.28,3.41,1.47,.74,3.06,1.16,4.78,1.24,2.65,.11,4.85-.54,6.59-1.94,1.47-1.19,2.24-2.55,2.33-4.08,.13-2.91-2.92-5.23-9.14-6.98-9.75-2.74-14.47-7.38-14.18-13.92,.19-4.59,2.16-8.02,5.89-10.29,2.85-1.74,6.26-2.52,10.26-2.33,4.84,.21,8.73,1.9,11.66,5.06l-5.06,4.71c-1.66-1.78-3.96-2.74-6.91-2.87-2.08-.08-3.85,.18-5.32,.8-2.29,.98-3.49,2.72-3.6,5.22-.13,2.87,2.92,5.17,9.14,6.91,5.61,1.57,9.58,3.89,11.91,6.94,1.61,2.12,2.37,4.47,2.26,7.04-.17,3.61-1.81,6.67-4.91,9.17-2.89,2.31-6.35,3.47-10.38,3.47-.3,0-.58-.01-.86-.03Z"/>
      </g>
    </svg>
  )
});

export default Canvas
