import React from 'react';

const Footer = (props) => {

    return (
        <>
        <footer id="copy-year" className={!props.toggleFooter ? "main-footer" : "main-footer toggleFooter"}>
            <div className='footer-info'>
                <span>&copy; { props.date } John Geipel</span>
                <a href='https://github.com/johnpgeipel' target='_blank' rel='noreferrer' aria-label='github link'>
                    <i className='fa fa-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/johnpgeipel' target='_blank' rel='noreferrer' aria-label='linkedin link'>
                    <i className='fa fa-linkedin'></i>
                </a>
            </div>
        </footer>
        </>
    )
}

export default Footer;