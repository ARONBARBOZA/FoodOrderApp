import { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const AvailableMeals = props => {
  const [meals, SetMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://secondapp-f6d9e-default-rtdb.firebaseio.com/meals.json')
      const data = await response.json()
      //console.log(data)

      //console.log(Object.values(data))
      const mealData = []
      for (let meal in data) {
        const datas = {
          id: meal,
          key: meal,
          name: data[meal].name,
          price: data[meal].price,
          description: data[meal].description
        }
        mealData.push(datas)
      }
      SetMeals(mealData)
    }
    fetchMeals()
  }, [])

  //fetchMeals()
  //const mealssList = Object.values(meals).map(meal => console.log(meal, 'Now', meal.id, meal.key))

  const mealsList = meals.map(meal => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} details={meal.description} price={meal.price} />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
