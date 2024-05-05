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

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(folders));
    }
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
  };

  return (
    <>
      <PlaygroundContext.Provider value={playgroundFeatures}>
        {children}
      </PlaygroundContext.Provider>
    </>
  );
};
