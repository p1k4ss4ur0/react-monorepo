import {useContext, useState, useEffect} from 'react';
import Context, {context} from '@context';

export default function Provider({children}) {
  const [settings, setSettings] = useState(context.settings);

  const [state, setState] = useState(context.state);

  useEffect(() => {
    document.body.style.backgroundColor = settings.theme.background;
  }, []);

  return (
    <Context.Provider value={{settings, setSettings, state, setState}}>
      {children}
    </Context.Provider>
  );
}

export const useProvider = () => useContext(Context);
