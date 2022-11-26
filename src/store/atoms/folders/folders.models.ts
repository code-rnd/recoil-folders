export interface FolderDTO extends FolderModel {
  id: string;
}

export interface FolderModel {
  name: string;
}

export interface InitialAtom {
  list: FolderDTO[];
}
