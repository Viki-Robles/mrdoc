import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type UseScrollTopRef = typeof window | HTMLElement | null;

export const useScrollToTop = (ref: UseScrollTopRef = window): null => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (ref) {
      ref.scrollTo(0, 0);
    }
  }, [pathname, ref]);

  return null;
};

export const ScrollToTop = ({
  ref = window,
}: {
  ref?: UseScrollTopRef;
}): null => {
  useScrollToTop(ref);
  return null;
};
