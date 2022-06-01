import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
