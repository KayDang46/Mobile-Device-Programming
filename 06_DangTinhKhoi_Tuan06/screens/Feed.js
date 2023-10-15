import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default Feed = () => {
    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular, Roboto_700Bold
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.AlignCenter}>
            <View style={[styles.Margin , styles.Mb12]}>
                <Image source={require('../assets/vs_blue.png')} />
            </View>

            <View style={styles.ContentCenter}>
                <Text style={[styles.Text15, styles.TextCenter]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

                <View style={[styles.FlexRow]}>
                    <StarRatingDisplay rating={5} color="#E0E41A" starSize="25" starStyle={star.Styled}/>
                    <Text style={styles.Text15}>(Xem 828 đánh giá)</Text>
                </View>

                <View style={[styles.FlexRow]}>
                    <Text style={styles.Text18}>1.790.000 đ</Text>
                    <Text style={[styles.Text18, styles.OldPrice]}>1.790.000 đ</Text>
                </View>

                <View>
                    <Text style={styles.Text12}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Pressable onPress={()=>{
                        navigation.navigate('Color')
                    }} style={styles.btnColor}>
                        <Text>4 MÀU - CHỌN MÀU</Text>
                        <Icon name="chevron-right" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AlignCenter: {
        alignItems: 'center',
    },
    ContentCenter: {
        minWidth: 300,
    },
    FlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    Mb12: {
        marginBottom: 12,
    },
    MainImage: {
        maxWidth: 301,
        maxHeight: 361,
    },
    Text12: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        lineHeight: 14.06,
        color: '#FA0000',
    },
    Text15: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        lineHeight: 17.58,
    },
    Text18: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        lineHeight: 21.09,
    },
    OldPrice: {
        fontSize: 15,
        lineHeight: 17.58,
        color: 'rgba(0, 0, 0, 0.58)',
        textDecorationLine: 'line-through',
        textDecorationColor: 'black',
    },
});

const star = StyleSheet.create({
    Styled: {
        marginHorizontal: 2,
    }
})