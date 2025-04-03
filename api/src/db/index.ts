export async function init({ test }: { test?: boolean } = {}) {
  //  IF USING LOCAL PG SERVER
  test = false;
  if (test) {
    const { init: get } = await import("./drivers/pglite");
    return get();
  }
  const { init: get } = await import("./drivers/neon");
  return get();
}
