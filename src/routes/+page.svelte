<script>
    import Footer from '$lib/Footer.svelte';
    import Navbar from '$lib/Navbar.svelte';
    import CoffeehouseBingo from '$lib/assets/Coffeehouse Bingo.jpg';
    import FilmReview from '$lib/assets/film review.jpg';
    import SpringHacks from '$lib/assets/springhacks.jpg';
    import Eyedentify from '$lib/assets/eyedentify.png';
</script>

<svelte:head>
    <title>My Portfolio</title>
</svelte:head>

<div class="bg-zinc-900 overflow-x-hidden w-full selection:bg-zinc-700 selection:bg-opacity-60">
    <Navbar />
    <div class="relative h-80 w-full overflow-hidden whitespace-nowrap px-6 py-2" id="top">
        <h1
            class="absolute top-10 text-8xl tracking-wide font-extrabold font-sans text-zinc-600 select-none"
        >
            Portfolio
        </h1>
        <h1
            class="absolute top-16 text-9xl tracking-normal font-extrabold font-sans text-zinc-100 pb-4 drop-shadow"
        >
            Andrew Chu
        </h1>
    </div>
    <div class="flex flex-col gap-20">
        <div class="w-full p-6 h-96">
            <h2 class="text-4xl text-zinc-300 font-main text-center" id="about">About</h2>
            <p class="text-2xl text-zinc-400 font-main flex h-full justify-center items-center">
                I'm a high school student.
            </p>
        </div>
        <div class="w-full p-6 h-[800px]">
            <h2 class="text-4xl text-zinc-300 font-main text-center" id="designs">Designs</h2>
            <div class="flex justify-around h-full w-full p-4">
                <a
                    target="_blank"
                    href="https://www.canva.com/design/DAFcXjZ6NGA/ouFx-llDzesOy8nn6BRyHA/view?utm_content=DAFcXjZ6NGA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    rel="noreferrer"
                    class="h-full"
                >
                    <img
                        src={CoffeehouseBingo}
                        alt="Coffeehouse bingo Instagram post"
                        class="object-contain h-full rounded-lg overflow-clip"
                    />
                </a>
            </div>
        </div>
        <div class="h-[650px] w-full p-6">
            <h2 class="text-4xl text-zinc-300 font-main text-center" id="websites">Websites</h2>
            <div class="flex justify-around h-full w-full p-4">
                <a
                    target="_blank"
                    href="https://andrewchu16.github.io/#/film-review"
                    rel="noreferrer"
                    class="h-full"
                >
                    <img src={FilmReview} alt="Film Review website" class="object-contain h-full rounded-lg overflow-clip border-4 border-zinc-900" />
                    <p class="text-center mt-2 font-main text-lg link underline hover:no-underline">Film Review</p>
                </a>
                <a
                    target="_blank"
                    href="https://springhacks.ca"
                    rel="noreferrer"
                    class="h-full"
                >
                    <img src={SpringHacks} alt="Spring hacks website" class="object-contain h-full rounded-lg overflow-clip border-4 border-zinc-900" />
                    <p class="text-center mt-2 font-main text-lg link underline hover:no-underline">Spring Hacks</p>
                </a>
            </div>
        </div>
        <div class="h-[600px] w-full p-6">
            <h2 class="text-4xl text-zinc-300 font-main text-center" id="projects">Projects</h2>
            <div class="flex justify-around h-full w-full p-4">
                <a
                    target="_blank"
                    href="https://github.com/andrewchu16/eyedentify"
                    rel="noreferrer"
                    class="h-full"
                >
                    <img src={Eyedentify} alt="Film Review website" class="object-contain h-full rounded-lg overflow-clip border-4 border-zinc-900" />
                    <p class="text-center mt-2 font-main text-lg link">Eyedentify</p>
                </a>
            </div>
        </div>
        <div class="h-96 w-full p-6">
            <h2 class="text-4xl text-zinc-300 font-main text-center" id="contact">Contact</h2>
            <p class="text-xl text-zinc-400 font-main flex h-full justify-center items-center">
                Find me at andrew.chu206@gmail.com
            </p>
        </div>
    </div>
    <Footer />
</div>
