import { FC } from "react";

import s from "./Window.module.scss";
import { useRecoilValue } from "recoil";
import { getFolders } from "../../store";

export const Window: FC = () => {
  const list = useRecoilValue(getFolders);

  console.log(list);

  return (
    <div className={s.container}>
      <div className={s.header}>header</div>
      <div className={s.body}>body</div>
    </div>
  );
};
