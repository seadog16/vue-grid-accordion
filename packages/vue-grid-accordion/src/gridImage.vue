<template lang="pug">
    .img(
        :style="imgStyle")
        .txt(
            v-if="source.text && showText"
            :class="{show}"
            v-text="source.text")
</template>

<script>
import TWEEN from '@tweenjs/tween.js';

export default {
    name: 'girdImage',
    props: {
        source: {
            type: Object,
            default: '',
        },
        transform: {
            type: Object,
            default: {},
        },
        showText: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            l: this.transform.left,
            t: this.transform.top,
            w: this.transform.width,
            h: this.transform.height,
            act: false,
            show: false,
        };
    },
    computed: {
        imgStyle() {
            return {
                backgroundImage: `url(${typeof this.source === 'string' ? this.source : this.source.url})`,
                left: `${this.l}px`,
                top: `${this.t}px`,
                width: `${this.w}px`,
                height: `${this.h}px`,
            }
        }
    },
    watch: {
        transform: {
            handler(n, o) {
                this.trans(n, o);
            },
            deep: true,
        }
    },
    methods: {
        animate() {
            TWEEN.update();
            if (this.act) requestAnimationFrame(this.animate);
        },
        trans(newValue, oldValue) {
            this.act = true;
            let tween = new TWEEN.Tween(oldValue);
            tween.to(newValue, 380)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(val => {
                    this.l = val.left;
                    this.t = val.top;
                    this.w = val.width;
                    this.h = val.height;
                })
                .onComplete(() => {
                    this.act = false;
                    this.show = this.showText;
                })
                .start();
            this.animate();
        }
    }
}
</script>

<style scoped lang="stylus">
.img
    position absolute
    background-position center

    &:before
        content ''
        display inline-block
        height 100%
        width 0
        vertical-align bottom

.txt
    display inline-block
    max-width 100%
    vertical-align bottom
    background rgba(0, 0, 0, .75)
    color #fff
    margin 15px 10px
    padding 10px 15px
    font-size 13px
    line-height 1.4
    white-space pre-wrap
    text-align justify
    opacity: 0
    transform translate(0, -10px)
    transition-duration 300ms
    transition-property transform, opacity
    transition-timing-function ease-in

    &.show
        opacity 1
        transform translate(0, 0)
</style>
