<script>
    import Navbar from '$lib/Navbar.svelte';
    import '../app.css';
</script>

<div class="bg-zinc-900 overflow-x-hidden w-full selection:bg-zinc-700 selection:bg-opacity-60">
    <div class="absolute w-full z-10">
        <Navbar />
    </div>
    <slot />
</div>
