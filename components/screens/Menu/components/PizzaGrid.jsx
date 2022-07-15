import PropTypes from 'prop-types'
import bgFoodLight from '@images/bg-food-light.png'
import PizzaCard from '@components/common/PizzaCard'

export default function PizzaGrid({ pizzas }) {
  return (
    <div className=" bg-black text-white " style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
      <div className="container py-16 px-8">
        <div className="grid grid-cols-4 gap-4">
          {pizzas.map(item => (
            <PizzaCard
              id={item.id}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

PizzaGrid.propTypes = {
  pizzas: PropTypes.array.isRequired
}
