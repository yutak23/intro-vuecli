<template>
  <div>
    <p>タイトル</p>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="タイトル"
        :value="value"
        @input="$emit('input', $event.target.value)"
        autocomplete="off"
      />
      <label for="title">タイトル</label>
    </div>
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>