import React, { useState, useEffect } from "react";

// SERVICES
import cardService from './services/cardService';

function App() {
 
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if(!cards) {
      getcards();
    }
  })

  const getcards = async () => {
    let res = await cardService.getAll();
    console.log(res);
    setCards(res);
  }


  const renderCard = card => {
    console.log(card)
    return (
      <li key={card._id} className="list__item card">
      <div className="w-25 card text-left">
          <div className="px-4">
              <div className="row pt-2">
                  <h6>#1 trending</h6>
              </div>
              <div className="row">
                  <div className="col-3 p-0">
                  <h3 className="card__name text-left p-0 font-weight-bold">{card.source}</h3>              
                  </div>
                  <div className="col-8 vertical-divider p-0">
                      <h4 className="px-1 font-italic card__description">{card.author}</h4>
                  </div>                        
                  <span className="col-1 p-0" role="img" aria-label="neutral"> {card.sentiment}</span>
              </div>
              <div className="row">
                  <h1>Elon Musk's Solar Deal Has Become the Top Threat To Tesla's Future</h1>
              </div>
          </div>
          <div className="row pb-2">
            <div className="col-8 font-weight-lighter">
                {(card.keywords && card.keywords.length > 0) ? (
                    card.keywords.map(keyword => {
                      return(
                        <span role="img" aria-label="car" className="pl-2">{keyword}</span>
                      )
                  })
                ) : (
                  <span></span>
                )}
              </div>

              <div className="col-4 text-center font-weight-lighter">
                  <i className="far fa-clock font-weight-lighter px-1"></i>
                  <span>5 mins</span>
              </div>
          </div>
      </div>
      </li>
  )
  };

  return (
    <div className="App">
      <ul className="list">
        {(cards && cards.length > 0) ? (
          cards.map(card => renderCard(card))
        ) : (
          <p>No cards found</p>
        )}
      </ul>
    </div>
  );
}

export default App;