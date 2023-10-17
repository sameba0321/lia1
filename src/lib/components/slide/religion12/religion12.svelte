<script lang="ts">
    import image from "./framtidamål.jpg"

</script>

<div>
    <img src={image} alt="" width="300px">
 
    
    
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        place-self: center center;
        gap: 1em;
    }
</style>