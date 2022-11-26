import React, { FC } from "react";
import { RecoilRoot } from "recoil";

import { Window } from "./copmonents";

import "./App.style.scss";

export const App: FC = () => {
  return (
    <RecoilRoot>
      <Window />
    </RecoilRoot>
  );
};
