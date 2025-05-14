import { get, writable, readonly } from 'svelte/store';

import config from '$lib/data/config.json';
import podcasts from '$lib/data/podcasts.json';

var dataStore = null;

export function getPodcasts() {
  return get(dataStore);
}

export function initStore() {
  dataStore = readonly(writable(podcasts));
}



