import PropTypes from 'prop-types'
import pizzas from '../data/pizzas.json'
import Home from '../components/screens/Home'

export async function getServerSideProps() {
  return {
    props: {
      featuredPizzas: pizzas.filter(pizza => pizza.featured).slice(0, 4)
    }
  }
}

export default function HomePage({ featuredPizzas }) {
  return (
    <Home featuredPizzas={featuredPizzas} />
  )
}

HomePage.propTypes = {
  featuredPizzas: PropTypes.array.isRequired
}
