import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

// SplashScreen.preventAutoHideAsync();

export default Feed = ({ navigation }) => {
    //Set State for reload items
    var [data, setData] = useState([]);

    //Set Active state for buttons
    let [active, setActive] = useState(0);

    //Font import and loading
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    useEffect(() => {
        fetch('https://6544ac375a0b4b04436cb3e4.mockapi.io/item/', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        })
            .then(response => response.json())
            .then((json) => {
                data = json;
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));

    },[]);

    var Item = ({ item }) => {
        return (
            <TouchableOpacity style={styles.product__item}
                onPress={() => navigation.navigate({name: 'Product', params: {item}})}
            >
                <Image source={{ uri: item.image }} style={{width: 110, height: 100}}></Image>
                <View style={[styles.item__info, styles.bold]}>
                    <Text style={[styles.item__name, styles.fz20, styles.bold, styles.lh23]}>{item.name}</Text>
                    <Text style={[styles.item__des, styles.fz15, styles.bold, styles.lh17]}>{item.description}</Text>
                    <Text style={[styles.item__price, styles.fz20,  styles.bold, styles.lh17]}>${item.price}.00</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Image source={require('../assets/plus_button.png')}></Image>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.welcome]}>
                <Text style={[styles.jala, styles.fz16, styles.bold, styles.lh18]}>Welcome, Jala!</Text>
                <Text style={[styles.choice, styles.fz20, styles.bold, styles.lh23]}>Choice you Best food</Text>
            </View>

            <View style={styles.searchCon}>
                <TextInput
                    style={[styles.searchBox, styles.fz16, styles.regular, styles.lh18]}
                    placeholder='Search food' />
                <TouchableOpacity>
                    <Image source={require('../assets/search_button.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.btnCon}>
                <TouchableOpacity
                    style={active === 0 ? styles.btnActive : styles.btnNotActive}
                    onPress={() => { setActive(0) }}>
                    <Text style={styles.btnText}>Donut</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={active === 1 ? styles.btnActive : styles.btnNotActive}
                    onPress={() => { setActive(1) }}>
                    <Text style={styles.btnText}>Pink Donut</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={active === 2 ? styles.btnActive : styles.btnNotActive}
                    onPress={() => { setActive(2) }}>
                    <Text style={styles.btnText}>Floating</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.products}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={Item}
                    contentContainerStyle={{ paddingBottom: 175 }}
                    keyExtractor={Item => Item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
    },
    welcome: {
        marginBottom: 20,
    },
    searchCon: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchBox: {
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 1,
        width: 266,
        height: 46,
        paddingLeft: 10,
    },
    btnCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    btnText: {
        textAlign: 'center',
        color: 'rgba(12, 6, 6, 1)',
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        lineHeight: 16.41,
    },
    btnActive: {
        width: 101,
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(241, 176, 0, 1)',
    },
    btnNotActive: {
        width: 101,
        height: 35,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(196, 196, 196, 0.12)',
    },
    jala: {
        color: 'rgba(0, 0, 0, 0.65)',
        marginBottom: 5,
    },
    product__item: {
        flexDirection: 'row',
        marginBottom: 13,
        backgroundColor: '#F4DDDD',
        borderRadius: 10,
        padding: 7,
    },
    item__info: {
        marginLeft: 15,
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    item__des: {
        color: 'rgba(0, 0, 0, 0.54)',
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
    lh16: {
        lineHeight: 16.41,
    },
    lh18: {
        lineHeight: 18.75,
    },
    lh23: {
        lineHeight: 23.44,
    },
    regular: {
        fontFamily: 'Roboto-Regular',
    },
    bold: {
        fontFamily: 'Roboto-Bold',
    },
});