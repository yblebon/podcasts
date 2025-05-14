<script>
  import { base } from "$app/paths";
  export let podcasts;
  console.log(podcasts);
</script>

<style>
        body {
            background-color: #f8f9fa;
        }
        .audio-card {
            transition: transform 0.2s;
        }
        .audio-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .audio-player {
            width: 100%;
        }
        .card-img-top {
            height: 150px;
            object-fit: cover;
        }
</style>

<div class="container my-5">
        <h1 class="text-center mb-4">Music Library</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

  
  {#each podcasts as podcast, index}


   <div class="col">
                <div class="card audio-card h-100">
                    <img src="https://via.placeholder.com/300x150?text=Song+Cover" class="card-img-top" alt="Song Cover">
                    <div class="card-body">
                        <h5 class="card-title">Song Title 1</h5>
                        <p class="card-text">Artist: Sample Artist</p>
                        <audio controls class="audio-player">
                            <source src="https://file-examples.com/storage/fe17a1467f68237299aa605/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
  {/each}

  </div>
    </div>
  
