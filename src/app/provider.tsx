"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ClientOrServer } from '../utils/utils'

export default ({ children }: { children: React.ReactNode }) => {
    ClientOrServer('222')
  
  return <NextUIProvider>{children}</NextUIProvider>;
};
