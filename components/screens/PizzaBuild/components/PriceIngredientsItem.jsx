import PropTypes from 'prop-types'

export default function PriceIngredientsItem({
  price,
  ingredients,
  priceTwice,
}) {
  return (
    <li className="w-full">
      <h6 className="font-display font-bold text-3xl">{ingredients} INGREDIENTES</h6>
      <p className="font-bold text-primary text-5xl">{price}</p>
      <p className="font-bold text-secondary text-5xl">2X {priceTwice}</p>
      <p className="font-bold text-3xl">+ Bebida 1.5 Litros</p>
    </li>
  )
}
PriceIngredientsItem.propTypes = {
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceTwice: PropTypes.string.isRequired,
}
