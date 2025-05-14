import {getPodcasts} from '$lib/dataloader.js';

/** @type {import('./$types').PageLoad} */
export function load() {

  let podcasts = getPodcasts();

  return {
    podcasts: podcasts
  };
}
