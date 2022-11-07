import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Page</Text>
      <Button
        title='Go to details page'
        onPress={() =>
          navigation.navigate('Details')
        }
      />
    </View>
  );
}