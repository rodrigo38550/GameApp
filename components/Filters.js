import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Filter = ({ setFilter, setSortOrder, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortOrder, setSelectedSortOrder] = useState('');

  const applyFilters = () => {
    setFilter(selectedCategory);
    setSortOrder(selectedSortOrder);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedSortOrder('');
    setFilter('');
    setSortOrder('');
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        {categories.map((category, index) => (
          <Picker.Item label={category || "All"} value={category} key={index} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedSortOrder}
        onValueChange={(itemValue) => setSelectedSortOrder(itemValue)}
        style={styles.ppicker}
      >
        <Picker.Item label="None" value="" />
        <Picker.Item label="Price: Low to High" value="asc" />
        <Picker.Item label="Price: High to Low" value="desc" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Apply Filters" onPress={applyFilters} />
        <Button title="Reset Filters" onPress={resetFilters} color="#FF6347" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Filter;
