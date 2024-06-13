<script lang="ts">
    import MaterialSymbolsArrowBackIosRounded from 'virtual:icons/material-symbols/arrow-back-ios-rounded';
    import MaterialSymbolsBatteryHoriz050Rounded from 'virtual:icons/material-symbols/battery-horiz-050-rounded';

    $: date = new Date();
</script>

<svelte:head>
    <title>English Creative Tool</title>
</svelte:head>
<!-- Phone Container -->
<div class="relative">
    <!-- <div class="absolute top-0 left-[27%] bg-neutral-900 rounded-b-2xl w-[46%] h-[35px]" /> -->
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
        class="w-full aspect-screen h-[90vh] border-neutral-900 border-[11px] rounded-[6vh] outline-neutral-400 outline-[4px] outline overflow-clip bg-white"
    >
        <!-- Banner -->
        <div class="w-full bg-neutral-100 h-[110px] flex flex-col gap-5">
            <!-- Status Bar -->
            <div class="w-full  h-[24px] flex justify-between items-center px-8">
                <div class="flex justify-center flex-grow">
                    <span class="text-sm"
                        >{date
                            .toLocaleTimeString('en-us', { hour: 'numeric', minute: '2-digit' })
                            .slice(0, -3)}</span
                    >
                </div>
                <!-- Notch  -->
                <div class="bg-neutral-900 rounded-b-2xl w-[46%] h-full" />
                <div class="flex justify-center flex-grow -scale-x-100 text-xl">
                    <MaterialSymbolsBatteryHoriz050Rounded />
                </div>
            </div>
            <div class="flex-1 px-6 relative">
                <div class="absolute top-2 text-blue-600">
                    <MaterialSymbolsArrowBackIosRounded />
                </div>
                <div class="rounded-full bg-neutral-300 w-[13%] aspect-square m-auto"></div>
            </div>
        </div>
        <!-- Message Body -->
        <!--  -->
    </div>
</div>

<style>
    .aspect-screen {
        aspect-ratio: 1 / 2;
    }
    :global(body) {
        @apply bg-neutral-800 w-screen h-screen flex justify-center items-center;
    }
</style>
