<script lang="ts">
	import religionsvelte from "$lib/components/slide/sveltereligion/sveltereligion.svelte"
    import religionsvelte2 from "$lib/components/slide/sveltreligion2/sveltreligion2.svelte"
	import religion3 from "$lib/components/slide/religion3/religion3.svelte"
    import religion4 from "$lib/components/slide/religion4/religion4.svelte"
    import religion5 from "$lib/components/slide/religion5/religion5.svelte"
    import religion6 from "$lib/components/slide/religion6/religion6.svelte"
    import religion7 from "$lib/components/slide/religion7/religion7.svelte"
    import religion8 from "$lib/components/slide/religion8/religion8.svelte"
    import religion9 from "$lib/components/slide/religion9/religion9.svelte"
    import religion10 from "$lib/components/slide/religion10/religion10.svelte"
    import religion11 from "$lib/components/slide/religion11/religion11.svelte"
    import religion12 from "$lib/components/slide/religion12/religion12.svelte"
    import religion13 from "$lib/components/slide/religion13/religion13.svelte"
    import religion14 from "$lib/components/slide/religion14/religion14.svelte"
    import religion15 from "$lib/components/slide/religion15/religion15.svelte"
    import religion16 from "$lib/components/slide/religion16/religion16.svelte"
    import religion17 from "$lib/components/slide/religion17/religion17.svelte"
    import religion18 from "$lib/components/slide/religion18/religion18.svelte"
    import religion19 from "$lib/components/slide/religion19/religion19.svelte"
    import religion20 from "$lib/components/slide/religion20/religion20.svelte"

	export let slideNumber: string

	function getSlidecomponent(slideNumber: string) {
		switch (slideNumber) {
			case "1":
				return religionsvelte
			case "2":
				return religionsvelte2
			case "3":
                return religion3
            case "4":
                return religion4
            case "5":
                return religion5
            case "6":
                return religion6
            case "7":
                return religion7
            case "8":
                return religion8
            case "9":
                return religion9
            case "10":
                return religion10
            case "11":
                return religion11
            case "12":
                return religion12
            case "13":
                return religion13
            case "14":
                return religion14
            case "15":
                return religion15
            case "16":
                return religion16
            case "17":
                return religion17
            case "18":
                return religion18
            case "19":
                return religion19
            case "20":
                return religion20
		}
	}
</script>

<svelte:component this={getSlidecomponent(slideNumber)} />
