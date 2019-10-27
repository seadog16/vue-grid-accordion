## 安装
```bash
npm i vue-grid-accordion --save
```

## 使用
```html
<template>
    <grid-accordion
        :width="960"
        :height="680"
        :columns="5"
        :gutter="4"
        :images="imgs"
        :duration="5000"/>
</template>
<script >
export default {
    data() {
        return {
            imgs: [{
                url: require('/path/to/images'),
                text: 'Some thing text',
            }, ... ]
        };
    },
}
</script>
```

## 参数
|参数|说明|类型|默认值|可选值|
|----|----|----|----|----|
|width|画布总宽|number|960||
|height|画布总高|number|680||
|columns|列数|number|5||
|gutter|图片间隔|number|4||
|images|图片地址以字符串方式组成，或者是对象，参考下表"Images参数"|array|||
|duration|动画播放时间间隔|number|5000||

## "Images参数"
|参数|说明|类型|默认值|可选值|
|----|----|----|----|----|
|url|图片地址|string|||
|text|图片说明文字|string|||
