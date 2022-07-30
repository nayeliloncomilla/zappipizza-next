import mozzarella from '@images/ingredients/mozzarella.png'
import oregano from '@images/ingredients/oregano.png'
import salsa from '@images/ingredients/salsa-de-tomate.png'
import Image from 'next/image'

export default function BaseIngredients() {
  console.log(mozzarella)
  return (
    <div className="container flex flex-col gap-4 py-16">
      <h2 className="font-display font-bold text-4xl uppercase">Ingredientes Base</h2>
      <div className="flex">
        <Image src={mozzarella} layout="responsive" />
        <Image src={oregano} layout="responsive" />
        <Image src={salsa} layout="responsive" />
      </div>
    </div>
  )
}
