<script>
  import PodcastsComponent from '../components/podcasts.svelte';
  export let data;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>The podcasts</title>
  <meta
    name="description"
    content="The podcasts"
  />
</svelte:head>

<div class="container text-center mt-4 text-primary-emphasis">
<h1> The podcasts</h1>
</div>

<PodcastsComponent podcasts={data.podcasts}/>

