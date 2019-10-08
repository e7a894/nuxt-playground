import { Vue } from 'nuxt-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;
