<script>
  import { link } from "svelte-routing";

  // core components

  let collapseShow = "hidden";

  export let location;
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

      <!-- Components links -->

      <!-- Pages links -->

      <!-- Authentication links -->

      <!-- Layouts links -->

      
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <!-- Collapse -->
        <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
        >
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
            <li class="items-center">
              <a
                use:link
                href="/admin/dashboard"
                class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                  '/admin/dashboard'
                ) !== -1
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500'}"
              >
                <i
                  class="fas fa-tv mr-2 text-sm {location.href.indexOf(
                    '/admin/dashboard'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
                Dashboard
              </a>
            </li>

            <li class="items-center">
              <a
                use:link
                href="/admin/settings"
                class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                  '/admin/settings'
                ) !== -1
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500'}"
              >
                <i
                  class="fas fa-tools mr-2 text-sm {location.href.indexOf(
                    '/admin/settings'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
                Settings
              </a>
            </li>

            <li class="items-center">
              <a
                use:link
                href="/admin/tables"
                class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                  '/admin/tables'
                ) !== -1
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500'}"
              >
                <i
                  class="fas fa-table mr-2 text-sm {location.href.indexOf(
                    '/admin/tables'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
                Tables
              </a>
            </li>

            <li class="items-center">
              <a
                use:link
                href="/admin/maps"
                class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                  '/admin/maps'
                ) !== -1
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500'}"
              >
                <i
                  class="fas fa-map-marked mr-2 text-sm {location.href.indexOf(
                    '/admin/maps'
                  ) !== -1
                    ? 'opacity-75'
                    : 'text-blueGray-300'}"
                />
                Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</aside>
