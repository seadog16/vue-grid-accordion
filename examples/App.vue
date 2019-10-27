<template lang="pug">
    v-grid-accordion(
        :width="960"
        :height="680"
        :columns="5"
        :gutter="6"
        :images="imgs"
        :duration="5000")
</template>
<script>
export default {
    data() {
        let imgs = [];
        for (let i = 0; i < 20; i++) {
            imgs.push({
                url: require(`./assets/${i}.jpg`),
                text: 'BMW X7\nAs the name suggests, the BMW X7 is like an SUV version of the 7-Series. That means all the features from BMW\'s flagship, plus the added perks of a high seating position and tons of cabin space. You can even get it with a 523-horsepower V-8.',
                textStyle: {
                    background: 'rgba(0, 0, 0, .75)'
                }
            });
        }
        return {
            imgs,
        };
    },
}
</script>
