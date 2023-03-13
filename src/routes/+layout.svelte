<script>
    import Navbar from '$lib/Navbar.svelte';
    import '../app.css';
</script>

<div class="bg-zinc-900 overflow-x-hidden w-full selection:bg-zinc-800 selection:bg-opacity-70">
    <div class="absolute w-screen z-10">
        <Navbar />
    </div>
    <slot />
</div>
