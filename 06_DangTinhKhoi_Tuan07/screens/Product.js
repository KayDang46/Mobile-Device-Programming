import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable, Button } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Product = ({ navigation, route }) => {
    const [item, setItem] = useState(route.params.item);
    const [amount, setAmount] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item__imageCon}>
                <Image style={styles.item__image} source={item.image}></Image>
            </View>

            <View style={[styles.item__info, styles.bold]}>
                <Text style={[styles.item__name, styles.fz20, styles.bold, styles.lh23]}>{item.name}</Text>
                <Text style={[styles.item__des, styles.fz15, styles.bold, styles.lh17]}>{item.description}</Text>
                <Text style={[styles.item__price, styles.fz20, styles.bold, styles.lh17]}>${item.price}.00</Text>
            </View>

            <View style={styles.item__deli}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/clock.png')} />
                        <Text style={[styles.fz15, styles.bold, styles.lh17, { color: 'rgba(0, 0, 0, 0.54)' }]}>Delivery in</Text>
                    </View>
                    <Text style={[styles.item__name, styles.fz20, styles.bold, styles.lh23]}>30 min</Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity onPress={() => setAmount(amount - 1)}>
                        <Image source={require('../assets/minus.png')}></Image>
                    </TouchableOpacity>

                    <Text style={[styles.fz20, styles.bold, styles.lh23]}>{amount}</Text>

                    <TouchableOpacity onPress={() => setAmount(amount + 1)}>
                        <Image source={require('../assets/plus.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginBottom: 30}}>
                <Text style={[styles.item__name, styles.fz20, styles.bold, styles.lh23]}>Restaurants info</Text>
                <Text style={[styles.fz15, styles.bold, styles.lh17, { color: 'rgba(0, 0, 0, 0.67)' }]}>
                    Order a Large Pizza but the size is the equivalent
                    of a medium/small from other places at the same price range.
                </Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.fz25, styles.bold, styles.lh29, {textAlign: 'center', color: '#FFFDFD'}]}>Add to cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
    },
    item__imageCon: {
        alignItems: 'center',
    },
    item__image: {
        resizeMode: 'cover',
        height: 278,
        width: 272,
        marginBottom: 10,
    },
    item__info: {
        marginBottom: 36,
    },
    item__des: {
        marginTop: 10,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    item__price: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    item__deli: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: 'rgba(241, 176, 0, 1)',
        paddingHorizontal: 90,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.20)',
    },
    fz14: {
        fontSize: 14,
    },
    fz15: {
        fontSize: 15,
    },
    fz16: {
        fontSize: 16,
    },
    fz20: {
        fontSize: 20,
    },
    fz25: {
        fontSize: 25,
    },
    lh16: {
        lineHeight: 16.41,
    },
    lh18: {
        lineHeight: 18.75,
    },
    lh23: {
        lineHeight: 23.44,
    },
    lh29: {
        lineHeight: 29.3,
    },
    regular: {
        fontFamily: 'Roboto-Regular',
    },
    bold: {
        fontFamily: 'Roboto-Bold',
    },
});