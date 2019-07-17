import React from "react"
import "../../css/global.css"
import "./home.css"
import { Link } from "gatsby"

export default () => (
  <React.Fragment>
    <section>
      <section className="flex">
        <section className="home-card w-full bg-white rounded m-4 shadow-lg flex flex-wrap justify-center overflow-hidden">
          <div className="mt-32 content">
            <h1 className="my-font">
              Hi, I'm Gigarthan; Developer from Sri Lanka
            </h1>
            <div className="hr-line" />
            <div className="nav">
              <ul className="flex list-none justify-center my-font">
                <li className="m-2 mb-0">
                  <div className="li">
                    <p>
                      <a
                        className="no-underline text-black"
                        href="https://medium.com/@gigarthan"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </p>
                    <div className="li-line" />
                  </div>
                </li>
                <li className="m-2 mb-0">
                  <div className="li">
                    <p>Projects</p>
                    <div className="li-line" />
                  </div>
                </li>
                <li className="m-2 mb-0">
                  <div className="li">
                    <p>
                      <a
                        className="no-underline text-black"
                        href="https://twitter.com/gigarthan"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </p>
                    <div className="li-line" />
                  </div>
                </li>
                <li className="m-2 mb-0">
                  <div className="li">
                    <p>
                      <Link className="no-underline text-black" to="research">
                        Research
                      </Link>
                    </p>
                    <div className="li-line" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <section className="lines">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
            <div className="line line-5" />
            <div className="line line-6" />
            <div className="line line-7" />
            <div className="line line-8" />
          </section> */}
        </section>
      </section>
    </section>
  </React.Fragment>
)
