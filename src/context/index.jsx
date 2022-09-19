import { createContext } from 'react';
import PropertiesProvider from './properties';

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Root.Provider>
  );
};

export default RootContext;
