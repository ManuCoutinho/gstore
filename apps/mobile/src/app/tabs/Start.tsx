import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import ItemProduct from '../../components/product/ItemProduct'
import { useProducts } from '@/src/data/hooks/useProducts'


export default function Start({ navigation }: any) {
    const { product: products } = useProducts()
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
        >
          {products?.map((product) => (
            <ItemProduct
              key={product.id}
              product={product}
              selectProduct={() =>
                navigation.navigate("ProdutoDetalhes", { product })
              }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
})
