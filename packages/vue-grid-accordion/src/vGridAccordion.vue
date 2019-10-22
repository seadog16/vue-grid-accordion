<template lang="pug">
    .gridWrap(
        @mouseleave="leaveHandler"
        :style="{width:width+'px',height:height+'px'}")
        .img(
            @mouseenter="() => enterHandler(index)"
            v-for="(img, index) in images"
            :style="style(img, index)")
</template>

<script>
import TWEEN from '@tweenjs/tween.js';
export default {
    name: 'vGridAccordion',
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
            default: 2000,
        }
    },
    data() {
        return {
            active: null,
            interval: null,
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
            this.active = 0;
            this.play();
        }, 3000);
    },
    methods: {
        style(img, index) {
            const { width, height, gutter, cols, rows } = this;
            const wRatio = 2.5;
            const hRatio = 2.7;
            const matrix = num => [num % cols, Math.floor(num / cols)];
            const matrixIndex = matrix(index);
            const matrixActive = matrix(this.active);
            let iWidth = (width - gutter * (cols - 1)) / cols;
            let iHeight = (height - gutter * (rows - 1)) / rows;
            let iLeft = matrixIndex[0] * (iWidth + gutter);
            let iTop = matrixIndex[1] * (iHeight + gutter);

            let minWidth = (width - iWidth * wRatio - gutter * (cols - 1)) / (cols - 1);
            let maxWidth = iWidth * wRatio;
            let minHeight = (height - iHeight * hRatio - gutter * (rows - 1)) / (rows - 1);
            let maxHeight = iHeight * hRatio;

            if (this.active !== null) {
                if (matrixIndex[0] > matrixActive[0]) {
                    iWidth = minWidth;
                    iLeft = (minWidth + gutter) * (matrixIndex[0] - 1) + maxWidth + gutter;
                } else if (matrixIndex[0] < matrixActive[0]) {
                    iWidth = minWidth;
                    iLeft = (minWidth + gutter) * matrixIndex[0];
                } else {
                    iWidth = maxWidth;
                    iLeft = (minWidth + gutter) * matrixIndex[0];
                }

                if (matrixIndex[1] > matrixActive[1]) {
                    iHeight = minHeight;
                    iTop = (minHeight + gutter) * (matrixIndex[1] - 1) + maxHeight + gutter;
                } else if (matrixIndex[1] < matrixActive[1]) {
                    iHeight = minHeight;
                    iTop = (minHeight + gutter) * matrixIndex[1];
                } else {
                    iHeight = maxHeight;
                    iTop = (minHeight + gutter) * matrixIndex[1];
                }

            }
            return {
                backgroundImage: `url(${img})`,
                width: iWidth + 'px',
                height: iHeight + 'px',
                left: iLeft + 'px',
                top: iTop + 'px',
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
            this.stop();
            this.active = index;
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

    .img
        position absolute
        background-position center
        transition-duration 500ms
        transition-timing-function ease-in-out
        transition-property width, height, left, top
</style>
