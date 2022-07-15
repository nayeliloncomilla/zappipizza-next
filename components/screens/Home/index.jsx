import PropTypes from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import DeliveryInfo from './components/DeliveryInfo'
import FeaturedPizzas from './components/FeaturedPizzas'
import ServiceHours from './components/ServiceHours'

export default function Home({ featuredPizzas }) {
  return (
    <DefaultLayout>
      <DeliveryInfo />
      <FeaturedPizzas pizzas={featuredPizzas} />
      <ServiceHours />
    </DefaultLayout>
  )
}

Home.propTypes = {
  featuredPizzas: PropTypes.array.isRequired
}
