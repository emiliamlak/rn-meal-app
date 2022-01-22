import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
    return (<View><Text>{itemData.item.title}</Text></View>);
    };

    const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(catId) >= 0
  );

    return (
        <View style={styles.screen}>
        <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem}/>
            <Button title="Go to Meal Detail!" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' });
            }} />
            <Button title='Go Back' onPress={() => {
                props.navigation.pop();
            }} />
        </View>);
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;