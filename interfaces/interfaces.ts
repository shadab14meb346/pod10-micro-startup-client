import { ReactElement } from "react";

export interface navProps {
  name: string;
  icon: any;
  current: boolean;
  render: ReactElement;
}
