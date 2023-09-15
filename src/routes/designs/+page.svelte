<script lang="ts">
    const postsModules = import.meta.glob('$lib/assets/designs/posts/*.png');
    const posterModules = import.meta.glob('$lib/assets/designs/posters/*.jpg');

    const postsPaths = Object.keys(postsModules) as Array<string>;
    const posterPaths = Object.keys(posterModules) as Array<string>;

    let blurred = false;
</script>

<svelte:head>
    <title>design portfolio</title>
</svelte:head>

<div class="bg-neutral-100 py-6 md:px-8 px-2">
    <div class="fixed top-0 left-0 w-screen h-screen -z-10 transition-colors transparent" class:blurred />
    <!-- <h1 class="text-4xl text-main">designs</h1> -->
    <main class="grid grid-cols-1 gap-y-16" on:mouseleave={() => blurred = false}>
        <section>
            <!-- <h2 class="text-2xl">posts</h2> -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-2 sm:py-2 md:p-6">
                {#each postsPaths as url}
                    <img
                        src={url}
                        alt={url}
                        class="aspect-square hover:scale-110 hover:z-10 transition-transform"
                        on:mouseenter={() => (blurred = true)}
                    />
                {/each}
            </div>
        </section>
        <section>
            <!-- <h2 class="text-2xl">Posters</h2> -->
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 md:p-8 transition-colors transparent" on:mouseleave={() => blurred = false}>
                {#each posterPaths as url}
                    <img
                        src={url}
                        alt={url}
                        class="hover:scale-110 hover:z-20 transition-transform"
                        on:mouseenter={() => (blurred = true)}
                        
                    />
                {/each}
            </div>
        </section>
    </main>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    .blurred {
        background-color: rgba(10, 10, 10, 0.8);
        z-index: 10;
    }
</style>
