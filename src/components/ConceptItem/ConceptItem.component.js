import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './ConceptItem.style';

const ConceptItem = ({ item }) => {

  const {normalImage, name, description, excitingText} = item

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.imageView}>
        <Image source={normalImage} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.viewsContainer}>
        <Feather name="eye" color="#ffffff" size={18} />
        <Text style={styles.viewsText}>views</Text>
      </View>
      <Text style={styles.description}>{excitingText}</Text>
    </TouchableOpacity>
  )
}

export default ConceptItem