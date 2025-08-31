from flask import Flask, jsonify, request, render_template
from Predictor import Predictor
from flask_cors import CORS
import json
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predictions', methods=['GET', 'POST'])
def preprocess():
    data = request.get_json()
    estimators = int(data['estimators'])
    min_samples = int(data['minSamples'])
    date = int(data['date'])
    print(data['league'])
    predictor = Predictor(data['league']+'.csv',estimators, min_samples,date)


    print(f'Recieved Data: {data}')
    print('data:', data['league'])
    

    matches_rolling, predictors, new_cols = predictor.preprocess_data()

    combined, precision = predictor.make_predictions(matches_rolling, predictors + new_cols)

    final_df = predictor.create_final_df(combined,matches_rolling)
    

    predictions = json.loads(final_df.to_json(orient='records'))  
    predictions.sort(key=lambda x: x["Date"])

    precision_py = np.asarray(precision).tolist()              

    return jsonify({'predictions': predictions, 'precision': precision_py})

if __name__ == '__main__':
    app.run(host= '0.0.0.0', port=80)