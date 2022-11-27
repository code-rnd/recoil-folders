import { CSSProperties, FC } from "react";

import { Portal } from "../Portal";

import s from "./ContextMenu.module.scss";

interface ContextMenuProp {
  coords: [number, number];

  onFolderCreate: () => void;
  onClose: () => void;
  style?: CSSProperties;
}

export const ContextMenu: FC<ContextMenuProp> = ({
  coords,
  onFolderCreate,
  onClose,
  style,
}) => {
  const [x, y] = coords;
  const customStyle: CSSProperties = {
    ...style,
    left: x + "px",
    top: y + "px",
  };

  return (
    <Portal>
      <div className={s.container} style={customStyle}>
        <div
          className={s.item}
          onClick={() => {
            onFolderCreate();
            onClose();
          }}
        >
          Создать каталог
        </div>
      </div>
    </Portal>
  );
};
