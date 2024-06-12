<script lang='ts'>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(() => {
        goto('/english-creative-tool');
    });
</script>
<svelte:head>
    <title>Andrew's Website</title>
</svelte:head>

<div class="h-screen w-screen flex justify-center items-center">
    <a href="/english-creative-tool" class="hover:underline">English Creative Tool</a>
</div>