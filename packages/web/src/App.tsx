import {useState, useEffect} from 'react';

import api from '@api';

export default function App() {
  const [data, setData] = useState<string>();

  const getData = async () => {
    try {
      const response = await api.get('/');
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setData('Goodbye, world!');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <h1>{data}</h1>
    </div>
  );
}
