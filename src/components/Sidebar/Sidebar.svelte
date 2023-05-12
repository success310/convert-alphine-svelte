<script>
  import { link } from "svelte-routing";

  // states
  let navBar = 'dashboard';
  let isToggle = true;

  // functions
  const toggleAccordion = value => {
    if (navBar === value) {
      isToggle = !isToggle;
    } else {
      navBar = value;
      isToggle = true;
    }
  };

  // properties
</script>

<!-- Sidebar -->
<aside
  class="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block"
>
  <div class="flex flex-col h-full">
    <!-- Sidebar links -->
    <nav
      class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
    >
      <!-- Dashboards links -->
      <div class="dashboard-link">
        <a
          use:link
          href="/admin/dashboard"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          on:click={() => toggleAccordion('dashboard')}
        >
          <span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Dashboards </span>
          <span class="ml-auto">
            {#if navBar === 'dashboard' && isToggle}
              <i class="fas fa-angle-up mr-2 text-sm" />
            {:else}
              <i class="fas fa-angle-down mr-2 text-sm" />
            {/if}
          </span>
        </a>

        {#if navBar === "dashboard" && isToggle}
          <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
            >
              Default
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Project Mangement (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              E-Commerce (soon)
            </a>
          </div>
        {/if}
      </div>

      <!-- Components links -->
      <div class="component-link">
        <a
          use:link
          href="/admin/component"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          on:click={() => toggleAccordion("component")}
        >
          <span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Components </span>
          <span class="ml-auto">
            {#if navBar === "component" && isToggle}
              <i class="fas fa-angle-up mr-2 text-sm" />
            {:else}
              <i class="fas fa-angle-down mr-2 text-sm" />
            {/if}
          </span>
        </a>

        {#if navBar === "component" && isToggle}
          <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Components">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Alerts (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Buttons (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Cards (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Dropdowns (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Forms (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Lists (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Modals (soon)
            </a>
          </div>
        {/if}
      </div>

      <!-- Pages links -->
      <div class="pages-link">
        <a
          use:link
          href="/admin/pages"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          on:click={() => toggleAccordion("pages")}
        >
          <span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Pages </span>
          <span class="ml-auto">
            {#if navBar === "pages" && isToggle}
              <i class="fas fa-angle-up mr-2 text-sm" />
            {:else}
              <i class="fas fa-angle-down mr-2 text-sm" />
            {/if}
          </span>
        </a>

        {#if navBar === "pages" && isToggle}
          <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="pages/blank.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Blank
            </a>
            <a
              href="pages/404.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              404
            </a>
            <a
              href="pages/500.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              500
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Profile (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Pricing (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Kanban (soon)
            </a>
            <a
              href="#"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Feed (soon)
            </a>
          </div>
        {/if}
      </div>

      <!-- Authentication links -->
      <div class="authentication-link">
        <a
          use:link
          href="/admin/authentication"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          on:click={() => toggleAccordion("authentication")}
        >
          <span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Authentication </span>
          <span class="ml-auto">
            {#if navBar === "authentication" && isToggle}
              <i class="fas fa-angle-up mr-2 text-sm" />
            {:else}
              <i class="fas fa-angle-down mr-2 text-sm" />
            {/if}
          </span>
        </a>

        {#if navBar === "authentication" && isToggle}
          <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="auth/register.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Register
            </a>
            <a
              href="auth/login.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Login
            </a>
            <a
              href="auth/forgot-password.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Forgot Password
            </a>
            <a
              href="auth/reset-password.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
            >
              Reset Password
            </a>
          </div>
        {/if}
      </div>

      <!-- Layouts links -->
      <div class="layouts-link">
        <a
          use:link
          href="/admin/layouts"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
          on:click={() => toggleAccordion("layouts")}
        >
          <span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Layouts </span>
          <span class="ml-auto">
            {#if navBar === "layouts" && isToggle}
              <i class="fas fa-angle-up mr-2 text-sm" />
            {:else}
              <i class="fas fa-angle-down mr-2 text-sm" />
            {/if}
          </span>
        </a>

        {#if navBar === "layouts" && isToggle}
          <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Layouts">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
            <a
              href="layouts/two-columns-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Two Columns Sidebar
            </a>
            <a
              href="layouts/mini-plus-one-columns-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Mini + One Columns Sidebar
            </a>
            <a
              href="layouts/mini-column-sidebar.html"
              role="menuitem"
              class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
            >
              Mini Column Sidebar
            </a>
          </div>
        {/if}
      </div>
    </nav>
  </div>
</aside>
