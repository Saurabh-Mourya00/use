import { useEffect, useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [connection, setConnection] = useState({
    status: 'checking',
    message: 'Checking backend connection…',
  })

  useEffect(() => {
    let active = true

    fetch('/api/health/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Backend returned HTTP ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (active) {
          setConnection({
            status: data.status === 'ok' ? 'connected' : 'error',
            message:
              data.status === 'ok'
                ? 'Frontend connected to Django'
                : 'Unexpected response from Django',
          })
        }
      })
      .catch((error) => {
        if (active) {
          setConnection({ status: 'error', message: error.message })
        }
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <main className="logo-screen">
      <img className="logo" src={logo} alt="Project logo" />
      <p className={`connection connection--${connection.status}`} role="status">
        <span className="connection__indicator" aria-hidden="true" />
        {connection.message}
      </p>
    </main>
  )
}

export default App
