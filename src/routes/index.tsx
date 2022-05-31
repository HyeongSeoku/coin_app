import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'
import TmpPage from './TmpPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<TmpPage />} />
      </Route>
    </Routes>
  )
}

export default App
