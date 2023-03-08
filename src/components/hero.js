import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <StaticImage
        className={styles.image}
        alt={title}
        src="https://images.pexels.com/photos/325680/pexels-photo-325680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero
