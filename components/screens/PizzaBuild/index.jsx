import Header from '@components/common/Header'
import DefaultLayout from '../../layouts/DefaultLayout'
import PriceIngredients from './components/PriceIngredients'

export default function PizzaBuild() {
  return (
    <DefaultLayout>
      <Header />
      <PriceIngredients />
    </DefaultLayout>
  )
}
