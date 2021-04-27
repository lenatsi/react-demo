import {useState} from 'react';
import './App.css';
import AddSkills from './AddSkills'

function App() {
  const [persona, setPersona] = useState({nombre: 'Alena', edad:100, coche: false});
  const [skills, setSkills] = useState([{id:1, name:'Swift'}, {id:2, name:'Kotlin'}])

  const sumarEdad = ()=> {
    setPersona((prevState) =>({
      ...prevState,
      edad: prevState.edad +1
    }));
  };

  const toggleCoche = () => {
    setPersona((prevState)=> ({
      ...prevState,
      coche:!prevState.coche
    }));
  };
  
  const addNewSkill = (value) => {
    const newSkill = {
      id: skills[skills.length -1].id+1,
      name: value
    };
    setSkills((prevSkills)=>[...prevSkills, newSkill])
  }


  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
        <h1>Hola {persona.nombre}</h1>
        <p>Edad: {persona.edad}</p>
        <p>¿Tiene coche?: {persona.coche ? 'Sí':'No'}</p>
        <p>Habilidades:</p>
  <ul>{skills.map((skill)=> <li key={skill.id}>{skill.name}</li>)}</ul>
        <button onClick={sumarEdad} className='btn btn-primary'>Sumar edad</button>
        <button onClick={toggleCoche} className='btn btn-primary'>{persona.coche? 'No tiene coche':'Tiene coche'}</button>
        
      </div>
      
    </div>
    <div className="col-12">
    <AddSkills addNewSkill={addNewSkill} total={skills.length}/>
      </div>
    </div>
  );
}

export default App;
