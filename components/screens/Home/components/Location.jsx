import bgFoodLight from '@images/bg-food-light.png'

export default function Location() {
  return (
    <div className="text-white bg-dark-700" style={{ backgroundImage: `url(${bgFoodLight.src})` }}>
      <div className="container px-8 py-16 flex flex-col gap-16">
        <h3 className="text-3xl  text-center">
          Nos puedes encontrar en El Abeto #8524, esquina La Estrella.
        </h3>
        <h4 className="text-3xl  text-center">
          Revisa nuestra zona de reparto.
        </h4>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1slpOMPDxzDzj5R4V7UehdLGT-FE&ehbc=2E312F&ll=-33.46139444126733%2C-70.75056230444639&z=14"
          width="100%"
          title="Map"
          height="480"
        />
      </div>
    </div>
  )
}
