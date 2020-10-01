const { MongoClient } = require('mongodb')

// const password = process.env.password1;
// const user = process.env.user1;

// const uri = 'mongodb+srv://<user>:<password>.com@cluster0.9pbrz.mongodb.net/grp5?retryWrites=true&w=majority';
const uri = 'mongodb://localhost:27017';

const dbName = 'grp5';
const collectionName = 'grp5';

function addHamster(requestBody, callback) {
	const hamster = requestBody
	MongoClient.connect(
		uri,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				console.log("Error add-hamster", error.message)
				callback('"ERROR!! Could not connect add-hamster"');
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
module.exports = {
	addHamster
}
