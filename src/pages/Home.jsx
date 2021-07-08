import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
//styling and animation
import { motion } from "framer-motion";
import styled from "styled-components";

const Home = () => {
  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //pull from state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h1>Upcoming Games</h1>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h1>Popular Games</h1>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h1>New Games</h1>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  align-self: center;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
    
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

`;

export default Home;
