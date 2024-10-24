import { Text, TextStyle } from 'react-native'
import React from 'react'
import styles from './EduvisionText.style';

interface IProps {
    style: TextStyle
}

const EduvisionText: React.FC<IProps> = ({ style }) => {
    return (
        <Text style={[{ ...style }, styles.readSection]}>Edu<Text style={styles.blueSection}>vision</Text>{` `}</Text>
    )
}

export default EduvisionText;