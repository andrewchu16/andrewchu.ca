<script lang="ts">
    export let type: string
    export let text: string;

</script>

<style>
    .message {
        @apply rounded-t-2xl max-w-[77%];
        padding: 4px clamp(0px, calc(14px - 1%), 12px);
    }

    .blue-message {
        @apply self-end rounded-bl-2xl rounded-br-lg bg-blue-500 text-white;
    }

    .gray-message {
        @apply self-start rounded-br-2xl rounded-bl-lg bg-neutral-200;
    }
</style>

<div class="message {type}-message">{text}</div>