<script lang="ts">
    let navbar: Element;
    let navbarHeight: number;
    let scrollY: number;

    const adjustNavbarBackground = () => {
        if (scrollY >= navbarHeight) {
            navbar.classList.add('bg-zinc-900');
        } else {
            navbar.classList.remove('bg-zinc-900');
        }
    };
</script>

<svelte:window on:scroll={adjustNavbarBackground} bind:scrollY />

<header
    class="w-full flex justify-end px-10 py-6 gap-5 font-thin font-main case fixed z-10 bg-opacity-70 transition-colors duration-600"
    bind:clientHeight={navbarHeight}
    bind:this={navbar}
>
    <a
        href="https://www.canva.com/design/DAFdI3pdkt8/SQHzVxEUP-yAfNuCXT6LiQ/view?utm_content=DAFdI3pdkt8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        class="link"
        target="_blank"
        rel="noreferrer"
    >
        spyglass application:&rpar;
    </a>
    <a href="#about" class="link">about</a>
    <a href="#designs" class="link">designs</a>
    <a href="#websites" class="link">websites</a>
    <a href="#projects" class="link">projects</a>
</header>
