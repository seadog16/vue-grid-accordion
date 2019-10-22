import vGridAccordion from './vue-grid-accordion';

const components = [
    vGridAccordion
];

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component))
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    vGridAccordion,
}
