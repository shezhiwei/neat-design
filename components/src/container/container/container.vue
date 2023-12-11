<script lang="ts">
export default { name: "n-container" };
</script>

<script lang="ts" setup>
import "../style/index.less";
import { computed, useSlots } from "vue";
import type { Component, VNode } from "vue";

const props = defineProps({
  direction: {
    type: String,
    validator(v: string): boolean {
      return ["horizontal", "vertical", ""].includes(v);
    },
  },
} as const);

const { isClass } = Container();

function Container() {
  const slots = useSlots();
  const isMode = computed((): boolean => {
    if (props.direction === "vertical") {
      return true;
    } else if (props.direction === "horizontal") {
      return false;
    }
    if (slots && slots.default) {
      return slots.default().some((n: VNode) => {
        const tag = n.type && (n.type as Component).name;
        return tag === "n-header" || tag === "n-footer";
      });
    }
    return false;
  });

  const isClass = computed((): string[] => [
    "n-container",
    !isMode.value ? "n-container-vertical" : "n-container-horizontal",
  ]);

  return { isClass };
}
</script>

<template>
  <section :class="isClass">
    <slot />
  </section>
</template>
