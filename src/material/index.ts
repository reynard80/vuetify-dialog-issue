import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import nl from 'vuetify/lib/locale/nl';
import theme from '@/material/theme'

Vue.use(Vuetify);

const materialOptions = {
    lang: {
        locales: { nl },
        current: 'nl',
    },
    theme: {
        themes: theme,
    },
}

const material = new Vuetify(materialOptions);

export default material;
