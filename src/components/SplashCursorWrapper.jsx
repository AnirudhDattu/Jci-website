import React, { useEffect, useState } from "react";
import SplashCursor from "../../Reactbits/SplashCursor/SplashCursor";

const SplashCursorWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted ? <SplashCursor /> : null;
};

export default SplashCursorWrapper;
