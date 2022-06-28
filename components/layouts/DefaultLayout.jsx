import PropTypes from 'prop-types'
import Navigation from '../common/Navigation'

export default function DefaultLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen w-full font-body">
      <Navigation />
      <div className="flex-1">{children}</div>
      <footer className="h-24 bg-black text-white">footer</footer>
    </main>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
