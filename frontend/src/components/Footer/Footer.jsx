import './Footer.css'

function Footer () {
    const ano = new Date().getFullYear();

    return <div className="Footer">Todos os Direitos Reservados {ano}.</div>
}

export default Footer;