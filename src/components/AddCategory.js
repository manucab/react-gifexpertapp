import React, { useState } from "react";
import PropTypes from 'prop-types'

//OJO a las llaves en los props
const AddCategory = ( {setCategories} ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2) {

        setCategories( c => [inputValue, ...c])
        setInputValue('')
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
