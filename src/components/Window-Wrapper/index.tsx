// ** React Imports
import { useState, useEffect, ReactNode } from "react";

// ** Next Import
import { useRouter } from "next/router";
import FallbackSpinner from "./Spinner";

interface Props {
  children: ReactNode;
}

const WindowWrapper = ({ children }: Props) => {
  // ** State
  const [windowReadyFlag, setWindowReadyFlag] = useState<boolean>(false);

  const router = useRouter();

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }
      if (typeof window !== "undefined") {
        setWindowReadyFlag(true);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route, router.isReady]
  );

  if (windowReadyFlag) {
    return <>{children}</>;
  } else {
    return <FallbackSpinner />;
  }
};

export default WindowWrapper;
