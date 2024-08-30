import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box1, styles.box]} />
            <View style={[styles.box2, styles.box]} />
            <View style={[styles.box3, styles.box]} />
            <View style={[styles.box1, styles.box]} />
            <View style={[styles.box2, styles.box]} />
            <View style={[styles.box3, styles.box]} />
            <View style={[styles.box1, styles.box]} />
            <View style={[styles.box2, styles.box]} />
            <View style={[styles.box3, styles.box]} />
            <View style={[styles.box1, styles.box]} />
            <View style={[styles.box2, styles.box]} />
            <View style={[styles.box3, styles.box]} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        //alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
    },
    box: {
        //flex: 1,
        height: 100,
        width: 100
    },
    box1: {
        backgroundColor: '#5856D6',
    },
    box2: {
        backgroundColor: '#1e1d4a',
        //alignSelf:'flex-end'
    },
    box3: {
        backgroundColor: '#13122e',
    }
})