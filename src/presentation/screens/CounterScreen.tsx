import { PrimaryButton } from '@/components'
import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <Button
                onLongPress={() => setCount(0)}
                onPress={() => setCount(count + 1)}
                mode='contained'
            >
                Increment
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
    button: {
        backgroundColor: '#5856D6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: '#4746AB'
    }
})

