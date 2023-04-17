import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";

const Language = (props) => {
    const { t, i18n } = useTranslation();

    const handleChangLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <>
            <NavDropdown title={i18n.language === 'vi' ? 'Việt Nam' : 'English'} id="basic-nav-dropdown2" className='languages'>
                <NavDropdown.Item onClick={() => handleChangLanguage('en')} > English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangLanguage('vi')}>Việt Nam</NavDropdown.Item>
            </NavDropdown >
        </>
    )
}

export default Language;