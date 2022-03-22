import React from 'react';

import Card from '../components/Card/Card';

const getRandom = (length) => {
  return Math.floor(Math.random() * length);
};

const getArrayRange = (start, end) => {
  const len = end - start + 1;
  const array = new Array(len);
  for (let i = 0; i < len; i++) array[i] = start + i;
  return array;
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 2,
      arrBalls: [],
      arrSelectedBalls: [],
      cards: [],
      winner: false,
    };
  }

  componentDidMount() {
    const arrBalls = [...Array(75).keys()];
    this.setState({ arrBalls });
    this.GeneratingCards();
  }

  GenerateBall = () => {
    const { arrBalls, arrSelectedBalls } = this.state;
    const cloneBalls = [...arrBalls];
    const cloneSelectedBalls = [...arrSelectedBalls];
    const randomBall = getRandom(cloneBalls.length);
    const selectedBall = cloneBalls[randomBall];
    cloneSelectedBalls.push(selectedBall);
    cloneBalls.splice(randomBall, 1);
    this.setState({
      arrBalls: cloneBalls,
      arrSelectedBalls: cloneSelectedBalls,
    });
    this.validateCards(selectedBall);
  };

  GeneratingCards = () => {
    const { quantity } = this.state;
    const arrQuantity = [...Array(quantity).keys()];
    const cards = arrQuantity.map((el) => this.CreateCard());
    this.setState({ cards });
  };

  CreateCard = () => {
    const arrAux = [...Array(5).keys()];
    const arrBallsRows = {
      B: getArrayRange(1, 15),
      I: getArrayRange(16, 30),
      N: getArrayRange(31, 45),
      G: getArrayRange(46, 60),
      O: getArrayRange(61, 75),
    };
    const card = {
      matches: 0,
      total: 24,
      winner: false,
      rows: {
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
      }
    };

    Object.keys(card.rows).forEach((row) => {
      const fila = [];
      arrAux.forEach((square) => {
        if (row === 'N' && square === 2) {
          fila.push({ value: '', state: false });
        } else {
          const idxRandom = getRandom(9);
          const ballRandon = arrBallsRows[row][idxRandom];
          arrBallsRows[row].splice(idxRandom, 1);
          fila.push({
            value: ballRandon,
            state: false,
          });
        }
      });
      card.rows[row] = fila;
    });
    return card;
  };

  validateCards = (ball) => {
    const { cards } = this.state;
    const clonedCards = [...cards];

    clonedCards.forEach((card) => {
      Object.keys(card.rows).forEach((row) => {
        const idx = card.rows[row].findIndex(el =>  el.value === ball);
        if (idx !== -1) {
          card.rows[row][idx].state = true;
          card.matches += 1;
        }
      });
      if (card.matches === card.total) {
        card.winner = true;
        this.setState({ winner: true });
      }
    });

    this.setState({ cards: clonedCards });
  }

  render() {
    const { cards, arrSelectedBalls, winner } = this.state;

    return (
      <div style={{ padding: '5rem' }}>
        <div>
          <h3>
            <b>Bienvenido a Bingo Kata</b>
          </h3>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <button
            type="button"
            className="btn"
            disabled={winner}
            onClick={() => this.GenerateBall()}
          >
            Generate Ball
          </button>
        </div>
        {!!arrSelectedBalls.length && arrSelectedBalls.map((ball) => (
          <div className='boxBall'>
            { ball }
          </div>
        ))}
        {cards.length && cards.map((card, idx) => (
          <Card
            key={idx}
            card={card}
            index={idx + 1}
          />
        ))} 
      </div>
    );
  }
}
export default Home;