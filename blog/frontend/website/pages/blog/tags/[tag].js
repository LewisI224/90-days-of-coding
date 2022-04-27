import { Component } from "react"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/headMetadata.js"

export default class extends Component {
    static async getInitialProps ({ query }) {
        return {
            tag: query.tag
        }
    }

    render () {
        return (
            <div className="layout-wrapper">
                <Header />
                <HeadMetadata
                    title={`"${this.props.tag}" Posts | 90 Days of Coding`}
                    metaDescription="Hi. Im Lewis Inches, a recent Computer Science Graduate."
                />
                <div className="blog-posts-container">
                    <h1>Blog posts tagged as <u>{this.props.tag}</u></h1>
                    <div className="blog-posts-list">
                        <a href="/blog/post-title">
                        <div className="blog-posts-list-item">
                            <div className="blog-posts-thumbnail">
                                <img src="https://assets.coderrocketfuel.com/coding-blog-nodejs-thumbnail.png" />
                            </div>
                            <div className="blog-posts-list-item-title-and-date">
                                <h2>Blog Post Title</h2>
                                <div className="blog-posts-list-item-date">
                                    <span>27/4/2022</span>
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