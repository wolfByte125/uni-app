export async function init({ test }: { test?: boolean } = {}) {
  //  IF USING LOCAL PG SERVER
  if (test) {
    // `local.js` - needs to be configured
    // const { init: get } = await import("./drivers/local.js");
    // return get();
  }
  const { init: get } = await import("./drivers/neon.js");
  return get();
}
