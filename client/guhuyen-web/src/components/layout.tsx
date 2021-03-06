/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"
// import "./layout.css"

interface Props {
  children: ReactNode
}

const Layout = ({ children } : Props) => {

  return (
    <>    
      <div>     
        <main>{children}</main>        
      </div>
    </>
  )
}

export default Layout