
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, LightSpeedInLeft } from 'react-native-reanimated';

const App = () => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const textTranslateX = useSharedValue(-500);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 500, easing: Easing.inOut(Easing.quad) }),
        withTiming(1, { duration: 500, easing: Easing.inOut(Easing.quad) })
      ),
      40,
      true
    );
    rotate.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      40,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
    };
  });


  useEffect(() => {
    textTranslateX.value = withRepeat(
      withSequence(
        withTiming(500, { duration: 10000, easing: Easing.out(Easing.exp) }),
        withTiming(-500, { duration: 10000, easing: Easing.in(Easing.exp) })
      ),
      10,
      false
    );
  }, []);




  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.cocan2023.ci/wp-content/uploads/2022/01/bg-orange-big.jpg' }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Animated.Image
            source={{ uri: 'https://icons.iconarchive.com/icons/iconarchive/cute-animal/256/Cute-Elephant-icon.png' }}
            resizeMode="contain"
            style={[styles.icon, animatedStyle]}
          />
          <Text style={styles.text}>Akawaba </Text>
          <Text style={styles.message}>Super App available soon.</Text>
          <Text style={styles.message}>Super App disponible bientot.</Text>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  message: {
    marginTop: 16,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
