import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();

const initialData = [
  {
    id: v4(),
    title: "DSA",
    files: [
      {
        id: v4(),
        title: "index",
        code: `cout<<"Hello World";`,
        language: "cpp",
      },
    ],
  },
  {
    id: v4(),
    title: "frontend",
    files: [
      {
        id: v4(),
        title: "test",
        code: `console.log('frontend')`,
        language: "javaScript",
      },
    ],
  },
];

const defaultCodes = {
  cpp: `#include <iostream>
int main()
{
    std::cout<<"Hello C++";
    return 0;
}`,
  javascript: `console.log('Hello Js')`,
  python: `print ('Hello Python')`,
  java: `public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello Java");
	}
}`,
};

export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      return JSON.parse(localData);
    }
    return initialData;
  });

  const createNewPlayground = (newPlayground) => {
    const { fileName, folderName, language } = newPlayground;
    const newFolders = [...folders];
    newFolders.push({
      id: v4(),
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          code: defaultCodes[language],
          language,
        },
      ],
    });

    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  const createNewFolder = (folderName) => {
    const newFolder = {
      id: v4(),
      title: folderName,
      files: [],
    };

    const allFolders = [...folders, newFolder];
    localStorage.setItem("data", JSON.stringify(allFolders));
    setFolders(allFolders);
  };

  const deleteFolder = (id) => {
    const updatedFolderList = folders.filter((folder) => {
      return folder.id !== id;
    });
    localStorage.setItem("data", JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  };

  const editFolderTitle = (newFolderTitle, id) => {
    const updatedFolderList = folders.map((folderItem) => {
      if (folderItem.id === id) {
        folderItem.title = newFolderTitle;
      }
      return folderItem;
    });
    localStorage.setItem("data", JSON.stringify(updatedFolderList));
    setFolders(updatedFolderList);
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(folders));
    }
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
    createNewFolder,
    deleteFolder,
    editFolderTitle,
  };

  return (
    <>
      <PlaygroundContext.Provider value={playgroundFeatures}>
        {children}
      </PlaygroundContext.Provider>
    </>
  );
};
