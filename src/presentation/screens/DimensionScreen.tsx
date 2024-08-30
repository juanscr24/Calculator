import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { Dimensions } from 'react-native'

//const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5
                }}></View>
            </View>
            <Text style={styles.title}>W: {width}, h: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        textAlign:'center',
        fontSize: 30,
    }
})
