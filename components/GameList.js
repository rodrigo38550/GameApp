import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameItem from './GameItem';

const GameList = ({ games, markAsSold }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameItem game={item} markAsSold={markAsSold} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default GameList;
