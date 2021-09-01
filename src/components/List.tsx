import React from 'react';
import { IState as IProps } from '../App';


const List = ({ people }: IProps) => {
  return (
    <ul>
      {people.map((person) => (
        <li className='List'>
          <div className='List-header'>
            <img src={person.url} alt={person.name} className='List-img' />
            <h2>{person.name} </h2>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
