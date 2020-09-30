<template>
    <div class="template-div">
        <div class="form">
            <form @submit="submitForm">
                <h3>Upload a hamster</h3>
                <div>
                    <label>Name</label>
                    <input v-model="hamster.name" type="text" required />
                    <div
                        v-if="!$v.hamster.name.required && $v.hamster.name.$dirty"
                        class="error-class"
                    >Field is required</div>
                    <div v-if="!$v.hamster.name.minLength" class="error-class">At least 3 characters</div>
                </div>

                <div>
                    <label>Age</label>
                    <input v-model="hamster.age" type="number" required />
                    <div
                        v-if="!$v.hamster.age.between && $v.hamster.age.$dirty"
                        class="error-class"
                    >Age must be between 0 -100</div>
                </div>

                <div>
                    <label>Eats</label>
                    <input v-model="hamster.food" type="text" required />
                    <div
                        v-if="!$v.hamster.food.required && $v.hamster.food.$dirty"
                        class="error-class"
                    >You're not starving your hamster, right?</div>
                    <div v-if="!$v.hamster.food.minLength" class="error-class">At least 3 characters</div>
                </div>

                <div>
                    <label>Loves</label>
                    <input v-model="hamster.loves" type="text" required />
                    <div
                        v-if="!$v.hamster.loves.required && $v.hamster.loves.$dirty"
                        class="error-class"
                    >Field is required</div>
                    <div
                        v-if="!$v.hamster.loves.minLength"
                        class="error-class"
                    >At least 3 characters</div>
                </div>

                <div>
                    <label>Img url</label>
                    <input v-model="hamster.url" type="url" required />
                    <div
                        v-if="!$v.hamster.url.required && $v.hamster.url.$dirty"
                        class="error-class"
                    >Field is required</div>
                    <div v-if="!$v.hamster.url.url" class="error-class">Please enter a valid url</div>
                </div>

                <button :disabled="isLoading" @click.prevent="submitForm()" type="submit">
                    <span>Submit</span>
                </button>

                <div v-show="isLoading">Loading...</div>
                <div v-show="success">Your hamster is now ready for battle!</div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { required, minLength, between, url } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            hamster: {
                name: "",
                age: 0,
                food: "",
                loves: "",
                url: "",
            },
            isLoading: false,
            success: false,
        };
    },
    validations: {
        hamster: {
            name: {
                required,
                minLength: minLength(3),
            },
            age: {
                required,
                between: between(0, 100),
            },
            food: {
                required,
                minLength: minLength(3),
            },
            loves: {
                required,
                minLength: minLength(2),
            },
            url: {
                required,
                url,
            },
        },
    },
    methods: {
        submitForm: function () {
            //Validering
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log("You entered a valid form!");
                console.log("Detta är hamsterobjektet:", this.hamster);
                this.isLoading = true;
                //Post-funktion
                axios
                    .post("/upload", this.hamster)
                    .then((response) => {
                        console.log("Detta är response", response);
                        if (response.status === 200) {
                            this.isLoading = false;
                            this.success = true;
                            this.hamster.name = "";
                            this.hamster.age = 0;
                            this.hamster.food = "";
                            this.hamster.loves = "";
                            this.hamster.url = "";
                            //Reset formuläret
                            this.$v.$reset();
                        }
                    })
                    .catch((error) => {
                        console.log("Error", error.message);
                        this.error = true;
                    });
            }
        },
    },
};
</script>

<style scoped>
.template-div {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #96b6c1;
}
h3 {
    margin-bottom: 20px;
}
.form {
    color: #2c3e50;
    background-color: #ffda7b;
    width: 250px;
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
.error-class {
    font-size: 0.8em;
    color: red;
}
button {
    text-align: center;
    background-color: #ff937b;
    border-radius: 5px;
    margin: 10px;
    border: none;
    width: 70px;
    height: 25px;
    transition: 2s;
    transform: translateX(-50%);
    margin-left: 30%;
}
/* Effekt på knappen */
span {
    position: relative;
    z-index: 2;
}
button:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff7859;
    transition: all 0.2s;
    border-radius: 5px;
}
button:hover {
    color: black;
}
button:hover:after {
    width: 100%;
}
</style>