import Header from '@components/common/Header'
import bgFoodLight from '@images/bg-food-light.png'
import DefaultLayout from '../../layouts/DefaultLayout'
import BaseIngredients from './components/BaseIngredients'
import PriceIngredients from './components/PriceIngredients'

export default function PizzaBuild() {
  return (
    <DefaultLayout>
      <Header title="Arma tu Pizza Familiar" />
      <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
        <PriceIngredients />
        <BaseIngredients />
      </div>
    </DefaultLayout>
  )
}
