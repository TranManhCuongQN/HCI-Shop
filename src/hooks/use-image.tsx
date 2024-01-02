import { useState, useEffect } from "react";

const useImage = ({ src }: { src: string }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return { loaded };
};

export default useImage;
