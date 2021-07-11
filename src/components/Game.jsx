import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import {loadDetail} from '../actions/detailAction';
//components
import { Link } from "react-router-dom";
import {smallImage} from '../util';

const Game = ({ name, released, image,id }) => {
  //load detail handler
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () =>{
    document.body.style.overflow ="hidden";
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame layoutId={stringPathId} onClick={() => loadDetailHandler()}>
      <Link to={`/game/${id}`}>
      <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
      {/* <h3>{name}</h3> */}
      <p>{released}</p>
      <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name}/>
      {/* <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name}/> */}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img{
        width: 100%;
        object-fit:cover;
        min-height: 40vh;
        
    }
`;


export default Game;