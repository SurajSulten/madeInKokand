
import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HeroCategorySlct(props) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div >
        <FormControl sx={{  minWidth: [props.width], backgroundColor: 'white', borderBlockColor: '#DDD', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', margin: 0,}} style={{}}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        //   variant='standard'
          sx={{textDecorationLine: 'none'}}
        >
          <MenuItem value="">
            {props.name}
          </MenuItem>
          <MenuItem value={10}>Категория 1</MenuItem>
          <MenuItem value={20}>Категория 2</MenuItem>
          <MenuItem value={30}>Категория 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}


export default HeroCategorySlct