(function () {
  const entries = {
    'brand.name': ['Ferienwohnung Ötigheim', 'Ötigheim Holiday Apartment'],
    'meta.home.title': ['Ferienwohnung Ötigheim bei Rastatt | Fewo Oetigheim', 'Holiday Apartment in Ötigheim near Rastatt | Fewo Oetigheim'],
    'meta.home.description': ['Gemütliche Ferienwohnung in Ötigheim bei Rastatt. Moderne Ausstattung, ruhige Lage, schnelle Buchung. Ideal für Urlaub, Geschäftsreisen und Monteure.', 'Cosy holiday apartment in Ötigheim near Rastatt. Modern amenities, peaceful location and easy booking. Ideal for holidays, business trips and contractors.'],
    'meta.home.og.title': ['Ferienwohnung Ötigheim – Moderne Unterkunft bei Rastatt', 'Ötigheim Holiday Apartment – Modern accommodation near Rastatt'],
    'meta.home.og.description': ['Gemütliche Ferienwohnung in Ötigheim. Moderne Ausstattung, ruhige Lage, schnelle Buchung.', 'Cosy holiday apartment in Ötigheim. Modern amenities, peaceful location and easy booking.'],
    'meta.contact.title': ['Kontakt & Buchung | Ferienwohnung Ötigheim', 'Contact & Booking | Ötigheim Holiday Apartment'],
    'meta.contact.description': ['Kontaktieren Sie uns direkt für Buchungen, Fragen und Konditionen in der Ferienwohnung Ötigheim.', 'Contact us directly about bookings, questions and rates for the Ötigheim holiday apartment.'],
    'meta.privacy.title': ['Datenschutzerklärung | Ferienwohnung Ötigheim', 'Privacy Policy | Ötigheim Holiday Apartment'],
    'meta.privacy.description': ['Datenschutzerklärung der Ferienwohnung Ötigheim mit Infos zu Datenschutz, Cookies und Kontaktformular.', 'Privacy policy for the Ötigheim holiday apartment, with information about data protection, cookies and the contact form.'],
    'meta.imprint.title': ['Impressum | Ferienwohnung Ötigheim', 'Legal Notice | Ötigheim Holiday Apartment'],
    'meta.imprint.description': ['Impressum der Ferienwohnung Ötigheim mit Ansprechpartner, Adresse, Telefon und E-Mail.', 'Legal notice for the Ötigheim holiday apartment, including contact person, address, telephone and email.'],
    'nav.open': ['Menü öffnen', 'Open menu'],
    'nav.home': ['Startseite', 'Home'],
    'nav.contact': ['Kontakt & Buchung', 'Contact & Booking'],
    'nav.imprint': ['Impressum', 'Legal notice'],
    'nav.privacy': ['Datenschutz', 'Privacy policy'],
    'language.group': ['Sprachauswahl', 'Language selector'],
    'home.welcome': ['Willkommen', 'Welcome'],
    'home.hero.title': ['Ferienwohnung Ötigheim – Ihr Zuhause auf Zeit in der Region Rastatt', 'Ötigheim Holiday Apartment – Your Home Away from Home in the Rastatt Region'],
    'home.hero.description': ['Die gemütliche 60 m² große Ferienwohnung in Ortsrandlage von Ötigheim bei Rastatt bietet Komfort und Entspannung für bis zu 4 Personen. Diese moderne Ferienwohnung ist ideal als Projektwohnung, Monteurzimmer für Urlaub oder Geschäftsreisen.', 'This cosy 60 m² apartment on the edge of Ötigheim, near Rastatt, offers comfort and relaxation for up to 4 guests. This modern apartment is ideal for holidaymakers, business travellers and contractors.'],
    'home.book': ['Jetzt buchen', 'Book now'],
    'home.feature.guests': ['maximal 4 Personen (max. 3 Erwachsene)', 'Up to 4 guests (maximum 3 adults)'],
    'home.feature.kitchen': ['voll ausgestattete Küche mit Kochfeld, Backofen, Kühlschrank', 'Fully equipped kitchen with hob, oven and refrigerator'],
    'home.feature.wifi': ['Highspeed-WLAN, Smart-TV mit Streaming-Diensten', 'High-speed Wi-Fi and Smart TV with streaming services'],
    'home.feature.laundry': ['Klimaanlage, Waschmaschine und Trockner', 'Air conditioning, washing machine and tumble dryer'],
    'home.feature.parking': ['eigener Eingang, Parkplatz auf dem Grundstück', 'Private entrance and on-site parking'],
    'home.hero.image': ['Außenansicht der Ferienwohnung Ötigheim, ein modernes Einfamilienhaus mit hellem Außenanstrich und begrüntem Grundstück in ruhiger Ortsrandlage bei Rastatt, freundlich und einladend', 'Exterior of the Ötigheim holiday apartment: a modern detached house with a light-coloured façade and landscaped grounds in a peaceful location on the edge of town near Rastatt.'],
    'home.gallery.label': ['Galerie', 'Gallery'],
    'home.gallery.title': ['Die gut ausgestatte Ferienwohnung', 'A well-equipped holiday apartment'],
    'home.living.title': ['Kombinierte Wohn- & Essküche', 'Combined living room and dining kitchen'],
    'home.living.description': ['Das Wohnzimmer mit ausziehbarer Schlafcouch (Breite 1,40 m) bietet viel Platz zum Entspannen und Genießen. Ein Smart-TV mit IPTV steht ebenso zur Verfügung wie vorinstallierte Streaming-Apps.', 'The living room features a pull-out sofa bed (1.40 m wide) and plenty of space to relax. A Smart TV with IPTV and pre-installed streaming apps is also available.'],
    'home.dining.description': ['Der integrierte Essbereich mit großzügiger Essbank und Stühlen bietet genug Platz für gemütliches Essen und Trinken.', 'The dining area, with a spacious bench and chairs, offers plenty of room to enjoy a meal together.'],
    'home.image.living': ['Wohnzimmer mit Kochnische und Essbereich', 'Living room with kitchenette and dining area'],
    'home.caption.living': ['Wohn- & Essbereich', 'Living and dining area'],
    'home.image.sofa': ['Wohnzimmer mit Schlafcouch und Smart-TV', 'Living room with sofa bed and Smart TV'],
    'home.caption.sofa': ['Schlafcouch & TV', 'Sofa bed and TV'],
    'home.kitchen.title': ['Moderne, kompakte Küche', 'Modern, compact kitchen'],
    'home.kitchen.description': ['Die Küche ist mit Senseo-Kaffeemaschine, Wasserkocher, Toaster, Ceran-Kochfeld und Backofen ausgestattet.', 'The kitchen is equipped with a Senseo coffee machine, kettle, toaster, ceramic hob and oven.'],
    'home.kitchen.stock': ['Eine Basisausstattung an Besteck, Geschirr, Töpfen, Pfannen, Gewürzen, Kaffee, Öl und Essig finden Sie vor Ort.', 'A basic supply of cutlery, crockery, pots, pans, spices, coffee, oil and vinegar is provided.'],
    'home.image.coffee': ['Küche mit Kaffeemaschine und Spüle', 'Kitchen with coffee machine and sink'],
    'home.caption.kitchen': ['Moderne Küche', 'Modern kitchen'],
    'home.image.equipment': ['Küche mit vollständig ausgestatteten Geräten', 'Kitchen with a full range of appliances'],
    'home.caption.equipment': ['Komplett ausgestattet', 'Fully equipped'],
    'home.image.dining': ['Essbereich neben der Küche', 'Dining area beside the kitchen'],
    'home.caption.dining': ['Essbereich & Küche', 'Dining area and kitchen'],
    'home.bedroom.title': ['Großzügiges Schlafzimmer', 'Spacious bedroom'],
    'home.bedroom.description': ['Genießen Sie erholsame Nächte in einem bequemen, großen Bett mit 2 Matratzen. Zusätzlich finden Sie Nachtkästchen, Nachttischlampe, Schrank, Kommode und eine Sitzgarnitur inklusive Tisch.', 'Enjoy a restful night in a comfortable, spacious bed with two mattresses. The room also has bedside tables and lamps, a wardrobe, a chest of drawers, and a small seating area with a table.'],
    'home.image.bedroom': ['Schlafzimmer mit Sitzbereich', 'Bedroom with seating area'],
    'home.caption.bedroom': ['Schlafzimmeransicht', 'Bedroom'],
    'home.bathroom.title': ['Hochwertiges, neues Badezimmer', 'New, high-quality bathroom'],
    'home.bathroom.description': ['Ein komplett neues, hochwertiges Badezimmer rundet Ihren Aufenthalt ab. Genießen Sie die große Regenfalldusche und Fußbodenheizung. Waschmaschine inkl. Waschpulver und ein Trockner stehen Ihnen im Bad zur Verfügung.', 'A brand-new, high-quality bathroom completes your stay. Enjoy the spacious rainfall shower and underfloor heating. A washing machine with detergent and a tumble dryer are also available in the bathroom.'],
    'home.image.bathroom.sink': ['Badezimmer mit Waschbecken', 'Bathroom with washbasin'],
    'home.caption.bathroom.overview': ['Überblick Bad', 'Bathroom overview'],
    'home.image.bathroom.overview': ['Badezimmer Überblick mit Waschmaschine, Toilette und Waschbecken', 'Bathroom overview with washing machine, toilet and washbasin'],
    'home.caption.bathroom': ['Badezimmer', 'Bathroom'],
    'home.image.shower': ['Badezimmer mit Regendusche', 'Bathroom with rainfall shower'],
    'home.caption.shower': ['Regendusche', 'Rainfall shower'],
    'home.why.title': ['Warum diese Unterkunft?', 'Why stay here?'],
    'home.benefit.nights.title': ['Ruhige, kühle Nächte', 'Peaceful, cool nights'],
    'home.benefit.nights.description': ['Die Wohnung liegt im sommerlich kühlen Souterrain eines Einfamilienhauses in entspannter Ortsrandlage an einer Sackgasse.', 'The apartment is on the pleasantly cool lower-ground floor of a detached house, in a quiet cul-de-sac on the edge of town.'],
    'home.benefit.location.title': ['Praktische Lage', 'Convenient location'],
    'home.benefit.location.description': ['In der Nähe befinden sich Supermärkte, Bäckereien und eine Bahnhaltestelle. Ideal für Besuche der Volksschauspiele oder Ausflüge nach Rastatt, Karlsruhe, Baden-Baden, Schwarzwald und Elsass.', 'Supermarkets, bakeries and a train stop are nearby. The location is ideal for visiting the Volksschauspiele theatre or exploring Rastatt, Karlsruhe, Baden-Baden, the Black Forest and Alsace.'],
    'home.benefit.parking.title': ['Parken leicht gemacht', 'Easy parking'],
    'home.benefit.parking.description': ['Ein Parkplatz ist auf dem Grundstück vorhanden, zusätzlich gibt es kostenlose Parkmöglichkeiten entlang der Straße.', 'On-site parking is available, with additional free parking along the street.'],
    'home.location.label': ['Lage & Anfahrt', 'Location and directions'],
    'home.location.title': ['So finden Sie uns', 'How to find us'],
    'home.address.title': ['Adresse', 'Address'],
    'home.address.description': ['Die Unterkunft liegt ruhig in der Ortsrandlage von Ötigheim und ist ideal für Ausflüge nach Rastatt, Karlsruhe oder in den Schwarzwald.', 'The accommodation is in a peaceful location on the edge of Ötigheim, ideal for trips to Rastatt, Karlsruhe or the Black Forest.'],
    'home.directions.label': ['Anfahrt:', 'Getting here:'],
    'home.directions.description': ['Die Wohnung ist mit dem Auto gut erreichbar und bietet einen eigenen Parkplatz auf dem Grundstück.', 'The apartment is easy to reach by car and has its own parking space on the property.'],
    'home.map.label': ['Karte zur Lage der Ferienwohnung', 'Map showing the holiday apartment location'],
    'contact.eyebrow': ['Kontakt & Buchung', 'Contact & Booking'],
    'contact.title': ['Kontaktieren Sie uns direkt für die besten Konditionen.', 'Contact us directly for the best rates.'],
    'contact.intro': ['Nutzen Sie das Formular für Ihre Direktanfrage. Wir melden uns schnellstmöglich bei Ihnen.', 'Use the form to send us a booking enquiry. We will get back to you as soon as possible.'],
    'contact.form.title': ['Ihre direkte Buchungsanfrage', 'Your direct booking enquiry'],
    'contact.name.label': ['Name *', 'Name *'],
    'contact.name.placeholder': ['Max Mustermann', 'Alex Example'],
    'contact.email.label': ['E-Mail *', 'Email *'],
    'contact.email.placeholder': ['max@mustermann.de', 'alex@example.com'],
    'contact.phone.label': ['Telefon (optional)', 'Phone (optional)'],
    'contact.message.label': ['Nachricht *', 'Message *'],
    'contact.message.placeholder': ['Bitte tragen Sie hier Ihre Reisedaten ein. Anreise / Abreise / Anzahl Personen.', 'Please enter your travel details here: arrival / departure / number of guests.'],
    'contact.privacy.consent': ['gelesen und stimme der Verarbeitung meiner Daten gemäß dieser Erklärung zu.', 'and agree to the processing of my data as described in this statement.'],
    'contact.privacy.intro': ['Ich habe die', 'I have read the'],
    'contact.submit': ['Senden', 'Send'],
    'contact.email.alternative': ['Alternativ per E-Mail', 'Alternatively, email us'],
    'contact.email.description': ['Senden Sie uns einfach eine E-Mail an', 'Simply email us at'],
    'contact.email.title': ['E-Mail an fewo-oetigheim@web.de', 'Email fewo-oetigheim@web.de'],
    'contact.email.aria': ['E-Mail an fewo-oetigheim@web.de senden', 'Send an email to fewo-oetigheim@web.de'],
    'contact.booking.label': ['Online Buchung', 'Online booking'],
    'contact.booking.title': ['Buchen Sie online für sofortige Reservierung.', 'Book online for an instant reservation.'],
    'contact.booking.fees': ['Bei Online-Buchung fallen zusätzliche Gebühren an.', 'Additional fees apply to online bookings.'],
    'privacy.hero.label': ['Datenschutz', 'Privacy'],
    'privacy.title': ['Datenschutzerklärung', 'Privacy Policy'],
    'privacy.intro': ['Die folgenden Hinweise geben einen Überblick darüber, wie Ihre personenbezogenen Daten verarbeitet werden.', 'The following information provides an overview of how your personal data is processed.'],
    'privacy.section.1.title': ['1. Allgemeine Hinweise', '1. General information'],
    'privacy.section.1.p1': ['Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung Ihrer personenbezogenen Daten auf dieser Website.', 'This privacy policy explains the nature, scope and purpose of the processing of your personal data on this website.'],
    'privacy.section.1.p2': ['Verantwortlich im Sinne der DSGVO ist Kreuser FeWo GbR, Finkenweg 10, 76470 Ötigheim, Telefon', 'The controller responsible under the GDPR is Kreuser FeWo GbR, Finkenweg 10, 76470 Ötigheim, Germany. Phone:'],
    'privacy.section.1.email': [', E-Mail', ', email'],
    'privacy.section.2.title': ['2. Daten, die erhoben werden', '2. Data we collect'],
    'privacy.section.2.p1': ['Bei der Kontaktaufnahme über das Formular werden Name, E-Mail-Adresse, Telefonnummer (optional) und Ihre Nachricht verarbeitet. Beim Aufrufen der Website werden zudem technische Daten wie Browser, Betriebssystem, IP-Adresse, Datum und Uhrzeit der Anfrage erfasst.', 'When you contact us using the form, we process your name, email address, telephone number (optional) and message. When you visit the website, technical data such as your browser, operating system, IP address, and the date and time of the request are also recorded.'],
    'privacy.section.3.title': ['3. Zwecke und Rechtsgrundlagen', '3. Purposes and legal bases'],
    'privacy.section.3.p1': ['Wir verarbeiten Ihre Daten zur Beantwortung Ihrer Anfrage, zur Abwicklung von Buchungs- oder Informationswünschen und zur technisch korrekten Bereitstellung der Website. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für Anfragen und Buchungsabwicklung sowie Art. 6 Abs. 1 lit. f DSGVO für den Betrieb der Website.', 'We process your data to respond to enquiries, handle booking or information requests, and ensure the website functions correctly. The legal basis is Art. 6(1)(b) GDPR for enquiries and bookings, and Art. 6(1)(f) GDPR for operating the website.'],
    'privacy.section.4.title': ['4. Empfänger und Dienstleister', '4. Recipients and service providers'],
    'privacy.section.4.p1': ['Ihre Daten können an externe Dienstleister weitergegeben werden, die wir für den Betrieb der Website und der Buchungsfunktion einsetzen, etwa Splitforms für das Kontaktformular und Holidu Host für die eingebettete Buchungsintegration. Diese Dienstleister verarbeiten Daten nur im Auftrag und nach unseren Weisungen.', 'Your data may be shared with external service providers we use to operate the website and booking features, such as Splitforms for the contact form and Holidu Host for the embedded booking integration. These providers process data only on our behalf and in accordance with our instructions.'],
    'privacy.section.5.title': ['5. Speicherdauer', '5. Data retention'],
    'privacy.section.5.p1': ['Kontaktanfragen werden so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist und keine gesetzliche Aufbewahrungspflicht entgegensteht. Technische Protokolldaten werden in der Regel kurzfristig gespeichert.', 'Enquiries are retained for as long as necessary to handle them, unless statutory retention requirements apply. Technical log data is generally stored for a short period.'],
    'privacy.section.6.title': ['6. Cookies und externe Inhalte', '6. Cookies and external content'],
    'privacy.section.6.p1': ['Diese Website verwendet derzeit keine Tracking-Cookies. Beim Laden externer Inhalte wie der Buchungsintegration können technische Daten an den jeweiligen Anbieter übermittelt werden. Bitte prüfen Sie die Datenschutzhinweise der eingebundenen Dienste.', 'This website does not currently use tracking cookies. Loading external content, such as the booking integration, may transmit technical data to the relevant provider. Please review the privacy information of the embedded services.'],
    'privacy.section.7.title': ['7. Ihre Rechte', '7. Your rights'],
    'privacy.section.7.p1': ['Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Bitte wenden Sie sich hierzu jederzeit an uns per E-Mail oder Telefon. Sie haben außerdem das Recht, sich bei einer Aufsichtsbehörde zu beschweren.', 'You have the right to access, rectify and erase your data, restrict or object to its processing, and receive your data in a portable format. You may contact us at any time by email or telephone. You also have the right to lodge a complaint with a supervisory authority.'],
    'privacy.section.8.title': ['8. SSL-/TLS-Verschlüsselung', '8. SSL/TLS encryption'],
    'privacy.section.8.p1': ['Zur Sicherung der Datenübertragung wird auf dieser Website eine SSL- oder TLS-Verschlüsselung genutzt. Dadurch wird die Verbindung zwischen Browser und Server geschützt.', 'This website uses SSL or TLS encryption to secure data transmission and protect the connection between your browser and the server.'],
    'privacy.section.9.title': ['9. Web-Analyse (Umami)', '9. Web analytics (Umami)'],
    'privacy.section.9.p1': ['Wir verwenden auf dieser Website das datenschutzfreundliche Analysesystem', 'We use the privacy-friendly analytics system'],
    'privacy.section.9.product': ['Umami (Umami Cloud)', 'Umami (Umami Cloud)'],
    'privacy.section.9.p1b': ['. Die verwendete Instanz ist gehostet unter', '. The instance used is hosted at'],
    'privacy.section.9.p1c': ['. Unsere Website-ID lautet', '. Our website ID is'],
    'privacy.section.9.p2': ['Umami kann so betrieben werden, dass keine Tracking-Cookies gesetzt werden und IP-Adressen anonymisiert werden. Bitte beachten Sie: ob Cookies gesetzt werden und in welchem Umfang IP-Adressen verarbeitet werden, hängt von der konkreten Konfiguration der Umami-Instanz ab.', 'Umami can be configured not to set tracking cookies and to anonymise IP addresses. Please note that whether cookies are set and how IP addresses are processed depends on the specific configuration of the Umami instance.'],
    'privacy.section.9.p3a': ['Wenn Sie Web-Analyse deaktivieren möchten, können Sie dies jederzeit über die Option "Analytics deaktivieren" auf der Website tun. Technisch wird dafür ein Eintrag in Ihrem Browser-Local-Storage gesetzt, der das Laden des Analytics-Skripts verhindert.', 'If you would like to disable web analytics, you can do so at any time using the “Disable analytics” option on the website. This stores a setting in your browser’s local storage to prevent the analytics script from loading.'],
    'privacy.section.9.p4': ['Weitere Informationen zum Datenschutz bei Umami finden Sie auf der Website des Anbieters.', 'Further information about Umami’s privacy practices is available on the provider’s website.'],
    'imprint.title': ['Angaben gemäß den gesetzlichen Vorgaben', 'Legal information'],
    'imprint.responsible': ['Verantwortlich für den Betrieb der Website', 'Website operator'],
    'imprint.partners': ['vertretungsberechtigte Gesellschafter: Martin Kreuser und Manuela Kreuser', 'Represented by partners Martin Kreuser and Manuela Kreuser'],
    'imprint.phone': ['Telefon:', 'Phone:'],
    'imprint.email': ['E-Mail:', 'Email:'],
    'imprint.vat': ['Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE319248947', 'VAT identification number pursuant to Section 27a of the German VAT Act: DE319248947'],
    'imprint.content': ['Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Martin Kreuser und Manuela Kreuser, Finkenweg 10, 76470 Ötigheim', 'Responsible for content pursuant to Section 55(2) of the German Interstate Broadcasting Treaty (RStV): Martin Kreuser and Manuela Kreuser, Finkenweg 10, 76470 Ötigheim, Germany'],
    'imprint.odr': ['Online-Streitbeilegung:', 'Online dispute resolution:'],
    'imprint.dispute': ['Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.', 'We are neither obliged nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board.'],
    'footer.copyright': ['Alle Rechte vorbehalten.', 'All rights reserved.'],
    'footer.full': ['Ferienwohnung Ötigheim. Alle Rechte vorbehalten.', 'Ötigheim Holiday Apartment. All rights reserved.'],
    'analytics.enabled': ['Web-Analyse ist aktiviert.', 'Web analytics is enabled.'],
    'analytics.disabled': ['Web-Analyse ist deaktiviert.', 'Web analytics is disabled.'],
    'analytics.enable': ['Aktivieren', 'Enable'],
    'analytics.disable': ['Deaktivieren', 'Disable'],
    'form.error.required': ['Bitte füllen Sie alle Felder aus.', 'Please complete all fields.'],
    'form.error.email': ['Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'Please enter a valid email address.'],
    'form.error.privacy': ['Bitte bestätigen Sie die Datenschutzerklärung.', 'Please confirm the privacy policy.'],
    'form.success': ['Ihre Anfrage wird jetzt gesendet. Vielen Dank!', 'Your enquiry is being sent. Thank you!'],
    'lightbox.label': ['Bildvorschau', 'Image preview'],
    'lightbox.close': ['Bild schließen', 'Close image'],
    'lightbox.previous': ['Vorheriges Bild', 'Previous image'],
    'lightbox.next': ['Nächstes Bild', 'Next image'],
    'lightbox.enlarged': ['Vergrößertes Bild', 'Enlarged image']
  };

  const nodeKeys = new WeakMap();
  const attributeKeys = new WeakMap();
  let language = /^en(?:-|$)/i.test(document.documentElement.lang) ? 'en' : 'de';

  function translate(key, lang = language) {
    const entry = entries[key];
    return entry ? entry[lang === 'en' ? 1 : 0] : key;
  }

  function findKey(value) {
    const normalized = value.trim();
    for (const [key, [de, en]] of Object.entries(entries)) {
      if (normalized === de.trim() || normalized === en.trim()) return key;
    }
    return null;
  }

  function apply(root = document) {
    document.documentElement.lang = language === 'en' ? 'en-GB' : 'de-DE';
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !node.parentElement.closest('script, style, noscript')
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      const original = nodeKeys.get(node);
      const key = original || findKey(node.nodeValue);
      if (!key) continue;
      nodeKeys.set(node, key);
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = leading + translate(key) + trailing;
    }

    const attributes = ['alt', 'title', 'aria-label', 'placeholder', 'content'];
    root.querySelectorAll('*').forEach((element) => {
      attributes.forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let keys = attributeKeys.get(element);
        if (!keys) {
          keys = {};
          attributeKeys.set(element, keys);
        }
        const key = keys[attribute] || findKey(element.getAttribute(attribute));
        if (!key) return;
        keys[attribute] = key;
        element.setAttribute(attribute, translate(key));
      });
    });
    if (root === document) {
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'de';
    apply();
  }

  window.siteI18n = { entries, apply, setLanguage, t: translate, get language() { return language; } };
  document.addEventListener('DOMContentLoaded', () => apply());
})();
