import {React} from 'react'
import { useState, useEffect } from 'react';
import MyTopBlock from './topBlock';
import MyMiddleBlock from './myMiddle';

const MyRightBlock = () => {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://open.er-api.com/v6/latest/RUB');
          const data = await response.json();
          console.log(data.rates)
          setExchangeRate({USD:data.rates.USD,EUR: data.rates.EUR,GBP: data.rates.GBP,CNY: data.rates.CNY});
        } catch (error) {
          console.error('Error fetching exchange rate:', error);
        }
      };
  
      // Выполняем запрос сразу при монтировании
      fetchData();
  
      // Затем устанавливаем интервал для выполнения запроса каждые 5 минут
      const intervalId = setInterval(fetchData, 5 * 60 * 1000);
  
      // Очищаем интервал при размонтировании компонента
      return () => clearInterval(intervalId);
    }, []); // Пустой массив зависимостей гарантирует, что useEffect выполняется только один раз при монтировании компонента
  
    return (
        <div  className={'right'} >
           <MyTopBlock />
        {exchangeRate !== null ?<MyMiddleBlock props={exchangeRate}/>: <p>Loading...</p>}
</div>
    )
}
export default MyRightBlock