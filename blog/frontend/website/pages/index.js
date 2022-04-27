import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
    static async getInitialProps () {

        const apiResult = await getFiveNewestPosts()
        return {
          posts: apiResult && apiResult.posts
        }
        
    }

    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="90 Days of Coding"
                    metaDescription="Hi. Im Lewis Inches, a recent Computer Science Graduate."
                />
                <Header />
                <div className="homepage-container">

                    <div className="homepage-introduction">
                        <h1>Hello 👋, I'm Lewis Inches. Welcome to my blog, 90 days of Coding. </h1>
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
                        {
                            this.props.posts ?
                            this.props.posts.map((post, index) => {
                            return (
                                <a key={index} href={`/blog/${post.urlTitle}`}>
                                <div className="homepage-latest-blog-post">
                                    <div className="homepage-latest-thumbnail">
                                    <img src={post.thumbnailImageUrl} />
                                    </div>
                                    <div className="homepage-latest-blog-post-title">
                                    <h3>{post.title}</h3>
                                    </div>
                                </div>
                                </a>
                            )
                            }) : null
                        }
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