const { MongoClient, ObjectID } = require('mongodb')

const url = '';
const dbName = '';
const collectionName = '';

function getSpecificHamsters(id1, id2, callback)
{
	MongoClient.connect(
		url,
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
