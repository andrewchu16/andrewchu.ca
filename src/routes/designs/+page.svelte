<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;

    let blurred = false;
</script>

<svelte:head>
    <title>design portfolio</title>
</svelte:head>

<div class="bg-neutral-100 py-6 md:px-8 px-2 h-screen">
    <!-- <h1 class="text-4xl text-main">designs</h1> -->
    <main class="grid grid-cols-1 gap-y-16" on:mouseleave={() => blurred = false}>
        <section>
            <!-- <h2 class="text-2xl">posts</h2> -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-2 sm:py-2 md:p-6">
                {#each data.posts as post}
                    <img
                        src={post.imageURL}
                        alt={post.alt}
                        class="aspect-square"
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
</style>
