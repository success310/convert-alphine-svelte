<script>
  import { link } from "svelte-routing";

  import { slide } from "svelte/transition";
  
  export let navBar;
  
  let isOpen = false;
  let isDefault = navBar.name === "Dashboards";
  const toggle = () => {
    isDefault = false;
    isOpen = !isOpen;
  };
</script>

<div>
  <a
    use:link
    href={navBar.path}
    class="{ isOpen ? 'bg-primary-100 dark:bg-primary': (isDefault ? 'bg-primary-100 dark:bg-primary': '')} flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
    on:click={() => toggle()}
    aria-expanded={isOpen}
  >
    {@html navBar.iconHtmlCode}
    <span class="ml-2 text-sm"> {navBar.name} </span>
    <span class="ml-auto" aria-hidden="true">
      <!-- active class 'rotate-180' -->
      <svg
        class="{isOpen ? 'rotate-180' : ''} w-4 h-4 transition-transform transform"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  </a>

  {#if isOpen || isDefault}
  <div transition:slide={{ duration: 300 }} class="mt-2 space-y-2 px-7">
    <!-- active & hover classes 'text-gray-700 dark:text-light' -->
    <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
    {#each navBar.children as child}
      <a
        use:link
        href="{child.path}"
        class="block p-2 text-sm text-gray-{child.number} transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
      >
        {child.name}
      </a>
    {/each}
  </div>
  {/if}
</div>