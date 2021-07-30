import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      style={{with:"100% !important"}}
    >
      <div>
        <img src="https://tpc.googlesyndication.com/simgad/10817619479245791022?" />
        </div>
        <div>
          <img src="https://tpc.googlesyndication.com/simgad/14415723953216398405?" />
        </div>
        <div>
          <img src="https://tpc.googlesyndication.com/simgad/1044702841224719890?" />
        </div>
    </Carousel>
    
  </Layout>
)

export default IndexPage
