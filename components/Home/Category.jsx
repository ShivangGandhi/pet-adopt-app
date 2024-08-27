import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('window'); // Get screen width

export default function Category({ category }) {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Dogs');

    useEffect(() => {
        GetCategories();
    }, []);

    const GetCategories = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'Categories'));
            const categories = [];
            snapshot.forEach((doc) => {
                categories.push(doc.data());
            });
            setCategoryList(categories);
        } catch (error) {
            console.error("Error fetching categories: ", error);
        }
    };

    const itemWidth = categoryList.length > 0 ? (width - 80) / categoryList.length : 0;

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Category</Text>
            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        setSelectedCategory(item?.name)
                        category(item.name)
                    }} style={{
                        flex: 1
                    }}>
                        <View style={[styles.container, { width: itemWidth }, selectedCategory == item.name && styles.selectedCategoryContainer]}>
                            <Image
                                source={{ uri: item?.imageUrl }}
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.categoryTitle}>
                            {item?.name}
                        </Text>
                    </TouchableOpacity>

                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginBottom: 10,
    },
    flatListContent: {
        justifyContent: 'space-between',
    },
    categoryTitle: {
        textAlign: 'center',
        fontFamily: 'outfit'
    },
    selectedCategoryContainer: {
        backgroundColor: Colors.SECONDARY,
        borderColor: Colors.BRIGHTSECONDARY
    },
    container: {
        backgroundColor: Colors.LIGHTPRIMARY,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        margin: 5,
    },
    image: {
        width: 40,
        height: 40,
    }
});
