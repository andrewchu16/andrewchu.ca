<script lang="ts">
    export let text: string;
    export let href: string = '';
    export let target: string = '';
    let clazz = '';
    export { clazz as class };
</script>

<a
    class={'bg-white hover:scale-110 transition-transform font-display text-6xl text-[#555555] rounded-[33px] w-fit px-12 py-5 ' +
        clazz}
    href={href}
    {target}
>
    {text}
</a>
