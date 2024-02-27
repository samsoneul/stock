const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=cn0eul9r01quegsjnthgcn0eul9r01quegsjnti0`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured:${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=cn0eul9r01quegsjnthgcn0eul9r01quegsjnti0`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured:${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=cn0eul9r01quegsjnthgcn0eul9r01quegsjnti0`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured:${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};  
export const fetchNext=async(stockSymbol)=>{
  const url=`http://127.0.0.1:5000/api/predictions/${stockSymbol}`;
  const response=await fetch (url);
  console.log(response)
  if (!response.ok){
    const message=`an error has occured fethcing from flask :${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}
 
// export const fetchHistoricalData = async (
//   stockSymbol,
//   resolution,
//   from,
//   to
// ) => {
//   const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=cn0eul9r01quegsjnthgcn0eul9r01quegsjnti0`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };
