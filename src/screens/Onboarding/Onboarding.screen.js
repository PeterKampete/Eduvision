import React, { useRef, useState } from 'react';
import { View, FlatList, Animated, StatusBar } from 'react-native';

import styles from './Onboarding.style';

import { OnboardingItem, Paginator, NextButton } from '../../components'


const OnBoarding = ({ navigation }) => {
    const slides = [
        {
            id: 1,
            title: 'Welcome to Eduvision',
            description: 'Plunge in a new world of undaunted learning',
            image: require('../../../res/images/heart.png')
        },
        {
            id: 2,
            title: '3D, AR, VR',
            description: 'We have more for you',
            image: require('../../../res/images/ar.png')
        },
        {
            id: 3,
            title: 'Growing learning',
            description: 'Increasing learning and success by 90%',
            image: require('../../../res/images/grow_learning.png')
        },
        {
            id: 4,
            title: 'Hurray!!!',
            description: 'This will work very well for me',
            image: require('../../../res/images/hurray.png')
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const slideRef = useRef(null)
    const viewConfig = useRef({ veiwAreaCoveragePercentThreshold: 50 }).current
    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slideRef.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            try {
                storage.save({
                    key: 'NOTFIRSTTIME',
                    data: true,
                    expires: 1000 * 3600 * 24 * 360
                });
                navigation.navigate('Landing')
            } catch (err) {
                // console.log(err)
                navigation.navigate('Landing')
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={'#130f40'} />
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    onViewableItemsChanged={viewableItemsChanged}
                    // viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={slideRef}
                />
            </View>
            <Paginator scrollX={scrollX} data={slides} />
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
        </View>
    )
}

export default OnBoarding