import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksPartnersSection extends Schema.Component {
  collectionName: 'components_blocks_partners_sections';
  info: {
    displayName: 'PartnersSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Ils parlent de nous'>;
    partners: Attribute.Relation<
      'blocks.partners-section',
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.partners-section': BlocksPartnersSection;
    }
  }
}
