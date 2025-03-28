import React from "react";
import { StoreProvider } from "../context";
import { HelmetProvider } from "react-helmet-async";

const Provider: React.FC<{ children: any }> = ({ children }) => {
  return (
    <HelmetProvider>
      <StoreProvider>{children}</StoreProvider>
    </HelmetProvider>
  );
};

export default Provider;
