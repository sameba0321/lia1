<script lang="ts">
   import Slide1 from "./slide1.svelte"

    export let slideNumber: string;

    

    function getSlidecomponent(slideNumber: string){
        switch (slideNumber){
            case "1":
                return Slide1
                default:
                    return Slide1
        }
    }
</script>

<svelte:component this={getSlidecomponent(slideNumber)}/>