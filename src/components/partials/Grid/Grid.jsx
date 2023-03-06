// React
import React, { useRef, useState, useEffect, useCallback } from 'react'

// Dependencies
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

// Utilities
import Helper from 'utils/helpers/grid'

// Styles
import './Grid.scss'

// Component
const Grid = ({ className }) => {
  /**
   * Local State:
   */
  const [showToolbar, setShowToolbar] = useState(true)

  /**
   * References:
   */
  const grid = useRef(null)
  const toolbar = useRef(null)

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames(className, {
    'site-grid__toolbar': true,
    'site-grid__toolbar--hidden': !showToolbar,
  })

  /**
   * Handlers:
   */
  const handleToolbarToggle = useCallback(() => {
    setShowToolbar(!showToolbar)
  }, [showToolbar, setShowToolbar])

  /**
   * Lifecycle:
   */
  useEffect(() => {
    // Construct Grid
    const Grid = new Helper(grid.current, toolbar.current)

    // Grid Observer
    Grid.observe(document.documentElement, ['--grid-columns', '--grid-gutters'])

    // Unmount
    return () => {
      // Grid Observer
      Grid.unobserve()
    }
  }, [])

  /**
   * DOM:
   */
  return (
    <section className="site-grid">
      <div ref={grid} className="site-grid__layout" />

      <div ref={toolbar} className={classNames}>
        <div className="site-grid__toolbar-inner">
          <div className="site-grid__toolbar-item">
            <input id="toggle-columns" type="checkbox" />
            <label htmlFor="toggle-columns">Show Columns</label>
          </div>

          <div className="site-grid__toolbar-item">
            <input id="toggle-gutters" type="checkbox" />
            <label htmlFor="toggle-gutters">Show Gutters</label>
          </div>

          <div className="site-grid__toolbar-item">
            <input id="toggle-edges" type="checkbox" />
            <label htmlFor="toggle-edges">Show Edges</label>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToolbarToggle}
          className="site-grid__toolbar-toggle"
        >
          <span className="u-visually-hidden">Toggle Toolbar</span>
        </button>
      </div>
    </section>
  )
}

// Prop Types
Grid.propTypes = {
  className: PropTypes.string,
}

// Default Props
Grid.defaultProps = {
  className: '',
}

// Export Pure Component
export default React.memo(Grid)
