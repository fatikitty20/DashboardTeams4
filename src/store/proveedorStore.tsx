"use client";

import type { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

type ProveedorStoreProps = {
  children: ReactNode;
};

export function ProveedorStore({ children }: ProveedorStoreProps) {
  return <Provider store={store}>{children}</Provider>;
}
