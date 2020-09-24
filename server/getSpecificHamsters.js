const { MongoClient, ObjectID } = require('mongodb')

const uri = '';//mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5
const dbName = 'grp5';
const collectionName = 'grp5';
/*
mongo "mongodb+srv://cluster0.9pbrz.mongodb.net/grp5" --username <username> --password <password>

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://node-user:<password>@cluster0.gwjgs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
function getSpecificHamsters(id1, id2, callback)
{
	const hamster1 = id1
	const hamster2 = id2
	MongoClient.connect(
		uri,
		{ useUnifiedTopology: true },
		async (error, client) =>
		{
			if( error )
			{
				callback('"ERROR!! Could not connect"');
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			try
			{
				const cursor = await col.find({_id:{$in:[hamster1,hamster2]}});
				const array = await cursor.toArray()
				callback(array);
			}
			catch(error)
			{
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally
			{
				client.close();
			}
		}
	)
}

module.exports = {
	getSpecificHamsters
}
