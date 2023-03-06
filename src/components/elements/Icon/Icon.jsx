// React
import React, { useMemo } from 'react'

// Dependencies
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

// Icons
const ICONS = {}

// Component
const Icon = (props) => {
  /**
   * Properties:
   */
  const { name, width, height, ...rest } = props

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames('svg', `svg--${name}`)

  /**
   * Component:
   *
   * The `Component` variable is a React component.
   * This variable is defined using the `name` property.
   */
  const Component = useMemo(() => ICONS[name], [name])

  /**
   * Inline CSS:
   *
   * The `styles` variable is an object that contains the width and height of the icon.
   * This variable is defined using the `width` and `height` properties.
   */
  const styles = useMemo(
    () => ({
      width: `${width}px`,
      height: `${height}px`,
    }),
    [width, height]
  )

  /**
   * DOM:
   */
  return (
    Component && (
      <span style={styles} className={classNames} {...rest}>
        <Component width={width} height={height} />
      </span>
    )
  )
}

// Prop Types
Icon.propTypes = {
  // -- Properties
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

// Export Pure Component
export default React.memo(Icon)
