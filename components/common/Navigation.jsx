import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo-color.png'

const routes = [
  { label: 'inicio', href: '/' },
  { label: 'menu', href: '/menu' },
  { label: 'crea tu pizza', href: '/pizza-build' }
]

export default function Navigation() {
  return (
    <nav className="bg-black text-white">
      <div className="container flex justify-between items-center py-6">
        <Image src={logo} objectFit="contain" width={125} height={35} />
        <ul className="flex gap-6 uppercase">
          {routes.map(route => (
            <Link key={route.href} href={route.href}>
              <li className="cursor-pointer hover:text-primary transition duration-150">
                {route.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
