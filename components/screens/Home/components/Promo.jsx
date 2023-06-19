import Image from 'next/image'

export default function Promo() {
  return (
    <Image
      src="/images/promo.jpg"
      alt="Promoción"
      width={1920}
      height={1080}
      className="w-full object-cover aspect-[2/1] md:aspect-auto"
      placeholder="blur"
      blurDataURL="/images/promo.jpg"
      priority
    />
  )
}
