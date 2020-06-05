const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM Spotify.Reproducion_Cancion_Usuario', (err, result) => {
      res.render('news/news', {
        news: result
      });
    });
  });
  app.get('/cancionescuchada', (req, res) => {
    connection.query('SELECT * FROM Spotify.Canciones_Mas_Escuchados', (err, result) => {
      res.render('news/cancionescuchada', {
        news: result
      });
    });
  });
  app.get('/ingresousuario', (req, res) => {
    connection.query('SELECT * FROM Spotify.ReporteIngresoUsuarios', (err, result) => {
      res.render('news/ingresousuario', {
        news: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { title, news } = req.body;
    connection.query('INSERT INTO news SET ? ',
      {
        title,
        news
      }
    , (err, result) => {
      res.redirect('/news');
    });
  });
};
