const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    console.log(`something went wront ${err}`);
  }

  console.log('All good connected');

  db.collection('Users').find({
    '_id' : new ObjectID('59f693e4adc6e322f89e6192')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('something went wrong in fetching. ');
  });
});
