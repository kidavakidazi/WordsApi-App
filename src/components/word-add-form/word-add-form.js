import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './word-add-form.css';

const WordAddForm = ({ addWord }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord(word);
    setWord("");
  };

  return (
    <form className="word-add-form d-flex"
          onSubmit={handleSubmit}>
      <TextField id="outlined-search"
                 label="Type any word..."
                 type="text"
                 variant="outlined"
                 onChange={e => setWord(e.target.value)}
                 value={word}/>
      <Button variant="contained" color="secondary" type="submit" value="Submit">
        Search
      </Button>
    </form>
  );
};

export default WordAddForm;
