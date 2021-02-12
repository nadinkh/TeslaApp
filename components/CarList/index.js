import React from 'react'
import styles from './styles'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'
import car from './car'
const CarList = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={car}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false} //hides the scrolling 
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />

        </View >


    )
}
export default CarList;