# Cascade Svelte

Drag and drop builder for Revenue Sharing Language agreements written Svelte JS. 

by [Rich Lott](https://artfulrobot.uk), Mark Boas and Nicol Wistreich. Copyright Netribution Ltd 2022, licensed under AGPL.

## CSS Mapping

- This was originally built for the CiviSplit CiviCRM extension, integrating with Bootstrap 3. To keep the standalone Cascade intact, and avoid a weighty Bootstrap dependency for this distribution, the non-CiviCRM specific JS is kept in `cascade-standalone.js`. 

This includes css-framework mapping classnames, so if you want to integrate this with other CSS frameworks, you can just change those names. So, for instance, to integrate this with **Bootstrap**, you'd use (something like) these mappings instead and load bootstrap.css in the head:

```
cssClassMap: {
      'agreement-name': 'col-sm-8',
      'agreement-description': 'col-sm-5',
      'agreement-group-1': '',
      'agreement-address': 'col-sm-3',
      'agreement-contact-name': 'col-sm-2',
      'agreement-email': 'col-sm-2',
      'form-inner-div': 'panel panel-default',
      'agreement-limit': 'panel panel-default',
      'limit-repeat': 'col-sm-3',
      'limit-unit': 'col-sm-3',
      'limit-start': 'col-sm-3',
      'limit-end': 'col-sm-3',
      'half' : 'col-sm-6',
      'halfish' : 'col-sm-6',
      'quarter' : 'col-sm-3',
      'tiny-column' : 'col-sm-2',
      'agreement-limit': 'limit-fieldset',
      'panel-heading': 'panel-heading',
      'panel-body': 'panel-body padding0top',
      'step-container': 'panel panel-default',
      'step-heading': 'panel-heading',
      'button-one': 'btn btn-primary crm-button',
      'button-two': 'btn btn-success crm-button',
      'button-alert': 'btn btn-warning crm-button',
      'icon-trash': 'crm-i fa-trash',
      'icon-edit': 'crm-i fa-edit',
      'icon-info': 'crm-i fa-info-circle',
      'icon-drag': 'crm-i fa-arrows-alt',
      'icon-tick': 'crm-i fa-check',
      'icon-add': 'crm-i fa-plus-circle',
    }
    ```

An [OpenVideo.tech](https://OpenVideo.tech) project.