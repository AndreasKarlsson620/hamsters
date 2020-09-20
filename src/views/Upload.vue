<template>
    <div class="container">
        <h1>Upload</h1>
        <UploadForm />
    </div>
</template>

<script>
import UploadForm from "../components/Upload.vue";
export default {
    name: "Upload",
    components: {
        UploadForm,
    },
};
</script>

<style scoped>
.container {
    text-align: center;
    padding: 30px;
}
</style>
