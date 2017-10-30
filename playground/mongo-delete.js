const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log(`something went wront ${err}`);
  }

  console.log('All good connected');



  //deleteMany
  // db.collection('TodoApp').deleteMany({
  //   'text' : 'dummy'
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //
  //     return console.log('error occured while deleting record',err);
  //
  // });

  //deleteOne
  // db.collection('TodoApp').deleteOne({
  //   'text' : 'dummy'
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

  //findOneAndDelete
  db.collection('TodoApp').findOneAndDelete({
    '_id' : new ObjectID('59f6ace58a0e2ffd2952c450')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log(err);
  });
});
