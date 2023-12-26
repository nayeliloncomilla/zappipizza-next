import Image from 'next/image'

export default function Promo() {
  return (
    <Image
      src="/images/slides/promo-1.jpg"
      alt="Promoción"
      width={1920}
      height={1080}
      className="w-full object-cover aspect-[2/1] md:aspect-auto"
      placeholder="blur"
      blurDataURL="/images/slides/promo-1.jpg"
      priority
    />
  )
}
