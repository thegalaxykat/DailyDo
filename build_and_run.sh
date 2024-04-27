#!/bin/zsh

# compile react
cd Frontend
npx vite build
cd ..

# flask
export FLASK_APP=Backend/App.py
flask run
