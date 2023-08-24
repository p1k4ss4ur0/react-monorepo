import {createContext, Dispatch, SetStateAction} from 'react';

import theme from '../theme';

interface ISettings {
  theme: typeof theme.dark;
}

interface IState {
  drawer: {
    open: boolean;
  };
  textInputDialog: {
    open: boolean;
  };
  collectionFilter: string;
}

interface IContext {
  settings: ISettings;
  setSettings: Dispatch<SetStateAction<ISettings>>;
  state: IState;
  setState: Dispatch<SetStateAction<IState>>;
}

const settings = {
  theme: theme.dark,
};

const state = {
  drawer: {
    open: false,
  },
  textInputDialog: {
    open: false,
  },
  collectionFilter: 'ArrowDownAZ',
};

export const context = {
  settings,
  setSettings: () => {},
  state,
  setState: () => {},
};

export default createContext<IContext>(context);
