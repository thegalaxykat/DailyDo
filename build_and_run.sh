#!/usr/bin/env sh

# compile react
cd Frontend
npx vite build
cd ..

# flask
export FLASK_APP=Backend/App.py
flask run
