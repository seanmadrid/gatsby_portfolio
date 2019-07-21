import React from "react"
import { Helmet } from "react-helmet"
import Transition from "../components/transition"
import Header from "../components/header"
import "../scss/main.scss"
import VantaWaves from "../components/waves"

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    > 
    </Helmet>
    <div>
      <VantaWaves />
      <Header />
      <Transition location={location}>{children}</Transition>
    </div>
  </div>
)

export default TemplateWrapper