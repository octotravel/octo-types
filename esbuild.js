import { build } from "esbuild";

try {
  await build({
    entryPoints: ["src/index.ts"],
    outdir: "lib",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
  });
} catch (err) {
  // eslint-disable-next-line no-undef
  process.exitCode = 1;
}
