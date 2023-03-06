// React Router
import { Outlet, useMatches, useSearchParams } from 'react-router-dom'

// Layout
import Layout from 'layouts/Default'

// Components
// -- Partials
import Grid from 'components/partials/Grid'

// Utilities
import { DEV } from 'utils/constants'

// Styles
import './Root.scss'

// Component
const Root = () => {
  /**
   * Router:
   */
  const match = useMatches()[1]
  const [params] = useSearchParams()

  /**
   * Variables:
   */
  const debug = DEV && params.get('debug') === 'grid'

  /**
   * DOM:
   */
  return (
    <>
      <Layout className={`page-${match.id}`}>
        <Outlet />
      </Layout>

      {debug && <Grid />}
    </>
  )
}

// Export Component
export default Root
