import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CounterScreen } from '@/src/presentation/screens/CounterScreen'
import { CounterM3Screen } from '@/src/presentation/screens/CounterM3Screen'
import IonIcon from '@expo/vector-icons/Ionicons'
import { BoxObjectModelScreen } from '@/src/presentation/screens/BoxObjectModelScreen'
import { DimensionScreen } from '@/src/presentation/screens/DimensionScreen'
import { PositionScreen } from '@/src/presentation/screens/PositionScreen'
import { FlexScreen } from '@/src/presentation/screens/FlexScreen'
import { FlexDirectionScreen } from '@/src/presentation/screens/FlexDirectionScreen'
import { HomeworkScreen } from '@/src/presentation/screens/HomeworkScreen'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HelloWorldScreen name='Juan Cardona'/>*/}
      {/*<CounterScreen />*/}
      {/*<CounterM3Screen />*/}
      {/*<BoxObjectModelScreen />*/}
      {/*<DimensionScreen />*/}
      {/*<PositionScreen />*/}
      {/*<FlexScreen />*/}
      {/*<FlexDirectionScreen />*/}
      <HomeworkScreen />
    </SafeAreaView>
  )
}

export default HomeScreen