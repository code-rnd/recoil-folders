import { FC, ReactNode } from "react";

import s from "./Body.module.scss";

export const Body: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
