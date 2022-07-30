import PriceIngredientsItem from './PriceIngredientsItem'

export default function PriceIngredients() {
  return (
    <div className="container text-center flex flex-col gap-4 py-16">
      <ul className="text-2xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <PriceIngredientsItem
          ingredients="3"
          price="$8.900"
          priceTwice="$18.900"
        />
        <PriceIngredientsItem
          ingredients="4"
          price="$9.900"
          priceTwice="$20.900"
        />
        <PriceIngredientsItem
          price="$10.900"
          ingredients="5"
          priceTwice="$22.900"
        />
      </ul>
    </div>
  )
}
