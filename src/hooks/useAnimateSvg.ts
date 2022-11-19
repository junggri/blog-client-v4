import {RefObject, useEffect} from "react";

export default function useAnimateSvg(ref: RefObject<SVGSVGElement | null>, className: string) {
  useEffect(() => {
    if (!ref.current) return

    const paths = ref.current.childNodes[0].childNodes;

    paths.forEach((e, i) => {
      const length = (e as SVGPathElement).getTotalLength();
      (e as SVGPathElement).style.strokeDasharray = String(length);
      (e as SVGPathElement).style.strokeDashoffset = String(length);

      setTimeout(() => {

        (e as SVGPathElement).classList.add("draw")
        className === "canvas" ? (e as SVGPathElement).classList.add("canvas") : className === "youtube" ? (e as SVGPathElement).classList.add("youtube") : (e as SVGPathElement).classList.add("log")
        const keyframes = document.createElement('style');

        keyframes.innerHTML = `
        @keyframes ${className} {
          from {
             stroke-dashoffset: ${length};
          }
          to {
             stroke-dashoffset: 0;
          }
        }
      
        .${className} {
          animation: ${className} 0.5s ease;
        }        
      `;

        e.appendChild(keyframes);
        (e as SVGPathElement).style.strokeDashoffset = String(0);
      }, i * 150)
    })
  }, [ref])

}
