import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { ViroText, ViroSpinner } from '@reactvision/react-viro';

import styles from './XrLoader.style';

const XrLoader = () => {

    return (
        <>
            <ViroText
                text="Loading Model..."
                textClipMode="clipToBounds"
                color="#ff0000"
                width={2}
                height={2}
                style={{
                    fontFamily: "Arial",
                    fontSize: 80,
                    fontWeight: '700',
                    fontStyle: "italic",
                    color: "#0000FF",
                }}
                position={[0, -5, -5]}
            />
            <ViroSpinner
                type='light'
                position={[0, 0, -1.2]}
            />
        </>
    )
}

export default XrLoader