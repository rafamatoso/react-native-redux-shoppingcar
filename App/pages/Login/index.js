import React from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';
import Title from '../../components/Title';

import './styles';

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
      }}
    >
      <Title text="Login"></Title>
      <Form
        textSubmit="LOGIN"
        submit={() => {}}
        inputs={[
          { placeholder: 'Login', onChangeText: () => {} },
          {
            placeholder: 'Senha ...',
            onChangeText: () => {},
            secureTextEntry: true
          }
        ]}
      ></Form>
    </View>
  );
}
