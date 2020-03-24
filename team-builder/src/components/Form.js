import React from 'react';

const Form = props =>{
    return(
        <div className ="form-wrapper">
        <form onSubmit ={props.onFormSubmit}>
        <label>First Name
            <input
                onChange = {props.onInputChange}
                value = {props.formData.fname}
                name ='fname'
                type ='text'
                />
        </label>
            <br/>
        <label>Last Name
            <input
                onChange = {props.onInputChange}
                value = {props.formData.lname}
                name ='lname'
                type ='text'
                />
        </label>
            <br/>
        <label>Email
            <input
                onChange = {props.onInputChange}
                value = {props.formData.email}
                name ='email'
                type ='text'
                />
        </label>
            <br/>
        <label>Role
            <input
                onChange = {props.onInputChange}
                value = {props.formData.role}
                name='role'
                type ='text'
                />
        </label>
            <button>Submit</button>
        </form>
        </div>
    );
}

export default Form; 