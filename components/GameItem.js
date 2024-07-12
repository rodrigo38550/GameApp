import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const GameItem = ({ game, markAsSold }) => {
  return (
    <View style={styles.container}>
      {game.thumbnail && <Image source={{ uri: game.thumbnail }} style={styles.image} />}
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.price}>{game.price}€</Text>
      <Text style={styles.category}>{game.catégorie}</Text>
      {game.sold ? (
        <Text style={styles.soldText}>Vendu</Text>
      ) : (
        <TouchableOpacity onPress={() => markAsSold(game.id)} style={styles.sellButton}>
          <Text style={styles.sellButtonText}>€</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
  category: {
    fontSize: 14,
    color: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  sellButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  sellButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  soldText: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
});

export default GameItem;
