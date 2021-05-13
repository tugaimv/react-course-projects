import React, { useState } from 'react';

import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[1].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[2].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit[3].',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat similique nobis natus ex eaque rem ratione iste iure sequi nesciunt repudiandae dolores exercitationem voluptatum rerum laudantium a, in nam.'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]



const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
          options={options}
          selected={selected}
          onSelect={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}
 
export default App;