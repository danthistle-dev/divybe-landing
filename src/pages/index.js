import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button"
import Travelers from "../images/undraw_travelers.svg"

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
      />

      <section className="flex my-16 md:my-32 h-auto">
        <div style={{ fontFamily: "Roboto" }} className="max-w-2xl lg:max-w-xl">
          <h1 className="text-2xl md:text-4xl font-medium text-gray-800 leading-tight">Easily divide exepenses with your travel companions</h1>
          <p className="my-6 text-xl md:text-2xl text-gray-700">Divybe is a simple app that keeps track of your shared expenses while you travel. Make sure you get paid!</p>
          <div className="flex flex-wrap">
            <Button type="primary" url="https://app.divybe.com" content="Check it out" />
            <Button type="secondary" url="#" content="Find out more" />
          </div>
        </div>
        <img src={Travelers} className="pl-12 xl:pl-24 w-0 lg:w-auto" />
      </section>
    </Layout>
  );
}

export default IndexPage;
