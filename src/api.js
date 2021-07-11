//base url
const base_url = "https://api.rawg.io/api/";
const api_key = `?key=${process.env.REACT_APP_API_KEY}`;

//getting the date
const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
};

//getting the date
const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games${api_key}&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const newGames = `games${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//game details
export const gamesDetailURL = (gameID) => `${base_url}games/${gameID}${api_key}`;
//game screenshots
export const screenShotsURL = (gameID) => `${base_url}games/${gameID}/screenshots${api_key}`;
//searched games
export const searchedGameURL = (game_name) => `${base_url}games${api_key}&search=${game_name}&page_size=10`;