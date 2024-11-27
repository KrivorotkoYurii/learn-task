import React from 'react';
import styles from './CatalogPage.module.scss';
import { Loader } from '../../components/Loader';
import { useQuery } from 'react-query';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const fetchMealsByLetters = async (): Promise<Meal[]> => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const requests = alphabet.map(async letter => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data.meals || [];
  });

  const results = await Promise.all(requests);

  return results.flat();
};

export const CatalogPage: React.FC = () => {
  const {
    data: meals,
    isLoading,
    isError,
    error,
  } = useQuery<Meal[], Error>(['mealsByLetters'], fetchMealsByLetters);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  if (!meals || !meals.length) {
    return <p>No meals found.</p>;
  }

  return (
    <div className={styles.recipesContainer}>
      <h1>Recipes</h1>
      <ul className={styles.recipesList}>
        {meals.map(meal => (
          <li key={meal.idMeal} className={styles.recipeItem}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className={styles.recipeImage}
            />
            <h2>{meal.strMeal}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
