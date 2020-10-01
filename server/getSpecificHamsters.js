const { MongoClient, ObjectID } = require('mongodb')

const uri = '';//mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5?retryWrites=true&w=majority";
const dbName = 'grp5';
const collectionName = 'grp5';
function getSpecificHamsters(id1, id2, callback) {
	const hamster1 = id1
	const hamster2 = id2
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
				const cursor = await col.find({ _id: { $in: [hamster1, hamster2] } });
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
	getSpecificHamsters
}
