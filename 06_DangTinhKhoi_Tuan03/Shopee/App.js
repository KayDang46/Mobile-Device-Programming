import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Svg, { Circle } from 'react-native-svg';

let App = () => {
  let loginAlert = () => {
    Alert.alert('Login Button', 'This Is Login Button', [
      {
        text: 'Cancel', onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed'), },
    ]);
  };

  let signUpAlert = () => {
    Alert.alert('Sign Up Button', 'This Is Sign Up Button', [
      {
        text: 'Cancel', onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0, 204, 249, 0)', 'rgba(0, 204, 249, 0.5804)', 'rgba(0, 204, 249, 0.6979)', 'rgba(0, 204, 249, 0.36)', 'rgba(0, 204, 249, 1)']}
    >
      <View style={styles.svg}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <Circle cx="70" cy="70" r="62.5" stroke="black" strokeWidth="15" />
        </Svg>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>GROW{"\n"}YOUR BUSINESS</Text>
        <Text style={styles.subText}>We will help you to grow your business using{"\n"}online server</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonOutside} onPress={loginAlert}>
          <Text style={styles.textInside}>LOGIN</Text>
        </Pressable>

        <Pressable style={styles.buttonOutside} onPress={signUpAlert}>
          <Text style={styles.textInside}>SIGN UP</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 29.3,
    textAlign: 'center',
    padding: 2,
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 17.58,
    textAlign: 'center',
    padding: 1.5,
    marginTop: 62,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginTop: 45,
  },
  buttonOutside: {
    backgroundColor: '#E3C000',
    borderRadius: 10,
    width: 140,
  },
  textInside: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 13,
    paddingBottom: 13,
  }
});
export default App;
