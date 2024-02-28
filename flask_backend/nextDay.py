import requests
from flask import Flask, jsonify
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
import pandas as pd

app = Flask('nextDay')
CORS(app)

@app.route('/api/predictions/<symbol>' ,methods=['GET'])
def get_predictions(symbol):
    # Fetch data from Alpha Vantage API
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey=XVX7EVKK6NXGYB3W'
    r = requests.get(url)
    Hdata = r.json()

    # Extract relevant features from the fetched data and preprocess as needed
    time_series = Hdata['Time Series (Daily)']
    opens = []
    highs = []
    lows = []
    closes = []
    volumes = []
    dates=[]
    for timestamp, values in time_series.items():
        dates.append(timestamp)
        opens.append(float(values['1. open']))
        highs.append(float(values['2. high']))
        lows.append(float(values['3. low']))
        closes.append(float(values['4. close']))
        volumes.append(int(values['5. volume']))

    df = pd.DataFrame({
        'Open': opens,
        'High': highs,
        'Low': lows,
        'Close': closes,
        'Volume': volumes,
        'Date':dates
    })

    # Train DecisionTreeRegressor model
    df['Next_Day_Close'] = df['Close'].shift(2)
    df['Next_Day_Close'].fillna(-1, inplace=True)
    
    features = ['Open', 'High', 'Low', 'Close', 'Volume']
    X = df[features]
    y =  df['Next_Day_Close']
    model = DecisionTreeRegressor(random_state=42)
    model.fit(X, y)

    # Predict the next day's price
    print(df.describe)
    last_row = X.head(1)  # Get the last row of the DataFrame
    next_day_prediction = model.predict(last_row)[0]
    Cdate=df['Date'].head(1).values[0]
    df['Next_Day_Close'].fillna(next_day_prediction, inplace=True)
    return jsonify({'np': next_day_prediction,
                    'date':Cdate})
    


if __name__ == '__main__':
    app.run(debug=True)
