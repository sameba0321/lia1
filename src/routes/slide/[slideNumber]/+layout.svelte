<script lang="ts">
	import { goto } from "$app/navigation"
	import { page } from "$app/stores"
	import { SlideTimer } from "$lib/utilities/stores/SlideTimers"
	import { onDestroy, onMount } from "svelte"

	const MAX_SLIDE = 20
	const MIN_SLIDE = 1
	$: slideNumber = Number($page.params.slideNumber)
	$: allowprevious = !(slideNumber <= MIN_SLIDE)
	$: allownext = !(slideNumber >= MAX_SLIDE)
	$: previousslide = `/slide/${slideNumber - 1}`
	$: nextslide = `/slide/${slideNumber + 1}`
	$: if ($SlideTimer === 0 && allownext) {
		goto(nextslide)
		SlideTimer.reset()
	}

	onMount(() => {
		SlideTimer.start()
	})

	onDestroy(() => {
		SlideTimer.stop()
		SlideTimer.reset()
	})
</script>

<svelte:body
	on:keydown={(event) => {
		let { key } = event
		switch (key) {
			case "ArrowLeft":
				if (allowprevious) return goto(previousslide)
				break
			case "ArrowRight":
				if (allownext) return goto(nextslide)
				break
		}
	}} />


	<slot />

	<span id="span-timer">{$SlideTimer}</span>
	<span id="span-number">{slideNumber}</span>
	<div id="hover-container">
		<div>
			<button on:click={SlideTimer.reset}>reset timer</button>
			<button on:click={SlideTimer.start}>start</button>
			<button on:click={SlideTimer.stop}>stop</button>
		</div>
		<div>
			{#if !(slideNumber <= MIN_SLIDE)}
				<a href={previousslide}>previous</a>
			{/if}

			{#if !(slideNumber >= MAX_SLIDE)}
				<a href={nextslide}>next</a>
			{/if}
		</div>
	</div>


<style>
	#hover-container {
		place-self: start center;
	}

	#hover-container > div {
		scale: 0;
		transition: scale 0.2s ease-in-out;
		display: flex;
		gap: 1em;
		place-content: center;
	}

	#hover-container:hover > div {
		scale: 1;
	}

	#span-number {
		place-self: start end;
		animation: rotate 20s linear infinite;
	}
	

	#span-timer {
		place-self: start start;
		animation: rotate 20s linear infinite;
	}

	#span-timer,
	#span-number {
		opacity: 0.5;
		margin: 1em;
        
	}

    @keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
