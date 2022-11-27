import { FolderDTO } from "./folders.models";
import { FoldersMocked } from "../../../shared";

export const GET_FOLDERS_KEY = "GET_FOLDERS_KEY";
export const FOLDERS_KEY = "FOLDERS";

export const initialAtom: FolderDTO[] = [...FoldersMocked];
