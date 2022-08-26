import {useEffect} from "react";
import _ from "lodash";

export default function useResizeWindow(cb: any) {

  const throttleFunction = _.throttle(() => {
    cb()
  }, 100)

  useEffect(() => {
    window.addEventListener("resize", throttleFunction);

    // return window.removeEventListener("resize", throttleFunction)
  }, []);

}
