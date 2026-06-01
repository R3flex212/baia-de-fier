/* ═══════════════════════════════════════════
   GORJ EXTREM — Article data + modal
   Include AFTER components.js on any page
   that shows blog cards.
   ═══════════════════════════════════════════ */

const ARTICLES = {
  gear: {
    cat: 'Echipament',
    cat_en: 'Equipment',
    title: 'Ce echipament ai nevoie pentru via ferrata?',
    title_en: 'What equipment do you need for via ferrata?',
    img: 'https://contents.mediadecathlon.com/p2894906/k$0b443c9e25408b5d64302c4f862b2911/1920x0/3000pt1999/6000xcr3998/default.jpg?format=auto',
    content: `
      <p>Via ferrata necesită echipament specific — fără el, accesul pe traseu nu este permis și, mai important, nu ești în siguranță. Iată lista completă a ceea ce ai nevoie:</p>
      <h4>Echipamentul obligatoriu</h4>
      <ul>
        <li><strong>Ham de via ferrata sau escaladă</strong> — Modelele dedicate via ferratei au ochiuri de prindere la șolduri, nu la piept, și sunt mai confortabile pentru ore întregi pe traseu. Costă între 200–450 RON la achiziție.</li>
        <li><strong>Longe ABC cu absorbitor de șoc</strong> — Absolut obligatorie. Absoarbe până la 80% din forța unui șoc la cădere. Nu o înlocui cu o longe simplă — la o cădere de factor 1, forța fără absorbitor poate depăși 10 kN, fatală chiar și pe o cădere de 1–2 metri. Cost: 250–500 RON.</li>
        <li><strong>Cască de alpinism</strong> — Protejează de pietrele căzute accidental de alți alpiniști. Obligatorie pe Via Ferrata Cheile Olteților. Cost închiriere: 15 RON/zi.</li>
        <li><strong>Mănuși</strong> — Cablurile metalice uzate pot tăia palmele. Mănușile de ciclism sau escaladă funcționează bine.</li>
        <li><strong>Bocanci cu talpă rigidă</strong> — Adidașii sunt inadecvați. Ai nevoie de bocanci cu talpă Vibram care să-ți fixeze piciorul pe treptele metalice înguste.</li>
      </ul>
      <h4>Unde găsești echipament în zonă</h4>
      <p>Centrele de închiriere din Baia de Fier oferă seturi complete (ham + longe + cască) la 60–80 RON/zi. Dacă plănuiești să practici via ferrata regulat, merită să investești în propriul set — un echipament de calitate medie costă 700–1.200 RON complet.</p>
      <h4>Sfat important</h4>
      <p><strong>Nu folosi o longe simplă fără absorbitor de șoc</strong> — în caz de cădere, forța generată poate fi fatală chiar și pe o cădere scurtă. Mergi cu un ghid certificat la prima ieșire.</p>
    `,
    content_en: `
      <p>Via ferrata requires specific equipment — without it, access to the route is not permitted and, more importantly, you are not safe. Here is the complete list of what you need:</p>
      <h4>Mandatory equipment</h4>
      <ul>
        <li><strong>Via ferrata or climbing harness</strong> — Dedicated via ferrata models have attachment points at the hips, not the chest, and are more comfortable for hours on the route. Cost: 200–450 RON to purchase.</li>
        <li><strong>ABC lanyard with shock absorber</strong> — Absolutely mandatory. Absorbs up to 80% of the shock force in a fall. Never replace it with a simple lanyard — in a factor 1 fall, the force without an absorber can exceed 10 kN, fatal even on a 1–2 metre fall. Cost: 250–500 RON.</li>
        <li><strong>Climbing helmet</strong> — Protects against rocks accidentally dropped by other climbers above. Mandatory on Via Ferrata Cheile Olteților. Rental cost: 15 RON/day.</li>
        <li><strong>Gloves</strong> — Worn metal cables can cut your palms. Cycling or climbing gloves work well.</li>
        <li><strong>Stiff-soled boots</strong> — Trainers are inadequate. You need boots with a Vibram sole to secure your foot on the narrow metal rungs.</li>
      </ul>
      <h4>Where to find equipment in the area</h4>
      <p>Rental centres in Baia de Fier offer complete sets (harness + lanyard + helmet) for 60–80 RON/day. If you plan to practise via ferrata regularly, it is worth investing in your own set — a mid-range kit costs 700–1,200 RON complete.</p>
      <h4>Important tip</h4>
      <p><strong>Never use a simple lanyard without a shock absorber</strong> — in the event of a fall, the generated force can be fatal even on a short fall. Go with a certified guide on your first outing.</p>
    `
  },

  safety: {
    cat: 'Siguranță',
    cat_en: 'Safety',
    title: 'Ghid de siguranță pentru activități montane',
    title_en: 'Safety guide for mountain activities',
    img: 'https://www.experimenteaza.ro/img/cms/Blog%20images/trasee-montane-romania-14.jpg',
    content: `
      <p>Muntele nu iartă neglijența, dar nici nu este periculos dacă urmezi câteva reguli de bază. Iată tot ce trebuie să știi înainte să pleci pe traseu.</p>
      <h4>Înainte să pleci de acasă</h4>
      <ul>
        <li><strong>Verifică prognoza meteo</strong> — Consultă meteo.ro sau yr.no cu cel puțin 24h înainte. Furtunile se formează rapid pe Parâng, mai ales după-amiaza în iulie–august.</li>
        <li><strong>Anunță pe cineva</strong> — Spune unui prieten sau unui membru al familiei pe ce traseu pleci și ora estimată de întoarcere.</li>
        <li><strong>Salvează numărul Salvamont</strong> — <strong>0725 826 668</strong> sau sună <strong>112</strong> în caz de urgență.</li>
        <li><strong>Echipament minim</strong> — 2L apă/persoană, baton energetic de rezervă, trusă prim ajutor, lanternă frontală, fluier, pelerină de ploaie, baterie externă.</li>
      </ul>
      <h4>Pe traseu</h4>
      <ul>
        <li>Nu pleca singur pe trasee dificile sau cotate cu roșu/negru.</li>
        <li>Respectă marcajele — panglicile roșii, galbene și albastre sunt puse cu un motiv.</li>
        <li>Întoarce-te dacă vremea se strică brusc — nici un peisaj nu merită un fulger.</li>
        <li>Pe via ferrata, păstrează întotdeauna cel puțin un cârlig din longă în cablu.</li>
      </ul>
      <h4>Dacă te rătăcești</h4>
      <p><strong>Oprește-te. Nu intra în panică. Sună Salvamont la 0725 826 668.</strong> Dacă nu ai semnal, încearcă să urci ușor pentru a prinde rețea. Rămâi pe loc dacă nu ești sigur de direcție — echipele Salvamont Gorj intervin rapid.</p>
    `,
    content_en: `
      <p>The mountain does not forgive carelessness, but it is not dangerous if you follow a few basic rules. Here is everything you need to know before setting off on a trail.</p>
      <h4>Before you leave home</h4>
      <ul>
        <li><strong>Check the weather forecast</strong> — Consult meteo.ro or yr.no at least 24h in advance. Storms build quickly on Parâng, especially in the afternoon during July–August.</li>
        <li><strong>Tell someone</strong> — Let a friend or family member know which trail you are taking and your estimated return time.</li>
        <li><strong>Save the Salvamont number</strong> — <strong>0725 826 668</strong> or call <strong>112</strong> in an emergency.</li>
        <li><strong>Minimum kit</strong> — 2L water/person, spare energy bar, first aid kit, head torch, whistle, rain cape, power bank.</li>
      </ul>
      <h4>On the trail</h4>
      <ul>
        <li>Do not set out alone on difficult or red/black-rated trails.</li>
        <li>Follow the markings — the red, yellow and blue ribbons are there for a reason.</li>
        <li>Turn back if the weather deteriorates suddenly — no view is worth a lightning strike.</li>
        <li>On via ferrata, always keep at least one hook of your lanyard in the cable.</li>
      </ul>
      <h4>If you get lost</h4>
      <p><strong>Stop. Don't panic. Call Salvamont on 0725 826 668.</strong> If you have no signal, try moving slightly uphill to catch a network. Stay put if you are unsure of the direction — the Salvamont Gorj teams respond quickly.</p>
    `
  },

  trails: {
    cat: 'Trasee',
    cat_en: 'Trails',
    title: 'Top 5 trasee pentru începători în Gorj',
    title_en: 'Top 5 beginner trails in Gorj',
    img: 'https://lh4.googleusercontent.com/proxy/icbj_OOgL5id1TgN_hghYAtWOXfyF91XbpGsp7jiuIK8augYMpP3VASPiBxEh7qeA1uzDY6T6EzM1kDICVzZxSq8J-4b9YzqGs_ooemipY5tjv-e3GSs1U4s4Q',
    content: `
      <p>La prima vizită în Baia de Fier și Polovragi nu trebuie să ataci imediat via ferrata. Zona oferă trasee spectaculoase accesibile oricui.</p>
      <h4>1. Circuit Cheile Olteților ⭐ Recomandat</h4>
      <p><strong>2h · 5 km · +90m · 🟢 Ușor</strong><br>Cel mai accesibil și mai spectaculos traseu din zonă. Urmezi cursul Oltețului printre pereți de calcar înalți de 200–300m. Poteca este bine marcată și aproape plată. Ideal pentru familii cu copii.</p>
      <h4>2. Peștera Polovragi (dus-întors)</h4>
      <p><strong>3h cu vizita · 8 km · 🟢 Ușor</strong><br>Traseu prin pădure de fag până la intrarea uneia dintre cele mai lungi peșteri din România — 10.416m. Vizita ghidată durează 45 de minute și este inclusă în prețul biletului (25 RON adulți).</p>
      <h4>3. Mănăstirea Polovragi — Circuit cultural</h4>
      <p><strong>1.5h · 4 km · 🟢 Ușor</strong><br>Traseu scurt care combină natura cu patrimoniul. Mănăstirea datează din 1505, cu arhitectură brâncovenească remarcabilă.</p>
      <h4>4. Vârful Căpățâna — Belvedere</h4>
      <p><strong>4h · 10 km · +480m · 🟡 Mediu</strong><br>Primul traseu cu urcuș real. Recompensa: priveliște panoramică spre Cheile Olteților și, pe timp senin, spre Vârful Parângul Mare (2.519m).</p>
      <h4>5. Cascada Vânturătoarea</h4>
      <p><strong>2.5h · 6 km · +220m · 🟢 Ușor-Mediu</strong><br>Traseu prin pădure de conifere cu destinația o cascadă de 18m. Poteca poate fi alunecoasă după ploaie — bocancii sunt recomandați.</p>
    `,
    content_en: `
      <p>On your first visit to Baia de Fier and Polovragi you do not need to tackle via ferrata straight away. The area offers spectacular trails accessible to anyone.</p>
      <h4>1. Cheile Olteților Circuit ⭐ Recommended</h4>
      <p><strong>2h · 5 km · +90m · 🟢 Easy</strong><br>The most accessible and spectacular trail in the area. You follow the Olteț river between limestone walls 200–300m high. The path is well marked and almost flat. Ideal for families with children.</p>
      <h4>2. Polovragi Cave (there and back)</h4>
      <p><strong>3h with visit · 8 km · 🟢 Easy</strong><br>Trail through beech forest to the entrance of one of the longest caves in Romania — 10,416m. The guided tour lasts 45 minutes and is included in the ticket price (25 RON adults).</p>
      <h4>3. Polovragi Monastery — Cultural circuit</h4>
      <p><strong>1.5h · 4 km · 🟢 Easy</strong><br>A short trail combining nature with heritage. The monastery dates from 1505, with remarkable Brâncovenesc architecture.</p>
      <h4>4. Vârful Căpățâna — Viewpoint</h4>
      <p><strong>4h · 10 km · +480m · 🟡 Medium</strong><br>The first trail with a real climb. The reward: a panoramic view towards Cheile Olteților and, on a clear day, towards Vârful Parângul Mare (2,519m).</p>
      <h4>5. Vânturătoarea Waterfall</h4>
      <p><strong>2.5h · 6 km · +220m · 🟢 Easy–Medium</strong><br>Trail through conifer forest leading to an 18m waterfall. The path can be slippery after rain — boots are recommended.</p>
    `
  },

  food: {
    cat: 'Gastronomie',
    cat_en: 'Gastronomy',
    title: 'Ce să mănânci în Gorj — bucătărie tradițională',
    title_en: 'What to eat in Gorj — traditional cuisine',
    img: 'https://www.e-retete.ro/files/recipes/mamaliguta-la-cuptor.jpg',
    content: `
      <p>Bucătăria gorjeană este una dintre cele mai autentice din sudul Carpaților — simplă, consistentă și bazată pe ingrediente locale produse în gospodărie.</p>
      <h4>Preparate de bază</h4>
      <ul>
        <li><strong>Ciorba de burtă gorjeană</strong> — Preparată cu smântână grasă și mult usturoi. Cere la pensiunea unde ești cazat — dacă o fac în casă, este memorabilă.</li>
        <li><strong>Miel la proțap</strong> — Preparat la foc mic 4–6 ore cu ierburi de munte. Cel mai bun în pensiunile cu gospodărie proprie, în perioada Paștelui și vara.</li>
        <li><strong>Mămăligă cu brânză de burduf și smântână</strong> — Brânza de oaie maturată în burduf are o aromă pe care nu o găsești în supermarket.</li>
        <li><strong>Tocăniță de pui de țară</strong> — Cu legume din grădina proprie și smântână. Simplă și extraordinară.</li>
      </ul>
      <h4>Ce să cumperi ca suveniruri alimentare</h4>
      <ul>
        <li>Brânză de burduf locală</li>
        <li>Zacuscă de casă</li>
        <li>Țuică de prune sau rachiu de mere</li>
        <li>Miere de salcâm sau de munte de la apicultori locali</li>
      </ul>
      <h4>Sfat practic</h4>
      <p>Cele mai bune mese sunt servite chiar la pensiunile unde ești cazat. Întreabă gazdele cu o zi înainte — mulți gătesc la comandă preparate tradiționale care nu apar pe meniu.</p>
    `,
    content_en: `
      <p>Gorj cuisine is one of the most authentic in the southern Carpathians — simple, hearty and based on locally produced ingredients from the farmstead.</p>
      <h4>Key dishes</h4>
      <ul>
        <li><strong>Gorj tripe soup</strong> — Made with rich sour cream and plenty of garlic. Ask at the guesthouse where you are staying — if they make it in-house, it is unforgettable.</li>
        <li><strong>Spit-roasted lamb</strong> — Cooked over a low fire for 4–6 hours with mountain herbs. Best at guesthouses with their own livestock, during Easter and summer.</li>
        <li><strong>Polenta with sheep cheese and sour cream</strong> — Sheep's cheese matured in a lambskin sack has a flavour you will not find in any supermarket.</li>
        <li><strong>Free-range chicken stew</strong> — With vegetables from the kitchen garden and sour cream. Simple and extraordinary.</li>
      </ul>
      <h4>What to buy as food souvenirs</h4>
      <ul>
        <li>Local lambskin-matured sheep cheese</li>
        <li>Home-made vegetable spread (zacuscă)</li>
        <li>Plum brandy or apple spirit</li>
        <li>Acacia or mountain honey from local beekeepers</li>
      </ul>
      <h4>Practical tip</h4>
      <p>The best meals are served right at the guesthouses where you stay. Ask your hosts the day before — many cook traditional dishes to order that never appear on any menu.</p>
    `
  },

  season: {
    cat: 'Planificare',
    cat_en: 'Planning',
    title: 'Cea mai bună perioadă pentru a vizita Gorjul',
    title_en: 'Best time to visit Gorj',
    img: 'https://picsum.photos/seed/blog-weather1/600/300',
    content: `
      <p>Baia de Fier și Polovragi sunt destinații cu sezonalitate clară. Fiecare perioadă a anului oferă ceva diferit.</p>
      <h4>🌸 Primăvara (Aprilie – Mai)</h4>
      <p>Sezonul florei montane — ghiocei, brândușe și flori alpine. Oltețul are debit maxim și Cheile Olteților sunt spectaculoase. Temperaturi: 12–18°C la altitudini medii. <em>Dezavantaj: potecile pot fi noroioase.</em></p>
      <h4>☀️ Vara (Iunie – August) — Sezonul principal</h4>
      <p>Perioada optimă pentru <strong>toate</strong> activitățile: via ferrata, escaladă, body rafting, MTB și ATV. Body rafting optim în iulie când apa Oltețului se încălzește. Temperaturi: 22–30°C în vale, 10–16°C pe creastă. <em>Rezervă cazarea cu 3–4 săptămâni înainte în august.</em></p>
      <h4>🍂 Toamna (Septembrie – Octombrie)</h4>
      <p>Culorile pădurii transformă zona spectaculos. Temperaturi ideale pentru drumeții lungi: 8–16°C. Traseele sunt mai puțin aglomerate, prețurile mai mici. Via ferrata se poate practica până la final de octombrie.</p>
      <h4>❄️ Iarna (Noiembrie – Martie)</h4>
      <p>Zona nu dispune de infrastructură pentru sporturi de iarnă, dar peisajul înzăpezit al Cheilor Olteților merită o vizită pentru cei care doresc liniște absolută.</p>
      <h4>Recomandarea noastră</h4>
      <p><strong>Iulie</strong> pentru activități pe apă și maxim adrenalină. <strong>Septembrie</strong> pentru drumeții lungi, liniște și fotografii cu culorile toamnei.</p>
    `,
    content_en: `
      <p>Baia de Fier and Polovragi are destinations with a clear seasonality. Each period of the year offers something different.</p>
      <h4>🌸 Spring (April – May)</h4>
      <p>The season of mountain flora — snowdrops, crocuses and alpine flowers. The Olteț is at maximum flow and Cheile Olteților are spectacular. Temperatures: 12–18°C at mid-altitude. <em>Downside: paths can be muddy.</em></p>
      <h4>☀️ Summer (June – August) — Main season</h4>
      <p>The optimal period for <strong>all</strong> activities: via ferrata, climbing, body rafting, MTB and ATV. Body rafting is best in July when the Olteț water warms up. Temperatures: 22–30°C in the valley, 10–16°C on the ridge. <em>Book accommodation 3–4 weeks in advance for August.</em></p>
      <h4>🍂 Autumn (September – October)</h4>
      <p>The forest colours transform the area spectacularly. Ideal temperatures for long hikes: 8–16°C. Trails are less crowded and prices lower. Via ferrata can be practised until the end of October.</p>
      <h4>❄️ Winter (November – March)</h4>
      <p>The area has no infrastructure for winter sports, but the snow-covered landscape of Cheile Olteților is worth a visit for those seeking absolute peace.</p>
      <h4>Our recommendation</h4>
      <p><strong>July</strong> for water activities and maximum adrenaline. <strong>September</strong> for long hikes, peace and photographs of autumn colours.</p>
    `
  },

  family: {
    cat: 'Familie',
    cat_en: 'Family',
    title: 'Gorj cu copii — ce activități sunt potrivite?',
    title_en: 'Gorj with kids — what activities are suitable?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4CjuCdZ4XzBA4hDPydSouZMNAb34M56iOw&s',
    content: `
      <p>Gorjul este surprinzător de prietenos pentru familii. Pensiunile au curți mari, natura este accesibilă și există activități pentru fiecare vârstă.</p>
      <h4>Copii sub 6 ani</h4>
      <ul>
        <li>Vizita ghidată în Peștera Polovragi — traseul turistic de 1km, accesibil de la 3 ani</li>
        <li>Plimbare pe malul Oltețului în Cheile Olteților — potecă plată, apă accesibilă</li>
        <li>Vizita Mănăstirii Polovragi — 30 minute, curtea este spațioasă</li>
        <li>Picnic în poienile de la intrarea în chei</li>
      </ul>
      <h4>Copii 6–12 ani</h4>
      <ul>
        <li>Traseele ușoare (Circuit Cheile Olteților, traseu Peștera Polovragi)</li>
        <li>MTB pe piste pentru începători — biciclete mici disponibile la închiriere</li>
        <li>Body rafting de la 8 ani, cu echipament adaptat și ghid dedicat</li>
        <li>ATV pe trasee scurte, în tandem cu un adult</li>
      </ul>
      <h4>Copii 12–16 ani</h4>
      <ul>
        <li>Via Ferrata — de la 12 ani cu ghid certificat obligatoriu</li>
        <li>Escaladă pe rute ușoare (4a–5b), cu instructaj inclus</li>
        <li>MTB pe trasee medii, body rafting integral</li>
      </ul>
      <h4>Sfaturi practice</h4>
      <ul>
        <li>Rezervă cazare cu mic dejun inclus — economisești timp dimineața</li>
        <li>Ia haine de schimb suplimentare — copiii inevitabil se udă în Olteț</li>
        <li>Pleacă devreme pe trasee — furtunile de vară apar rapid după-amiaza</li>
      </ul>
    `,
    content_en: `
      <p>Gorj is surprisingly family-friendly. The guesthouses have large yards, nature is accessible and there are activities for every age.</p>
      <h4>Children under 6</h4>
      <ul>
        <li>Guided visit to Polovragi Cave — the 1km tourist trail, accessible from age 3</li>
        <li>Walk along the Olteț bank in Cheile Olteților — flat path, easy water access</li>
        <li>Visit to Polovragi Monastery — 30 minutes, spacious courtyard</li>
        <li>Picnic in the meadows at the gorge entrance</li>
      </ul>
      <h4>Children 6–12</h4>
      <ul>
        <li>Easy trails (Cheile Olteților circuit, Polovragi Cave trail)</li>
        <li>MTB on beginner tracks — small bikes available for hire</li>
        <li>Body rafting from age 8, with adapted equipment and a dedicated guide</li>
        <li>ATV on short routes, in tandem with an adult</li>
      </ul>
      <h4>Children 12–16</h4>
      <ul>
        <li>Via Ferrata — from age 12 with a mandatory certified guide</li>
        <li>Climbing on easy routes (4a–5b), instruction included</li>
        <li>MTB on medium trails, full body rafting</li>
      </ul>
      <h4>Practical tips</h4>
      <ul>
        <li>Book accommodation with breakfast included — saves time in the morning</li>
        <li>Bring extra changes of clothes — children inevitably get wet in the Olteț</li>
        <li>Set off early on trails — summer storms build quickly in the afternoon</li>
      </ul>
    `
  },

  photo: {
    cat: 'Fotografie',
    cat_en: 'Photography',
    title: 'Cele mai bune locuri foto din Gorj',
    title_en: 'Best photo spots in Gorj',
    img: 'https://www.radiooltenia.ro/wp-content/uploads/2024/04/polovragi.jpg',
    content: `
      <p>Baia de Fier și Polovragi oferă peisaje fotografice excepționale — de la pereții de calcar ai cheilor, până la vegetația alpină a Parângului.</p>
      <h4>Top locații</h4>
      <ul>
        <li><strong>Cheile Olteților — perspectivă înaltă</strong> — Urcă pe poteca de pe malul stâng pentru o vedere aeriană asupra văii. Cel mai bun la ora de aur (1h după răsărit sau înainte de apus).</li>
        <li><strong>Mănăstirea Polovragi iarna</strong> — Pereții alb-gălbui contrastând cu zăpada creează una dintre imaginile cele mai puternice din sud-vestul Carpaților.</li>
        <li><strong>Intrarea Peșterii Polovragi</strong> — Lumina filtrată prin copaci în mai–iunie creează efecte dramatice pe bolovanul de calcar.</li>
        <li><strong>Cheile la apus</strong> — Lumina portocalie reflectată pe pereții de calcar. Accesibilă în 20 minute de la parcarea principală.</li>
        <li><strong>Creastă Parâng în iulie</strong> — Florile de colț și priveliștea spre câmpia Olteniei. Cel mai bun în primele ore ale dimineții.</li>
      </ul>
      <h4>Sfaturi tehnice</h4>
      <ul>
        <li>Filtru CPL — reduce reflexiile pe apa Oltețului și saturează culoarea cerului</li>
        <li>Cheile sunt în umbră dimineața devreme — lumina directă apare abia la 9:00–10:00 vara</li>
        <li>Obiectiv wide (16–24mm) pentru pereții înalți ai cheilor</li>
        <li>Tripod în peșteră — expunere lungă necesară la ISO redus</li>
      </ul>
    `,
    content_en: `
      <p>Baia de Fier and Polovragi offer exceptional photographic landscapes — from the limestone walls of the gorge to the alpine vegetation of the Parâng.</p>
      <h4>Top locations</h4>
      <ul>
        <li><strong>Cheile Olteților — elevated perspective</strong> — Climb the path on the left bank for an aerial view over the valley. Best at golden hour (1h after sunrise or before sunset).</li>
        <li><strong>Polovragi Monastery in winter</strong> — The white-yellow walls contrasting with snow create one of the most powerful images in the south-western Carpathians.</li>
        <li><strong>Entrance to Polovragi Cave</strong> — Light filtered through the trees in May–June creates dramatic effects on the limestone boulder.</li>
        <li><strong>The gorge at sunset</strong> — Orange light reflected on the limestone walls. Accessible in 20 minutes from the main car park.</li>
        <li><strong>Parâng ridge in July</strong> — Edelweiss flowers and the view towards the Oltenian plain. Best in the first hours of the morning.</li>
      </ul>
      <h4>Technical tips</h4>
      <ul>
        <li>CPL filter — reduces reflections on the Olteț water and saturates the sky colour</li>
        <li>The gorge is in shadow early morning — direct light appears only from 9:00–10:00 in summer</li>
        <li>Wide-angle lens (16–24mm) for the high walls of the gorge</li>
        <li>Tripod in the cave — long exposure needed at low ISO</li>
      </ul>
    `
  },

  pack: {
    cat: 'Pregătire',
    cat_en: 'Preparation',
    title: 'Ce să pui în rucsac — checklist complet',
    title_en: 'What to pack — complete checklist',
    img: 'https://cdn.backpacker.com/wp-content/uploads/2025/04/backpacking-maven-Megan-Robertson_h.jpg',
    content: `
      <p>Un rucsac bine echipat face diferența dintre o zi perfectă și o situație neplăcută. Iată listele complete pentru fiecare tip de activitate.</p>
      <h4>Checklist drumeție de o zi</h4>
      <ul>
        <li>✅ Apă — minim 2L/persoană (3L pe vreme caldă)</li>
        <li>✅ Mâncare — sandwich, fructe, baton energetic de rezervă</li>
        <li>✅ Trusă prim ajutor — plasturi, bandaj elastic, dezinfectant, antiinflamator</li>
        <li>✅ Pelerină de ploaie ușoară sau poncho</li>
        <li>✅ Strat termic (fleece ușor) — temperatura scade rapid la altitudine</li>
        <li>✅ Lanternă frontală + baterii rezervă</li>
        <li>✅ Baterie externă pentru telefon</li>
        <li>✅ Fluier (semnal de urgență)</li>
        <li>✅ Hartă sau GPX descărcat offline (Maps.me, Organic Maps)</li>
        <li>✅ Cremă de soare SPF 50+ și ochelari de soare</li>
      </ul>
      <h4>Suplimentar pentru Via Ferrata</h4>
      <ul>
        <li>✅ Ham de via ferrata sau escaladă</li>
        <li>✅ Longe ABC cu absorbitor de șoc</li>
        <li>✅ Cască de alpinism și mănuși</li>
        <li>✅ Bocanci cu talpă rigidă (nu adidași)</li>
      </ul>
      <h4>Suplimentar pentru Body Rafting</h4>
      <ul>
        <li>✅ Costum de baie sub combinezon (asigurat de operator)</li>
        <li>✅ Papuci de apă sau adidași vechi</li>
        <li>✅ Haine uscate de schimb lăsate la mașină</li>
      </ul>
      <p><strong>Regula de aur:</strong> Dacă te gândești "probabil nu am nevoie de asta" — pune-l oricum. Rucsacul de 1kg în plus nu te obosește; lipsa unui item crucial poate strica toată ziua.</p>
    `,
    content_en: `
      <p>A well-equipped backpack makes the difference between a perfect day and an unpleasant situation. Here are the complete lists for each type of activity.</p>
      <h4>Day hike checklist</h4>
      <ul>
        <li>✅ Water — minimum 2L/person (3L in hot weather)</li>
        <li>✅ Food — sandwich, fruit, spare energy bar</li>
        <li>✅ First aid kit — plasters, elastic bandage, antiseptic, anti-inflammatory</li>
        <li>✅ Lightweight rain cape or poncho</li>
        <li>✅ Thermal layer (light fleece) — temperature drops quickly at altitude</li>
        <li>✅ Head torch + spare batteries</li>
        <li>✅ Power bank for phone</li>
        <li>✅ Whistle (emergency signal)</li>
        <li>✅ Map or GPX downloaded offline (Maps.me, Organic Maps)</li>
        <li>✅ Sunscreen SPF 50+ and sunglasses</li>
      </ul>
      <h4>Extra for Via Ferrata</h4>
      <ul>
        <li>✅ Via ferrata or climbing harness</li>
        <li>✅ ABC lanyard with shock absorber</li>
        <li>✅ Climbing helmet and gloves</li>
        <li>✅ Stiff-soled boots (not trainers)</li>
      </ul>
      <h4>Extra for Body Rafting</h4>
      <ul>
        <li>✅ Swimwear under the wetsuit (provided by operator)</li>
        <li>✅ Water shoes or old trainers</li>
        <li>✅ Dry change of clothes left in the car</li>
      </ul>
      <p><strong>Golden rule:</strong> If you think "I probably won't need that" — pack it anyway. An extra kilogram won't wear you out; missing a crucial item can ruin the whole day.</p>
    `
  }
};

/* ── MODAL ── */
(function () {

  /* 1. Define functions FIRST so event listeners can reference them */
  function closeArticle() {
    var modal = document.getElementById('art-modal');
    if (modal) modal.classList.remove('on');
    document.body.style.overflow = '';
  }

  function openArticle(id) {
    var a = ARTICLES[id];
    if (!a) { console.warn('Article not found:', id); return; }

    var modal = document.getElementById('art-modal');
    if (!modal) { console.warn('Modal not found in DOM'); return; }

    /* detect current language */
    var lang = localStorage.getItem('gorj-lang') || 'ro';
    var isEn = lang === 'en';

    document.getElementById('art-img').src = a.img;
    document.getElementById('art-cat').textContent   = (isEn && a.cat_en)     ? a.cat_en     : a.cat;
    document.getElementById('art-title').textContent = (isEn && a.title_en)   ? a.title_en   : a.title;
    document.getElementById('art-content').innerHTML = (isEn && a.content_en) ? a.content_en : a.content;

    modal.classList.add('on');
    document.body.style.overflow = 'hidden';
    document.getElementById('art-box').scrollTop = 0;
  }

  /* 2. Expose to global scope */
  window.openArticle  = openArticle;
  window.closeArticle = closeArticle;

  /* 3. Build and inject modal HTML */
  var overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'art-modal';
  overlay.innerHTML =
    '<div class="modal-box" id="art-box">' +
      '<button class="modal-close" id="art-close">&#x2715;</button>' +
      '<img class="modal-img" id="art-img" src="" alt="">' +
      '<div class="modal-body">' +
        '<div class="modal-cat"   id="art-cat"></div>' +
        '<div class="modal-title" id="art-title"></div>' +
        '<div class="modal-content" id="art-content"></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  /* 4. Event listeners — safe now because closeArticle is already defined */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeArticle();
  });
  document.getElementById('art-close').addEventListener('click', closeArticle);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeArticle();
  });

})();
