import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import api from '@api';

export default function App() {
  const [data, setData] = useState<string>();

  const getData = async () => {
    try {
      const response = await api.get('/');
      if (response.status === 200) {
        setData(response.data);
      } else {
        setData('Goodbye, world!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
