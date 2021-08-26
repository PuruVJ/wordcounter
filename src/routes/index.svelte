<script lang="ts">
	import '../global.css';
	import { wordsCount } from 'words-count';

	let textarea: HTMLTextAreaElement;

	let count = 0;
	let value: string;

	function resize() {
		textarea.style.height = '';
		textarea.style.height = Math.max(textarea.scrollHeight, 600) + 'px';

		count = wordsCount(value);
	}
</script>

<main class="flex flex-col items-center">
	<br />
	<h1>Word Counter</h1>

	<br /><br />
	<textarea
		bind:this={textarea}
		bind:value
		on:input={resize}
		class="bg-[#0a2a17] h-[600px] w-3/5 rounded-2xl outline-transparent p-6 text-white shadow-light-400"
	/>

	<section class="count-thing bg-[#22c55e] fixed z-99 bottom-4 rounded-2xl p-2">
		<h1 class="leading-[1.1] shadow-dark-200 text-[#041109]">{count}</h1>
	</section>
</main>

<style>
	.count-thing {
		box-shadow: 0 0.6px 2.2px rgba(0, 0, 0, 0.031), 0 1.4px 5.3px rgba(0, 0, 0, 0.044),
			0 2.6px 10px rgba(0, 0, 0, 0.055), 0 4.7px 17.9px rgba(0, 0, 0, 0.066),
			0 8.8px 33.4px rgba(0, 0, 0, 0.079), 0 21px 80px rgba(0, 0, 0, 0.11);
	}
</style>
