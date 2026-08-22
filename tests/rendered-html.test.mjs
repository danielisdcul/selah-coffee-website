import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Selah Coffee homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Selah Coffee — Start with coffee\. Stay for company\.<\/title>/i);
  assert.match(html, /A community-first coffee house/);
  assert.match(html, /Start with coffee\./);
  assert.match(html, /Stay for company\./);
  assert.match(html, /Care<\/em> in every detail/);
  assert.match(html, /Made to savor,/);
  assert.match(html, /Locally[\s\S]*crafted[\s\S]*artisan goods\./);
  assert.match(html, /href="#story"/);
  assert.match(html, /href="#menu"/);
  assert.match(html, /href="#shop"/);
  assert.match(html, /href="#visit"/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape/);
});
