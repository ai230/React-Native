import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackNav from './app/navigation/StackNav'
import DrawerNav from './app/navigation/DrawerNav'
import TabNav from './app/navigation/TabNav'

export default class App extends Component {
  render() {
    return (
      // <StackNav />
      // <DrawerNav />
      <TabNav />
    );
  }
}