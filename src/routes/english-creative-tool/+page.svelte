<script lang="ts">
    import MaterialSymbolsArrowBackIosRounded from 'virtual:icons/material-symbols/arrow-back-ios-rounded';
    import MaterialSymbolsBatteryHoriz050Rounded from 'virtual:icons/material-symbols/battery-horiz-050-rounded';
    import Message from './message.svelte';
    import { onMount, tick } from 'svelte';

    $: date = new Date();

    $: questionIndex = 0;
    let numPleasure = 0;
    let container;

    const QUESTIONS = [
        {
            question: 'At age 9, do you choose to play outside with friends or read a book?',
            choices: ['Play outside', 'Read a book'],
            pleasureChoice: 0
        },
        {
            question: 'At age 12, do you decide to watch cartoons or help with a school project?',
            choices: ['Watch cartoons', 'Help with school project'],
            pleasureChoice: 0
        },
        {
            question: 'At age 15, would you rather hang out at the mall or do homework?',
            choices: ['Hang out at the mall', 'Do homework'],
            pleasureChoice: 0
        },
        {
            question: 'At age 18, do you choose to go to a party or study for your final exam?',
            choices: ['Go to a party', 'Study for exam'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 20, would you rather spend your summer traveling or doing an internship?',
            choices: ['Traveling', 'Internship'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 23, do you decide to buy a new car or save money for graduate school?',
            choices: ['Buy a new car', 'Save for graduate school'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 25, would you prefer to spend your weekends socializing or working on a big project?',
            choices: ['Socializing', 'Working on project'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 28, do you choose to invest in a fancy apartment or allocate funds for career development?',
            choices: ['Fancy apartment', 'Career development'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 30, would you rather spend your evenings watching TV or working on a significant task?',
            choices: ['Watching TV', 'Working on task'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 33, do you decide to take a break and relax or attend a professional conference?',
            choices: ['Take a break', 'Attend conference'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 35, would you prefer to spend your bonus on a luxury vacation or fund a new project?',
            choices: ['Luxury vacation', 'Fund project'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 38, do you choose to pursue a hobby or take additional courses to enhance your expertise?',
            choices: ['Pursue a hobby', 'Enhance expertise'],
            pleasureChoice: 0
        },
        {
            question:
                'At age 40, would you rather spend your free time relaxing or mentoring young professionals?',
            choices: ['Relaxing', 'Mentoring young professionals'],
            pleasureChoice: 0
        }
    ];

    let messages = [];

    const askQuestion = async () => {
        messages = [
            ...messages,
            {
                text: QUESTIONS[questionIndex].question,
                type: 'gray'
            }
        ];
        await tick();
        container.scrollTop = container.scrollHeight;
    };

    const makeChoice = async (choiceNum: number) => {
        if (
            questionIndex < QUESTIONS.length &&
            QUESTIONS[questionIndex].pleasureChoice === choiceNum
        )
            numPleasure++;
        messages = [
            ...messages,
            {
                text: QUESTIONS[questionIndex].choices[choiceNum],
                type: 'blue'
            }
        ];
        if (questionIndex < QUESTIONS.length - 1) {
            setTimeout(() =>
            {
                questionIndex++;
                askQuestion();
            }, 300 + Math.random() * 250);
        } else {
            messages = [
                ...messages,
                {
                    text: `🌟Thank you for playing. You chose pleasure ${(
                        (numPleasure / QUESTIONS.length) * 100
                ).toFixed(2)}% of the time.`,
                    type: 'gray'
                }
            ];
            await tick();
            container.scrollTop = container.scrollHeight;
        }
    };

    onMount(() => {
        askQuestion();
    });
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
        class="w-full aspect-screen h-[90vh] border-neutral-900 border-[11px] rounded-[6vh] outline-neutral-400 outline-[4px] outline overflow-clip bg-white relative flex flex-col"
    >
        <!-- Banner -->
        <div class="w-full bg-neutral-100 h-[12vh] flex flex-col gap-5 pb-4">
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
                <div class="flex justify-center flex-grow -scale-x-100 text-xl text-neutral-800">
                    <MaterialSymbolsBatteryHoriz050Rounded />
                </div>
            </div>
            <div class="flex-1 px-6 relative">
                <div class="absolute top-2 text-blue-600">
                    <MaterialSymbolsArrowBackIosRounded />
                </div>
                <div class="rounded-full bg-neutral-300 w-[13%] aspect-square m-auto" />
            </div>
        </div>
        <!-- Message Body -->
        <div
            class="px-2 flex flex-col gap-1 pt-3 overflow-y-auto h-[calc(88vh-7rem)]"
            bind:this={container}
        >
            {#each messages as message}
                <Message text={message.text} type={message.type} />
            {/each}
        </div>
        <!-- Controls -->
        <div class="h-[7rem] w-full">
            <div class="flex h-12 py-2 px-3 gap-2">
                <div
                    class="rounded-full bg-neutral-200 h-full aspect-square text-neutral-500 flex justify-center items-center select-none"
                >
                    +
                </div>
                <div
                    class="text-neutral-300 border-neutral-300 border-[1px] rounded-full px-2 py-1 box-border flex-grow select-none cursor-text"
                >
                    Message...
                </div>
            </div>
            <div class="h-16 w-full flex justify-around bg-neutral-300">
                <button class="hover:font-bold active:font-normal" on:click={() => makeChoice(0)}
                    >{QUESTIONS[questionIndex].choices[0]}</button
                >
                <button class="hover:font-bold active:font-normal" on:click={() => makeChoice(1)}
                    >{QUESTIONS[questionIndex].choices[1]}</button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .aspect-screen {
        aspect-ratio: 1 / 2;
    }
    :global(body) {
        @apply bg-neutral-800 w-screen h-screen flex justify-center items-center;
    }

    .message {
        @apply rounded-t-2xl max-w-[77%];
        padding: 4px clamp(0px, calc(14px - 1%), 12px);
    }

    .blue-message {
        @apply self-end rounded-bl-2xl rounded-br-xl bg-blue-500 text-white;
    }

    .gray-message {
        @apply self-start rounded-br-2xl rounded-bl-xl bg-neutral-200;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        @apply bg-neutral-300;
        border-radius: 80px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        @apply bg-neutral-400;
    }
</style>
