import {useEffect, useState} from "react";

export default function useComputedStyle(target: HTMLElement | null): number {


  if (!target) return 0
  const style = window.getComputedStyle(target);
  return parseInt(style.width, 10);
}
