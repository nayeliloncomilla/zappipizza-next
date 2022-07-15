import PropTypes from 'prop-types'
import Home from '../components/screens/Home'

export async function getServerSideProps() {
  return {
    props: {
      featuredPizzas: [
        {
          id: 1,
          name: 'Napolitana',
          image: 'https://i.imgur.com/rW7MOJF.jpg',
          price: '$7.500',
          ingredients: 'Tomate, Choricillo, Aceitunas.'
        },
        {
          id: 2,
          name: 'Española',
          image: 'https://i.imgur.com/mcl3kLF.jpg',
          price: '$8.500',
          ingredients: 'Tomates, Pimentón, Choricillo, Jamón.'
        },
        {
          id: 3,
          name: 'Calabrezza',
          image: 'https://i.imgur.com/eURFVr7.jpg',
          price: '$8.900 ',
          ingredients: 'Tomates, Champiñón, Salame, Aceitunas.'
        },
        {
          id: 4,
          name: 'Suprema',
          image: 'https://i.imgur.com/ot2bGvZ.jpg',
          price: '$9.900',
          ingredients: 'Tomate, Salame, Pollo, Salchicha, Cebollín.'
        },
      ]
    }
  }
}

export default function HomePage({ featuredPizzas }) {
  return <Home featuredPizzas={featuredPizzas} />
}

HomePage.propTypes = {
  featuredPizzas: PropTypes.array.isRequired
}
