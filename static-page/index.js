import { Header } from "./Header"


function Footer() {
    return (

        <footer className="footer-page">
            <small>© 2023 Mining development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Some Quotes From Michael Scott</h1>
            <ul>
                <li>"How could you say that? You know I have soft teeth."</li>
                <li>"I DECLARE BANKRUPTCY!"</li>
                <li>"That's what she said."</li>
            </ul>

        </div>
    )
}


function BasicInfo() {
    return (
        <div className="main-content">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<BasicInfo />, document.getElementById("root"))  