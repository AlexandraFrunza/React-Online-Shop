import React, { useState, useEffect } from 'react';
import {db} from "../firebase";
import Reviews from './ReviewsForm';

//CRUD

const ReviewsContainer = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    
    useEffect(() => {
        db.child('reviews').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])

    const addOrEdit = (obj) => {
            if (currentId == '')
                db.child('reviews').push(
                    obj,
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
            else
                db.child(`reviews/${currentId}`).set(
                    obj,
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
        }

        const onDelete = id => {
    
        db.child(`reviews/${id}`).remove(
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    
}


  return (
        <>
            
            <div className="row">
                <div className="col-md-5">
                    <Reviews {...({ currentId, contactObjects, addOrEdit })} ></Reviews>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Review</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].fullName}</td>
                                        <td>{contactObjects[key].title}</td>
                                        <td>{contactObjects[key].review}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ReviewsContainer;