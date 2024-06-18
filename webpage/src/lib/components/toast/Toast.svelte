<script lang="ts">
    import { setToastState, toastStateStore } from "$lib/store";
    import { onDestroy } from 'svelte';

    // Toast
    export let toastState: string = 'Successful Toast';
    export let toastText: string = 'Its a green notification state';
    let hide: string = '-top-32';
    let bgColor: string = 'rgba(var(--color-success-500)/1)';
    let boxShadowColor: string = 'rgba(var(--color-success-600)/1)';
    let iconClass: string = 'fa-check-double';
    let iconColor: string = 'text-black';

    // Check which Toast State is active
    $: if ($toastStateStore === 'hide') {
        hide = '-top-32';
    } else if ($toastStateStore === 'success') {
        hide = 'top-8';
        bgColor = 'rgba(var(--color-success-500)/1)';
        boxShadowColor = 'rgba(var(--color-success-600)/1)';
        iconClass = 'fa-check-double';
        iconColor = 'text-black';
    } else if ($toastStateStore === 'warning') {
        hide = 'top-8';
        bgColor = 'rgba(var(--color-warning-500)/1)';
        boxShadowColor = 'rgba(var(--color-warning-600)/1)';
        iconClass = 'fa-exclamation-triangle';
        iconColor = 'text-black';
        toastState = 'Warning Toast';
        toastText = 'Its a yellow notification state';
    } else if ($toastStateStore === 'error') {
        hide = 'top-8';
        bgColor = 'rgba(var(--color-error-500)/1)';
        boxShadowColor = 'rgba(var(--color-error-600)/1)';
        iconClass = 'fa-times-circle';
        iconColor = 'text-white';
        toastState = 'Error Toast';
        toastText = 'Its a red notification state';
    }

    // Close Toast
    const closeToast = () => {
        setToastState('hide');
    }

    // Timer to auto close the toast
    $: if (hide === 'top-8') {
        const timer = setTimeout(() => {
            closeToast();
        }, 6000);
        
        // Clear timeout if the component is destroyed before the timer ends
        onDestroy(() => clearTimeout(timer));
    }
</script>

<div class="Toast absolute {hide} left-1/2 -translate-x-1/2 z-50 rounded-xl py-3 px-5" style="background-color: #1b1a1e;width: 400px;box-shadow: 0px 2px 20px {boxShadowColor};">
    <div class="content flex items-center justify-between">
        <div class="flex items-center">
            <div class="logo px-4 py-2 rounded-lg flex justify-center items-center" style="background-color: {bgColor};">
                <i class="fa-solid {iconClass} text-xl {iconColor} toastIcon animate-ping"></i>
            </div>
            <div class="txt ml-4">
                <p class="font-bold text-lg -mb-1">{toastState}</p>
                <span class="text-sm">{toastText}</span>
            </div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="close px-3 py-2 rounded-lg flex justify-center items-center cursor-pointer" on:click={closeToast}>
            <i class="fa-solid fa-x text-xl"></i>
        </div>
    </div>
</div>

<style lang="postcss">
    .Toast {
        transition: top 0.2s ease-in-out;
    }
    .close:hover {
        transition: background 0.1s ease-in-out;
        background: rgba(var(--color-secondary-500)/1);
    }
    .close:hover i {
        animation: jello;
        animation-duration: 1.3s;
    }
</style>
