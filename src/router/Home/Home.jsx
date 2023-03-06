// i18n
import { useTranslation } from 'react-i18next'

// Styles
import './Home.scss'

// Component
const Home = () => {
  /**
   * i18n:
   */
  const { t } = useTranslation()

  /**
   * DOM:
   */
  return <h1>{t('hello')}</h1>
}

// Export Component
export default Home
