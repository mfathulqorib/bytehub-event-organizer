"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

export const Provider = ({ children }) => {
  return (
    <NextUIProvider>
      <Toaster />
      <div>{children}</div>
    </NextUIProvider>
  );
};