importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "f5465925d42791aad1e65f4cf3ad83d8"
  },
  {
    "url": "inline.a39d5252a112cb5bfc9c.bundle.js",
    "revision": "52ddff8c0bc00358c0511afe5272f981"
  },
  {
    "url": "main.6b3d0fd9489a67af1eb0.bundle.js",
    "revision": "76c7189edcbd679b4e91e44078be5159"
  },
  {
    "url": "polyfills.5d753d746db19db70aae.bundle.js",
    "revision": "35f8f818921f12e74d88594aedaf3cec"
  },
  {
    "url": "styles.75f5708f329fcae3c2d7.bundle.css",
    "revision": "75f5708f329fcae3c2d79eb860b346ec"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
