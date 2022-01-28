<template>
  <div class="flex flex-col gap-y-8 p-4 items-center justify-center h-screen">
    <header class="flex gap-8 items-center">
      <img class="w-24" src="/logo/nuxt.svg" alt="Nuxt.js">
      <img class="w-24" src="/logo/vite.svg" alt="Vite.js">
      <img class="w-24" src="/logo/tailwind.svg" alt="Tailwind CSS">
    </header>
    <section class="grid gap-8 justify-center">
      <h1 class="text-3xl font-semibold text-slate-900 text-center">Nuxt.js with Vite and Tailwind CSS</h1>
      <p class="max-w-sm text-center mx-auto text-slate-700">
        A simple Nuxt 2 starter, with Vite and Tailwind CSS.
      </p>
    </section>
    <footer class="p-4 absolute bottom-0 text-sm text-slate-600">
      Note: while <abbr title="Hot Module Replacement" class="cursor-help">HMR</abbr> is fixed to work with Tailwind's 3.x JIT engine, this uses <code class="bg-slate-50 border rounded px-1 py-px text-xs">nuxt-vite@0.2.4</code> because the latest version has some issues with Nuxt 2.x
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
