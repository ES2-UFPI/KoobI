import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';
import { database } from '../../services/firebaseConfig';

export function EditProduct({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id

  return (
    <ScrollView
    contentContainerStyle={styles.container}
    >
      <View>
      </View>

    </ScrollView>

  );
}
