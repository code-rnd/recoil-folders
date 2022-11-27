import { FC, useState } from "react";
import { useRecoilState } from "recoil";

import { foldersAtom } from "../../store";
import { Folder, Header, Body } from "../";
import { ContextMenu } from "../../shared/components";

import s from "./Window.module.scss";
import { getId } from "../../shared";

export const Window: FC = () => {
  const [list, setList] = useRecoilState(foldersAtom);

  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [isShowContext, setIsShowContext] = useState(false);

  const hiddenContextHandler = () => {
    setIsShowContext(false);
  };

  const contextMenuHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const x = e.screenX;
    const y = e.screenY - 79;

    setIsShowContext(true);
    setCoords([x, y]);
  };

  const createFolder = () => {
    const next = [...list, { id: getId().toString(), name: "" }];
    setList(next);
  };

  return (
    <div
      className={s.container}
      onClick={hiddenContextHandler}
      onContextMenu={contextMenuHandler}
    >
      <Header />
      <Body>
        {list.map((folder) => (
          <Folder folder={folder} key={folder.id} />
        ))}
      </Body>
      {isShowContext && (
        <ContextMenu
          coords={coords}
          onClose={hiddenContextHandler}
          onFolderCreate={createFolder}
        />
      )}
    </div>
  );
};
