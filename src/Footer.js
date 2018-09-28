import React from 'react';
import './App.css';

const Footer = (props) =>{
  return <footer> {props.copyrightYear} {props.copyrightName}</footer>;
}

export default Footer;