import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>hh</header>
      <main>
        <Outlet />
      </main>
      <footer>ff</footer>
    </div>
  )
}

export default Layout
