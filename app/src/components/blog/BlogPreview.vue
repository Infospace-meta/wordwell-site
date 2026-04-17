<template>
  <section class="section-padding bg-surface">
    <SectionLabel text="From the Blog" />
    <h2 class="text-3xl font-bold mb-8">Academic Success Tips</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="post in posts"
        :key="post.slug"
        class="card hover:shadow-md transition-shadow"
      >
        <span class="text-xs text-primary font-bold">{{ post.date }}</span>
        <h3 class="text-xl font-semibold mt-2">{{ post.title }}</h3>
        <router-link
          :to="`/blog/posts/${post.slug}`"
          class="text-primary font-medium mt-4 block"
        >
          Read Article →
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// In a non-monorepo, we can import VitePress metadata directly
// or fetch from a generated JSON index
const posts = [
  {
    title: "Mastering the 5-Paragraph Essay",
    slug: "mastering-essays",
    date: "Oct 24",
  },
  {
    title: "Top 10 Citation Tools for 2025",
    slug: "citation-tools",
    date: "Oct 22",
  },
];
</script>
