import { Component } from "react"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Blog Posts | 90 Days of Coding"
                    metaDescription="Hi. Im Lewis Inches, a recent Computer Science Graduate."
                />
                <Header />
                <div className="blog-posts-container">
                    <h1>Blog posts</h1>
                    <div className="blog-posts-list">

                        <a href="/blog/post-title">
                            <div className="blog-posts-list-item">
                                <div className="blog-posts-thumbnail">
                                    <img src="/"></img>
                                </div>
                                <div className="blog-posts-list-item-title-and-date">
                                    <h2>Blog Post Title</h2>
                                    <div className="blog-posts-list-item-and-date">
                                        <span>27/04/2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/blog/post-title">
                            <div className="blog-posts-list-item">
                                <div className="blog-posts-thumbnail">
                                    <img src="/" />
                                </div>
                                <div className="blog-posts-list-item-title-and-date">
                                    <h2>Your Blog Post Title</h2>
                                    <div className="blog-posts-list-item-date">
                                        <span>5/1/2020</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}