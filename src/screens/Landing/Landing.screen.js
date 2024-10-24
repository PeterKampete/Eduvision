import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { useIsFocused } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Viro3DObject,
  ViroAmbientLight,
  ViroNode,
  ViroOmniLight,
  ViroOrbitCamera,
  ViroScene,
  ViroSkyBox,
  ViroVRSceneNavigator
} from '@reactvision/react-viro';

import styles from './Landing.style';

import { XrLoader } from '../../components';
import { AuthContext } from '../../navigation/AuthProvider';

const LandingScene = () => {
  const [showModels, setShowModels] = useState(false);
  const [loadingModel, setLoadingModel] = useState(true);

  const changeModelsState = () => {
    setTimeout(() => {
      setShowModels(true);
    }, 1000);
  };

  useEffect(() => {
    changeModelsState();
  }, []);

  useEffect(() => {}, [loadingModel]);

  return (
    <ViroScene>
      <ViroAmbientLight color="#ffffff" />

      <ViroSkyBox
        source={{
          nx: require('../../../res/images/grid_bg.jpg'),
          px: require('../../../res/images/grid_bg.jpg'),
          ny: require('../../../res/images/grid_bg.jpg'),
          py: require('../../../res/images/grid_bg.jpg'),
          nz: require('../../../res/images/grid_bg.jpg'),
          pz: require('../../../res/images/grid_bg.jpg'),
        }}
      />

      <ViroOmniLight
        position={[0, 0, 0]}
        color="#ffffff"
        attenuationStartDistance={40}
        attenuationEndDistance={50}
      />
      {loadingModel && <XrLoader />}
      {showModels && (
        <ViroNode position={[0, 0.1, -0.5]}>
          <ViroOrbitCamera
            active={true}
            position={[0, 0, -0]}
            focalPoint={[0, 0.1, -5]}
          />
          {
            <Viro3DObject
              source={require('../../assets/models/heart.glb')}
              // resources={[]}
              position={[0, 1.2, -5]}
              scale={[0.8, 0.8, 0.8]}
              rotation={[0, 0, 0]}
              type="GLB"
              onLoadStart={() => {
                setLoadingModel(true);
              }}
              onLoadEnd={() => {
                setLoadingModel(false);
              }}
            />
          }
        </ViroNode>
      )}
    </ViroScene>
  );
};

const Landing = ({navigation}) => {
  const isFocused = useIsFocused();
  const {user, setUser} = useContext(AuthContext);

  const checkInternetConnection = () => {
    const unsubscribe = NetInfo.addEventListener(async state => {
      const {type, isConnected, isInternetReachable} = state;
      console.log('Connection type', type);
      console.log('Is connected?', isConnected);
      console.log('is Internet Reachable?', isInternetReachable);

      if (isConnected && isInternetReachable) {
        try {
          const userData = await AsyncStorage.getItem('@user');
          setUser(userData);
          navigation.navigate('Home');
        } catch (error) {
          navigation.navigate('Login');
        }
      } else {
        showToastWithGravityAndOffset(
          'Check you internet connection and Press Get Started',
        );
        return;
      }
    });
    checkInternetConnection.unsubscribe = unsubscribe; // This is to get a reference to the unsubscribe method out of this function.
  };

  const showToastWithGravityAndOffset = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  useEffect(() => {
    return () => {
      checkInternetConnection();
      checkInternetConnection.unsubscribe();
    };
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.eduvisionText}>Eduvision</Text>
      {isFocused && (
        <ViroVRSceneNavigator
          vrModeEnabled={false}
          initialScene={{
            scene: LandingScene,
          }}
        />
      )}
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={checkInternetConnection}>
        <Text style={styles.exploreTxt}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.largeText}>Are you ready to learn?</Text>
      <Text style={styles.smallText}>
        Plunge into the <Text style={styles.threeDText}>3D</Text> and{' '}
        <Text style={styles.augmentedRealityText}>Augmented Reality</Text> world
        with us. Discover new knowledge !
      </Text>
      <Text style={styles.poweredByDr}>Powered by Immersecity</Text>
    </View>
  );
};

export default Landing;
