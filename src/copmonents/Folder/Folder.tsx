import { FC, useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { FolderDTO, foldersAtom } from "../../store";
import { cn } from "../../shared";

import s from "./Folder.module.scss";

export const Folder: FC<{ folder: FolderDTO }> = ({ folder }) => {
  const [list, setList] = useRecoilState(foldersAtom);

  const [name, setName] = useState(folder.name);
  const [isEdit, setIsEdit] = useState(false);

  const doubleClickHandler = (folder: FolderDTO) => {
    setIsEdit(true);
    setName(folder.name);
  };

  const onSave = (folder: FolderDTO) => {
    setList(
      list.map((item) => {
        if (item.id === folder.id) {
          return { ...folder, name: name };
        } else {
          return item;
        }
      })
    );
    setIsEdit(false);
  };

  useLayoutEffect(() => {
    if (!name) {
      setIsEdit(true);
    }
  }, []);

  return (
    <div className={cn([s.container])}>
      {isEdit ? (
        <input
          autoFocus
          value={name}
          onChange={({ currentTarget }) => setName(currentTarget.value)}
          type="text"
          onKeyPress={({ code }) => {
            if (code === "Enter") {
              onSave(folder);
            }
          }}
        />
      ) : (
        <span
          className={s.title}
          onDoubleClick={() => doubleClickHandler(folder)}
        >
          {folder.name}
        </span>
      )}
    </div>
  );
};
