import bgFoodDark from '@images/bg-food-dark.png'

export default function ServiceHours() {
  return (
    <div className="text-white bg-secondary" style={{ backgroundImage: `url(${bgFoodDark.src})` }}>
      <div className="container text-center flex flex-col gap-4 py-16">
        <h3 className="text-3xl mb-8">¡Conoce nuestros horarios!</h3>
        <ul className="flex justify-between text-2xl ">
          <li>
            <h6 className="font-semibold">Martes a Jueves</h6>
            <p>18:00 – 22:30 HRS.</p>
          </li>
          <li>
            <h6 className="font-semibold">Viernes y Sábado </h6>
            <p>18:00 – 23:00 HRS.</p>
          </li>
          <li>
            <h6 className="font-semibold">Domingo </h6>
            <p>18:00 – 22:00 HRS.</p>
          </li>
          <li>
            <h6 className="font-semibold">Lunes </h6>
            <p>Cerrado</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
