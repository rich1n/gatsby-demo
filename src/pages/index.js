import React from "react"
import Body from "../components/Body"
import Header from "../components/Header"
import Seo from "../components/Seo"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <link rel="preload" as="font" />
        <link rel="preconnect" />
        <link rel="demo" title="This is a Gatsby Demo website" />
      </Helmet>
      <Seo />
      <Header />
      <Body />
    </div>
  )
}
