import {useEffect, useState} from "react";

export default function useComputedStyle(target: HTMLElement | null): { width: number, height: number } | null {
  if (!target) return null
  const style = window.getComputedStyle(target);

  return {
    width: parseInt(style.width, 10),
    height: parseInt(style.height, 10)
  };
}
