import React, { useState, useEffect } from 'react';

const Reviews = (props) => {
    const initialFieldValues = {
        fullName: '',
        title: '',
        review: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                
                <input className="form-control" name="fullName" placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                
                <div className="form-group input-group col-md-6">
                    
                    <input className="form-control" name="title" placeholder="Title"
                        value={values.title}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
            
               <textarea className="form-control" name="review" 
                    value={values.review}
                    onChange={handleInputChange}
                    placeholder='Write your review'
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default Reviews;