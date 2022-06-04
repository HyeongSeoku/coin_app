import Layout from 'components/Layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import ActivityPage from './Activity'
import HomePage from './Home'

const App = () => {
  const location = useLocation()

  return (
    <Routes location={location}>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='activity' element={<ActivityPage />}>
          <Route path=':coinId' element={<ActivityPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
