<script lang="ts"></script>

<svelte:head>
    <title>English Creative Tool</title>
</svelte:head>
<div class="bg-neutral-800 w-screen h-screen flex justify-center items-center">
    <div class="relative">
        <!-- Volume Buttons -->
        <div class="absolute -z-2 h-[100px] w-2 bg-neutral-100 -left-2 top-[30%]"></div>
        <!-- Power Button -->
        <!-- Ringer Toggle Button -->
        <!-- Body -->
        <div class="border-neutral-900 border-[11px] aspect-screen h-[90vh] rounded-[50px] outline-neutral-400 outline-[4px] outline bg-neutral-300 grid grid-rows-2 grid-cols-2 overflow-clip">
            <div class="bg-red-200"></div>
            <div class="bg-blue-200"></div>
            <div class="bg-blue-200"></div>
            <div class="bg-red-200"></div>
        </div>
    </div>
</div>

<style>
    .aspect-screen {
        aspect-ratio: 9 / 17;
    }
</style>
