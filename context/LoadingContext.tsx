import React, { useState } from "react";

type contextType = { isLoading: boolean; finishLoading: () => void };

const LoadingContext = React.createContext<contextType>({
  isLoading: true,
  finishLoading: () => {},
});

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const finishLoading = () => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading: loading, finishLoading: finishLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
