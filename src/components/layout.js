import * as React from "react"
import { Nav } from "./Navbar/App"
import { Footer } from "./Footer/App"
import Head from "./head"
import "../styles.css.ts"
import"../styles.css"
export default function Layout(props) {
  return (
    <>
      <Head {...props} />
 <Nav/>
      {props.children}
      <Footer />
    </>
  )
}
