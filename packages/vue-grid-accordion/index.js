import vGridAccordion from './src/vGridAccordion';

// 为组件提供 install 安装方法，供按需引入
vGridAccordion.install = function (Vue) {
    Vue.component(vGridAccordion.name, vGridAccordion);
};

// 默认导出组件
export default vGridAccordion;
