/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import BigList from 'react-native-big-list';

import DATA from './data.json';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const range = n => Array.from(Array(n).keys());

class App extends React.Component {
  constructor() {
    super();
    this.startTime = new Date().getTime();
  }

  componentDidMount() {
    const duration = new Date().getTime() - this.startTime

    console.log(`Rendered ${DATA.length} items in ${duration} ms`);
  }


  render() {
    const renderItem = ({item}) => <Item title={item.first_name} />;

    return (
      <BigList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id + ''}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 0,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 1,
  },
});

export default App;
