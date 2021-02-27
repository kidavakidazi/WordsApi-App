import React, { useEffect, useState } from 'react';
import Header from "../header/header";
import WordAddForm from "../word-add-form/word-add-form";
import WordDetails from "../word-details/word-details";
import WapiService from "../wapi-service/wapi-service";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import './app.css';

require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const WordContext = React.createContext('');
const wapiService = new WapiService();

const App = () => {

  const [word, setWord] = useState('');
  const [context, setContext] = useState('');
  const [definition, setDefinition] = useState('');
  const [storage, setStorage] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDefinition(await wapiService.getDefinition(word));
      } catch (err) {
          console.log(err)
        if (word !== '') {
          setDefinition('No info, try another one');
        }
      }
    };

    fetchData();
    setStorage([...storage, word]);
  }, [word]);

  const addWord = (word) => {
    setWord(word);
  };

  useEffect(() => {
    const dataStorage = localStorage.getItem('lastWords');
    if (dataStorage) {
      setStorage(JSON.parse(dataStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastWords', JSON.stringify(storage));
  });

  const changeContext = (el) => {
    setContext(el);
  };

  const SearchedWords = () => {
    let viewedWordsArray = localStorage.getItem('lastWords');
    let viewedWords = JSON.parse(viewedWordsArray);
    if (!viewedWords) return null;
    else {
      let lastViewedWords = viewedWords.slice(-5)
      return  lastViewedWords.map(el => (
          <Link to="/word" onClick={() => changeContext(el)}>
              <Chip label={el} component="a" clickable />
          </Link>
      )).slice(1);
    }
  };

  const WordPage = () => {
    return  (
      <>
        <WordAddForm addWord={addWord} />
        <div className={classes.root}>
            <SearchedWords />
        </div>
        <div className="word--definition"
             onClick={changeContext(word)}>
          <Link to="/word">
            {word.toUpperCase()} {definition}
          </Link>
        </div>

      </>
    );
  };

  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <WordContext.Provider value={context}>
        <Route path="/"
               exact
               component={WordPage} />
        <Route path="/word"
               component={WordDetails}/>
      </WordContext.Provider>
    </Router>
  );
};

export default App;


