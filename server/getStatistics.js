const { MongoClient, ObjectID } = require('mongodb')

const uri = '';//mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5
const dbName = '';
const collectionName = '';
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
function getStatistics(callback)
{
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
				const cursor = await col.find(filter);
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
