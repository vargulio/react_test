const initialState = {
    users: [
        {
            username: 'bastun',
            password: 'pi4ka'
        },
        {
            username: 'bastun1',
            password: 'pi4ka'
        },
        {
            username: 'bastun2',
            password: 'pi4ka'
        }
    ],
    cinemas: [
        {

            key: '1',
            picture: 'https://www.ashfordcastle.com/-/media/ttc/rch/ashford-castle/main-carousel/mobile/ash-cinema-03-1024x576.jpg',
            addres: 'ul. Zadunena 21',
            workingTime: '24/7'
        },
        {
            key: '2',
            picture: 'https://www.ashfordcastle.com/-/media/ttc/rch/ashford-castle/main-carousel/mobile/ash-cinema-03-1024x576.jpg',
            addres: 'ul. Bulevard 21',
            workingTime: '8 -5 '
        },
        {
            key: '3',
            picture: 'https://www.ashfordcastle.com/-/media/ttc/rch/ashford-castle/main-carousel/mobile/ash-cinema-03-1024x576.jpg',
            addres: 'ul. Bahur SLivenski 21',
            workingTime: '24/7'
        }
    ],
    movies: [
        {
            title: 'Movie1',
            availablePlaces: 5
        },
        {
            title: 'Movie2',
            availablePlaces: 5
        },
        {
            title: 'Movie3',
            availablePlaces: 5
        }
    ],
    loggedUser: {}
};


export default (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
          const user = state.users.filter(user => {
              return user.username === action.payload.user.username && user.password === action.payload.user.password;
          });
          if (user && user[0]) {
              const loggedUser = user[0];
              const newState = {
                  ...state,
                  loggedUser: loggedUser
              };
              console.log(newState);
              return newState;
          }
        case 'RESERVE_PLACE':
            const movies = [...state.movies];
            movies[action.payload.movieIndex].availablePlaces--;
            return {
                ...state,
                movies: movies
            }

    }
    return state;
}