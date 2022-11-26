import { atom } from "recoil";
import { FOLDERS_KEY, initialAtom } from "./folders.constants";

export const foldersAtom = atom({
  key: FOLDERS_KEY,
  default: initialAtom,
});
