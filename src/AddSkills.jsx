import React, { Fragment, useRef } from 'react'

export default function AddSkills({ addNewSkill, total }) {
    const inputSkill = useRef();
    const addSkill =(e) => {
        const mSkill = inputSkill.current.value;
        addNewSkill(mSkill);
        inputSkill.current.value =null;
    }
    
    return (
    <Fragment>
      <div className="input-group mt-3">
        <input ref={inputSkill} type="text" className="form-control" placeholder="Habilidad" />
        <button
          className="btn btn-outline-secondary"
          onClick={addSkill}
          type="button"
          id="button-addon2"
        >
          Añadir habilidad
        </button>
      </div>
  <p className='mt-2'> Hay {total} habilidades añadidas</p>
    </Fragment>
  )
}
