/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Header from "./Header";
import classes from './Layout.module.css'
export default function Layout(props) {
  return (
    <>
    <Header/>
    <section className={classes.content}>
    {props.children}
    </section>
    <Footer/>
    </>
  )
}
