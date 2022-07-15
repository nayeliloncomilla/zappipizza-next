import PropTypes from 'prop-types'
import Menu from '../components/screens/Menu'

export default function MenuPage({ pizzas }) {
  return <Menu pizzas={pizzas} />
}

MenuPage.propTypes = {
  pizzas: PropTypes.array.isRequired
}
export async function getServerSideProps() {
  return {
    props: {
      pizzas: [
        {
          id: 1,
          name: 'Napolitana',
          image: 'https://i.imgur.com/rW7MOJF.jpg',
          price: '$7.500',
          ingredients: 'Tomate, Choricillo, Aceitunas.'
        },
        {
          id: 2,
          name: 'Clásica',
          image: 'https://i.imgur.com/mcl3kLF.jpg',
          price: '$8.500',
          ingredients: 'Tomates, Pimentón, Choricillo, Jamón.'
        },
        {
          id: 3,
          name: 'Jamón Queso',
          image: 'https://i.imgur.com/eURFVr7.jpg',
          price: '$8.900 ',
          ingredients: 'Tomates, Champiñón, Salame, Aceitunas.'
        },
        {
          id: 4,
          name: 'Vegetariana',
          image: 'https://i.imgur.com/ot2bGvZ.jpg',
          price: '$9.900',
          ingredients: 'Tomate, Salame, Pollo, Salchicha, Cebollín.'
        },
        {
          id: 5,
          name: 'Napolitana',
          image: 'https://i.imgur.com/rW7MOJF.jpg',
          price: '$7.500',
          ingredients: 'Tomate, Choricillo, Aceitunas.'
        },
        {
          id: 6,
          name: 'Clásica',
          image: 'https://i.imgur.com/mcl3kLF.jpg',
          price: '$8.500',
          ingredients: 'Tomates, Pimentón, Choricillo, Jamón.'
        },
        {
          id: 7,
          name: 'Jamón Queso',
          image: 'https://i.imgur.com/eURFVr7.jpg',
          price: '$8.900 ',
          ingredients: 'Tomates, Champiñón, Salame, Aceitunas.'
        },
        {
          id: 8,
          name: 'Vegetariana',
          image: 'https://i.imgur.com/ot2bGvZ.jpg',
          price: '$9.900',
          ingredients: 'Tomate, Salame, Pollo, Salchicha, Cebollín.'
        },
        {
          id: 9,
          name: 'Napolitana',
          image: 'https://i.imgur.com/rW7MOJF.jpg',
          price: '$7.500',
          ingredients: 'Tomate, Choricillo, Aceitunas.'
        },
        {
          id: 10,
          name: 'Clásica',
          image: 'https://i.imgur.com/mcl3kLF.jpg',
          price: '$8.500',
          ingredients: 'Tomates, Pimentón, Choricillo, Jamón.'
        },
        {
          id: 11,
          name: 'Jamón Queso',
          image: 'https://i.imgur.com/eURFVr7.jpg',
          price: '$8.900 ',
          ingredients: 'Tomates, Champiñón, Salame, Aceitunas.'
        },
        {
          id: 12,
          name: 'Vegetariana',
          image: 'https://i.imgur.com/ot2bGvZ.jpg',
          price: '$9.900',
          ingredients: 'Tomate, Salame, Pollo, Salchicha, Cebollín.'
        },
      ]
    }
  }
}
