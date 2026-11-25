import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;
  const progressWidth = progress.interpolate({
    inputRange: [0,1],
    outputRange: ['0%', '100%']
  });
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        router.replace('/onboarding/gender');
      }
    });
  }, [progress, router]);

  return (

    <LinearGradient
      colors={[
        '#1875F5', 
        '#0645F5', 
        '#0800e8']}
      locations={[0, 0.5 ,1]}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="light"/>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>FITPLAN</Text>
        </View>

        <View style={styles.loadingContainer}>

          <View style={styles.progressBackground}>
            <Animated.View style={[styles.progressFill, {width: progressWidth},]}/>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 65,
    paddingHorizontal: 30,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logo: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 4,
  },

  loadingContainer: {
    position: 'absolute',
    bottom: 65,
    left: 30,
    right: 30,
  },

  progressBackground: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderRadius: 20,
    overflow: 'hidden'
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20
  }
});