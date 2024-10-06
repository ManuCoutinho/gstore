import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Specifications from '../../components/product/Specifications'
import BannerShop from '../../components/product/BannerShop'
import COLORS from '@/src/data/constants/Colors'
import PriceSeries from '@/src/components/product/PriceSeries'
import UsersReview from '@/src/components/product/UsersReview'

export default function ProductDetails(props: any) {
    const { product } = props.route.params
    if (!product) return null

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productInfo}>
                <Text style={styles.title}>{product.nome}</Text>
                <View style={styles.imageBackground}>
                    <Image src={product.image} style={styles.image} />
                </View>
                <Specifications product={product} />
            </View>
            <BannerShop product={product} />
            <PriceSeries product={product} />
            <UsersReview rate={product.rate} />
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        gap: 10,
        backgroundColor: COLORS.BG_PRIMARY,
    },
    productInfo: {
        backgroundColor: COLORS.BG_PRIMARY,
        padding: 20,
        gap: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    imageBackground: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        height: 230,
    },
    image: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },
})
