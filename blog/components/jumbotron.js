import styles from './css-modules/jumbotron.module.css'

export default function Jumbotron () {
    return (
        <div className={styles.jumbotron}>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to my blog!</h1>
                <p className="lead">This website documents my work over the summer of 2022 and also showcases some of my other work.</p>
                <hr></hr>
            </div>
        </div>

    );

}