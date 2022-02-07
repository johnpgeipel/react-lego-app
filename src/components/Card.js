import React from 'react';

const Card = (props) => {
   
    return(
        <div className={ "card-col col-lg-4 col-md-6 col-sm-6 col-12 " + props.columnClass}>
            <div className="card">
                <div className={"img-container " + props.containerClass}>
                    <img
                        className="card-img-top"
                        loading="lazy"
                        alt={ props.name }
                        src={ props.imgUrl}
                        onMouseEnter={props.handleMouseEnter}
                        onMouseLeave={props.handleMouseLeave}
                    />
                    <i className="fa fa-arrows-alt"></i>
                </div>
                <div className="card-body">
                    <h6 className="card-id">#{ props.setId }</h6>
                    <img className="theme-logo" alt="theme logo" src={ props.themeLogo}></img>
                    <div className="card-title-container">
                        <h5 className={"card-title " + props.titleClass}>{ props.name }</h5>
                    </div>
                    <hr/>
                    <span>Pieces: { props.pieces }</span>
                    { props.pdfThree && props.pdfTwo && props.pdfOne? (
                        <>
                            <button type="button" className="btn btn-danger">
                                <a className="card-btn" href={ props.pdfThree} target="_blank" rel="noreferrer">PDF 3</a>
                            </button>
                            <button type="button" className="btn btn-danger">
                                <a className="card-btn" href={ props.pdfTwo} target="_blank" rel="noreferrer">PDF 2</a>
                            </button>
                            <button type="button" className="btn btn-danger">
                                <a className="card-btn" href={ props.pdfOne} target="_blank" rel="noreferrer">PDF 1</a>
                            </button>
                        </>
                        ) : props.pdfTwo && props.pdfOne ? (
                        <>
                            <button type="button" className="btn btn-danger">
                                <a className="card-btn" href={ props.pdfTwo} target="_blank" rel="noreferrer">PDF 2</a>
                            </button>
                            <button type="button" className="btn btn-danger">
                                <a className="card-btn" href={ props.pdfOne} target="_blank" rel="noreferrer">PDF 1</a>
                            </button>
                        </>
                        ) : props.pdfOne ? (
                        <button type="button" className="btn btn-danger">
                            <a className="card-btn single-pdf-btn" href={ props.pdfOne} target="_blank" rel="noreferrer">PDF</a>
                        </button>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
};

export default Card;