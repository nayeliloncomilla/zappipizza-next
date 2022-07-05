import Image from 'next/image'

export default function PizzaCard() {
  return (
    <div className="w-full text-white bg-black min-h-[380px] rounded-xl overflow-hidden flex flex-col">
      <Image
        layout="responsive"
        height={50}
        width="100%"
        objectFit="cover"
        src="https://i.imgur.com/rW7MOJF.jpg"
      />
      <div className="bg-primary h-3" />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-primary font-semibold font-display text-2xl">1. Napolitana</h3>
          <p>Tomate, Choricillo, Aceitunas.</p>
        </div>
        <p className="text-2xl mb-4">$7.500</p>
      </div>
    </div>
  )
}
