import React from "react"
import { Helmet } from "react-helmet"

const Metadata = ({ description, title }) => {
  return (
    <Helmet defer={false} title={title}>
      <html lang="en" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:description" content={description} />
    </Helmet>
  )
}

export default Metadata
