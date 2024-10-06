import { StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { useCart } from "@/src/data/hooks/useCart";
import { useCheckout } from "@/src/data/hooks/useCheckout";
import CheckoutHeader from "@/src/components/checkout/Header";
import DeliveryForm from "@/src/components/checkout/payment/DeliveryForm";
import CheckoutResume from "@/src/components/checkout/payment/Resume";
import PaymentMethod from "@/src/components/checkout/payment/PaymentMethods";

export default function Checkout() {
  const { installment, itemsQty, total, fullValue } = useCart();
  const {
    delivery,
    paymentMethod,
    updateDelivery,
    updatePaymentMethod,
    checkout,
  } = useCheckout();

  return (
    <SafeAreaView style={styles.container}>
      <CheckoutHeader />
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <Text style={styles.title}>Forma de Pagamento</Text>
        <PaymentMethod
          paymentMethod={paymentMethod}
          updatePayment={updatePaymentMethod}
        />
        <Text style={styles.title}>Dados da Entrega</Text>
        <DeliveryForm delivery={delivery} updateDelivery={updateDelivery} />
      </ScrollView>

      <CheckoutResume
        itemsQty={itemsQty}
        total={total}
        fullValue={fullValue}
        installment={installment!}
        checkout={checkout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
  },
  containerScroll: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});
