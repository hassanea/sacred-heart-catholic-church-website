import { useSupported } from "#imports";
export const useScrollTop = () => {
  const isSupported = useSupported(() => window && window.scrollTo);

  const handleScrollToTop = () => {
    if (!isSupported.value) return "";
    else
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };
  return { handleScrollToTop };
};
