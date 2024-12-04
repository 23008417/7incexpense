import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddScreen = ({ route, navigation }) => {
    const { setExpenses } = route.params;
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Expense');

    const handleSave = () => {
        if (!description || !amount) {
            alert('Please fill in all fields');
            return;
        }

        const newExpense = {
            id: Date.now().toString(),
            description,
            amount: parseFloat(amount),
            type,
        };

        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description:</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} />
            <Text style={styles.label}>Amount:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />
            <Text style={styles.label}>Type:</Text>
            <Picker selectedValue={type} onValueChange={setType} style={styles.picker}>
                <Picker.Item label="Expense" value="Expense" />
                <Picker.Item label="Income" value="Income" />
            </Picker>
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    label: { fontSize: 16, marginTop: 8 },
    input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4 },
    picker: { marginVertical: 8 },
});

export default AddScreen;
