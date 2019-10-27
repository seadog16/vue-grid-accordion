<template lang="pug">
    .gridWrap(
        @mouseleave="leaveHandler"
        :style="{width:width+'px',height:height+'px'}")
        grid-image(
            @mouseenter.native="enterHandler(index)"
            v-for="(img, index) in images"
            :key="index"
            :source="img"
            :show-text="active===index"
            :transform="transform(index)")
</template>

<script>
import GridImage from './gridImage';

export default {
    name: 'vGridAccordion',
    components: {
        GridImage,
    },
    props: {
        width: {
            type: Number,
            default: 960,
        },
        height: {
            type: Number,
            default: 680,
        },
        columns: {
            type: Number,
            default: 5,
        },
        gutter: {
            type: Number,
            default: 4,
        },
        images: {
            type: Array,
            default: [],
        },
        duration: {
            type: Number,
            default: 5000,
        }
    },
    data() {
        return {
            active: null,
            interval: null,
            wRatio: 2.3,
            hRatio: 2.6,
            setTime: null,
        };
    },
    computed: {
        cols() {
            return this.columns;
        },
        rows() {
            return Math.ceil(this.images.length / this.columns);
        },
    },
    mounted() {
        setTimeout(() => {
            if (this.setTime) return;
            this.active = 0;
            this.play();
        }, 3000);
    },
    methods: {
        matrix(num) {
            return [num % this.cols, Math.floor(num / this.cols)];
        },
        transform(i) {
            const { width: oWidth, height: oHeight, gutter, cols, rows } = this;
            const matrixIndex = this.matrix(i);
            const matrixActive = this.matrix(this.active);
            let width = (oWidth - gutter * (cols - 1)) / cols;
            let height = (oHeight - gutter * (rows - 1)) / rows;
            let left = matrixIndex[0] * (width + gutter);
            let top = matrixIndex[1] * (height + gutter);

            let minWidth = (oWidth - width * this.wRatio - gutter * (cols - 1)) / (cols - 1);
            let maxWidth = width * this.wRatio;
            let minHeight = (oHeight - height * this.hRatio - gutter * (rows - 1)) / (rows - 1);
            let maxHeight = height * this.hRatio;
            if (this.active !== null && this.active !== undefined) {
                if (matrixIndex[0] > matrixActive[0]) {
                    width = minWidth;
                    left = (minWidth + gutter) * (matrixIndex[0] - 1) + maxWidth + gutter;
                } else if (matrixIndex[0] < matrixActive[0]) {
                    width = minWidth;
                    left = (minWidth + gutter) * matrixIndex[0];
                } else {
                    width = maxWidth;
                    left = (minWidth + gutter) * matrixIndex[0];
                }

                if (matrixIndex[1] > matrixActive[1]) {
                    height = minHeight;
                    top = (minHeight + gutter) * (matrixIndex[1] - 1) + maxHeight + gutter;
                } else if (matrixIndex[1] < matrixActive[1]) {
                    height = minHeight;
                    top = (minHeight + gutter) * matrixIndex[1];
                } else {
                    height = maxHeight;
                    top = (minHeight + gutter) * matrixIndex[1];
                }
            }
            return {
                left,
                top,
                width,
                height,
            }
        },
        play() {
            if (this.interval) return;
            this.interval = setInterval(() => {
                if (this.active < this.images.length - 1) {
                    this.active++;
                } else {
                    this.active = 0;
                }
            }, this.duration);
        },
        stop() {
            clearInterval(this.interval);
            this.interval = null;
        },
        enterHandler(index) {
            clearTimeout(this.setTime);
            this.setTime = setTimeout(() => {
                this.stop();
                this.active = index;
            }, 500);
        },
        leaveHandler() {
            this.stop();
            setTimeout(() => {
                this.play();
            }, 2000)
        }
    }
}
</script>

<style scoped lang="stylus">
.gridWrap
    width 100%
    height 100%
    position relative
</style>
