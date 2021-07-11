import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
//redux
import { useHistory } from "react-router";
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg"; //default image
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathID }) => {
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //star logic
  const getStars = () =>{
      const stars= [];
      const rating = Math.floor(game.rating);
      for(let i=1;i<=5;i++){
          if(i<=rating){
              stars.push(<img alt="star-full" key={i} src={starFull}></img>)
          }else{
            stars.push(<img alt="star-empty" key={i} src={starEmpty}></img>)
          }
      }
      return stars;
  }
  //platform images function
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;

      case "PC":
        return steam;

      case "iOS":
        return apple;

      case "Nintendo Switch":
        return nintendo;

      case "Xbox One":
        return xbox;

      default:
        return gamepad;
    }
  };
  return (
    <React.Fragment>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail layoutId={pathID}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                {/* <h3>{game.name}</h3> */}
                <p>Rating:{getStars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img src={getPlatform(data.platform.name)} key={data.platform.id} alt={data.platform.name}/>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={smallImage(game.background_image, 1920)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description}</p>
            </Description>
            <div className="gallery">
              {screen.data.results &&
                screen.data.results.map((screen) => (
                  <img
                    src={smallImage(screen.image, 1280)}
                    alt="screenshot"
                    key={screen.id}
                  />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </React.Fragment>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
      width: 2rem;
      height: 2rem;
      display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
