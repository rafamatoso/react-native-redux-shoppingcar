import React, { useState } from 'react';
import { View } from 'react-native';
import Form from '../../components/Form';
import Title from '../../components/Title';
import { useDispatch } from 'react-redux';
import { fetchAddCar } from '../../store/fetchActions';

import styles from './styles';

export default function Add() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const dispatch = useDispatch();

  function submit() {
    dispatch(fetchAddCar({ name, url }));

    setName('');
    setUrl('');
  }

  return (
    <View style={styles.container}>
      <Title text="Cadastro"></Title>
      <Form
        textSubmit="ADICIONAR"
        submit={submit}
        inputs={[
          {
            onChangeText: setName,
            placeholder: 'Nome ...',
            value: name
          },
          {
            onChangeText: setUrl,
            placeholder: 'https://images ...',
            value: url
          }
        ]}
      ></Form>
    </View>
  );
}
