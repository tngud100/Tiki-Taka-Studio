// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VOtpInput } from 'vuetify/labs/VOtpInput'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";
// import { VDatePicker } from 'vuetify/labs/VDatePicker'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VOtpInput,
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
    // VDatePicker,
  },
 // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
