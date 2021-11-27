import React from 'react';

const Row = (props) => {
    return(
        <div className="container" id="card-container">
            <div id="card-row" className="row">
                { props.children }
            </div>
        </div>
    )
}

export default Row;