import React, { useState } from 'react';
import List from './components/List';
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'aldo',
      age: 26,
      url: 'https://pbs.twimg.com/profile_images/1271637543046582273/OzceD2Df_400x400.jpg',
      note: 'i love football',
    },
  ]);

  return (
    <div>
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
