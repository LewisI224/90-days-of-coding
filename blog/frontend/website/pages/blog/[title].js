import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"

export default class extends Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Your Blog Post Title | 90 Days of Coding"
                    metaDescription="This meta description will be pulled from our backend REST API when we have it build later on in this course."
                />
                <Header />
                    <div className="blog-post-container">
                        <div className="blog-post-top-section">
                            <h1>Your Blog Post Title</h1>
                            <div className="blog-post-top-meta">
                                <span>5/1/2020</span>
                                <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
                                    <span>javascript</span>
                                </a>
                                <a className="blog-post-top-tag-btn" href="/blog/tags/css">
                                    <span>css</span>
                                </a>
                            </div>
                        </div>
                        <div className="blog-post-body-content">

                        <blockquote>Warning or special message that you want to stand out should be placed in this blockquote element.</blockquote>

                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}