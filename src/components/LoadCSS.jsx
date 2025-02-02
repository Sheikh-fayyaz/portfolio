import { useEffect } from "react";

const LoadCSS = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    link.rel = "stylesheet";
    link.media = "print";
    link.onload = () => (link.media = "all");

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup on unmount
    };
  }, []);

  return null;
};

export default LoadCSS;
