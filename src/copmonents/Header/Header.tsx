import { FC } from "react";
import { useRecoilValue } from "recoil";

import { cn } from "../../shared";
import { getFolders } from "../../store";

import s from "./Header.module.scss";

export const Header: FC = () => {
  const list = useRecoilValue(getFolders);
  const len = list.length;

  return (
    <div className={s.container}>
      <div className={cn([s.btn, s.close])} />
      <div className={cn([s.btn, s.collapse])} />
      <div className={cn([s.btn, s.expand])} />
      <span>{`folders / ${len}`}</span>
    </div>
  );
};
