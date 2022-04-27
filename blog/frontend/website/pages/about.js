import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="About | 90 Days of Coding"
                    metaDescription="Hi. Im Lewis Inches, a recent Computer Science Graduate."
                />
                <Header />
                <div className="about-container">
                    <div className="about-section">
                        <h1>About Me</h1>
                        <p>Im Lewis Inches, a recent Computer Science Graduate.</p>
                        <p> I use this blog to document the work I'm doing over 90 days during the summer of 2022.
                            I start my first graduate job in September so Im trying to use my time well by learning
                            some languages and frameworks that I expect to use.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2>Projects</h2>
                        <ul>
                            <li><a href="/">90 Days of Coding</a> – The blog you're currently reading. Used to doucment the work I did during the Summer of 2022.</li>
                            <li><a href="/">Weather App</a> – An app that displays the weather for your current location. Created using Vanilla Javascript</li>
                            <li><a href="/">Reddit Client</a> – A reddit client created uding Kotlin</li>
                            <li><a href="/">Bus Tracker</a> –A bus tracker using the LothianBuses API.</li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2>Preferred Technologies</h2>
                        <ul>
                            
                            <li><strong>Hosting</strong>: Self-Hosting</li>
                            <li><strong>Editor</strong>: <a href="https://code.visualstudio.com/">VSCode</a></li>
                            <li><strong>Languages</strong>: <a href="/">Kotlin</a>, <a href="/">Swift</a>, <a href="/">Python</a>, <a href="/">Javascript</a>, <a href="/">Java</a></li>
                            <li><strong>Frameworks</strong>: <a href="/">React</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}