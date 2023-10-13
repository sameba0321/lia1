import { writable } from "svelte/store"

let timerId: ReturnType<typeof setInterval> | null

function stopInterval() {
	//@ts-ignore
	clearInterval(timerId)
	timerId = null
}

function createSlideTimer() {
	const { subscribe, set, update } = writable(20)

	function stop() {
		stopInterval()
	}

	function reset() {
		update(() => 20)
	}

	function start() {
		if (timerId) return

		timerId = setInterval(() => {
			update((previousvalue) => {
				if (previousvalue === 0) {
					stopInterval()
					return previousvalue
				}
				return previousvalue - 1
			})
		}, 1000)
	}

	return { subscribe, set, update, reset, start, stop }
}

export const SlideTimer = createSlideTimer()
