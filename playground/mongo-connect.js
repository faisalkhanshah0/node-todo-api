const {MongoClient, ObjectID} = require('mongodb');
// var id = new ObjectID();
// console.log(id);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log(`something went wrong ${err}`);
  }

  console.log(`All good and connected.`);
  // db.collection('TodoApp').insertOne({
  //   'text' : 'something to do',
  //   'completed' : false
  // }, (err, result) => {
  //
  //   if(err)
  //   {
  //     console.log(`something went wrong at insertion time ${err}`);
  //   }
  //   console.log('All inserted.');
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.collection('Users').insertOne({
    '_id' : new ObjectID(),
    'name' : 'faizal',
    'age' : '27',
    'location' : 'delhi'
  }, (err, result)  => {
    if(err)
    {
      return console.log(`something went wrong ${err}`);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
});
