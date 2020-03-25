import React,{useState} from 'react';
import Form from "./components/Form";
// import Members from "./components/Members";
import logo from './logo.svg';
import './App.css';


const initialMembers =[
  {  fname: 'Violet', lname: 'Smith', email: 'violet@email.com', role: 'web devloper' },
  {  fname: 'Jane', lname: 'Doe', email: 'jane@email.com', role: 'ios developer' },
  { fname: 'Joe', lname: 'Bricks', email: 'joe@email.com', role:'ux designer'}
]

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  });

  const onInputChange = event =>{
    const inputThatChanged = event.target.name;
    const newInputValue = event.target.value; 

    setFormData({
      ...formData, [inputThatChanged]: newInputValue,
    })
  }

  const onFormSubmit = event=>{
    event.preventDefault()
    const newMember ={
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      role: formData.role,
    }
    setMembers([...members, newMember])
  }


  // const addNewTeamMember = member=>{
  //   const newMember ={
  //     fname: member.fname,
  //     lname: member.lname,
  //     email: member.email,
  //     role: member.role
  //   }
  //   setMembers ([...members, newMember])
  // };

 

  return (
    <div className="App">
        <Form
          onInputChange ={onInputChange}
          formData = {formData}
          onFormSubmit ={onFormSubmit}
        />
      <div className ="List-wrapper"> 
        <h3>List of Team Members:</h3>
        {
        members.map(person => <div key ={person.id}>
          {person.fname} {person.lname} {person.email} {person.role}
           </div>)
      }
       </div>
        </div>
    )
}

export default App;
