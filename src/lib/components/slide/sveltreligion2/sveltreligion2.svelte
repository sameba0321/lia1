<script lang="ts">
    import image from "./svelte.jpg"
    
    import image3 from "./Svelte_Logo.svg.png"
</script>

<div>
    <img src={image} alt="" width="250px">
   
    <img src={image3} alt="" width="250px">
    
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-self: center center;
        gap: 5em;
    }
</style>