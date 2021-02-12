import React from 'react'
import styles from './styles'
import { View, Pressable, Text, ImageBackground } from 'react-native'

const StyleButtons = (props) => {


    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>

            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() =>
                    onPress()

                }
            >
                <Text style={[styles.text, { color: textColor }]}> {content}</Text>
            </Pressable>
        </View >


    )
}
export default StyleButtons;