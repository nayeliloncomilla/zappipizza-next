import Image from 'next/image'
import PropTypes from 'prop-types'

export default function IngredientImage({ ingredient }) {
  return (
    <div className="w-full relative aspect-[100/12]">
      <Image src={ingredient} objectFit="contain" layout="fill" />
    </div>
  )
}
IngredientImage.propTypes = {
  ingredient: PropTypes.object.isRequired
}
