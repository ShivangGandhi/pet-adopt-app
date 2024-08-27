import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { where } from 'firebase/firestore';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import PetListItem from './PetListItem';

export default function PetListByCategory() {

    const [petList, setPetList] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        GetPetList('Dogs');
    }, []);

    const GetPetList = async (category) => {

        try {
            setLoader(true);
            setPetList([]);
            const petsQuery = collection(db, 'Pets');
            const snapshot = await getDocs(query(petsQuery, where('category', '==', category)));
            const petList = [];
            snapshot.forEach((doc) => {
                petList.push(doc.data());
            });
            setPetList(petList);
            setLoader(false);
        } catch (error) {
            console.error("Error fetching pets: ", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Category category={(value) => GetPetList(value)} />
            <FlatList
                data={petList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                refreshing={loader}
                columnWrapperStyle={{
                    justifyContent: 'space-between', // Space items equally in each row
                }}
                style={{
                    marginTop: 20,
                }}
                renderItem={({ item }) => (
                    <PetListItem pet={item} />
                )}
                keyExtractor={(key, index) => index.toString()}
            />
        </View>
    )
}