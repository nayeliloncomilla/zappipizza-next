import PriceIngredientsItem from './PriceIngredientsItem'

const priceIngredients = [
  {
    qty: '3',
    price: '$8.900',
    priceTwice: '$18.900'
  },
  {
    qty: '4',
    price: '$9.900',
    priceTwice: '$20.900'
  },
  {
    qty: '5',
    price: '$10.900',
    priceTwice: '$22.900'
  }
]

export default function PriceIngredients() {
  return (
    <div className="container text-center flex flex-col gap-4 py-16">
      <ul className="text-2xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        {priceIngredients.map(ingredient => (
          <PriceIngredientsItem
            key={ingredient.qty}
            ingredients={ingredient.qty}
            price={ingredient.price}
            priceTwice={ingredient.priceTwice}
          />
        ))}
      </ul>
    </div>
  )
}
