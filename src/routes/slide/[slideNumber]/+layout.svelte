<script lang="ts">
	import { goto } from '$app/navigation'
    import {page} from '$app/stores'

   
    

    const MAX_SLIDE = 20
    const MIN_SLIDE = 1
    $: slideNumber = Number($page.params.slideNumber)
    $: allowprevious = !(slideNumber <= MIN_SLIDE)
    $: allownext = !(slideNumber >= MAX_SLIDE)
    $: previousslide = `/slide/${slideNumber - 1}`
    $: nextslide = `/slide/${slideNumber + 1}`

</script>


<svelte:body on:keydown={(event)=>{
    let {key} = event
    switch (key) {
        case "ArrowLeft":
           if(allowprevious) return goto(previousslide)
           break
        case "ArrowRight":
              if(allownext) return goto(nextslide)
              break
          
    
        
    }
}} />

<div class="heigth-100p grid-stack">
    <slot></slot>
    <div id="hover-container">
{#if !(slideNumber <= MIN_SLIDE)}
<a href={`/slide$(slideNumber) - 1`}>previous</a>
{/if}


{#if !(slideNumber >= MAX_SLIDE)}
<a href={`/slide$(slideNumber) + 1`}>next</a>
{/if}

</div>
</div>

<style>
#hover-container{
    place-self:start center;
    display: flex;
    gap: 5px;
}

#hover-container > a {
    scale: 0;
    display: block;
    transition: scale 0.2s ease-in-out;
}

#hover-container:hover > a {
    scale: 1;
}
</style>
