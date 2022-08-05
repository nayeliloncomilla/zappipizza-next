import Header from '@components/common/Header'
import bgFoodLight from '@images/bg-food-light.png'
import DefaultLayout from '../../layouts/DefaultLayout'
import BaseIngredients from './components/BaseIngredients'
import ChoiceIngredients from './components/ChoiceIngredients'
import PriceIngredients from './components/PriceIngredients'
import meatIngredients from './data/meatIngredients'
import sauceIngredients from './data/sauceIngredients'
import specialIngredients from './data/specialIngredients'
import vegetalIngredients from './data/vegetalIngredients'

export default function PizzaBuild() {
  return (
    <DefaultLayout>
      <Header title="Arma tu Pizza Familiar" />
      <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
        <PriceIngredients />
        <BaseIngredients />
        <div className="container flex flex-col gap-4">
          <h2 className="font-display font-bold text-4xl uppercase">INGREDIENTES A ELECCIÓN</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <ChoiceIngredients ingredients={vegetalIngredients} title="Vegetales" price="1.000" />
            <ChoiceIngredients ingredients={meatIngredients} title="Carnes" price="1.000" />
            <div className="flex w-full flex-col gap-2">
              <ChoiceIngredients ingredients={sauceIngredients} title="Salsas" price="1.000" />
              <ChoiceIngredients ingredients={specialIngredients} title="Especiales" price="2.000" />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
