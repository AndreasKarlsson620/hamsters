const { MongoClient, ObjectID } = require('mongodb')

const uri = ''; //mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5?retryWrites=true&w=majority";
const dbName = 'grp5';
const collectionName = 'grp5';
function getRandomHamsters(callback) {
	MongoClient.connect(
		uri,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				callback('"ERROR!! Could not connect"');
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const cursor = await col.aggregate([{ $sample: { size: 2 } }]);
				const array = await cursor.toArray()
				callback(array);
			}
			catch (error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally {
				client.close();
			}
		}
	)
}

module.exports = {
	getRandomHamsters
}
