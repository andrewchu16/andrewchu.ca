<script lang="ts"></script>

<svelte:head>
    <title>English Creative Tool</title>
</svelte:head>
<!-- Phone Container -->
<div class="relative">
    <!-- Notch  -->
    <div class="absolute top-0 left-[27%] bg-neutral-900 rounded-b-2xl w-[46%] h-[35px]">

    </div>
    <!-- Ringer Toggle Button -->
    <div
        class="absolute h-[3.5%] w-[6px] -left-[6px] top-[13%] bg-neutral-400 border-l-[1px] border-y-[1px] border-l-neutral-300 border-y-neutral-500 rounded-md"
    />
    <!-- Volume Buttons -->
    <div class="absolute h-[15%] w-[6px] -left-[6px] top-[20%] flex flex-col justify-between z-10">
        <div
            class="h-[40%] bg-neutral-400 border-l-[1px] border-y-[1px] border-l-neutral-300 border-y-neutral-500 rounded-md"
        />
        <div
            class="h-[40%] bg-neutral-400 border-l-[1px] border-y-[1px] border-l-neutral-300 border-y-neutral-500 rounded-md"
        />
    </div>
    <!-- Power Button -->
    <div
        class="absolute h-[10%] w-[6px] -right-[6px] top-[22.5%] bg-neutral-400 border-r-[1px] border-y-[1px] border-y-neutral-500 border-r-neutral-500 rounded-md"
    />
    <!-- Screen -->
    <div
        class="grid grid-rows-2 grid-cols-2 w-full aspect-screen h-[90vh] border-neutral-900 border-[11px] rounded-[6vh] outline-neutral-400 outline-[4px] outline overflow-clip"
    >
        <div class="bg-red-200" />
        <div class="bg-blue-200" />
        <div class="bg-blue-200" />
        <div class="bg-red-200" />
    </div>
</div>

<style>
    .aspect-screen {
        aspect-ratio: 9 / 18;
    }
    :global(body) {
        @apply bg-neutral-800 w-screen h-screen flex justify-center items-center;
    }
</style>
