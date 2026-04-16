---
name: vue-best-practices
description: Use for ALL Vue.js tasks - development, debugging, and testing. Covers Vue 2/3, Composition API, Options API, Pinia, Vue Router, Vitest, Playwright, and TypeScript. Triggers for: Vue component work, .vue files, Vue errors/warnings, test writing, debugging Vue issues, or any Vue-related question.
license: MIT
metadata:
  author: github.com/vuejs-ai
  version: "19.0.0"
---

# Vue Best Practices Workflow

Use this skill as an instruction set. Follow the workflow in order unless the user explicitly asks for a different order.

## Core Principles
- **Keep state predictable:** one source of truth, derive everything else.
- **Make data flow explicit:** Props down, Events up for most cases.
- **Favor small, focused components:** easier to test, reuse, and maintain.
- **Avoid unnecessary re-renders:** use computed properties and watchers wisely.
- **Readability counts:** write clear, self-documenting code.

## 1) Confirm architecture before coding (required)

- Default stack: Vue 3 + Composition API + `<script setup lang="ts">`.
- If the project explicitly uses Options API, load `vue-options-api-best-practices` skill if available.
- If the project explicitly uses JSX, load `vue-jsx-best-practices` skill if available.

### 1.1 Must-read core references (required)

- Before implementing any Vue task, make sure to read and apply these core references:
  - `references/reactivity.md`
  - `references/sfc.md`
  - `references/component-data-flow.md`
  - `references/composables.md`
- Keep these references in active working context for the entire task, not only when a specific issue appears.

### 1.2 Plan component boundaries before coding (required)

Create a brief component map before implementation for any non-trivial feature.

- Define each component's single responsibility in one sentence.
- Keep entry/root and route-level view components as composition surfaces by default.
- Move feature UI and feature logic out of entry/root/view components unless the task is intentionally a tiny single-file demo.
- Define props/emits contracts for each child component in the map.
- Prefer a feature folder layout (`components/<feature>/...`, `composables/use<Feature>.ts`) when adding more than one component.

## 2) Apply essential Vue foundations (required)

These are essential, must-know foundations. Apply all of them in every Vue task using the core references already loaded in section `1.1`.

### Reactivity

- Must-read reference from `1.1`: [reactivity](references/reactivity.md)
- Keep source state minimal (`ref`/`reactive`), derive everything possible with `computed`.
- Use watchers for side effects if needed.
- Avoid recomputing expensive logic in templates.

### SFC structure and template safety

- Must-read reference from `1.1`: [sfc](references/sfc.md)
- Keep SFC sections in this order: `<script>` → `<template>` → `<style>`.
- Keep SFC responsibilities focused; split large components.
- Keep templates declarative; move branching/derivation to script.
- Apply Vue template safety rules (`v-html`, list rendering, conditional rendering choices).

### Keep components focused

Split a component when it has **more than one clear responsibility** (e.g. data orchestration + UI, or multiple independent UI sections).

- Prefer **smaller components + composables** over one “mega component”
- Move **UI sections** into child components (props in, events out).
- Move **state/side effects** into composables (`useXxx()`).

Apply objective split triggers. Split the component if **any** condition is true:

- It owns both orchestration/state and substantial presentational markup for multiple sections.
- It has 3+ distinct UI sections (for example: form, filters, list, footer/status).
- A template block is repeated or could become reusable (item rows, cards, list entries).

Entry/root and route view rule:

- Keep entry/root and route view components thin: app shell/layout, provider wiring, and feature composition.
- Do not place full feature implementations in entry/root/view components when those features contain independent parts.
- For CRUD/list features (todo, table, catalog, inbox), split at least into:
  - feature container component
  - input/form component
  - list (and/or item) component
  - footer/actions or filter/status component
- Allow a single-file implementation only for very small throwaway demos; if chosen, explicitly justify why splitting is unnecessary.

### Component data flow

- Must-read reference from `1.1`: [component-data-flow](references/component-data-flow.md)
- Use props down, events up as the primary model.
- Use `v-model` only for true two-way component contracts.
- Use provide/inject only for deep-tree dependencies or shared context.
- Keep contracts explicit and typed with `defineProps`, `defineEmits`, and `InjectionKey` as needed.

### Composables

- Must-read reference from `1.1`: [composables](references/composables.md)
- Extract logic into composables when it is reused, stateful, or side-effect heavy.
- Keep composable APIs small, typed, and predictable.
- Separate feature logic from presentational components.

## 3) Consider optional features only when requirements call for them

### 3.1 Standard optional features

Do not add these by default. Load the matching reference only when the requirement exists.

- Slots: parent needs to control child content/layout -> [component-slots](references/component-slots.md)
- Fallthrough attributes: wrapper/base components must forward attrs/events safely -> [component-fallthrough-attrs](references/component-fallthrough-attrs.md)
- Built-in component `<KeepAlive>` for stateful view caching -> [component-keep-alive](references/component-keep-alive.md)
- Built-in component `<Teleport>` for overlays/portals -> [component-teleport](references/component-teleport.md)
- Built-in component `<Suspense>` for async subtree fallback boundaries -> [component-suspense](references/component-suspense.md)
- Animation-related features: pick the simplest approach that matches the required motion behavior.
  - Built-in component `<Transition>` for enter/leave effects -> [transition](references/component-transition.md)
  - Built-in component `<TransitionGroup>` for animated list mutations -> [transition-group](references/component-transition-group.md)
  - Class-based animation for non-enter/leave effects -> [animation-class-based-technique](references/animation-class-based-technique.md)
  - State-driven animation for user-input-driven animation -> [animation-state-driven-technique](references/animation-state-driven-technique.md)

### 3.2 Less-common optional features

Use these only when there is explicit product or technical need.

- Directives: behavior is DOM-specific and not a good composable/component fit -> [directives](references/directives.md)
- Async components: heavy/rarely-used UI should be lazy loaded -> [component-async](references/component-async.md)
- Render functions only when templates cannot express the requirement -> [render-functions](references/render-functions.md)
- Plugins when behavior must be installed app-wide -> [plugins](references/plugins.md)
- State management patterns: app-wide shared state crosses feature boundaries -> [state-management](references/state-management.md)

## 4) Run performance optimization after behavior is correct

Performance work is a post-functionality pass. Do not optimize before core behavior is implemented and verified.

- Large list rendering bottlenecks -> [perf-virtualize-large-lists](references/perf-virtualize-large-lists.md)
- Static subtrees re-rendering unnecessarily -> [perf-v-once-v-memo-directives](references/perf-v-once-v-memo-directives.md)
- Over-abstraction in hot list paths -> [perf-avoid-component-abstraction-in-lists](references/perf-avoid-component-abstraction-in-lists.md)
- Expensive updates triggered too often -> [updated-hook-performance](references/updated-hook-performance.md)

## 5) Final self-check before finishing

- Core behavior works and matches requirements.
- All must-read references were read and applied.
- Reactivity model is minimal and predictable.
- SFC structure and template rules are followed.
- Components are focused and well-factored, splitting when needed.
- Entry/root and route view components remain composition surfaces unless there is an explicit small-demo exception.
- Component split decisions are explicit and defensible (responsibility boundaries are clear).
- Data flow contracts are explicit and typed.
- Composables are used where reuse/complexity justifies them.
- Moved state/side effects into composables if applicable
- Optional features are used only when requirements demand them.
- Performance changes were applied only after functionality was complete.

## 6) Debugging Vue issues (when encountering errors or unexpected behavior)

Use this section when diagnosing or fixing Vue runtime issues, warnings, or bugs.

### Quick Reference by Symptom

**Reactivity issues:**
- Tracing unexpected re-renders → [reactivity-debugging-hooks](references/reactivity-debugging-hooks.md)
- Ref values not updating → [ref-value-access](references/ref-value-access.md)
- State stops updating after destructuring → [reactive-destructuring](references/reactive-destructuring.md)
- Refs inside arrays/Maps/Sets not unwrapping → [refs-in-collections-need-value](references/refs-in-collections-need-value.md)
- Proxy identity comparisons returning false → [reactivity-proxy-identity-hazard](references/reactivity-proxy-identity-hazard.md)

**Computed/Watcher issues:**
- Computed triggers mutations unexpectedly → [computed-no-side-effects](references/computed-no-side-effects.md)
- Computed value never updates → [computed-conditional-dependencies](references/computed-conditional-dependencies.md)
- Watcher overwrites with stale data → [watch-async-cleanup](references/watch-async-cleanup.md)
- Watcher never triggers for reactive properties → [watch-reactive-property-getter](references/watch-reactive-property-getter.md)
- DOM reads stale inside watchers → [watch-flush-timing](references/watch-flush-timing.md)

**Component issues:**
- Child component throws "not found" → [local-components-not-in-descendants](references/local-components-not-in-descendants.md)
- Click listener doesn't fire on custom component → [click-events-on-components](references/click-events-on-components.md)
- Parent can't access child ref data → [component-ref-requires-defineexpose](references/component-ref-requires-defineexpose.md)
- HTML template parsing breaks Vue syntax → [in-dom-template-parsing-caveats](references/in-dom-template-parsing-caveats.md)

**Props & Emits issues:**
- Variables in defineProps cause errors → [prop-defineprops-scope-limitation](references/prop-defineprops-scope-limitation.md)
- Component emits undeclared event → [declare-emits-for-documentation](references/declare-emits-for-documentation.md)
- Event fires twice on click → [undeclared-emits-double-firing](references/undeclared-emits-double-firing.md)

**Template issues:**
- "Cannot read property of undefined" → [v-if-null-check-order](references/v-if-null-check-order.md)
- Mixing v-if with v-for causes bugs → [no-v-if-with-v-for](references/no-v-if-with-v-for.md)
- List items disappearing or swapping state → [v-for-key-attribute](references/v-for-key-attribute.md)

**Lifecycle issues:**
- Memory leaks from event listeners → [cleanup-side-effects](references/cleanup-side-effects.md)
- DOM access fails before mount → [lifecycle-dom-access-timing](references/lifecycle-dom-access-timing.md)
- DOM reads return stale values → [dom-update-timing-nexttick](references/dom-update-timing-nexttick.md)

**TypeScript issues:**
- Mutable prop defaults leak state → [ts-withdefaults-mutable-factory-function](references/ts-withdefaults-mutable-factory-function.md)
- Template refs throw null errors → [ts-template-ref-null-handling](references/ts-template-ref-null-handling.md)
- Optional boolean props behave as false → [ts-defineprops-boolean-default-false](references/ts-defineprops-boolean-default-false.md)

**Performance issues:**
- List children re-render unnecessarily → [perf-props-stability-update-optimization](references/perf-props-stability-update-optimization.md)
- Computed objects retrigger effects → [perf-computed-object-stability](references/perf-computed-object-stability.md)

## 7) Testing Vue components (when writing or fixing tests)

Use this section when writing tests with Vitest, Vue Test Utils, or Playwright.

### Test Setup

- Setting up test infrastructure → [testing-vitest-recommended-for-vue](references/testing-vitest-recommended-for-vue.md)
- Composables with lifecycle hooks fail to test → [testing-composables-helper-wrapper](references/testing-composables-helper-wrapper.md)
- "injection Symbol(pinia) not found" errors → [testing-pinia-store-setup](references/testing-pinia-store-setup.md)
- Async setup components won't render → [testing-suspense-async-components](references/testing-suspense-async-components.md)

### Test Patterns

- Tests breaking on refactoring → [testing-component-blackbox-approach](references/testing-component-blackbox-approach.md)
- Intermittent race conditions → [testing-async-await-flushpromises](references/testing-async-await-flushpromises.md)
- Snapshot tests passing despite broken functionality → [testing-no-snapshot-only](references/testing-no-snapshot-only.md)
- Teleported content can't be found → [teleport-testing-complexity](references/teleport-testing-complexity.md)

### E2E Testing

- Choosing E2E framework → [testing-e2e-playwright-recommended](references/testing-e2e-playwright-recommended.md)
- Verifying computed styles or real DOM events → [testing-browser-vs-node-runners](references/testing-browser-vs-node-runners.md)
