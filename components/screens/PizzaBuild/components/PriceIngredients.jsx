import bgFoodLight from '@images/bg-food-light.png'

export default function PriceIngredients() {
  return (
    <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
      <div className="container text-center flex flex-col gap-4 py-16">
        <h3 className="text-3xl mb-8">¡Conoce nuestros horarios!</h3>
        <ul className="text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* TODO: Estos deberían ser componentes igual */}
          <li className="w-full">
            <h6 className="font-semibold">3 INGREDIENTES</h6>
            <p>$8.900</p>
            <p>2x $18.900</p>
            <p>+ Bebida 1.5 Litros</p>
          </li>
          <li className="w-full">
            <h6 className="font-semibold text-3xl mb-4">4 INGREDIENTES</h6>
            <p>$9.900</p>
            <p>2x $20.900</p>
            <p>+ Bebida 1.5 Litros</p>
          </li>
          <li className="w-full">
            <h6 className="font-semibold">5 INGREDIENTES</h6>
            <p>$10.900</p>
            <p>2x $22.900</p>
            <p>+ Bebida 1.5 Litros</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
