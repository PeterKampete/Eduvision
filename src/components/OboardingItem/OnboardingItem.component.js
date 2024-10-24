import React from 'react'
import { View, Text, useWindowDimensions, Image } from 'react-native'

import styles from './OnboardingItem.style'

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={[styles.container, { width }]}>
            <Image
                source={item.image}
                style={[styles.image, { width, resizeMode: 'contain' }]}
            />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnboardingItem
