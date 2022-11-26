import { selector } from "recoil";

import { GET_FOLDERS_KEY } from "./folders.constants";
import { foldersAtom } from "./folders.atom";

export const getFolders = selector({
  key: GET_FOLDERS_KEY,
  get: ({ get }) => {
    const { list } = get(foldersAtom);

    return list;
  },
});
