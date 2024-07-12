import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import Header from './components/Header';
import gamesData from './data/GamesData';
import CustomStatusBar from './components/CustomStatusBar';
import Filter from './components/Filters';

const Stack = createBottomTabNavigator();

export default function App() {
  const [games, setGames] = useState(gamesData);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const addGame = (game) => {
    setGames([...games, game]);
  };

  const markAsSold = (gameId) => {
    setGames(games.map(game => game.id === gameId ? { ...game, sold: true } : game));
  };

  const categories = useMemo(() => {
    const allCategories = games.map(game => game.catégorie);
    return [''].concat([...new Set(allCategories)]);
  }, [games]);

  const filteredGames = games
    .filter(game => (filter ? game.catégorie === filter : true))
    .sort((a, b) => {
      if (sortOrder === 'asc') return parseFloat(a.price) - parseFloat(b.price);
      if (sortOrder === 'desc') return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });

  const totalRevenue = games.filter(game => game.sold).reduce((total, game) => total + game.price, 0);

  return (
    <CustomStatusBar statusBgColor="#01F41A">
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <Header {...props} gameCount={games.length} totalRevenue={totalRevenue} />,
          }}
        >
          <Stack.Screen name="Liste des jeux">
            {(props) => (
              <>
                <Filter setFilter={setFilter} setSortOrder={setSortOrder} categories={categories} />
                <GameList {...props} games={filteredGames} markAsSold={markAsSold} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Ajouter Jeu">
            {(props) => <AddGame {...props} addGame={addGame} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CustomStatusBar>
  );
}
