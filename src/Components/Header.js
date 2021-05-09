import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './header.css';
import { makeStyles, TextField } from '@material-ui/core';
import freeda from '../assets/Group 1206.svg';
// import ran1 from '../assets/Symbol 531 – 3.svg';
// import ran2 from '../assets/Symbol 534 – 1.svg';

const useStyles = makeStyles({
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: '#fff',
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__left">
        <ArrowBackIcon />
        <h2 style={{ color: '#5DAAE0', paddingLeft: '1rem' }}>Call Workboard</h2>
      </div>
      <div>
        <span className="header__mid">
          {/* <img src={ran1} alt="" /> */}
          AUTONOMOUS RECEIVABLES
          {/* <img src={ran2} alt="" /> */}
        </span>
      </div>
      <div className="header__right">
        <TextField
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
        />
        <div className="header__btn">
          <span className="freeda">Freeda</span>
          <img src={freeda} alt="freeda-logo" style={{ width: '2.5rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
