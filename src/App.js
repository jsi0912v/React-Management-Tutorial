import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Jeon',
  'birthday': '870912',
  'gender' : 'male',
  'job' : 'worker'
  },
  {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': 'Ko',
    'birthday': '880225',
    'gender' : 'female',
    'job' : 'owner'
   },
   {
      'id': 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name': 'Koo',
      'birthday': '161110',
      'gender' : 'male',
      'job' : 'pet'
  }
]
function App() {
  return (
    <div>
      {
        //map은 key값이 필수, 배열에 접근하여 출력.
        customers.map(c => {
          return <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender = {c.gender}
            job={c.job}
          />
        })
      }
      </div>
  );
}

export default App;
