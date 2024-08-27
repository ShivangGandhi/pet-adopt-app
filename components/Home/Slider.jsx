import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'

export default function Slider() {

    const [sliderList, setSliderList] = useState([])

    useEffect(() => {
        GetSliders()
    }, [])

    const GetSliders = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'Sliders'));
            const sliders = [];
            snapshot.forEach((doc) => {
                sliders.push(doc.data());
            });
            setSliderList(sliders);
        } catch (error) {
            console.error("Error fetching sliders: ", error);
        }
    };

    return (
        <View style={{
            marginTop: 20
        }}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item?.imageUrl }}
                            style={styles?.sliderImage}
                        ></Image>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.2,
        borderRadius: 15,
        marginRight: 15
    }
})