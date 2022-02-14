// This is a non-compiled Javascript that enables you to use a CascadeApp.
// You must include this script *after* sourcing cascade.js

const localStorageId = 'MOVA-agreement';

const cascade = CascadeApp.factory({
  target: document.getElementById('cascade-ui-placeholder'),
  props: {
    /**
     * The load() method must return a Promise that resolves to YAML.
     */
    async load() {
      return Promise.resolve({
        yaml: localStorage.getItem(localStorageId) || '',
        readonly: false,
        hash: '',
      });
    },
    /**
     * The save() method stores the YAML and returns a Promise.
     */
    async save(rslYaml, agreementName, finalise) {
      // We ignore finalise for the standalone version; there's no point
      // setting something in stone if it's just in localStorage!
      // Likewise, agreementName, which lives in the rsl anyway, does not need to be
      // saved for this context.
      localStorage.setItem(localStorageId, rslYaml);
      return Promise.resolve();
    },
    /**
     * This optionally maps certain class names to others. It enables the
     * output to the browser to support different CSS frameworks, as long
     * as they are happy to share the same HTML structure.
     *
     * See the .svelte files for the HTML classes to map from.
     */
    cssClassMap: {
      'main-container': 'cascade-fieldset',
      'agreement-name': 'column column-60',
      'agreement-group-1': 'flex-wrap',
      'agreement-description': 'column column-50',
      'agreement-address': 'column column-50',
      'agreement-contact-name': 'column column-50',
      'agreement-email': 'column column-50',
      'limit-repeat': 'column column-25',
      'limit-unit': 'column column-25',
      'limit-start': 'column column-25',
      'limit-end': 'column column-25',
      'half' : 'column column-50',
      'halfish' : 'column column-40',
      'quarter' : 'column column-25',
      'tiny-column' : 'column column-20',
      'agreement-limit': 'limit-fieldset',
      'panel-heading': '',
      'panel-body': '',
      'step-heading': 'step-heading',
      'step-container': 'cascade-fieldset',
      'button-one': '',
      'button-two': 'button-secondary',
      'button-alert': 'button-alert',
      'icon-trash': 'gg-trash',
      'icon-edit': 'icss-edit',
      'icon-info': 'gg-info',
      'icon-drag': 'gg-arrow-align-v',
      'icon-tick': 'gg-check-r',
      'icon-add': 'gg-add',
    }
  }
});

