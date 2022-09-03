import React from 'react';
import {View, Image, Text} from 'react-native';

import laptop from '../../assets/images/laptop.jpg';
import styles from './stylesComp';

const StylingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={laptop} style={styles.image} />
        <Text style={styles.titleText}>New Laptop Lenovo</Text>
        <Text style={styles.price}>Rp 16.500.000,-</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <View style={styles.button}>
          <Text style={styles.textButton}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

export default StylingComponent;
