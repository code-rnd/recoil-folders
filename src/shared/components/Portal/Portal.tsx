import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("modals-root")!;

export const Portal: FC<{ children: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(children, portalRoot);
};
