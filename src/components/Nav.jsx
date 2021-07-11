import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
//animations
import {fadeIn} from '../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const searchHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () =>{
      dispatch({type:"CLEAR_SEARCHED"});
  }
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo"></img>
        <h2>Ignite</h2>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={searchHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 0.5rem;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-radius: 0.5rem;
    margin-left: 1rem;
  }
  button:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  @media (max-width:500px){
    padding: 0rem 0.5rem;
    input{
      width: 70%;
    }
    button{
      font-size: 1.5rem;
      padding: 0.5rem 0.5rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Comfortaa', cursive ;
  font-weight: bold;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
  }
  @media (max-width:500px){
    margin: 2rem 0rem;
    padding: 0.2rem;
    img{
      width: 2rem;
      height: 2rem;
    }
    font-size: 1.7rem;
  }
`;

export default Nav;
