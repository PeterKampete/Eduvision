import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, TextInput, FlatList } from 'react-native';

import { Fontisto, Ionicons } from '@expo/vector-icons';

import styles from './Home.style';
import { LargeItem, SmallItem } from '../../components';

import { categories } from '../../../res/data';

const Home = ({ navigation }) => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    const colors = [
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
        '#FFECF2',
        '#DEF5F0',
        '#FFF5DD',
        '#c7ecee',
        '#ffbe76',
        '#f6e58d',
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#ffffff' hidden={false} barStyle='dark-content' />
            <View style={styles.iconsAndSearchBar}>
                <Fontisto
                    name='nav-icon-grid-a'
                    size={20}
                    color='#23232C'
                // onPress={{}}
                />
                {
                    showSearchBar
                    &&
                    <TextInput style={styles.textInput} />
                }
                <Ionicons
                    name='search'
                    size={25}
                    color='#23232C'
                // onPress={{}}
                />
            </View>
            <FlatList
                style={styles.flatList}
                data={categories}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <Text style={styles.letsStart}>Let's start!</Text>
                        <Text style={styles.smallText}>More than 200 lessons on <Text style={{ fontWeight: '700', color: '#ee5253' }}>Anatomy</Text> are available to you!</Text>
                    </>
                }
                ListFooterComponent={
                    <View style={styles.footerComponent}>
                        {
                            categories.map((category, index) => (
                                index % 3 == 0
                                    ?
                                    <LargeItem
                                        key={category.id}
                                        name={category.name}
                                        numberOfLessons={category.number_of_lessons}
                                        free={category.free}
                                        backgroundColor={colors[index]}
                                        index={index}
                                        onCardPress={() => navigation.navigate('ModelGroup', { item: category })}
                                        image={category.image}
                                        imageStyle={category.imageStyle}
                                    />
                                    :
                                    <SmallItem
                                        key={category.id}
                                        name={category.name}
                                        numberOfLessons={category.number_of_lessons}
                                        free={category.free}
                                        backgroundColor={colors[index]}
                                        index={index}
                                        onCardPress={() => navigation.navigate('ModelGroup', { item: category })}
                                        image={category.image}
                                        imageStyle={category.imageStyle}
                                    />
                            ))
                        }
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default Home;
