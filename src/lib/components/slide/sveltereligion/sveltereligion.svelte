<script lang="ts">
    import image from "./svelte.jpg"
</script>

<div>
    <img src={image} alt="" width="250px">
    <img src={image} alt="" width="250px">
    <img src={image} alt="" width="250px">
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>