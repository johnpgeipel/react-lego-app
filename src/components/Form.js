import React from 'react';

const Form = (props) => {
    
    const sortData = props.data.sort((a, b) => (a.name > b.name) ? 1 : -1);

    let themes = [];
    sortData.map(obj => themes.push(obj.theme));

    let sortThemes = [...new Set(themes)];
    sortThemes.sort((a, b) => (a > b) ? 1 : -1);

    return (
        <div className="container form-container">
            <div className="form-search-btn" role="button" aria-hidden="false" onClick={props.handleToggle}>
                <i className="fa fa-search"><span id="search-text">Search</span></i>
            </div>
            <div className={!props.toggleSearh ? "select-form openForm" : "select-form"}>
                <select id="form-select-name" className="form-select" aria-label="Default select example" onChange={props.handleItemSelect} defaultValue="Select Sets by Name">
                    <option id="form-option-name" value="Select Sets by Name" disabled>Select Sets by Name</option>
                    <option disabled></option>
                        { sortData ?
                            sortData.map( item => 
                                <option id={ item.setId } key={ item.setId } value={ item.setId }>{ item.name }</option>
                            ) : null
                        }
                </select>
                <select id="form-select-theme" className="form-select" aria-label="Default select example" onChange={props.handleThemeSelect} defaultValue="Select Sets by Theme">
                    <option id="form-option-theme" disabled value="Select Sets by Theme">Select Sets by Theme</option>
                    <option disabled></option>
                        { sortThemes ?
                            sortThemes.map( item => 
                                <option id={ item } key={ item } value={ item }>{ item }</option>
                            ) : null
                        }
                </select>
            </div>
        </div>
    )
};

export default Form;