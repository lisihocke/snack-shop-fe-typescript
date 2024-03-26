import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/material/Icon';
import SendIcon from '@mui/material/Icon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button variant="text" color="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Button variant="text" size="small" color="secondary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Button variant="contained" size="medium" color="success" startIcon={<DeleteIcon />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Button variant="outlined" size="large" color="error" endIcon={<SendIcon />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
    </>
  )
}

export default App
