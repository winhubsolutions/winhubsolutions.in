import React from "react"
import PropTypes from "prop-types"



export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />  
        {props.headComponents}
        <link rel="apple-touch-icon" href="" alt={"Cadvision"}/>

        <link href=" https://sad-faraday.159-223-103-242.plesk.page/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" rel="stylesheet" />

       



          

 
      </head>


      <body {...props.bodyAttributes}>
        
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

      {props.postBodyComponents}
        </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}