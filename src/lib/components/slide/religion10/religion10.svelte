<script lang="ts">
    import image from "./Skärmbild 2023-10-17 095407.png"
    import image2 from "./grouping.png"
</script>

<div>
    <img src={image} alt="" width="300px">
    <img src={image2} alt="" width="300px">
    
    
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-self: center center;
        gap: 1em;
    }
</style>