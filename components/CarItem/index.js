import React from 'react'
import styles from './styles'
import { View, Text, ImageBackground } from 'react-native'
import StyleButtons from '../StyleButtons'

const CarItem = (props) => {
    const { name, tagline, taglineCta, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>

                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>{taglineCta}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <StyleButtons
                        type="primary"
                        content={"Custom Order"}
                        onPress={() => {
                            console.warn("Custom Order was pressed");
                        }}
                    />

                    <StyleButtons
                        type="secondary"
                        content={"Existing Inventory"}
                        onPress={() => {
                            console.warn("Existing Inventory was pressed");
                        }}
                    />
                </View>
            </View>

        </View>
    )
}
export default CarItem;