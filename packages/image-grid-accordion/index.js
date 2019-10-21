import ImageGridAccordion from './src/gridAccordion';

// 为组件提供 install 安装方法，供按需引入
ImageGridAccordion.install = function (Vue) {
    Vue.component(ImageGridAccordion.name, ImageGridAccordion);
};

// 默认导出组件
export default ImageGridAccordion;
