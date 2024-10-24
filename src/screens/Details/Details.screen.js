import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


import styles from "./Details.style";

import { ArScene, VrScene } from "../../components";

const data = [
  {
    id: 1,
    name: 'Phalanges',
    definition: 'The phalanges are still all the types of things we talk about',
    function: 'Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least,Gives the body a nice shape at least'
  },
  {
    id: 2,
    name: 'Phalanges',
    definition: 'The phalanges are still all the types of things we talk about',
    function: 'Gives the body a nice shape at least'
  },
  {
    id: 3,
    name: 'Phalanges',
    definition: 'The phalanges are still all the types of things we talk about',
    function: 'Gives the body a nice shape at least'
  },
  {
    id: 4,
    name: 'Phalanges',
    definition: 'The phalanges are still all the types of things we talk about',
    function: 'Gives the body a nice shape at least'
  }
];

const Details = ({ route }) => {

  const { name, anotated, description, functions } = route.params.item;

  const [modelLoading, SetModelLoading] = useState(false);
  const [showingAr, setShowingAr] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [enabled, setEnabled] = useState(true);

  const changeLabeledState = () => {
    alert('Coming soon')
  }

  const changeRotationState = () => {
    alert('Coming soon')
  }

  const changeScrollState = () => {
    setEnabled(!enabled)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='never'
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={enabled}
      >
        <Text style={styles.titleText}>{name}</Text>
        <View style={styles.imageView}>
          <Image style={styles.image} source={anotated} />
        </View>
        <Text style={styles.definition}>{description}</Text>
        <Text style={styles.functionOfParts}>Function of parts</Text>
        <View style={styles.functionsContainer}>
          {
            functions.map((data, index) => (
              <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-start', marginVertical: 8, width: '99%' }} key={data.id}>
                <Text>{index + 1}.)  </Text>
                <Text style={{ fontWeight: 'bold' }}>{data.name}: </Text>
                <View style={{ width: '72%' }}>
                  <Text>{data.function}</Text>
                </View>
              </View>
            ))
          }
        </View>
        <View style={styles.modelViewCard}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changeView}
            onPress={() => setShowingAr(!showingAr)}
          >
            {!showingAr ? (
              <MaterialCommunityIcons
                name="augmented-reality"
                size={50}
                color="#b71540"
              />
            ) : (
              <MaterialIcons name="3d-rotation" size={50} color="#b71540" />
            )}
          </TouchableOpacity>
          {!showingAr ? (
            <VrScene animate={animate} item={route.params.item} />
          ) : (
            <ArScene item={route.params.item} />
          )}
          {modelLoading && (
            <Text style={styles.modelLoadingText}>

            </Text>
          )}
        </View>
        <View style={styles.lableAndRotateViews}>
          <TouchableOpacity style={styles.labelButton} onPress={changeLabeledState}>
            <MaterialIcons name="label" size={24} color="#ffffff" />
            <Text style={styles.labelText}>Unlabel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rotateButton} onPress={changeRotationState}>
            <MaterialCommunityIcons
              name="axis-z-rotate-clockwise"
              size={24}
              color="#ffffff"
            />
            <Text style={styles.rotateButtonText}>Rotate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.enableScrollBtn} onPress={changeScrollState}>
            <Text style={styles.enableScrollText}>{`${enabled ? 'Disable scroll': 'Enable scroll'}`}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.takeQuizBtn}>
          <Text style={styles.takeQuizTxt}>Take Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;
