export type Language = 'AZE' | 'ENG' | 'RUS' | 'TR';

export interface Translation {
  nav: {
    home: string;
    about: string;
    activities: string;
    regions: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    ctaContact: string;
    ctaAbout: string;
    locationBadge: string;
    establishedBadge: string;
  };
  quickStats: {
    title: string;
    subtitle: string;
    foundedLabel: string;
    foundedVal: string;
    hqLabel: string;
    hqVal: string;
    legalNameLabel: string;
    legalNameVal: string;
    focusLabel: string;
    focusVal: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    socarHighlight: string;
    socarDesc: string;
    tendersTitle: string;
    tendersDesc: string;
    networkTitle: string;
    networkDesc: string;
  };
  activities: {
    title: string;
    subtitle: string;
    tradingTitle: string;
    tradingDesc: string;
    industrial: string;
    industrialDesc: string;
    chemical: string;
    chemicalDesc: string;
    agricultural: string;
    agriculturalDesc: string;
    supplyChainTitle: string;
    supplyChainDesc: string;
    sourcing: string;
    sourcingDesc: string;
    logistics: string;
    logisticsDesc: string;
    projectImpl: string;
    projectImplDesc: string;
    tenderTitle: string;
    tenderDesc: string;
    commercialGovTenders: string;
    commercialGovTendersDesc: string;
  };
  regions: {
    title: string;
    subtitle: string;
    turkiye: string;
    centralAsia: string;
    centralAsiaCountries: string;
    eastSouthAsia: string;
    eastSouthAsiaCountries: string;
    maghreb: string;
    cis: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    emailLabel: string;
    emailVal: string;
    websiteLabel: string;
    websiteVal: string;
    formTitle: string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    subject: string;
    message: string;
    sendButton: string;
    successMessage: string;
    whatsappButton: string;
    callButton: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    allRightsReserved: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
