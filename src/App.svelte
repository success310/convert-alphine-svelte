<!-- App.svelte -->
<script>
  import SettingsDrawer from "./components/Drawers/SettingsDrawer.svelte";
  import SearchResultsDrawer from "./components/Drawers/SearchResultsDrawer.svelte";
  import NotificationsDrawer from "./components/Drawers/NotificationsDrawer.svelte";
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";

  export let url = "";
</script>

<SettingsDrawer />
<SearchResultsDrawer />
<NotificationsDrawer />
<Router url="{url}">
  <!-- admin layout -->
  <Route path="/*admin" component="{Admin}" />
</Router>
