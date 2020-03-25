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
                placeholder ='Please enter first name'
                type ='text'
                />
        </label>
            <br/>
        <label>Last Name
            <input
                onChange = {props.onInputChange}
                value = {props.formData.lname}
                name ='lname'
                placeholder ='Please enter last name'
                type ='text'        
                />
        </label>
            <br/>
        <label>Email
            <input
                onChange = {props.onInputChange}
                value = {props.formData.email}
                placeholder ='Please enter your email'
                name ='email'
                type ='text'
                />
        </label>
            <br/>
        <label>Role
            <input
                onChange = {props.onInputChange}
                value = {props.formData.role}
                placeholder = 'Please fill in your Role'
                name='role'
                type ='text'
                />
        </label>
        <br/>
            <button type ="submit">Add</button>
        </form>
        </div>
    );
}

export default Form; 