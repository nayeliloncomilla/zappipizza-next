import PropTypes from 'prop-types'
import bgFoodLight from '@images/bg-food-light.png'
import PizzaCard from '@components/common/PizzaCard'
import MenuButton from './MenuButton'

export default function FeaturedPizzas({ pizzas }) {
  return (
    <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
      <div className="container px-8 py-16 flex flex-col gap-16">
        <h3 className="text-3xl  text-center">
          LAS RECOMENDACIONES DE LA CASA
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pizzas.map(item => (
            <PizzaCard
              key={item.id}
              id={item.id}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <MenuButton />
      </div>
    </div>
  )
}

FeaturedPizzas.propTypes = {
  pizzas: PropTypes.array.isRequired
}
