import React from 'react';

const Members = props =>{
    return(
        <div className ="info-container">
            {props.Members.map(member=>{
                <div className ="teamMember" key ={member.id}>
                    <h3>{member.fname} {member.lname}</h3> 
                    <p>{member.email}</p>
                     <p>{member.role}</p>
                    </div>
            })}
        </div>
    );
}

// export default Members; 