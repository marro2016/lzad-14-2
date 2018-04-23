var movies = [{
  id: 1,
  title: 'TOP GUN',
  director: 'Tony Scott',
  genre: 'akcji',
  year: '1986',
  img: 'Images/topgun.jpg'

},
{
  id: 2,
  title: 'BODY/CIAŁO',
  director: 'Małgorzata Szumowska',
  genre: 'dramat',
  year: '2015',
  img: 'Images/body.jpg'
}];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, 'Title: ' + movie.title),
    React.createElement('p', {}, 'Director: ' + movie.director),
    React.createElement('p', {}, 'Genre: ' + movie.genre ),
    React.createElement('p', {}, 'Relase date: ' + movie.year),
    React.createElement('img', {src: movie.img}));
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));

