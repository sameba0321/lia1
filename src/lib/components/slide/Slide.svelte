<script lang="ts">
	import religionsvelte from "$lib/components/slide/sveltereligion/sveltereligion.svelte"
    import religionsvelte2 from "$lib/components/slide/sveltereligion/sveltreligion2/sveltreligion2.svelte"

	export let slideNumber: string

	function getSlidecomponent(slideNumber: string) {
		switch (slideNumber) {
			case "1":
				return religionsvelte
			case "2":
				return religionsvelte2
            
            

		}
	}
</script>

<svelte:component this={getSlidecomponent(slideNumber)} />
