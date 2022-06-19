import { Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout'
import HomePage from './Home'
import NotFoundPage from './NotFound404'
import SearchPage from './Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />}>
          <Route path=':coinName' element={<SearchPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
