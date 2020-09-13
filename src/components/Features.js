import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => {
  const gridSize = (gridItems.length % 2 === 0) ? 3 : 4
  return (<div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className={'column is-' + gridSize}>
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '96px',
                marginBottom: '2rem',
                display: 'inline-block',
              }}
            >
              {
                item.href ?
                <a href={item.href} target="_blank"><PreviewCompatibleImage imageInfo={item} /></a> :
                <PreviewCompatibleImage imageInfo={item} />
              }
            </div>
          </div>
          <p style={{ textAlign: 'center' }}>
            { item.heading && (<b>{item.heading}</b>) }
            { item.heading && <br/> }
            {item.href ? <a href={item.href} target="_blank">{item.text}</a> : item.text}
          </p>
        </section>
      </div>
    ))}
  </div>)
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      heading: PropTypes.string,
      href: PropTypes.string,
    })
  ),
}

export default FeatureGrid
