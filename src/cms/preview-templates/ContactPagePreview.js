import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  console.log('Hello!')
  console.log('entry', entry)
  console.log('data', data)
  if (data) {
    return (<ContactPageTemplate
      title={data.title}
      sites={data.sites || []}
    />)
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default ContactPagePreview
