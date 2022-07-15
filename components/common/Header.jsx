export default function Header() {
  return (
    <div className="text-white bg-secondary pt-16">
      <h1 className=" bg-primary-500 w-full font-display text-6xl text-center mb-16 py-4  font-bold uppercase">
        Menu
      </h1>
      <div className=" bg-black bg-opacity-50">
        <div className="container text-center flex flex-col gap-4 py-8">
          <p className="text-2xl">Delivery a domicilio</p>
          <h3 className="text-4xl font-display font-semibold">+562 2749 9394 </h3>
          <p className="text-2xl">Todas las pizzas tienen como base Queso Mozzarella, Salsa de tomates y Orégano.</p>
        </div>
      </div>
    </div>
  )
}
