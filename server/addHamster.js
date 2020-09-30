const { MongoClient, ObjectID } = require('mongodb')

<<<<<<< HEAD
const uri = 'mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5?retryWrites=true&w=majority';
=======
const uri = 'mongodb+srv://johanna:johanna_forsberg@msn.com@cluster0.9pbrz.mongodb.net/grp5';
//mongodb+srv://<username>:<password>@cluster0.9pbrz.mongodb.net/grp5
>>>>>>> johanna-2
const dbName = 'grp5';
const collectionName = 'grp5';

function addHamster(requestBody, callback) {
	const hamster = requestBody
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
				const result = await col.insertOne(hamster);
				callback({
					result: result.result,
					ops: result.ops
				})
			}
			catch (error) {
				console.error('addHamster error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally {
				client.close();
			}
		}
	)
}
<<<<<<< HEAD

=======
>>>>>>> johanna-2
module.exports = {
	addHamster
}
