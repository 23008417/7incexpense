import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExpenseItem = ({ item, onDelete, onEdit }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.amount}>${item.amount}</Text>
                <Text style={styles.type}>{item.type}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={onEdit} />
                <Button title="Delete" onPress={onDelete} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexShrink: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1 },
    description: { fontSize: 16 },
    amount: { fontSize: 16, color: 'green' },
    type: { fontSize: 14, color: 'gray' },

    buttonContainer: { flexDirection: 'row', gap: 8, paddingVertical: 5, paddingTop: 9},
});

export default ExpenseItem;
