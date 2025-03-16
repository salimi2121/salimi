import React, { useEffect, useState } from 'react';  

const DataFetchingComponent = () => {  
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const response = await fetch('https://api.opencagedata.com/geocode/v1/json?q=52.5432379%2C+13.4142133&key=YOUR-API-KEY'); // URL API خود را وارد کنید  
        if (!response.ok) {  
          throw new Error('Network response was not ok');  
        }  
        const jsonData = await response.json();  
        setData(jsonData);  
      } catch (error) {  
        setError(error.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchData();  
  }, []); // وابستگی خالی، یعنی فقط در بارگذاری اولیه انجام می‌شود  

  if (loading) {  
    return <div>Loading...</div>;  
  }  

  if (error) {  
    return <div>Error: {error}</div>;  
  }  

  return (  
    <div>  
      <h1>Fetched Data</h1>  
      <ul>  
        {data.map(item => (  
          <li key={item.id}>{item.name}</li> // تنظیم نام و آی‌دی بر اساس داده‌های واقعی  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default DataFetchingComponent;