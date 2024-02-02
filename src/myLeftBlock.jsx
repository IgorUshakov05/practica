import React from 'react';

const LeftBlock = () => {
  return (
    <div  className={'left'} >
      <div className="logoImg">
        <img width='150' src="/Link.png" alt="logo" />
      </div>
      <div className="middleBlock">
        <div className="imgBl">
        <img src="/home.png" alt="" />
      </div>
      <div className="allCenetr">
        <p>РОСБАНК ОНЛАЙН Beta</p>
        <p>Новый мобильный банк для смартфонов — такой же удобный, как приложение. Заходите на <span className="red">m.online.rosbank.ru</span></p>
      </div>
      </div>
    </div>
  );
}

export default LeftBlock