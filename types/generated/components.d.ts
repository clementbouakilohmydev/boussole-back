import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAppointmentSection extends Schema.Component {
  collectionName: 'components_blocks_appointment_sections';
  info: {
    displayName: 'AppointmentSection';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Marre de ces freins qui couinent ?'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"Ah, ces freins qui couinent, cette roue qui bo\u00EEte et ces vitesses qui sautent, parfois ca donne envie d'aller voir ailleurs... Apr\u00E8s une s\u00E9ance de r\u00E9paration de votre v\u00E9lo \u00E0 l'atelier Boussole \u00E0 Clichy, on vous promet le retour des papillons dans le ventre des premiers jours :)">;
    button: Attribute.Component<'components.button'>;
    cards: Attribute.Component<'components.card', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
  };
}

export interface BlocksArticlesSection extends Schema.Component {
  collectionName: 'components_blocks_articles_sections';
  info: {
    displayName: 'ArticlesSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Articles similaires'>;
    articles: Attribute.Relation<
      'blocks.articles-section',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksBenefitsSection extends Schema.Component {
  collectionName: 'components_blocks_benefits_sections';
  info: {
    displayName: 'BenefitsSection';
    icon: 'apps';
  };
  attributes: {
    benefits: Attribute.Relation<
      'blocks.benefits-section',
      'oneToMany',
      'api::benefit.benefit'
    >;
  };
}

export interface BlocksBlueHeaderSection extends Schema.Component {
  collectionName: 'components_blocks_blue_header_sections';
  info: {
    displayName: 'BlueHeaderSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'R\u00E9parez votre v\u00E9lo'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Besoin d\u2019un coup de pouce pour remettre en selle votre fid\u00E8le destrier \u00E0 deux roues ? \u00C9lectrique, classique, peu importe le type et l\u2019\u00E9tat de votre v\u00E9lo, faites le r\u00E9parer en 48h par nos m\u00E9caniciens les plus qualis :)'>;
    button: Attribute.Component<'components.button'>;
    image: Attribute.Component<'components.image-section'> & Attribute.Required;
    sticker: Attribute.Component<'components.image-section'>;
  };
}

export interface BlocksBrandsSection extends Schema.Component {
  collectionName: 'components_blocks_brands_sections';
  info: {
    displayName: 'BrandsSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Vos marques pr\u00E9f\u00E9r\u00E9es sont sur Boussole'>;
    image: Attribute.Component<'components.image-section'>;
    collections: Attribute.Relation<
      'blocks.brands-section',
      'oneToMany',
      'api::collection.collection'
    >;
  };
}

export interface BlocksCategoriesSection extends Schema.Component {
  collectionName: 'components_blocks_categories_sections';
  info: {
    displayName: 'CategoriesSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Nos cat\u00E9gories de v\u00E9lo'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Des aventures urbaines aux escapades tout-terrain, chez Boussole, on tient \u00E0 proposer des v\u00E9los classiques comme des v\u00E9los \u00E9lectriques reconditionn\u00E9s. Notre objectif : trouver le v\u00E9lo parfait pour vous !'>;
    button: Attribute.Component<'components.button'>;
    collections: Attribute.Relation<
      'blocks.categories-section',
      'oneToMany',
      'api::collection.collection'
    >;
  };
}

export interface BlocksComparatorSection extends Schema.Component {
  collectionName: 'components_blocks_comparator_sections';
  info: {
    displayName: 'ComparatorSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'V\u00E9lo reconditionn\u00E9 par Boussole, d\u2019occasion ou neuf : quelle diff\u00E9rence ?'>;
  };
}

export interface BlocksConceptSection extends Schema.Component {
  collectionName: 'components_blocks_concept_sections';
  info: {
    displayName: 'ConceptSection';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Changez le monde, un coup de p\u00E9dale \u00E0 la fois'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Nunc sed senectus arcu lectus potenti. Sed et consequat pellentesque lacus. In ipsum pellentesque enim varius viverra. Maecenas tortor ac enim vestibulum in. Penatibus faucibus hac in porttitor ultrices in dui nibh.'>;
    cards: Attribute.Component<'components.title-description-image', true>;
  };
}

export interface BlocksControlPointsSection extends Schema.Component {
  collectionName: 'components_blocks_control_points_sections';
  info: {
    displayName: 'ControlPointsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Reconditionn\u00E9 et test\u00E9 sur 30 points de contr\u00F4les par Fran\u00E7ois'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Chez Boussole, chaque v\u00E9lo est minutieusement scrut\u00E9 par nos m\u00E9caniciens \uD83E\uDDD0Pas moins de 30 points de contr\u00F4le\u00A0doivent \u00EAtre pass\u00E9s avec succ\u00E8s pour qu\u2019un v\u00E9lo sorte de notre atelier pour de nouvelles aventures !'>;
    image: Attribute.Component<'components.image-section'>;
    button: Attribute.Component<'components.button'>;
    controlDescription: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"M\u00E9canicien pr\u00E9cis portant une attention aux d\u00E9tails qui font la diff, Fran\u00E7ois est un v\u00E9ritable maestro de la cl\u00E9 \u00E0 molette. Berc\u00E9 par les beats envo\u00FBtants de la web radio anglaise NTS, il s'attache \u00E0 reconditionner tous type de v\u00E9los pour les remettre en circulation et leur faire vivre de nouvelles aventures \u00E0 vos c\u00F4t\u00E9s.">;
    points: Attribute.Relation<
      'blocks.control-points-section',
      'oneToMany',
      'api::control-point.control-point'
    >;
  };
}

export interface BlocksGoogleReviewsSection extends Schema.Component {
  collectionName: 'components_blocks_google_reviews_sections';
  info: {
    displayName: 'GoogleReviewsSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Psst, on est not\u00E9 4,9/5 sur Google !'>;
    button: Attribute.Component<'components.button'>;
  };
}

export interface BlocksHeaderFadedImages extends Schema.Component {
  collectionName: 'components_blocks_header_faded_images';
  info: {
    displayName: 'HeaderFadedImages';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Votre boussole vers une \u00E9comobilit\u00E9 plus durable'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Un v\u00E9lo qui finit \u00E0 la poubelle ou au fond du garage, qui tra\u00EEne sur un site d\u2019annonce, c\u2019est des \u00E9missions de carbone que l\u2019on pourrait \u00E9viter. Favoriser la seconde main par rapport au neuf et redonner du peps au v\u00E9lo, c\u2019est \u00E7a notre mantra !'>;
    images: Attribute.Component<'components.image-section', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface BlocksHeaderNumerotedCards extends Schema.Component {
  collectionName: 'components_blocks_header_numeroted_cards';
  info: {
    displayName: 'HeaderNumerotedCards';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'De notre atelier \u00E0 votre porte : on vous d\u00E9voile les coulisses !'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"Depuis 2020, on a sauv\u00E9 des milliers de v\u00E9los de leur triste destin ! Certains auraient fini \u00E0 la casse, d'autres tra\u00EEneraient encore aujourd\u2019hui sur des sites d'annonces ou au fond d\u2019un garage. D\u00E9couvrez tout notre processus de reconditionnement qui les a transform\u00E9s en v\u00E9ritables joyaux de la route :)">;
    cards: Attribute.Component<'components.title-description-image', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 3;
        },
        number
      >;
  };
}

export interface BlocksImagesCloudSection extends Schema.Component {
  collectionName: 'components_blocks_images_cloud_sections';
  info: {
    displayName: 'ImagesCloudSection';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'components.image-section', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Ils s\u2019aiment \u00E0 nouveau'>;
    description: Attribute.String &
      Attribute.DefaultTo<"Quand l'amour pour son v\u00E9lo rena\u00EEt de ses cendres... Nos clients chouchoutent leurs v\u00E9los et nous en sommes t\u00E9moins !">;
  };
}

export interface BlocksMapSection extends Schema.Component {
  collectionName: 'components_blocks_map_sections';
  info: {
    displayName: 'MapSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Fatigu\u00E9s de crever ? On est par ici :)'>;
  };
}

export interface BlocksNumberedCardsSection extends Schema.Component {
  collectionName: 'components_blocks_numbered_cards_sections';
  info: {
    displayName: 'NumberedCardsSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Boussole invente le magasin du v\u00E9lo du futur : plus durable, plus moderne'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Depuis 2020, on parle tous les jours avec vous, cyclistes du quotidien, et chaque discussion renforce notre vision : vous apporter la meilleure offre pour vous aider \u00E0 vous \u00E9panouir en v\u00E9lo.'>;
    button: Attribute.Component<'components.button'>;
    cards: Attribute.Component<'components.card', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

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

export interface BlocksPricingSection extends Schema.Component {
  collectionName: 'components_blocks_pricing_sections';
  info: {
    displayName: 'PricingSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Des tarifs qui ne font pas grincer les p\u00E9dales :)'>;
    categories: Attribute.Component<'components.pricing-card', true>;
  };
}

export interface BlocksProductsSlider extends Schema.Component {
  collectionName: 'components_blocks_products_sliders';
  info: {
    displayName: 'ProductsSlider';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Tout beaux, tout chauds'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Des bolides fra\u00EEchement sortis de notre atelier, pr\u00EAt \u00E0 rugir \u00E0 nouveau sur le bitume, pr\u00EAts \u00E0 \u00EAtre adopter :)'>;
    collection: Attribute.Relation<
      'blocks.products-slider',
      'oneToOne',
      'api::collection.collection'
    >;
  };
}

export interface BlocksQuestionsSection extends Schema.Component {
  collectionName: 'components_blocks_questions_sections';
  info: {
    displayName: 'QuestionsSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Vous avez des questions, on a les r\u00E9ponses !'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Et oui, on lit dans votre esprit :) Les questions les plus couramment pos\u00E9es par nos clients, c\u2019est par ici !'>;
    button: Attribute.Component<'components.button'>;
    questions: Attribute.Relation<
      'blocks.questions-section',
      'oneToMany',
      'api::question.question'
    >;
  };
}

export interface BlocksRecommandedArticles extends Schema.Component {
  collectionName: 'components_blocks_recommanded_articles';
  info: {
    displayName: 'RecommandedArticles';
    icon: 'archive';
    description: '';
  };
  attributes: {
    articles: Attribute.Relation<
      'blocks.recommanded-articles',
      'oneToMany',
      'api::article.article'
    >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Articles similaires'>;
  };
}

export interface BlocksReviewsSection extends Schema.Component {
  collectionName: 'components_blocks_reviews_sections';
  info: {
    displayName: 'ReviewsSection';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Ils ont test\u00E9, valid\u00E9 et adopt\u00E9'>;
    tag: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+200 happy clients :)'>;
  };
}

export interface BlocksRichTextSection extends Schema.Component {
  collectionName: 'components_blocks_rich_text_sections';
  info: {
    displayName: 'RichTextSection';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface BlocksSquaresCloudSection extends Schema.Component {
  collectionName: 'components_blocks_squares_cloud_sections';
  info: {
    displayName: 'SquaresCloudSection';
    icon: 'apps';
  };
  attributes: {
    squares: Attribute.Component<'components.square-block', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
  };
}

export interface BlocksStocksSection extends Schema.Component {
  collectionName: 'components_blocks_stocks_sections';
  info: {
    displayName: 'StocksSection';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Pssst, vous n\u2019avez pas trouv\u00E9 le v\u00E9lo de vos r\u00EAves ?'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"D\u00E9couvrez le stock de l'atelier ! On vous envoie un lien par email vers nos v\u00E9los (presque) reconditionn\u00E9s disponibles en pr\u00E9-commande ! :)">;
    button: Attribute.Component<'components.button'>;
  };
}

export interface BlocksTeamSlider extends Schema.Component {
  collectionName: 'components_blocks_team_sliders';
  info: {
    displayName: 'TeamSlider';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'La team Boussole'>;
    employees: Attribute.Relation<
      'blocks.team-slider',
      'oneToMany',
      'api::employee.employee'
    >;
  };
}

export interface BlocksThreeCardsSection extends Schema.Component {
  collectionName: 'components_blocks_three_cards_sections';
  info: {
    displayName: 'ThreeCardsSection';
    icon: 'apps';
  };
  attributes: {
    cards: Attribute.Component<'components.title-description-button', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface BlocksTitleDescriptionImageSection extends Schema.Component {
  collectionName: 'components_blocks_title_description_image_sections';
  info: {
    displayName: 'TitleDescriptionImageSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Component<'components.image-section'>;
    isReverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    button: Attribute.Component<'components.button'>;
    sticker: Attribute.Component<'components.image-section'>;
  };
}

export interface BlocksVideoSection extends Schema.Component {
  collectionName: 'components_blocks_video_sections';
  info: {
    displayName: 'VideoSection';
    icon: 'cast';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Pourquoi choisir un v\u00E9lo reconditionn\u00E9 ?'>;
    button: Attribute.Component<'components.button'>;
    youtubeVideoUrl: Attribute.Text & Attribute.Required;
    image: Attribute.Component<'components.image-section'>;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    withArrow: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    page: Attribute.Relation<'components.button', 'oneToOne', 'api::page.page'>;
  };
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'TitleDescription';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    emoji: Attribute.String;
  };
}

export interface ComponentsImageSection extends Schema.Component {
  collectionName: 'components_blocks_image_sections';
  info: {
    displayName: 'Image';
    icon: 'apps';
    description: '';
  };
  attributes: {
    shopifyImageUrl: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsInformations extends Schema.Component {
  collectionName: 'components_components_informations';
  info: {
    displayName: 'informations';
    icon: 'bold';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface ComponentsNewsletterForm extends Schema.Component {
  collectionName: 'components_components_newsletter_forms';
  info: {
    displayName: 'NewsletterForm';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Inscrivez-vous \u00E0 notre newsletter ! \u2709\uFE0F'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"Recevez 10% de remise sur votre premi\u00E8re commande d'accessoires et tenez-vous \u00E0 l'aff\u00FBt d\u00E8s qu'un nouveau bolide d\u00E9barque dans notre ar\u00E8ne :)">;
    button: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"Je m'inscris">;
    placeholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Votre email'>;
  };
}

export interface ComponentsPricingCard extends Schema.Component {
  collectionName: 'components_components_pricing_cards';
  info: {
    displayName: 'PricingCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Component<'components.image-section'>;
    pricings: Attribute.Relation<
      'components.pricing-card',
      'oneToMany',
      'api::pricing.pricing'
    >;
  };
}

export interface ComponentsSquareBlock extends Schema.Component {
  collectionName: 'components_components_square_blocks';
  info: {
    displayName: 'SquareBlock';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    emoji: Attribute.String;
    shopifyImageUrl: Attribute.String;
    button: Attribute.Component<'components.button'>;
  };
}

export interface ComponentsTitleDescriptionButton extends Schema.Component {
  collectionName: 'components_common_title_description_buttons';
  info: {
    displayName: 'TitleDescriptionButton';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Vendez votre v\u00E9lo !'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Parce que chaque v\u00E9lo a une histoire \u00E0 raconter et m\u00E9ritent une nouvelle aventure \u00E0 vivre, remplissez un questionnaire en 5 minutes et offrez \u00E0 votre v\u00E9lo bien-aim\u00E9 une chance de briller \u00E0 nouveau !'>;
    button: Attribute.Component<'components.button'> & Attribute.Required;
  };
}

export interface ComponentsTitleDescriptionImage extends Schema.Component {
  collectionName: 'components_components_title_description_images';
  info: {
    displayName: 'TitleDescriptionImage';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    imageShopifyUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.appointment-section': BlocksAppointmentSection;
      'blocks.articles-section': BlocksArticlesSection;
      'blocks.benefits-section': BlocksBenefitsSection;
      'blocks.blue-header-section': BlocksBlueHeaderSection;
      'blocks.brands-section': BlocksBrandsSection;
      'blocks.categories-section': BlocksCategoriesSection;
      'blocks.comparator-section': BlocksComparatorSection;
      'blocks.concept-section': BlocksConceptSection;
      'blocks.control-points-section': BlocksControlPointsSection;
      'blocks.google-reviews-section': BlocksGoogleReviewsSection;
      'blocks.header-faded-images': BlocksHeaderFadedImages;
      'blocks.header-numeroted-cards': BlocksHeaderNumerotedCards;
      'blocks.images-cloud-section': BlocksImagesCloudSection;
      'blocks.map-section': BlocksMapSection;
      'blocks.numbered-cards-section': BlocksNumberedCardsSection;
      'blocks.partners-section': BlocksPartnersSection;
      'blocks.pricing-section': BlocksPricingSection;
      'blocks.products-slider': BlocksProductsSlider;
      'blocks.questions-section': BlocksQuestionsSection;
      'blocks.recommanded-articles': BlocksRecommandedArticles;
      'blocks.reviews-section': BlocksReviewsSection;
      'blocks.rich-text-section': BlocksRichTextSection;
      'blocks.squares-cloud-section': BlocksSquaresCloudSection;
      'blocks.stocks-section': BlocksStocksSection;
      'blocks.team-slider': BlocksTeamSlider;
      'blocks.three-cards-section': BlocksThreeCardsSection;
      'blocks.title-description-image-section': BlocksTitleDescriptionImageSection;
      'blocks.video-section': BlocksVideoSection;
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.image-section': ComponentsImageSection;
      'components.informations': ComponentsInformations;
      'components.newsletter-form': ComponentsNewsletterForm;
      'components.pricing-card': ComponentsPricingCard;
      'components.square-block': ComponentsSquareBlock;
      'components.title-description-button': ComponentsTitleDescriptionButton;
      'components.title-description-image': ComponentsTitleDescriptionImage;
    }
  }
}
