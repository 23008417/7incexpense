import React, { useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExpenseItem from '../components/ExpenseItem';

const HomeScreen = () => {
    const [expenses, setExpenses] = useState([]);
    const navigation = useNavigation();

    const calculateSummary = () => {
        const income = expenses
            .filter((item) => item.type === 'Income')
            .reduce((sum, item) => sum + parseFloat(item.amount), 0);
        const expense = expenses
            .filter((item) => item.type === 'Expense')
            .reduce((sum, item) => sum + parseFloat(item.amount), 0);
        const balance = income - expense;

        Alert.alert(
            'Summary',
            `Income: $${income.toFixed(2)}\nExpense: $${expense.toFixed(2)}\nBalance: $${balance.toFixed(2)}`,
            [{ text: 'OK' }]
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ExpenseItem
                        item={item}
                        onDelete={() => setExpenses(expenses.filter((exp) => exp.id !== item.id))}
                        onEdit={() =>
                            navigation.navigate('Edit', {
                                expense: item,
                                setExpenses,
                            })
                        }
                    />
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No expenses added!</Text>}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Add"
                    onPress={() =>
                        navigation.navigate('Add', { setExpenses })
                    }
                />
                <Button title="View Summary" onPress={calculateSummary} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 150 },
    emptyText: { textAlign: 'center', marginTop: 16, fontSize: 16, color: 'gray' },
});

export default HomeScreen;
