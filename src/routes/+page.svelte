<script>
    import TitleTile from "$lib/TitleTile.svelte";
    import Wave1 from "$lib/Wave 1.svelte"
    import Wave2 from "$lib/Wave 2.svelte";
    import Wave3 from "$lib/Wave 3.svelte";
</script>

<svelte:head>
    <title>welcome - andrew chu</title>
</svelte:head>

<div class="w-screen h-screen overflow-clip">
    <div class="absolute w-full flex items-center flex-col h-full overflow-hidden pointer-events-none">
        <Wave3 />
    </div>
    <div class="p-16 flex flex-col items-center h-full justify-between">
        <TitleTile text="andrew chu" href="/bio" class="z-10 relative top-5 left-16 text-7xl px-14 py-7"/>
        <TitleTile text="designs" href="/designs" />
        <TitleTile text="projects" href="/projects" class="z-10" />
        <TitleTile text="contact" href="mailto:andrew.chu206@gmail.com"/>
    </div>
</div>