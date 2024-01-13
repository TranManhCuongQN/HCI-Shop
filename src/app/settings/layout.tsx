import * as React from "react";
import SettingLayout from "./components/SettingLayout";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <main>
      <SettingLayout>{props.children}</SettingLayout>
    </main>
  );
}
