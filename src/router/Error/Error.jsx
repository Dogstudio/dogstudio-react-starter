// React Router
import { useRouteError } from 'react-router-dom'

// Layout
import Layout from 'layouts/Default'

// Styles
import './Error.scss'

// Component
const Error = () => {
  /**
   * Error:
   */
  const error = useRouteError()

  /**
   * DOM:
   */
  return (
    <Layout className="page-error">
      <h1>{error.statusText || error.message}</h1>
    </Layout>
  )
}

// Export Component
export default Error
