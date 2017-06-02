# Installation Instructions

## Getting Python
1) Get the latest python 3 version
    * https://www.python.org/downloads/
2) After installing everything, open a command line.
3) Type `pip install flask` and let it install

You should now have Python 3 and Flask installed.

## _(Optional)_ Installing Angular 2
1) Install NodeJS from here:
    * https://nodejs.org/en/download/
    * Made sure to get `npm` when installing. It should be checked by default.
2) After installing, open a command line
3) Type `npm install -g @angular/cli`

You should now have Angular 2 installed.

# Starting the application
To start the full application, do the following:

1) Open a command line
2) navigate to the `Backend` folder
3) Type `python server.py`

This should start the server at `localhost:5000`

----
If you want to make changes to the Angular 2 code, you can navigate the command line to the `Frontend` folder and execute `ng build`. After executing that, go back to the `Backend` folder and restart the server with `python server.py`. 