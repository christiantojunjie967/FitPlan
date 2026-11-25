
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function FocusAreaScreen() {
  const { gender } = useLocalSearchParams<{ gender: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please choose your focus areas
      </Text>

      <Text style={styles.subtitle}>
        Selected gender: {gender}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 15,
  },
});
