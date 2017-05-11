import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardButton from './CardButton';

// Build the cards here
const MealDetail = () => {
  const { headerContentStyle, headerItemsContainer, headerItemContainer } = styles;
  return (
    <Card>
      <CardHeader style={headerContentStyle}>
        <View style={headerItemsContainer}>
          <View style={headerItemContainer}>
            <Text>11/05/17</Text>
          </View>
          <View style={headerItemsContainer}>
            <Text>0/2500</Text>
          </View>
        </View>
      </CardHeader>

      <CardBody />
        <CardBody />
          <CardBody />
            <CardBody />
      <CardButton />
    </Card>
  );
};

const styles = {
  headerItemsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  headerItemContainer: {
    paddingLeft: 10,
    flex: 3
  },
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};
export default MealDetail;
