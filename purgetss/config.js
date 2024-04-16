module.exports = {
  purge: {
    mode: 'all',
    method: 'sync',
    options: {
      legacy: false,
      missing: true,
      widgets: false,
      safelist: [],
      plugins: []
    }
  },
  theme: {
    extend: {
      spacing: {
        25: 100,
        35: 140,
        50: 200,
        55: 220,
        75: 300
      },
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe0e3',
          200: '#ffc7cd',
          300: '#ffa0aa',
          400: '#ff6979',
          500: '#f93a4e',
          600: '#e71b30',
          700: '#c91326',
          800: '#a11322',
          900: '#851722',
          950: '#49060d',
          default: '#c91326'
        }
      }
    },
    fontFamily: {
      mono: 'Courier New',
      sans: 'opensans-regular'
    },

    // Ti Elements
    Window: {
      android: { apply: 'android:soft-keyboard-on-focus-show' },
      ios: {  backButtonTitle: '', apply: 'bar-primary nav-tint-white translucent title-attributes-white bg-white' }
    },

    Label: { default: { apply: 'font-sans' } },
    Button: { default: { apply: 'font-sans' } },
    Picker: { default: { apply: 'font-sans' } },
    Switch: { default: { apply: 'font-sans' } },
    TextArea: { default: { apply: 'font-sans' } },
    TextField: { default: { apply: 'font-sans' } },
    PickerRow: { default: { apply: 'font-sans' } },
    ProgressBar: { default: { apply: 'font-sans' } },
    PickerColumn: { default: { apply: 'font-sans' } },
    TableViewRow: { default: { apply: 'font-sans' } },
    ActivityIndicator: { default: { apply: 'font-sans' } },

    Tab: { default: { icon: '/images/icons/tab.png' } },
    ListView: { ios: { apply: 'list-item-template-subtitle bg-white' } },
    TabGroup: { ios: { apply: 'translucent-false active-tint-primary active-title-primary bg-white' } },
    ListItem: { default: { apply: 'accessory-type-list-disclosure subtitle-(#777) font-sans' } },

    // Custom Classes
    '#playbackProgress': {
      default: { apply: 'animated-false w-50 min-(0) value-(0) tint-color-primary mb-8' },
      ios: { apply: 'h-screen' }
    },
    '.state-label': { default: { apply: 'mt-(100) text-(15) mx-5 w-screen text-center' } },
    '.action-button': { default: { apply: 'bg-primary tint-color-white rounded-2 w-75 mt-5 h-10 text-white' } },
    '.placeholder-label': { default: { apply: 'w-(250) h-(125) text-(#333) rounded-2 bg-(#eee) text-center' } },
    '.textfield': {
      default: { apply: 'bubble-parent-false tint-color-primary mx-4 mt-2.5 w-screen' },
      ios: { apply: 'rounded-2 py-(5) bg-(#f0f0f0) h-10 px-5' },
      android: { apply: 'hint-type-animated border-style-rounded h-auto' }
    },
    '.textlabel': { default: { apply: 'w-(300) bubble-parent-false mt-2.5 text-sm font-bold' } },
  }
}
