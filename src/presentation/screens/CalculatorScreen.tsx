import { colors, styles } from '@/src/config/theme/app-theme'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

    const {
        number,
        prevNumber,
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        addOperation,
        suntractOperation,
        multiplyOperation,
        divideOperation,
        calculateResult
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{number}</Text>
                <Text style={styles.subResult}>{(prevNumber) === '0' ? '' : prevNumber}</Text>
            </View>
            <View style={styles.row}>
                <CalculatorButton label='C' color={colors.lightGray} blackText onPress={() => clean()} />
                <CalculatorButton label='+/-' color={colors.lightGray} blackText onPress={() => toggleSign()} />
                <CalculatorButton label='del' color={colors.lightGray} blackText onPress={() => deleteOperation()} />
                <CalculatorButton label='÷' color={colors.orange} onPress={divideOperation} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label='7' onPress={() => buildNumber('7')} />
                <CalculatorButton label='8' onPress={() => buildNumber('8')} />
                <CalculatorButton label='9' onPress={() => buildNumber('9')} />
                <CalculatorButton label='x' color={colors.orange} onPress={multiplyOperation} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label='4' onPress={() => buildNumber('4')} />
                <CalculatorButton label='5' onPress={() => buildNumber('5')} />
                <CalculatorButton label='6' onPress={() => buildNumber('6')} />
                <CalculatorButton label='-' color={colors.orange} onPress={suntractOperation} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label='1' onPress={() => buildNumber('1')} />
                <CalculatorButton label='2' onPress={() => buildNumber('2')} />
                <CalculatorButton label='3' onPress={() => buildNumber('3')} />
                <CalculatorButton label='+' color={colors.orange} onPress={addOperation} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label='0' doubleSize onPress={() => buildNumber('0')} />
                <CalculatorButton label='.' onPress={() => buildNumber('.')} />
                <CalculatorButton label='=' color={colors.orange} onPress={calculateResult} />
            </View>
        </View>
    )
}
