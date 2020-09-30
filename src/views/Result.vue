<template>
    <div class="container">
        <div class="winner">
            <h2>Winner</h2>
            <br />
            <p>Name: {{}}</p>
            <p>Age: {{}}</p>
            <p>Wins: {{}}</p>
            <p>Defeats: {{}}</p>
            <p>Games: {{}}</p>
        </div>
        <div class="loser">
            <h2>Loser</h2>
            <br />
            <p>Name: {{}}</p>
            <p>Age: {{}}</p>
            <p>Wins: {{}}</p>
            <p>Defeats: {{}}</p>
            <p>Games: {{}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.container {
    display: flex;
}
.container > div {
    background-color: #ff937b;
    flex: 50%;
    margin: 15px;
    padding: 10px;
}
</style>