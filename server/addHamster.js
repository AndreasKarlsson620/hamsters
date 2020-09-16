const { MongoClient, ObjectID } = require('mongodb')

const url = '';
const dbName = '';
const collectionName = '';

function addHamster(requestBody, callback)
{
	const doc = requestBody
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
				const result = await col.insertOne(doc);
				callback({
					result: result.result,
					ops: result.ops
				})
			}
			catch(error)
			{
				console.error('addHamster error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally
			{
				client.close();
			}
		}
	)
}
