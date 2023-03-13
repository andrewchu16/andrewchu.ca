<script>
    import Footer from '$lib/Footer.svelte';
import Navbar from '$lib/Navbar.svelte';
    import '../app.css';
</script>

<div class="bg-zinc-900 overflow-x-hidden w-full selection:bg-zinc-700 selection:bg-opacity-60">
    <Navbar />
    <slot />
    <Footer />
</div>
