import { View } from "react-native";
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
} from "@reactvision/react-viro";

import { XrLoader } from '../../components';

const VrScene = ({ item }) => {
  const {
    labeled_model,
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

  const Scene = () => {
    const [showMaterial, setShowMaterial] = useState(false);
    const [loadingModel, setLoadingModel] = useState(true);
    const [rotationState, setRotationState] = useState(rotation);
    const [scale, setScale] = useState([sx, sy, sz]);

    const vrRef = useRef(null)

    const onRotate = (rotateState, rotationFactor, source) => {
      if (rotateState == 3) {
        console.log(rotationState);
        setRotationState([rotationState[0] + rotationFactor, rotationState[1] + rotationFactor, rotationState[2] + rotationFactor])
        return
      }
      vrRef?.current.setNativeProps({ rotation: [rotationState[0] + rotationFactor, rotationState[1] + rotationFactor, rotationState[2] + rotationFactor] });
    }

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
      <ViroScene>
        <ViroOrbitCamera
          active={true}
          position={[0, 0, -0]}
          focalPoint={initialPosition}
        />
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
            source={labeled_model}
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
            onRotate={onRotate}
            materials={showMaterial ? ["material"] : []}
          />
        }
      </ViroScene>
    );
  };

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {showingScene && (
        <ViroVRSceneNavigator
          vrModeEnabled={false}
          initialScene={{
            scene: Scene,
          }}
        />
      )}
    </View>
  );
};

export default VrScene;
