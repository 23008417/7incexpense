import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditScreen = ({ navigation, route }) => {
    const { expense, setExpenses } = route.params;
    const [description, setDescription] = useState(expense.description);
    const [amount, setAmount] = useState(expense.amount.toString());
    const [type, setType] = useState(expense.type);

    const handleSave = () => {
        const updatedExpense = {
            ...expense,
            description,
            amount: parseFloat(amount),
            type,
        };

        setExpenses((prevExpenses) =>
            prevExpenses.map((exp) => (exp.id === expense.id ? updatedExpense : exp))
        );

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />
            <Text style={styles.label}>Amount</Text>
            <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            <Button title="Save Changes" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    label: { fontSize: 16, marginBottom: 8 },
    input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4 },
});

export default EditScreen;
