import React from 'react'
import "./cardEmployee.css"

type CardEmployeeProps = {
  id: string,
  firstName: string,
  lastName: string,
  middleName: string,
  departament: string,
  post: string,
}

const CardEmployee: React.FC<CardEmployeeProps> = ( { id, firstName, lastName, middleName, departament, post } ) => {
  return (
    <div className='main-card-employee'>
      <div className="description-card-employee">
        <div className="full-name-block">
          <h1 className='info-about-employee'>Ф.И.О.</h1>
          <span>{lastName}</span>
          <span>{firstName}</span>
          <span>{middleName}</span>
        </div>
        <div className="departament-block">
          <h1 className='info-about-employee'>Департамент</h1>
          <span>{departament}</span>
        </div>
        <div className="post-block">
          <h1 className='info-about-employee'>Должность</h1>
          <span>{post}</span>
        </div>
      </div>
    </div>
  )
}

export default CardEmployee
