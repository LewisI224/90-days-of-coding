import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default class extends Component {
  render () {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="homepage-container">

                <div className="homepage-introduction">
                    <h1>Hello 👋, I'm Lewis Inches and this is 90 Days of Coding. </h1>
                    <p>I'm a recent Computer Science Graduate from Heriot-Watt University and a soon to be
                        Graduate Software Engineer at Skyscanner.
                    </p>
                </div>

                <div className="homepage-latest-blog-posts">
                    <h2>
                    Latest Blog Posts
                    <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
                    </h2>

                    <div className="homepage-latest-blog-posts-list">
                        <a href="/blog/post-title">
                        <div className="homepage-latest-blog-post">
                            <div className="homepage-latest-thumbnail">
                                <img src="/" />
                            </div>
                            <div className="homepage-latest-blog-post-title">
                                <h3>Day 5</h3>
                            </div>
                        </div>
                        </a>
                        <a href="/blog/post-title">
                        <div className="homepage-latest-blog-post">
                            <div className="homepage-latest-thumbnail">
                                <img src="/" />
                            </div>
                            <div className="homepage-latest-blog-post-title">
                                <h3>Day 4</h3>
                            </div>
                        </div>
                        </a>
                        <a href="/blog/post-title">
                        <div className="homepage-latest-blog-post">
                            <div className="homepage-latest-thumbnail">
                                <img src="/" />
                            </div>
                            <div className="homepage-latest-blog-post-title">
                                <h3>Day 3</h3>
                            </div>
                        </div>
                        </a>
                        <a href="/blog/post-title">
                        <div className="homepage-latest-blog-post">
                            <div className="homepage-latest-thumbnail">
                                <img src="/" />
                            </div>
                            <div className="homepage-latest-blog-post-title">
                                <h3>Day 2</h3>
                            </div>
                        </div>
                        </a>
                        <a href="/blog/post-title">
                        <div className="homepage-latest-blog-post">
                            <div className="homepage-latest-thumbnail">
                                <img src="/" />
                            </div>
                            <div className="homepage-latest-blog-post-title">
                                <h3>Day 1</h3>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>

                <div className="homepage-projects">
                    <h2>My Projects</h2>
                    <div className="homepage-projects-list">

                        <div className="homepage-project">
                            <h3>
                            <a href="https://github.com/LewisI224">
                            <div className="homepage-project-icon">✍️</div>
                            <div className="homepage-project-title">Blog</div>
                            </a>
                            </h3>
                            <p>The blog that you're looking at right now. Used to document my 90 days of coding during the Summer of 2022</p>
                            <div className="homepage-project-btns">
                                <a className="homepage-project-view-btn" href="https://github.com/LewisI224">View</a>
                            </div>
                        </div>

                        <div className="homepage-project">
                            <h3>
                            <a href="https://github.com/LewisI224">
                            <div className="homepage-project-icon">🌡️</div>
                            <div className="homepage-project-title">Weather App</div>
                            </a>
                            </h3>
                            <p>An app that displays the weather for your current location. Created using Vanilla Javascript</p>
                            <div className="homepage-project-btns">
                                <a className="homepage-project-view-btn" href="https://github.com/LewisI224">View</a>
                            </div>
                        </div>

                        <div className="homepage-project">
                            <h3>
                            <a href="https://github.com/LewisI224">
                            <div className="homepage-project-icon">☣️</div>
                            <div className="homepage-project-title">Reddit Client</div>
                            </a>
                            </h3>
                            <p>A reddit client created uding Kotlin</p>
                            <div className="homepage-project-btns">
                                <a className="homepage-project-view-btn" href="https://github.com/LewisI224">View</a>
                            </div>
                            </div>
                        </div>

                    </div>

            </div>

            <Footer />
        </div>
    )
  }
}