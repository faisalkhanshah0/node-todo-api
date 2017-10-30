const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log(`something went wront ${err}`);
  }

  console.log('All good connected');

//findOneAndUpdate

db.collection('TodoApp').findOneAndUpdate({
 _id : new ObjectID('59f6b3278a0e2ffd2952c869')
},{
 $set : {
   'text' : 'New Dummy'
 }
},{
  returnOriginal : false
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
}, (err) => {
  console.log(err);
});

//findOneAndReplace

// db.collection('TodoApp').findOneAndReplace({
//  _id : new ObjectID('59f6b3278a0e2ffd2952c869')
// },{
//    'text' : 'New Dummy 5',
//    'completed' : true
// },{
//   returnOriginal : false
// }).then((result) => {
//   console.log(JSON.stringify(result, undefined, 2));
// }, (err) => {
//   console.log(err);
// });
});
