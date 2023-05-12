<script>
  import SidebarItem from "./SidebarItem.svelte";
  // import { Drawer } from '@skeletonlabs/skeleton';

  const navBars = [
    // dashboard
    {
      name: "Dashboards",
      path: "/admin/dashboard",
      iconHtmlCode: `
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
      `,
      children: [
        {
          name: "Default",
          number: 700,
          path: "/dashboard",
        },
        {
          name: "Project Management (soon)",
          number: 400,
          path: "/project-management",
        },
        {
          name: "E-Commerce (soon)",
          number: 400,
          path: "/e-commerce",
        },
      ],
    },
    // Components
    {
      name: "Components",
      iconHtmlCode: `
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
      `,
      children: [
        {
          name: "Alerts (soon)",
          number: 400, 
          path: "/alerts",
        },
        {
          name: "Buttons (soon)",
          number: 400, 
          path: "/buttons",
        },
        {
          name: "Cards (soon)",
          number: 400, 
          path: "/cards",
        },
        {
          name: "Dropdowns (soon)",
          number: 400, 
          path: "/dropdowns",
        },
        {
          name: "Forms (soon)",
          number: 400, 
          path: "/forms",
        },
        {
          name: "Lists (soon)",
          number: 400, 
          path: "/lists",
        },
        {
          name: "Modals (soon)",
          number: 400, 
          path: "/modals",
        },
      ],
    },
    // Pages
    {
      name: "Pages",
      iconHtmlCode: `
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
      `,
      children: [
        {
          name: "Blank",
          number: 400, 
          path: "/blank",
        },
        {
          name: "404",
          number: 400, 
          path: "/404",
        },
        {
          name: "500",
          number: 400, 
          path: "/500",
        },
        {
          name: "Profile (soon)",
          number: 400, 
          path: "/profile",
        },
        {
          name: "Pricing (soon)",
          number: 400, 
          path: "/pricing",
        },
        {
          name: "Kanban (soon)",
          number: 400, 
          path: "/kanban",
        },
        {
          name: "Feed (soon)",
          number: 400, 
          path: "/feed",
        },
      ],
    },
    // Authentication
    {
      name: "Pages",
      iconHtmlCode: `
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
      `,
      children: [
        {
          name: "Register",
          number: 400, 
          path: "/register",
        },
        {
          name: "Login",
          number: 400, 
          path: "/login",
        },
        {
          name: "Forgot Password",
          number: 400, 
          path: "/forgot-password",
        },
        {
          name: "Reset Password",
          number: 400, 
          path: "/reset-password",
        },
      ],
    },
    // Layouts
    {
      name: "Layouts",
      iconHtmlCode: `
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
      `,
      children: [
        {
          name: "Two Columns Sidebar",
          number: 400, 
          path: "/two-columns-sidebar",
        },
        {
          name: "Mini + One Column Sidebar",
          number: 400, 
          path: "/mini-one-column-sidebar",
        },
        {
          name: "Mini Column Sidebar",
          number: 400, 
          path: "/mini-column-sidebar",
        },
      ],
    },
  ];
  
  let isOpenSettingsPanel = false;
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
      {#each navBars as navBar}
        <SidebarItem navBar={navBar} />
      {/each}
      
    </nav>
    <!-- Sidebar footer -->
    <div class="flex-shrink-0 px-2 py-4 space-y-2">
      <button
        on:click={() => isOpenSettingsPanel = !isOpenSettingsPanel}
        type="button"
        class="flex items-center justify-center w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
      >
        <span aria-hidden="true">
          <svg
            class="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </span>
        <span>Customize</span>
      </button>
    </div>
  </div>
</aside>

<!-- <Drawer isOpen={isOpenSettingsPanel}>
  <div>Setting Drawer</div>
</Drawer> -->