import React from "react";

const useTitle = (title: string) => {
  const documentDefined = typeof document !== "undefined";
  const originalTitle = React.useRef<string>(
    documentDefined ? document.title : "Pillarsalt Solutions"
  );

  React.useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title)
      document.title = `${title} | Pillarsalt Solutions`;

    return () => {
      document.title = originalTitle.current;
    };
  }, []);
};

export default useTitle;
