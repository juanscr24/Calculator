import { styles } from '@/src/config/theme/app-theme';
import { CalculatorScreen } from '@/src/presentation/screens/CalculatorScreen';
import { StatusBar, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}
