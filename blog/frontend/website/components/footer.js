import { Component } from "react";

export default class extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
                <div className="footer-links">
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-bottom-msg">
                    <p>
                        If I make it through the day without embarassing myself more than 5 times it's been a good day.
                    </p>
                    <p>
                        Site created with help from this <a href="https://coding-blog.crfcourses.com/preview/introduction">tutorial</a>
                    </p>
                </div>
            </footer>
        )
    }
}