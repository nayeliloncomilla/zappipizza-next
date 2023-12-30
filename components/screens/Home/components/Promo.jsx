import Slider from '@components/common/Slider'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    Component: (
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
  },
  {
    id: 2,
    Component: (
      <Image
        src="/images/slides/promo-2.jpg"
        alt="Promoción"
        width={1920}
        height={1080}
        className="w-full object-cover aspect-[2/1] md:aspect-auto"
        placeholder="blur"
        blurDataURL="/images/slides/promo-2.jpg"
        priority
      />
    )
  }
]

export default function Promo() {
  return (
    <Slider slides={slides} />
  )
}
