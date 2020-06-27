import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Link from "../components/link"
import Feature from "../components/feature"
import Travelers from "../images/undraw_travelers.svg"

const IndexPage = () => {

  return (
    <Layout>
      <SEO
        title="Home"
      />

      <section className="container mx-auto px-6 flex mt-16 md:mt-32 h-auto">
        <div className="max-w-2xl lg:max-w-xl">
          <h1 className="text-2xl md:text-4xl font-medium text-gray-800 leading-tight">Easily divide exepenses with your travel companions</h1>
          <p className="my-6 text-xl md:text-2xl text-gray-700">Divybe is a simple app that keeps track of your shared expenses while you travel. Make sure you get paid!</p>
          <div className="flex flex-wrap">
            <Link type="primary" url="https://app.divybe.com" content="Check it out" />
            <Button type="secondary" action={() => scrollTo("#features")} content="Find out more" />
          </div>
        </div>
        <img src={Travelers} className="pl-12 xl:pl-24 h-0 w-0 lg:w-auto lg:h-auto" />
      </section>

      <section style={{ backgroundImage: "linear-gradient(hsl(0, 95%, 91%), hsl(340, 100%, 98%)"}} className="bg-red-200 mt-32 mb-12 lg:-mt-12">
        <div id="features" className="flex flex-wrap justify-center py-24 container mx-auto px-6">

          <Feature
            title="Built around travel"
            content="Do you struggle to track and calculate what you owe your friends while on a trip? Divybe makes it as easy as adding an expense and choosing who used it."
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-current">
              <path className="secondary text-red-500" d="M19 11.9l2.7 1.14c.18.08.3.26.3.46v2a.5.5 0 0 1-.6.49L12 14 2.6 16a.5.5 0 0 1-.6-.49v-2c0-.2.12-.38.3-.46L5 11.9V10a1 1 0 1 1 2 0v1.06l4.8-2.02a.5.5 0 0 1 .4 0l4.8 2.02V10a1 1 0 0 1 2 0v1.9z"/>
              <path className="primary text-blue-800" d="M12 2a2 2 0 0 1 2 2v8l-1 8h-2l-1-8V4c0-1.1.9-2 2-2z"/>
              <path className="secondary text-red-500" d="M8.64 22.98c-.32.1-.64-.17-.64-.54v-1.1c0-.19.08-.35.2-.46l3.5-2.78c.18-.13.42-.13.6 0l3.5 2.78c.12.1.2.27.2.45v1.11c0 .37-.32.64-.64.54L12 21.9l-3.36 1.07z"/>
            </svg>
          </Feature>

          <Feature
            title="Awesome analytics"
            content="Get the run down on where your money went on your trip, and who wasn't pulling their weight! Divybe gives you all the stats you could want after you get home."
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-current">
              <path className="primary text-blue-800" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm11 4a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"/>
              <path className="secondary text-red-500" d="M8 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/>
            </svg>
          </Feature>

          <Feature
            title="Progressive Web App"
            content="Divybe is a progressive web app, which means you get the native app experience on all of your devices. Just as if you downloaded it from the app store!"
          >
            <svg className="w-24 h-16" xmlns="http://www.w3.org/2000/svg" version="1.1"viewBox="0 0 1952.00 734.93">
              <g>
                <path fill="#f56565" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z "/>
                <path fill="#2c5282" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z "/>
                <path fill="#f56565" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z "/>
              </g>
            </svg>
          </Feature>

        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="mx-24">
          <h1 className="text-2xl font-medium">How it works</h1>
          <ul className="list-decimal list-inside">
            <li>Create a trip</li>
            <li>Invite your friends</li>
            <li>Add your expenses</li>
          </ul>
        </div>
        <img className="mx-24" src="https://via.placeholder.com/400x600" />
      </section>

      <footer className="h-24">

      </footer>

      <button
        onClick={() => scrollTo("#header")}
        className="fixed right-0 bottom-0 m-6 p-2"
      >        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 fill-current text-red-400 transition duration-300 ease-in-out hover:text-red-500">
          <circle cx="12" cy="12" r="10"/>
          <path className="text-white" d="M14 12v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5H8a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 1.4 0l4 4A1 1 0 0 1 16 12h-2z"/>
        </svg>
      </button>
    </Layout>
  );
}

export default IndexPage;
