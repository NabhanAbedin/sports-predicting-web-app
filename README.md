# Soccer Match Predictor

A machine learning–powered web application for predicting soccer match outcomes across top European leagues. The project combines a **Python/Flask backend** with a **TypeScript + React frontend**, giving users an interactive way to experiment with prediction models and play soccer trivia games.  

---

## Tech Stack 

### Frontend 
- React (TypeScript SPA)
- TanStack Query for fetching trivia JSON and model results via API

### Backend
- Python Flask for API routes
- pandas, numpy for data handling
- scikit-learn (RandomForestClassifier, accuracy, precision)
- requests, BeautifulSoup for scraping

## Features

### Match Predictions
- Uses a **Random Forest Classifier** (via scikit-learn) to predict match outcomes (Win/Draw/Loss).  
- Preprocesses soccer match data with engineered features such as:  
  - Venue encoding  
  - Opponent encoding  
  - Match day & time features  
  - Rolling averages for goals, shots, distance, penalties, etc.  
- Model performance tracked with **Accuracy** and **Precision** metrics.  
- Predictions are returned via a **Flask API** as JSON objects, including match results and model accuracy.  

### Custom Model Tuning
- Users can adjust **hyperparameters** directly from the web app:  
  - `n_estimators`  
  - `min_samples_split`  
- Users can also select a **start and end date** to train/test on different slices of the dataset (e.g., 2020–2021 through 2023–2024 seasons).  

### League Selection
- Supports three top European leagues:  
  - Premier League  
  - La Liga  
  - Serie A  

### Trivia Game
- Sports trivia section built with **React + TypeScript**.  
- Trivia questions stored in JSON and retrieved using **TanStack Query**.  
- Users can play while experimenting with predictions.  

### Data Collection via Web Scraping
- Match and team data is scraped directly from [FBref](https://fbref.com) using:  
  - `requests` for HTTP requests  
  - `BeautifulSoup` for parsing HTML  
  - `pandas` for extracting tables (match fixtures, shooting stats, etc.)  
- The scraper:  
  - Iterates through team pages across multiple seasons.  
  - Collects **match results** and merges them with **shooting statistics**.  
  - Filters by competition (Premier League, La Liga, Serie A).  
  - Exports the processed results into CSV files for later use.
 
## Why CSVs Instead of a Database?
- This project is a focused demonstration of machine learning predictions, not a CRUD-heavy app.
- They are efficient for batch training/experimentation workflows in Python.
- A database would add storage overhead and operational complexity without meaningful benefit for this use case.
