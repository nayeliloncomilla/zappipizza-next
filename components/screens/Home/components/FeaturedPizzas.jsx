import PizzaCard from '@components/common/PizzaCard'

export default function FeaturedPizzas() {
  return (
    <div className="">
      <div className="container flex gap-4 py-6">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}
