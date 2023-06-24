import React from "react";
import { ExtensionProvider } from "@looker/extension-sdk-react";
import MainLayout from "./Layout/MainLayout";

export const App = ({}) => {
  return (
    <ExtensionProvider>
      <MainLayout />
    </ExtensionProvider>
  );
};
