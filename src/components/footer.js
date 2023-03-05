import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://www.contentful.com">Contentful</a>
    </div>
  </Container>
)

export default Footer
