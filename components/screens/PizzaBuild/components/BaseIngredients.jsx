import baseIngredients from '../data/baseIngredients'
import IngredientImage from './IngredientImage'

export default function BaseIngredients() {
  return (
    <div className="container flex flex-col gap-4 mb-16">
      <h2 className="font-display font-bold text-4xl uppercase">Ingredientes Base</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {baseIngredients.map(ingredient => (
          <IngredientImage key={ingredient.src} ingredient={ingredient} />
        ))}
      </div>
    </div>
  )
}
