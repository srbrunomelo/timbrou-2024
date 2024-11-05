import { Tailwind } from "@react-email/tailwind";
// biome-ignore lint/style/useImportType: <explanation>
import * as React from "react";

type TTailwindContainerProps = {
  children?: React.ReactNode;
};

export function TailwindContainer({ children }: TTailwindContainerProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#47A35C",
              'light-border': "#eeeeee",
              functional: {
                lightest: '#ffffff',
                light: '#f4f4f4',
                medium: '#eaeaea'
              },
              'functional-dark': {
                light: '#666666',
                medium: '#333333',
              }
            },
          },
        },
      }}
    >
      {children}
    </Tailwind>
  );
}
