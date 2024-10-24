import React from 'react';
import { Text, Pressable, Image, View } from 'react-native';

import styles from './ModelItem.style';

const ModelItem = ({ item, onModelItemPress }) => {

  const {name, normalImage } = item;
    
  return (
    <Pressable style={styles.container} onPress={onModelItemPress}>
      <Text style={styles.modelName}>{name}</Text>
      <View style={styles.imageView}>
        <Image resizeMode='contain' source={normalImage} style={styles.image} />
      </View>
    </Pressable>
  )
}

export default ModelItem;