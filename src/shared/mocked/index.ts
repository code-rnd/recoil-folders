import { FolderDTO } from "../../store";

let id = 15;
export const getId = () => {
  id = id + 1;

  return id;
};
export const FoldersMocked: FolderDTO[] = [
  {
    id: "1",
    name: "Photo",
  },
  {
    id: "2",
    name: "Media",
  },
  {
    id: "3",
    name: "Music",
  },
  {
    id: "4",
    name: "Documents",
  },
];

export const getFoldersMocked = (count: number = 2): FolderDTO[] => {
  return Array.from(
    {
      length: count,
    },
    (_, x) => ({ id: x.toString(), name: "New folder_" + (x + 1) })
  );
};
