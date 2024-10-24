import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, RefreshControl, StatusBar } from 'react-native'

import styles from './ModelGroup.style';

import { ModelItem } from '../../components';

import { models } from '../../../res/data';

const ModelGroup = ({ route, navigation }) => {

    const { id, name } = route.params.item;
    
    
    const [data, setData] = useState([]);
    const [loadingModels, setLoadingModels] = useState(false);
    
    const setCategoryData = () => {
        setLoadingModels(true)
        const newModels = models.filter(model => model.categoryId === id );
        setData(newModels);
        setLoadingModels(false);
    }
    
    useEffect(() => {
        setCategoryData();
    }, []);
 
    const renderItem = ({item}) => <ModelItem loadingModels={loadingModels} item={item} onModelItemPress={() =>navigation.navigate('Details',{ item })} />

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='#1e272e' />
            <Text style={styles.title}>{name}</Text>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={loadingModels}
                        onRefresh={() => {
                            setCategoryData()
                        }}
                        colors={['indigo', 'red']}
                    />
                }
            />
        </View>
    )
}

export default ModelGroup