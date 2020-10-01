<template>
    <div class="container">
        <div id="navbar">
            <h1>Battle</h1>
        </div>

        <div id="vs" style="position: relative; top: 220px"><h2>VS</h2></div>
        <div id="Json" v-for="Hamster in ApiData" v-bind:key="Hamster.id">
            <p id="id">ID:{{ Hamster.id }}</p>
            <p id="imgName">
                <img
                    :src="getImgUrl(Hamster.imgName)"
                    v-bind:alt="Hamster.imgName"
                    style="width: 450px; height: 400px"
                    v-on:click="showResult = true"
                />
            </p>

            <p id="Name">Name:{{ Hamster.name }}</p>
            <p id="age">AGE:{{ Hamster.age }}</p>
        </div>
        <Result
            v-show="showResult"
            v-bind:winner="fejkHamster1"
            v-bind:loser="fejkHamster2"
        />
    </div>
</template>

<script>
import axios from "axios";
//import json from "@/assets/hamster.json";
import Result from "./Result.vue";

export default {
    name: "Battle",
    data() {
        return {
            ApiData: null,

            showResult: false,
            fejkHamster1: {
                name: "Aurelia",
                age: 3,
                food: "Salad",
                loves: "To dance",
                wins: 2,
                defeats: 5,
                games: 7,
            },
            fejkHamster2: {
                name: "Olle",
                age: 6,
                food: "Potatoes",
                loves: "To play",
                wins: 7,
                defeats: 8,
                games: 15,
            },
        };
    },
    components: {
        Result,
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.getJsonData();
    },
    watch: {
        // call again the method if the route changes
        $route: "getJsonData",
    },
    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        getImgUrl(pic) {
            return require("../assets/hamsters/" + pic);
        },

        getJsonData() {
            axios
                .get("hamster.json") // .get('/battle')
                .then((response) => {
                    // this.ApiData=new Array(2);
                    //this.ApiData.push(response.data[this.getRandomInt(41)]);
                    //this.ApiData.push(response.data[this.getRandomInt(41)]);
                    this.ApiData = response.data.slice(0, 2);

                    //return this.ApiData;        //this.getRandomInt();
                    // (this.ApiData = response.data)
                    // console.log(this.ApiData);

                    console.log(
                        this.getRandomInt(41),
                        response.data[this.getRandomInt(41)]
                    );
                })

                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style scope>
#navbar > h1 {
    text-align: center;
}
#vs {
    text-align: center;
}

#Json {
    display: grid;
    float: left;
    margin-right: 15px;
    margin-left: 25px;
}

.container > * {
    margin: 1px;
}
</style>

