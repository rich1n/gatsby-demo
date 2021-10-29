import React from "react"
import Seo from "../components/Seo"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Body from "../components/Body"

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
