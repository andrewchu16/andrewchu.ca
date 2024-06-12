<script lang="ts"></script>

<svelte:head>
    <title>English Creative Tool</title>
</svelte:head>
<div class="bg-neutral-800 w-screen h-screen flex justify-center items-center z-0">
    <div class="relative">
        <!-- Ringer Toggle Button -->
        <div class="absolute -z-2 h-[20px] w-[6px] bg-neutral-100 -left-[6px] top-[20%]" />
        <!-- Volume Buttons -->
        <div class="absolute z-0 h-[100px] w-[6px] -left-[6px] top-[27%] flex flex-col justify-between">
            <div class="h-[40px] bg-neutral-400 border-l-[1px] border-t-[1px] border-b-[1px] border-l-neutral-300 border-y-neutral-500 rounded-md"></div>
            <div class="h-[40px] bg-neutral-400 border-l-[1px] border-t-[1px] border-b-[1px] border-l-neutral-300 border-y-neutral-500 rounded-md"></div>
        </div>
        <!-- Power Button -->
        <!-- Body -->
        <div
            class="border-neutral-900 border-[11px] aspect-screen h-[90vh] rounded-[50px] outline-neutral-400 outline-[4px] outline bg-neutral-300 grid grid-rows-2 grid-cols-2 overflow-clip z-10 relative"
        >
            <div class="bg-red-200" />
            <div class="bg-blue-200" />
            <div class="bg-blue-200" />
            <div class="bg-red-200" />
        </div>
    </div>
</div>

<style>
    .aspect-screen {
        aspect-ratio: 9 / 17;
    }
</style>
