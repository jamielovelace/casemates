<template>
  <div class="c-user-content">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.c-user-content > * + *,
.c-user-content > * > * + * {
  @apply mt-4;
}

.c-user-content h1 {
  @apply text-primary text-2xl leading-tight;
}
@screen md {
  .c-user-content h1 {
    @apply text-4xl;
  }
}

.c-user-content h2 {
  @apply text-xl leading-tight;
}
@screen md {
  .c-user-content h2 {
    @apply text-2xl;
  }
}

.c-user-content h3 {
  @apply text-lg leading-tight;
}
@screen md {
  .c-user-content h3 {
    @apply text-xl;
  }
}
</style>
