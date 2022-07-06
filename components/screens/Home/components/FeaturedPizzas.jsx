import bgFoodLight from '@images/bg-food-light.png'
import PizzaCard from '@components/common/PizzaCard'
import MenuButton from './MenuButton'

export default function FeaturedPizzas() {
  return (
    <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
      <div className="container px-8 py-16 flex flex-col gap-16">
        <h3 className="text-3xl  text-center">
          LAS RECOMENDACIONES DE LA CASA
        </h3>
        <div className="flex gap-4 ">
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
        <MenuButton />
      </div>
    </div>
  )
}
