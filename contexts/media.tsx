import { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Attempted to create context interface, but somehow Typescript is not accepting it for now
// interface MediaInterface extends Array<string|Dispatch<SetStateAction<string>>> {
//   0: string,
//   1: Dispatch<SetStateAction<string>>
// }

// Create the context, initialise to a default of undefined
const MediaContext = createContext<any|undefined>(undefined);

// Allow state of media to be tracked and changed by other components
export const MediaProvider = ({ children }: {children:ReactElement}) => {
  // Initialise the state tracker
  const [media, setMedia] = useState("spotify");
  // Export the context provider to be wrapped around the main _app.tsx component
  return (
    <MediaContext.Provider value={[ media, setMedia ]}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaContext;