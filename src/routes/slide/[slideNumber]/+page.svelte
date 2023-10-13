<script lang="ts">
	import Slide from "$lib/components/slide/Slide.svelte"

	import { page } from "$app/stores"

	let slideNumber = $page.params.slideNumber
</script>

<Slide {slideNumber} />
