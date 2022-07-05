import DefaultLayout from '../../layouts/DefaultLayout'
import DeliveryInfo from './components/DeliveryInfo'
import FeaturedPizzas from './components/FeaturedPizzas'
import ServiceHours from './components/ServiceHours'

export default function Home() {
  return (
    <DefaultLayout>
      <DeliveryInfo />
      <div className="w-full h-64 bg-black" />
      <FeaturedPizzas />
      <ServiceHours />
    </DefaultLayout>
  )
}
