import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Contact | 90 Days of Coding"
                    metaDescription="Hi. Im Lewis Inches, a recent Computer Science Graduate."
                />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>Hello 👋, I'm Lewis Inches. </p>
                        <p> I'm a recent Computer Science Graduate from Heriot-Watt University and a soon to be
                            Graduate Software Engineer at Skyscanner. See the links below to have a look at some
                            of my work and feel free to contact me for a discussion 😊
                        </p>
                    </div>
                    <div className="contact-section">
                        <h2>Links</h2>
                        <ul>
                            <li><strong>Email</strong>: incheslewis-at-gmail-dot-com</li>
                            <li><strong>GitHub</strong>: <a href="https://github.com/LewisI224">Lewis Inches</a></li>
                            <li><strong>Twitter</strong>: <a href="https://twitter.com/LewisI224">@LewisI224</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}