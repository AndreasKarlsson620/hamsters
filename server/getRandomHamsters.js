const { MongoClient, ObjectID } = require('mongodb')

const url = "mongodb+srv://sharmin:sharminmousumi001@gmail.com@cluster0.9pbrz.mongodb.net/grp5?retryWrites=true&w=majority";
const dbName="grp5";
const collectionName="grp5";

function getRandomHamsters(filter, callback)
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
module.exports=getRandomHamsters;
