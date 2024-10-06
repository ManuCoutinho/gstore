import { TextInput, StyleSheet, View } from 'react-native'
import type { DeliveryFormProps } from './types'



export default function FormularioEntrega({ delivery,  updateDelivery, className }: DeliveryFormProps) {

    function updateAttribute(attribute: string) {
        return (value: any) => {
        updateDelivery({ ...delivery, [attribute]: value })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={delivery.name}
                onChangeText={updateAttribute('nome')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={delivery.email}
                onChangeText={updateAttribute('email')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={delivery.document}
                onChangeText={updateAttribute('cpf')}
                keyboardType="numeric"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={delivery.address}
                onChangeText={updateAttribute('logradouro')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Complemento"
                value={delivery.complement}
                onChangeText={updateAttribute('complemento')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={delivery.city}
                onChangeText={updateAttribute('cidade')}
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={delivery.state}
                onChangeText={updateAttribute('estado')}
                placeholderTextColor="#999"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#241440',
    },
})
