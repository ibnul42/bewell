import { useDispatch } from 'react-redux'
import Layout from './Layout'
import { useEffect } from 'react'
import { getUser } from './features/auth/authSlice'
import 'react-quill/dist/quill.snow.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return (
    <>
      <Layout />
    </>
  )
}

export default App
