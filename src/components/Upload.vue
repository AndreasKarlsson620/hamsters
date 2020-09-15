
//Att göra: När man klickar på submit körs en funktion som skickar ett post-request till routen
<template>
    <div class="template-div">
        <h1>Testing testing</h1>
        <br />

        <div class="form">
            <form>
                <div>
                    <label>Name</label>
                    <input v-model="hamster.name" type="text" required />
                </div>

                <div>
                    <label>Age</label>
                    <input v-model="hamster.age" type="number" required />
                </div>

                <div>
                    <label>Eats</label>
                    <input v-model="hamster.food" type="text" required />
                </div>

                <div>
                    <label>Loves</label>
                    <input v-model="hamster.loves" type="text" required />
                </div>

                <div>
                    <label>Photo</label>
                    <input v-model="hamster.url" type="url" required />
                </div>
                <button @click.prevent="submit" type="submit">Submit</button>
            </form>
        </div>
        <p v-if="success">{{hamster.name + " är sparad!"}}</p>
        <p v-if="error">Oops! Något gick fel.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hamster: {
                name: "",
                age: "",
                food: "",
                loves: "",
                url: "",
            },
            error: false,
            success: false,
        };
    },
    methods: {
        submit: function () {
            console.log("Detta är hamster-objektet som skickas", this.hamster);

            axios
                .post("/upload", this.hamster)
                .then((response) => {
                    console.log("Detta är response", response.data);
                    if (response === 200) {
                        success = true;
                    }
                })
                .catch((error) => {
                    console.log("Error", error.message);
                    error = true;
                });
        },
    },
};
</script>

<style scoped>
.template-div {
    background-color: #96b6c1;
}
.form {
    background-color: #ffda7b;
    width: 200px;
    height: 300px;
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 8px;
}

label {
    display: inline-block;
    margin: 7px;
}
input {
    width: 100px;
    height: 13px;
    border-radius: 3px;
    border: none;
}
button {
    background-color: #ff937b;
    border-radius: 5px;
}
</style>
