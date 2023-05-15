<!-- App.svelte -->
<script>
  import Loader from './components/Loader.svelte';;
  import SettingsDrawer from "./components/Drawers/SettingsDrawer.svelte";
  import SearchResultsDrawer from "./components/Drawers/SearchResultsDrawer.svelte";
  import NotificationsDrawer from "./components/Drawers/NotificationsDrawer.svelte";
  import { Router, Route } from "svelte-routing";
  import { 
    isSettingsPanelOpen,
    isNotificationPanelOpen,
    isSearchPanelOpen,
    isOpenUserDropdown,
    isMobileSubMenuOpen
  } from './store/common';

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";

  const onKeyDown = e => {
    switch(e.keyCode) {
      // esc button
			 case 27:
        isMobileSubMenuOpen.set(false);
        isSettingsPanelOpen.set(false);
        isNotificationPanelOpen.set(false);
        isOpenUserDropdown.set(false);
        isSearchPanelOpen.set(false);
				 break;
      default:
        break;
		 }
  }

  export let url = "";
</script>

<Loader this={() => import("./layouts/Admin.svelte")}>
  <div
    slot="fallback"
    class="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-primary-darker"
  >
    Loading.....
  </div>
</Loader>

<Router {url}>
  <!-- admin layout -->
  <Route path="/*admin" component={Admin} />
</Router>

<SettingsDrawer />
<SearchResultsDrawer />
<NotificationsDrawer />

<svelte:window on:keydown|preventDefault={onKeyDown} />
