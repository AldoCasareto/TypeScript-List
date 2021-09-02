import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        value={input.name}
        type='text'
        className='AddToList-input'
        placeholder='Type your name'
        onChange={handleChange}
        name='name'
      />
      <input
        value={input.age}
        type='number'
        className='AddToList-input'
        placeholder='Age'
        onChange={handleChange}
        name='age'
      />
      <input
        value={input.img}
        type='text'
        className='AddToList-input'
        placeholder='Image-url'
        onChange={handleChange}
        name='img'
      />
      <textarea
        value={input.note}
        className='AddToList-input'
        placeholder='Note'
        onChange={handleChange}
        name='note'
      />
      <button onClick={handleClick} className='AddToList-btn'>
        Add
      </button>
    </div>
  );
};

export default AddToList;
