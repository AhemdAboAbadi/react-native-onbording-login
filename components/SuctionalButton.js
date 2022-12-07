import {
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight} from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SuctionalButton = ({
  buttonTittle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          style={styles.icon}
          name={btnType}
          size={25}
          color="#666"
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTittle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuctionalButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    borderRadius: 3,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
