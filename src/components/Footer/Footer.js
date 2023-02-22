const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <p className="footer__text"> &#169; Created by Dmytro Stetsenko {new Date().getFullYear()}</p>
            </div>
        </footer>
     );
}

export default Footer;