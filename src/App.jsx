import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Box>
      <Home />
     </Box>
  )
}

export default App
