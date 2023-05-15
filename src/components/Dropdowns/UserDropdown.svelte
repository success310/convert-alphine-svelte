<script>
   import {
    isOpenUserDropdown,
  } from "../../store/common.js";
  import { clickOutside } from "../Listeners/clickOutSide.js";
  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";
</script>

{#if $isOpenUserDropdown}
<div
  transition:slide={{
    delay: 0,
    duration: 300,
    easing: linear,
  }}
  use:clickOutside
  on:click_outside={() => (isOpenUserDropdown.set(false))}
  class="transform transition-all absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
  tabindex="-1"
  role="menu"
  aria-orientation="vertical"
  aria-label="User menu"
>
  <a
    href="#profile"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
  >
    Your Profile
  </a>
  <a
    href="#menuitem"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
  >
    Settings
  </a>
  <a
    href="#logout"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
  >
    Logout
  </a>
</div>
{/if}