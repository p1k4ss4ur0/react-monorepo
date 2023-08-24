import {useState, useEffect} from 'react';

import api from '@api';

import Text from '@components/atoms/Text';

import DrawerMenu from '@components/molecules/Drawer';

import TextInputDialog from '@components/organisms/TextInputDialog';

import {useProvider} from '@provider';

export default function Start() {
  const {settings, state, setState} = useProvider();

  const [data, setData] = useState<Array<{path: string; content: string}>>([]);

  const [value, setValue] = useState('');

  const readDirSync = async () => {
    try {
      const res = await api.post('read-dir-sync', {
        dir: 'tmp',
      });
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleValue = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event?.preventDefault();
    handleModal();
  };

  const handleModal = () =>
    setState({
      ...state,
      textInputDialog: {
        open: false,
      },
    });

  useEffect(() => {
    readDirSync();
  }, []);

  return (
    <>
      <div style={{backgroundColor: settings.theme.background}}>
        <Text>{value}</Text>
        <TextInputDialog
          title='Collection name'
          submit='Create'
          onSubmit={handleSubmit}
          value={value}
          onChange={handleValue}
          open={state.textInputDialog.open}
          onRequestClose={handleModal}
        />
        <Text>{state.collectionFilter}</Text>
      </div>
      <DrawerMenu />
    </>
  );
}
