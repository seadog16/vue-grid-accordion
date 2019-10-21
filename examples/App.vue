<template lang="pug">
    image-grid-accordion(
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
            imgs.push(`https://api.dujin.org/pic/?${i}`);
        }
        return {
            imgs,
        };
    },
}
</script>
