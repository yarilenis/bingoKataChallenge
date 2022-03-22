import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { card, index } = this.props;
    return (
      <div>
        <div className='titleCard'>
          <h5>Cartilla {index}</h5>
          {!!card.winner && <span>Ganador</span>}
        </div>
        <div className='card'>  
          {Object.keys(card.rows).map((row) => (
            <div key={row} className="boxRows">
              <div className='boxNumber'>
                <b>{ row }</b>
              </div>
              {card.rows[row].map((square, index) => (
                <div
                  key={`${square}-${index}`}
                  className='boxNumber'
                  style={{
                    background: `${row === 'N' && index === 2
                      ? '#cdc8c8'
                      : (square.state ? 'yellow' : 'white')}`,
                  }}
                >
                  { square.value }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

Card.propTypes = propTypes;

export default Card;
