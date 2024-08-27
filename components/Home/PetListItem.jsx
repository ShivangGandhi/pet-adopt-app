import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function PetListItem({ pet }) {

    const router = useRouter()

    return (
        <TouchableOpacity
            onPress={() => router.push({
                pathname: '/pet-details',
                params: { pet: JSON.stringify(pet) }
            })}
            style={{
                width: (width / 2) - 20,
                padding: 10,
                marginRight: 10,
                marginBottom: 10,
                backgroundColor: Colors.WHITE,
                borderRadius: 10,
            }}>
            <Image source={{ uri: pet?.imageUrl }}
                style={{
                    width: 150,
                    height: 135,
                    objectFit: 'cover',
                    borderRadius: 10
                }}
            />
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 18,
                marginTop: 10
            }}>{pet.name}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: "outfit-medium",
                    color: Colors.GRAY
                }}>{pet.breed}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY,
                    paddingHorizontal: 7,
                    borderRadius: 10,
                    fontSize: 13,
                    backgroundColor: Colors.LIGHTPRIMARY
                }}>{pet.age} YRS</Text>
            </View>
        </TouchableOpacity>
    )
}