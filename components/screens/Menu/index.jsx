import DefaultLayout from '../../layouts/DefaultLayout'
import FeaturedPizzas from '../Home/components/FeaturedPizzas'

export default function Menu() {
  return (
    <DefaultLayout>
      <FeaturedPizzas />
      <FeaturedPizzas />
      <FeaturedPizzas />
      <FeaturedPizzas />
      <FeaturedPizzas />
    </DefaultLayout>
  )
}
