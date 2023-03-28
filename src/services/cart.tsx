import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { View, Text, Button } from 'react-native';
import { database } from './firebaseConfig';

/*

IDEIA DA IMPLEMENTAÇÃO DO CARRINDO DE COMPRAS


type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type CartProps = {
  uid: string;
};

const Cart = ({ uid }: CartProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cartItems: CartItem[] = [];
      const q = query(collection(database, 'carts'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const item = doc.data() as CartItem;
        cartItems.push(item);
      });
      setItems(cartItems);
    };
    fetchData();
  }, [uid]);

  const addItem = (product: Product) => {
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingItemIndex >= 0) {
      const newItems = [...items];
      newItems[existingItemIndex].quantity++;
      setItems(newItems);
    } else {
      const newItem: CartItem = { product, quantity: 1 };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (product: Product) => {
    const existingItemIndex = items.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingItemIndex >= 0) {
      const newItems = [...items];
      newItems[existingItemIndex].quantity--;
      if (newItems[existingItemIndex].quantity === 0) {
        newItems.splice(existingItemIndex, 1);
      }
      setItems(newItems);
    }
  };

  return (
    <>
      {items.map((item) => (
        <View key={item.product.id}>
          <Text>{item.product.name}</Text>
          <Text>Price: {item.product.price}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Button title="Add" onPress={() => addItem(item.product)} />
          <Button title="Remove" onPress={() => removeItem(item.product)} />
        </View>
      ))}
    </>
  );
};

export default Cart;
*/

