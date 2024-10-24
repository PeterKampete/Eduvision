import { View, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";

import {
  ViroScene,
  ViroAmbientLight,
  Viro3DObject,
  ViroAnimations,
  ViroOrbitCamera,
  ViroVRSceneNavigator,
  ViroLightingEnvironment,
  ViroMaterials,
  Viro3DSceneNavigator,
  ViroARSceneNavigator,
  ViroARScene
} from "@reactvision/react-viro";

import { XrLoader } from '../../components';

const { width, height } = Dimensions.get('screen');

const ArScene = ({ item }) => {
  const {
    unlabeled_model,
    resources,
    initialPosition,
    type,
    rotation,
    sx,
    sy,
    sz,
    material,
    lightingEvironment,
    materialsAvailable
  } = item;

  const [showingScene, setShowingScene] = useState(false);

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  const Scene = () => {
    const [showMaterial, setShowMaterial] = useState(false);
    const [loadingModel, setLoadingModel] = useState(true);
    const [rotationState, setRotationState] = useState(rotation);
    const [scale, setScale] = useState([sx, sy, sz]);

    const vrRef = useRef(null)

    const onPinch = (pinchState, scaleFactor, source) => {
      var newScale = scale.map((x) => { return x * scaleFactor })
      if (pinchState == 3) {
        setScale(newScale)
        return
      }
      vrRef?.current.setNativeProps({ scale: newScale });
    }

    useEffect(() => {
      if (materialsAvailable) {
        ViroMaterials.createMaterials({
          material: material,
        });
        setShowMaterial(true);
      }
    }, []);

    useEffect(() => {

    }, [loadingModel])

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {lightingEvironment && (
          <ViroLightingEnvironment source={lightingEvironment} />
        )}
        {
          loadingModel
          &&
          <XrLoader />
        }
        {
          <Viro3DObject
            ref={vrRef}
            source={unlabeled_model}
            resources={resources}
            position={initialPosition}
            scale={scale}
            type={type}
            rotation={rotationState}
            onPinch={onPinch}
            onLoadStart={() => {
              setLoadingModel(true)
            }}
            onLoadEnd={() => {
              setLoadingModel(false);
            }}
            animation={{ name: "spin", run: true, loop: true }}
            materials={showMaterial ? ["material"] : []}
          />
        }
      </ViroARScene>
    );
  };

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  return (
    <View style={{ height: height, width: "100%" }}>
      {
        showingScene
        &&
        <ViroARSceneNavigator initialScene={{ scene: Scene }} />
      }
    </View>
  );
};

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: "+=45",
    },
    duration: 1800,
  },
});

export default ArScene;
