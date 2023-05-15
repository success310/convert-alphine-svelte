<script>
  // import { Router, Route } from "svelte-routing";

  // components for this layout
  import Sidebar from "../components/Sidebar/Sidebar.svelte";
  import HeaderAdmin from "../components/Headers/HeaderAdmin.svelte";
  import Content from "../views/admin/Content.svelte";
  import FooterAdmin from "../components/Footers/FooterAdmin.svelte";

  // pages for this layout
  // import Dashboard from "views/admin/Dashboard.svelte";
  // import Components from "views/admin/Components.svelte";
  // import Pages from "views/admin/Pages.svelte";
  // import Authentication from "views/admin/Authentication.svelte";
  // import Layouts from "views/admin/Layouts.svelte";

  export let location;
</script>

<div>
  <div
    class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
  >
    <Sidebar {location} />

    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <!-- Navbar -->
      <HeaderAdmin />

      <!-- Main content -->
      <main>
        <!-- Content header -->
        <div
          class="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker"
        >
          <h1 class="text-2xl font-semibold">Dashboard</h1>
          <a
            href="https://github.com/Kamona-WD/kwd-dashboard"
            target="_blank"
            class="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
          >
            View on github
          </a>
        </div>

        <!-- Content -->
        <Content />
        <!-- <div class="mt-2">
          <Router url="admin">
            <Route path="dashboard" component={Dashboard} />
            <Route path="components" component={Components} />
            <Route path="pages" component={Pages} />
            <Route path="authentication" component={Authentication} />
            <Route path="layouts" component={Layouts} />
          </Router>
        </div> -->
      </main>

      <!-- Main footer -->
      <FooterAdmin />
    </div>
  </div>
</div>
