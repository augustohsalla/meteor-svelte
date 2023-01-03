<script>
  import Issue from "./components/Issue.svelte";
  import { useTracker } from "meteor/rdb:svelte-meteor-data";
  import { Issues } from "../api/issues.js";

  $: issues = useTracker(() => Issues.find({}).fetch());
</script>

<div>
  <header>
      <h1>Issues:</h1>
  </header>
  <ul>
      {#each $issues as issue}
          <Issue 
              issue={issue} />
      {/each}
  </ul>
</div>