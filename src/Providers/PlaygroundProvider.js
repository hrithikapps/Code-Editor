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

export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(folders));
  }, []);
  return (
    <>
      <PlaygroundContext.Provider value={folders}>
        {children}
      </PlaygroundContext.Provider>
    </>
  );
};
