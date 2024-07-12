import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ gameCount, totalRevenue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <Text style={styles.username}>Votre Pseudo</Text>
        <Text style={styles.gameCount}>Nb jeux vidéo: {gameCount}</Text>
      </View>
      <Text style={styles.totalRevenue}>Total encaissé: {totalRevenue}€</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameCount: {
    fontSize: 18,
  },
  totalRevenue: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
});

export default Header;
