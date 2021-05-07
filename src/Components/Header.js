import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './header.css';
import { TextField } from '@material-ui/core';
import freeda from '../assets/Group 1206.svg';

const Header = () => (
  <div className="header">
    <div className="header__left">
      <ArrowBackIcon />
      <h2 style={{ color: '#5DAAE0', paddingLeft: '1rem' }}>Call Workboard</h2>
    </div>
    <div>
      <span className="header__mid">AUTONOMOUS RECEIVABLES</span>
    </div>
    <div className="header__right">
      <TextField variant="filled" />
      <div className="header__btn">
        <span className="freeda">Freeda</span>
        <img src={freeda} alt="freeda-logo" />
      </div>
    </div>
  </div>
);

export default Header;
