import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import MarkFav from '../MarkFav';

export default function PetInfo({ pet }) {

    return (
        <View>
            <Image source={{ uri: pet.imageUrl }}
                style={{
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height * 0.4,
                    objectFit: 'cover'
                }} />
            <View style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 27
                    }}>{pet.name}</Text>
                    <Text style={{
                        fontFamily: 'outfit',
                        color: Colors.GRAY,
                        fontSize: 14
                    }}>{pet.address}</Text>
                </View>
                <MarkFav pet={pet} />
            </View>
        </View>
    )
}