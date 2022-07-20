import Image from 'next/image'
import PropTypes from 'prop-types'

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  image
}) {
  return (
    <div className="w-full text-white bg-black min-h-[380px] rounded-xl overflow-hidden flex flex-col">
      <Image
        layout="responsive"
        height={50}
        width="100%"
        objectFit="cover"
        src={image}
      />
      <div className="bg-primary h-1" />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-primary font-semibold font-display text-2xl">{id}. {name}</h3>
          <p>{ingredients}</p>
        </div>
        <p className="text-2xl mb-4">{price}</p>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
