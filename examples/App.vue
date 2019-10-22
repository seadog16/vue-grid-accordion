<template lang="pug">
    v-grid-accordion(
        :width="960"
        :height="680"
        :columns="5"
        :gutter="4"
        :images="imgs"
        :duration="2000")
</template>
<script>
export default {
    data() {
        let imgs = [];
        for (let i = 0; i < 20; i++) {
            imgs.push(require(`./assets/${i}.jpg`));
        }
        return {
            imgs,
        };
    },
}
</script>
