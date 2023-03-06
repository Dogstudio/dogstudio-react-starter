// Dependencies
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

// Styles
import './Default.scss'

// Component
const Default = (props) => {
  /**
   * Properties:
   */
  const { children, className } = props

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames('page', className)

  /**
   * DOM:
   */
  return <article className={classNames}>{children}</article>
}

// Prop Types
Default.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

// Default Props
Default.defaultProps = {
  children: null,
  className: '',
}

// Export Component
export default Default
