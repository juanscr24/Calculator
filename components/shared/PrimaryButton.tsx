import React from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label: string;
    onPress: () => void;
    onLongPress: () => void;
}


export const PrimaryButton = ({ onPress, onLongPress, label }: Props) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text
                style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}
            >{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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