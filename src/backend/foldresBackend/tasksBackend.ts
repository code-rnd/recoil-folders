export const FoldersBackend = {
  addFolder(data: any, list: any[]): any[] {
    return [...list, { ...data, id: (+new Date()).toString(16) }];
  },

  renameFolder(data: any, list: any[]): any[] {
    return list.map((item) => {
      if (data.id === item.id) {
        return data;
      } else {
        return item;
      }
    });
  },
};
