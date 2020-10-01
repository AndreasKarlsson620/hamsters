<template>
    <div class="container">
        <div class="winner">
            <h2>Winner!</h2>
            <br />
            <p>Name: {{ winner.name }}</p>
            <p>Age: {{ winner.age }}</p>
            <p>Wins: {{ winner.wins }}</p>
            <p>Defeats: {{ winner.defeats }}</p>
            <p>Games: {{ winner.games }}</p>
        </div>
        <div class="loser">
            <h2>Loser</h2>
            <br />
            <p>Name: {{ loser.name }}</p>
            <p>Age: {{ loser.age }}</p>
            <p>Wins: {{ loser.wins }}</p>
            <p>Defeats: {{ loser.defeats }}</p>
            <p>Games: {{ loser.games }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["winner", "loser"],
    data() {
        return {};
    },
};
</script>

<style scoped>
.container {
    font-size: 1.3em;
    display: flex;
}
.container > div {
    text-align: center;
    flex: 50%;
    margin: 15px;
    padding: 10px;
}
</style>