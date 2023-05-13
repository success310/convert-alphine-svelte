<!-- App.svelte -->
<script>
  import SettingsDrawer from "./components/Drawers/SettingsDrawer.svelte";
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";

  export let url = "";
</script>

<SettingsDrawer />
<Router url="{url}">
  <!-- admin layout -->
  <Route path="/*admin" component="{Admin}" />
</Router>
