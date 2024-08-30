import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>BoxObjectModelScreen</Text>*/}
            <View style={styles.purpleBox}>
                <Text style={{ color: 'white' }}>Hola mundo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        margin: 20,
        padding: 5
    }
})
