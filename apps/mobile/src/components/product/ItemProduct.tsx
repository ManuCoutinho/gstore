import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Currency, Product } from '@gstore/core'
import { Ionicons } from '@expo/vector-icons'
import ReviewRate from '../shared/ReviewRate'
import { useInstallments } from '@/src/data/hooks/useInstallments'
import { useCart } from '@/src/data/hooks/useCart'
import COLORS from '@/src/data/constants/Colors'
import type { ProductItemProps } from './types'

export default function ProductItem({ product, selectProduct }: ProductItemProps) {
    const { addItem } = useCart()
    const installment =useInstallments(product.promotionalPrice)

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.product}
                onPress={() => selectProduct?.(product)}
            >
                <Image src={product.image} style={styles.image} alt="Imagem do Produto" />
                <View style={{ flex: 1 }}>
                    <View style={styles.reviewContainer}>
                        <ReviewRate rate={product.rate} />
                    </View>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.fullPrice}>
                        de {Currency.format(product.basePrice)}
                    </Text>
                    <View style={styles.priceContainer}>
                        <Text style={{ color: 'white' }}>por</Text>
                        <Text style={styles.preco}>
                            {Currency.format(product.promotionalPrice)}
                        </Text>
                    </View>
                    <Text style={styles.installment}>
                        ou {installment.installmentsQty}x de{' '}
                        {Currency.format(installment.installmentValue)}
                    </Text>
                </View>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={(e) => {
                    e.preventDefault()
                    addItem(product)
                }}
            >
                <Ionicons name="cart-outline" size={22} style={styles.textButton} />
                <Text style={styles.textButton}>Adicionar</Text>
            </Pressable>
            <LinearGradient
                colors={['transparent', '#7811F5', 'transparent']}
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                style={styles.borderBottom}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        maxWidth: Dimensions.get('window').width,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    fullPrice: {
        fontSize: 14,
        color: '#AAA',
        textDecorationLine: 'line-through',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    preco: {
        fontSize: 24,
        color: '#34d399',
        fontWeight: 'bold',
    },
    installment: {
        fontSize: 14,
        color: '#FFF',
    },
    button: {
        color: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY,
        alignSelf: 'center',
        borderRadius: 9999,
        height: 40,
        paddingHorizontal: 80,
        gap: 8,
    },
    textButton: {
        color: '#FFF',
    },
    borderBottom: {
        marginTop: 20,
        height: 2,
        width: Dimensions.get('window').width,
    },
})
