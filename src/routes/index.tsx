import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home'
import SearchPage from './Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />}>
          <Route path=':coinId' element={<SearchPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
