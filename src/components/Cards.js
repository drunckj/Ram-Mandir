import React from 'react';
import './cards.css';
import ScrollAnimation from 'react-animate-on-scroll';
function Cards() {
  return (<>
    <div className='aim'>
      <h1 className="addition">OUR AIM</h1>
      <span className='aimpara'>To bridge the gap between ancient India’s Vedic knowledge and modern India’s technological prowess,<br></br>
to ensure that the youth realises its role in making the world a better place
</span>
    </div>
    
    <div class="row">
    <h1 className="addition">INSIGHTS</h1>
    <div class="column">
      <div class="card2">
        <h1>Total Supply</h1>
        <br></br>
      <p>1000</p>
      <br></br>
      </div>
    </div>
    <div class="column">
      <div class="card2"> 
      <h1>Traits</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
    </div>
    </div>
    <div class="column">

      <div class="card2">
      <h1 >Volume</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
      </div>
    </div>
    <div class="column">
      <div class="card2"> <h1>$COIN/USDC</h1>
      <br></br>
      <p>$0.01</p>
      <br></br>
      </div>
    </div>
  </div> 
  </>

  );
}

export default Cards;
