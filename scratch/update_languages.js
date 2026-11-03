import fs from 'fs';
import path from 'path';

const projectRoot = 'd:/Projects/tools/onlinecompass';

const langData = {
  es: {
    title: '¿Dónde está el Norte? Brújula en Línea (Norte Verdadero en Vivo)',
    description: 'Descubre dónde está el norte ahora mismo desde tu ubicación. Brújula digital online gratuita y precisa con norte verdadero y magnético. Sin instalar aplicaciones.',
    keywords: 'dónde está el norte, buscar el norte, brújula en línea, brujula online, hacia dónde está el norte, norte verdadero, brújula digital gratis, dirección norte',
    heroH1: '¿Dónde está el Norte? Brújula en Línea que Apunta al Norte Verdadero',
    heroBtn: 'Descubre dónde está el Norte',
    eyebrow: 'detector de orientación instantáneo',
    h2: '¿Dónde Está el Norte Desde Mi Ubicación Ahora Mismo?',
    directAnswer: '<strong>Respuesta Rápida:</strong> Para encontrar el norte desde tu ubicación ahora mismo, sostén tu teléfono plano horizontalmente en la palma de tu mano. Observa el dial de la brújula arriba: cuando la aguja apunte verticalmente a <strong class="text-ink font-semibold">0° (N)</strong>, tu móvil estará orientado hacia el <strong class="text-ink font-semibold">Norte Verdadero</strong>. Si el dial marca <strong class="text-ink font-semibold">90° (E)</strong>, estás mirando al Este y el Norte queda directamente a tu izquierda.',
    cards: [
      { eyebrow: '1. detección instantánea', title: 'GPS y Magnetómetro', desc: 'Tu navegador móvil consulta en tiempo real el magnetómetro triaxial y las coordenadas GPS de tu dispositivo para calcular tu rumbo en grados sin descargar aplicaciones.' },
      { eyebrow: '2. verdadero vs magnético', title: 'Declinación Corregida', desc: 'Las agujas magnéticas convencionales apuntan al norte magnético, desviándose hasta 20°. Nuestra brújula aplica el Modelo Magnético Mundial de la NOAA para alinearte con el norte geográfico real.' },
      { eyebrow: '3. dirección de mira', title: '¿Hacia Dónde Miro?', desc: 'El número superior en el dial indica tu orientación exacta: 0° es Norte, 90° es Este, 180° es Sur y 270° es Oeste.' }
    ],
    links: [
      { text: 'Guía: ¿Hacia qué dirección miro? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Orientación de tu casa →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Calibrar brújula móvil →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: '¿Cómo encuentro el Norte Verdadero desde mi ubicación actual ahora mismo?', a: 'Abre esta brújula en cualquier smartphone con permisos de orientación y ubicación activos. Mantén el móvil horizontal en tu mano; la aguja señalará automáticamente al Norte Verdadero (0°), compensando la declinación magnética local.' },
      { q: '¿Hacia dónde está el Norte si estoy dentro de mi casa o habitación?', a: 'Aléjate de electrodomésticos grandes, microondas, ordenadores y columnas de hormigón armado con acero. Sostén el móvil plano; si marca 0° estás mirando al norte, si marca 90° el norte está a tu izquierda.' },
      { q: '¿Por qué la brújula de mi teléfono apunta en dirección incorrecta o se desvía?', a: 'Los magnetómetros MEMS son sensibles a interferencias de fundas magnéticas (como MagSafe), revoques de acero y componentes electrónicos. Retira accesorios magnéticos y haz un movimiento en ocho (∞) durante 5 segundos para recalibrar el sensor.' },
      { q: '¿Cuál es la diferencia entre "¿Dónde está el norte?" y "¿Hacia qué dirección miro?"?', a: 'El norte es una coordenada geográfica fija (0° Verdadero). La dirección hacia la que miras es tu rumbo relativo al norte. Si tu brújula marca 180°, estás mirando hacia el Sur y el Norte está justo a tu espalda.' },
      { q: '¿Puedo orientarme con esta brújula en línea sin instalar ninguna aplicación?', a: 'Sí. Esta brújula funciona al 100% en navegadores móviles (Safari, Chrome, Edge, Firefox) mediante la API DeviceOrientation del W3C, sin descargas, sin registros y con total privacidad local.' },
      { q: '¿Cómo encuentro el norte si mi ordenador de sobremesa o portátil no tiene sensor de brújula?', a: 'Los PCs y portátiles carecen de magnetómetros integrados. En ordenadores, utiliza nuestra Calculadora de Posición Solar para determinar el norte exacto a partir del azimut del sol o la dirección de las sombras.' }
    ]
  },
  de: {
    title: 'Kompass Online — Wo ist Norden? Kostenloser Digitaler Kompass',
    description: 'Wo ist Norden? Kostenloser digitaler Online-Kompass für Ihr Smartphone. Zeigt sofort den wahren und magnetischen Norden mit automatischer WMM-Deklination. Ohne App-Installation direkt im Browser.',
    keywords: 'kompass online, online kompass, wo ist norden, kompass online kostenlos, digitaler kompass kostenlos, wahrer norden vs magnetisch, magnetische deklination, kompass handy',
    heroH1: 'Wo ist Norden? Live Online-Kompass mit Wahrem Norden',
    heroBtn: 'Wo ist Norden finden',
    eyebrow: 'sofortige richtungsbestimmung',
    h2: 'Wo Ist Norden Von Meinem Standort Aus Gerade Jetzt?',
    directAnswer: '<strong>Direkte Antwort:</strong> Um Norden von Ihrem aktuellen Standort sofort zu finden, halten Sie Ihr Smartphone waagerecht in der Handfläche. Sehen Sie auf das Zifferblatt oben: Sobald die Nadel senkrecht auf <strong class="text-ink font-semibold">0° (N)</strong> zeigt, blickt Ihr Smartphone exakt nach <strong class="text-ink font-semibold">Wahrem Norden</strong>. Zeigt das Zifferblatt <strong class="text-ink font-semibold">90° (E)</strong>, blicken Sie nach Osten und Norden liegt direkt links von Ihnen.',
    cards: [
      { eyebrow: '1. sofortige erkennung', title: 'GPS & Magnetometer', desc: 'Ihr mobiler Browser fragt das 3-Achsen-Magnetometer und die GPS-Koordinaten in Echtzeit ab, um Ihren Kurs ohne App-Download stabil zu bestimmen.' },
      { eyebrow: '2. wahrer vs magnetischer norden', title: 'Deklination Korrigiert', desc: 'Klassische Nadeln weisen zum magnetischen Norden (bis zu 20° Abweichung). Unser Kompass nutzt das NOAA World Magnetic Model für echten geografischen Norden.' },
      { eyebrow: '3. blickrichtung', title: 'In Welche Richtung Blicke Ich?', desc: 'Die Gradzahl am oberen Zifferblattrand zeigt Ihre genaue Blickrichtung: 0° ist Norden, 90° Osten, 180° Süden und 270° Westen.' }
    ],
    links: [
      { text: 'Leitfaden: In welche Richtung blicke ich? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Hausausrichtung ermitteln →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Handy-Kompass kalibrieren →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Wie finde ich den Wahren Norden von meinem aktuellen Standort aus?', a: 'Öffnen Sie diesen Online-Kompass auf Ihrem Smartphone mit aktivierten Standort- und Sensorrechten. Halten Sie das Gerät flach in der Hand; die Nadel weist automatisch auf den Wahren Norden (0°), korrigiert um die lokale magnetische Deklination.' },
      { q: 'In welcher Richtung liegt Norden, wenn ich im Haus oder Zimmer stehe?', a: 'Halten Sie Abstand zu großen Metallgeräten, Mikrowellen, Computern und Stahlbetonträgern. Halten Sie das Handy flach: Zeigt die Nadel 0°, blicken Sie nach Norden; bei 90° liegt Norden links von Ihnen.' },
      { q: 'Warum zeigt mein Smartphone-Kompass in die falsche Richtung oder weicht ab?', a: 'Sensoren reagieren auf Magnete in Hüllen (z. B. MagSafe-Halterungen) und Elektronik. Nehmen Sie magnetische Hüllen ab und führen Sie 5 Sekunden lang eine ruhige Achterbewegung (∞) durch, um das Magnetometer neu zu kalibrieren.' },
      { q: 'Was ist der Unterschied zwischen „Wo ist Norden?“ und „In welche Richtung blicke ich?“?', a: 'Norden ist ein fester geografischer Punkt (0° Wahr). Ihre Blickrichtung ist der relative Winkel zu Norden. Zeigt der Kompass 180°, blicken Sie nach Süden und Norden liegt genau hinter Ihnen.' },
      { q: 'Kann ich Norden mit diesem Online-Kompass ohne App-Installation finden?', a: 'Ja. Dieser Online-Kompass läuft zu 100 % in Ihrem mobilen Browser (Safari, Chrome, Edge, Firefox) über moderne W3C-Standards – ganz ohne App Store, ohne Registrierung und mit vollem Datenschutz.' },
      { q: 'Wie finde ich Norden am Desktop-PC oder Laptop ohne Kompass-Sensor?', a: 'Desktop-PCs und Notebooks besitzen kein Magnetometer. Nutzen Sie auf PCs unseren Sonnenstands-Rechner, um den exakten Wahren Norden anhand des Sonnenazimuts und des Schattenverlaufs zu bestimmen.' }
    ]
  },
  fr: {
    title: 'Où est le Nord ? Boussole en Ligne Gratuite (Nord Vrai en Direct)',
    description: 'Trouvez où est le nord maintenant depuis votre position. Boussole en ligne gratuite et précise indiquant le nord vrai et magnétique sans installer d\'application.',
    keywords: 'où est le nord, trouver le nord, boussole en ligne, boussole gratuite, nord vrai vs magnétique, déclinaison magnétique, boussole smartphone, direction nord',
    heroH1: 'Où est le Nord ? Boussole en Ligne Pointant vers le Nord Vrai',
    heroBtn: 'Trouver où est le Nord',
    eyebrow: 'détecteur d\'orientation instantané',
    h2: 'Où Est le Nord Depuis Ma Position Actuelle ?',
    directAnswer: '<strong>Réponse Directe :</strong> Pour trouver le nord depuis votre position actuelle, tenez votre téléphone à plat horizontalement dans votre paume. Regardez le cadran au-dessus : lorsque l\'aiguille pointe vers <strong class="text-ink font-semibold">0° (N)</strong>, votre téléphone fait face au <strong class="text-ink font-semibold">Nord Vrai</strong>. Si le cadran indique <strong class="text-ink font-semibold">90° (E)</strong>, vous faites face à l\'Est et le Nord se trouve directement sur votre gauche.',
    cards: [
      { eyebrow: '1. détection instantanée', title: 'GPS et Magnétomètre', desc: 'Votre navigateur interroge en temps réel le magnétomètre triaxial et les coordonnées GPS de votre appareil pour calculer votre cap sans installer d\'application.' },
      { eyebrow: '2. nord vrai vs magnétique', title: 'Déclinaison Corrigée', desc: 'Les boussoles physiques pointent vers le nord magnétique, déviant jusqu\'à 20°. Notre boussole applique le modèle WMM de la NOAA pour vous guider vers le nord géographique réel.' },
      { eyebrow: '3. direction du regard', title: 'Dans Quelle Direction Je Regarde ?', desc: 'Le chiffre affiché en haut du cadran indique votre orientation exacte : 0° pour le Nord, 90° pour l\'Est, 180° pour le Sud et 270° pour l\'Ouest.' }
    ],
    links: [
      { text: 'Guide : Dans quelle direction je regarde ? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Orientation de votre maison →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Étalonner la boussole du téléphone →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Comment trouver le Nord Vrai depuis ma position actuelle immédiatement ?', a: 'Ouvrez cette boussole sur votre smartphone avec l\'accès aux capteurs et à la localisation autorisé. Tenez l\'appareil à plat ; l\'aiguille s\'aligne automatiquement sur le Nord Vrai (0°) en tenant compte de la déclinaison locale.' },
      { q: 'Dans quelle direction se trouve le Nord à l\'intérieur d\'une maison ?', a: 'Éloignez-vous des gros appareils métalliques, micro-ondes, ordinateurs et armatures en béton armé. Tenez le téléphone bien à plat : à 0°, vous regardez le nord ; à 90°, le nord se trouve sur votre gauche.' },
      { q: 'Pourquoi la boussole de mon téléphone indique-t-elle une mauvaise direction ?', a: 'Les capteurs MEMS sont sensibles aux coques magnétiques (comme MagSafe), aux structures métalliques et aux circuits électroniques. Retirez les accessoires aimantés et faites un mouvement en huit (∞) pendant 5 secondes.' },
      { q: 'Quelle est la différence entre « Où est le nord ? » et « Dans quelle direction je regarde ? » ?', a: 'Le nord est un point cardinal géographique fixe (0° Vrai). La direction que vous regardez est votre cap relatif au nord. Si le cadran indique 180°, vous regardez le Sud et le Nord est juste derrière vous.' },
      { q: 'Puis-je trouver le nord avec cette boussole en ligne sans installer d\'application ?', a: 'Oui. Cette boussole fonctionne à 100 % dans votre navigateur mobile (Safari, Chrome, Edge, Firefox) grâce aux API DeviceOrientation du W3C, sans téléchargement, sans inscription et sans pistage.' },
      { q: 'Comment trouver le nord sur un ordinateur de bureau ou PC portable sans boussole ?', a: 'Les ordinateurs de bureau et PC portables ne disposent pas de magnétomètre. Sur PC, utilisez notre Calculateur de Position Solaire pour repérer le Nord Vrai grâce à l\'azimut du soleil et à l\'ombre projetée.' }
    ]
  },
  it: {
    title: 'Dov\'è il Nord? Bussola Online Gratis (Nord Vero in Tempo Reale)',
    description: 'Scopri dove si trova il nord adesso dalla tua posizione. Bussola digitale online gratuita e precisa con nord vero e magnetico. Funziona nel browser senza installare app.',
    keywords: 'dov\'è il nord, trovare il nord, bussola online, bussola gratis, direzione nord dalla mia posizione, nord vero vs magnetico, bussola digitale, bussola smartphone',
    heroH1: 'Dov\'è il Nord? Bussola Online che Punta al Nord Vero',
    heroBtn: 'Scopri dov\'è il Nord',
    eyebrow: 'orientamento istantaneo',
    h2: 'Dov\'è il Nord Dalla Mia Posizione Attuale?',
    directAnswer: '<strong>Risposta Diretta:</strong> Per trovare subito il nord dalla tua posizione attuale, tieni il telefono piatto e orizzontale sul palmo della mano. Guarda il quadrante sopra: quando l\'ago punta dritto su <strong class="text-ink font-semibold">0° (N)</strong>, il telefono è rivolto verso il <strong class="text-ink font-semibold">Nord Vero</strong>. Se il quadrante indica <strong class="text-ink font-semibold">90° (E)</strong>, sei rivolto verso Est e il Nord si trova esattamente alla tua sinistra.',
    cards: [
      { eyebrow: '1. rilevamento immediato', title: 'GPS e Magnetometro', desc: 'Il browser mobile interroga in tempo reale il magnetometro a 3 assi e il GPS del dispositivo per calcolare la direzione esatta senza scaricare alcuna app.' },
      { eyebrow: '2. nord vero vs magnetico', title: 'Declinazione Corretta', desc: 'Gli aghi magnetici tradizionali puntano al nord magnetico (con deviazioni fino a 20°). La nostra bussola applica il modello WMM della NOAA per allinearti al nord geografico reale.' },
      { eyebrow: '3. direzione dello sguardo', title: 'In Che Direzione Sto Guardando?', desc: 'Il numero in alto sul quadrante indica la tua direzione precisa: 0° è Nord, 90° è Est, 180° è Sud e 270° è Ovest.' }
    ],
    links: [
      { text: 'Guida: In che direzione guardo? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Esposizione della tua casa →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Calibrare la bussola dello smartphone →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Come posso trovare il Nord Vero dalla mia posizione attuale subito?', a: 'Apri questa bussola online su uno smartphone con permessi di orientamento e posizione attivi. Tieni il telefono piatto; l\'ago indicherà automaticamente il Nord Vero (0°), correggendo la declinazione magnetica locale.' },
      { q: 'In che direzione si trova il Nord se mi trovo dentro casa o in una stanza?', a: 'Allontanati da grandi elettrodomestici in metallo, microonde, computer e travi in cemento armato. Tieni il telefono orizzontale: a 0° guardi a nord, a 90° il nord è alla tua sinistra.' },
      { q: 'Perché la bussola del mio telefono punta nella direzione sbagliata o oscilla?', a: 'I sensori MEMS risentono delle cover magnetiche (come MagSafe), dell\'acciaio e di circuiti elettronici. Rimuovi le custodie magnetiche ed esegui un movimento a forma di otto (∞) per 5 secondi per ricalibrare.' },
      { q: 'Qual è la differenza tra "Dov\'è il nord?" e "In che direzione sto guardando?"?', a: 'Il nord è un punto cardinale geografico fisso (0° Vero). La direzione in cui guardi è la tua rotta relativa al nord. Se il quadrante segna 180°, guardi a Sud e il Nord è esattamente alle tue spalle.' },
      { q: 'Posso orientarmi con questa bussola online senza installare applicazioni?', a: 'Sì. Questa bussola funziona al 100% nel browser mobile (Safari, Chrome, Edge, Firefox) tramite le API DeviceOrientation del W3C, senza download, senza account e nel pieno rispetto della privacy.' },
      { q: 'Come trovo il nord su PC desktop o portatili privi di sensore bussola?', a: 'I computer desktop e laptop non contengono magnetometri. Su PC, utilizza il nostro Calcolatore di Posizione Solare per determinare il Nord Vero sfruttando l\'azimut del sole e l\'ombra proiettata.' }
    ]
  },
  pt: {
    title: 'Onde Fica o Norte? Bússola Online Grátis (Norte Verdadeiro ao Vivo)',
    description: 'Descubra onde fica o norte agora mesmo a partir da sua localização. Bússola digital online precisa e gratuita com norte verdadeiro e magnético sem instalar aplicativo.',
    keywords: 'onde fica o norte, achar o norte, bússola online, bussola online gratis, direção norte da minha localização, norte verdadeiro, bússola digital, bússola celular',
    heroH1: 'Onde Fica o Norte? Bússola Online que Aponta para o Norte Verdadeiro',
    heroBtn: 'Descubra onde fica o Norte',
    eyebrow: 'localizador instantâneo de direção',
    h2: 'Onde Fica o Norte a Partir da Minha Localização Agora?',
    directAnswer: '<strong>Resposta Rápida:</strong> Para descobrir onde fica o norte agora mesmo a partir da sua localização, segure o celular na horizontal na palma da mão. Observe o mostrador acima: quando a agulha apontar reto para <strong class="text-ink font-semibold">0° (N)</strong>, o aparelho estará virado para o <strong class="text-ink font-semibold">Norte Verdadeiro</strong>. Se marcar <strong class="text-ink font-semibold">90° (L)</strong>, você estará olhando para o Leste e o Norte ficará exatamente à sua esquerda.',
    cards: [
      { eyebrow: '1. detecção instantânea', title: 'GPS e Magnetômetro', desc: 'Seu navegador móvel consulta o magnetômetro de 3 eixos e o GPS do aparelho em tempo real para calcular sua direção sem precisar baixar aplicativos.' },
      { eyebrow: '2. norte verdadeiro vs magnético', title: 'Declinação Corrigida', desc: 'Agulhas magnéticas comuns apontam para o norte magnético (com desvios de até 20°). Nossa bússola aplica o Modelo Magnético Mundial da NOAA para indicar o norte geográfico real.' },
      { eyebrow: '3. direção do olhar', title: 'Para Onde Estou Olhando?', desc: 'O número no topo do mostrador indica sua direção exata: 0° é Norte, 90° é Leste, 180° é Sul e 270° é Oeste.' }
    ],
    links: [
      { text: 'Guia: Para onde estou olhando? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Descobrir posição da casa →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Calibrar bússola do celular →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Como descubro o Norte Verdadeiro da minha localização atual agora mesmo?', a: 'Abra esta bússola em qualquer smartphone com permissão de orientação e localização concedida. Segure o celular na horizontal; a agulha apontará para o Norte Verdadeiro (0°), corrigindo a declinação magnética.' },
      { q: 'Para que lado fica o Norte se eu estiver dentro de casa ou no quarto?', a: 'Afaste-se de grandes aparelhos de metal, micro-ondas, computadores e vigas de concreto armado. Mantenha o celular plano: se marcar 0°, você está virado para o norte; se marcar 90°, o norte fica à sua esquerda.' },
      { q: 'Por que a bússola do celular aponta para o lado errado ou fica oscilando?', a: 'Sensores MEMS sofrem interferência de capinhas magnéticas (como MagSafe), metais e circuitos eletrônicos. Retire acessórios com ímãs e faça um movimento suave em forma de oito (∞) durante 5 segundos.' },
      { q: 'Qual é a diferença entre "Onde fica o norte?" e "Para onde estou olhando?"?', a: 'O norte é uma coordenada geográfica fixa (0° Verdadeiro). A direção em que você olha é o seu rumo relativo ao norte. Se marcar 180°, você está virado para o Sul e o Norte fica atrás de você.' },
      { q: 'Posso achar o norte com esta bússola online sem instalar aplicativo?', a: 'Sim. Esta bússola roda 100% no navegador do seu smartphone (Safari, Chrome, Edge, Firefox) através das APIs do W3C, sem downloads, sem cadastros e com total privacidade no dispositivo.' },
      { q: 'Como achar o norte no computador ou notebook sem sensor de bússola?', a: 'Computadores de mesa e notebooks não possuem magnetômetro integrado. No computador, utilize nossa Calculadora de Posição Solar para encontrar o Norte Verdadeiro pelo azimute do sol e direção da sombra.' }
    ]
  },
  id: {
    title: 'Kompas Online — Di Mana Arah Utara? Kompas Digital Akurat Gratis',
    description: 'Di mana arah utara sekarang dari lokasi Anda? Kompas online digital akurat gratis dengan penunjuk arah utara sejati dan magnetik, deklinasi WMM otomatis, langsung di browser tanpa aplikasi.',
    keywords: 'kompas online, online kompas, arah utara dari lokasi saya, di mana arah utara, kompas digital gratis, utara sejati, kompas hp online, penunjuk arah mata angin online',
    heroH1: 'Di Mana Arah Utara? Kompas Online yang Menunjuk ke Utara Sejati',
    heroBtn: 'Cari arah Utara sekarang',
    eyebrow: 'penunjuk arah instan',
    h2: 'Di Mana Arah Utara Dari Lokasi Saya Sekarang?',
    directAnswer: '<strong>Jawaban Langsung:</strong> Untuk mengetahui arah utara dari lokasi Anda sekarang, pegang ponsel secara mendatar di telapak tangan Anda. Lihat kompas di atas: saat jarum menunjuk tegak lurus ke <strong class="text-ink font-semibold">0° (U)</strong>, ponsel Anda sedang menghadap ke <strong class="text-ink font-semibold">Utara Sejati</strong>. Jika kompas menunjukkan <strong class="text-ink font-semibold">90° (T)</strong>, Anda sedang menghadap Timur dan arah Utara berada tepat di sebelah kiri Anda.',
    cards: [
      { eyebrow: '1. deteksi instan', title: 'GPS & Magnetometer', desc: 'Browser ponsel Anda membaca sensor magnetometer 3-sumbu dan GPS perangkat secara langsung untuk menghitung arah mata angin tanpa instal aplikasi.' },
      { eyebrow: '2. utara sejati vs magnetik', title: 'Koreksi Deklinasi', desc: 'Jarum kompas biasa menunjuk ke utara magnetik (bisa selisih hingga 20°). Kompas kami menggunakan Model Magnetik Dunia NOAA agar selaras dengan peta geografis asli.' },
      { eyebrow: '3. arah hadap', title: 'Ke Mana Saya Menghadap?', desc: 'Angka di bagian atas kompas menunjukkan arah hadap Anda saat ini: 0° adalah Utara, 90° Timur, 180° Selatan, dan 270° Barat.' }
    ],
    links: [
      { text: 'Panduan: Ke mana arah hadap saya? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Cek arah hadap rumah Anda →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Kalibrasi kompas HP →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Bagaimana cara menemukan arah Utara Sejati dari lokasi saya saat ini?', a: 'Buka kompas online ini di smartphone dengan izin orientasi dan lokasi aktif. Pegang ponsel mendatar; jarum akan otomatis menunjuk ke Utara Sejati (0°) dengan koreksi deklinasi magnetik otomatis.' },
      { q: 'Ke mana arah Utara jika saya berada di dalam rumah atau ruangan?', a: 'Menjauhlah dari benda logam besar, microwave, laptop, dan tiang beton bertulang. Pegang ponsel mendatar: jika jarum menunjuk 0°, Anda menghadap utara; jika 90°, utara ada di sebelah kiri Anda.' },
      { q: 'Mengapa kompas HP saya menunjuk ke arah yang salah atau berputar sendiri?', a: 'Sensor MEMS rentan terhadap gangguan casing bermagnet (seperti MagSafe) atau logam. Lepaskan casing magnet dan gerakkan ponsel membentuk pola angka delapan (∞) selama 5 detik untuk kalibrasi ulang.' },
      { q: 'Apa perbedaan antara "Di mana arah utara?" dan "Ke mana saya menghadap?"?', a: 'Utara adalah titik kardinal tetap (0° Sejati). Arah hadap Anda adalah sudut relatif terhadap utara. Jika kompas menunjukkan 180°, Anda menghadap ke Selatan dan Utara berada tepat di belakang Anda.' },
      { q: 'Bisakah saya mencari arah utara dengan kompas online ini tanpa instal aplikasi?', a: 'Bisa. Kompas online ini bekerja 100% di browser HP Anda (Safari, Chrome, Edge, Firefox) menggunakan API W3C standar, tanpa perlu mengunduh aplikasi, tanpa daftar, dan data tetap privat.' },
      { q: 'Bagaimana cara mengetahui arah utara di komputer atau laptop tanpa sensor kompas?', a: 'Komputer desktop dan laptop tidak memiliki sensor magnetometer. Di PC, gunakan Kalkulator Posisi Matahari kami untuk menentukan arah Utara Sejati berdasarkan azimut matahari dan arah bayangan.' }
    ]
  },
  ja: {
    title: '北はどっち？無料オンラインコンパス（真北・磁北リアルタイム表示）',
    description: '現在地から今すぐ北の方角（真北・磁北）を確認。アプリのインストール不要でブラウザですぐに使える高精度デジタルオンラインコンパスです。',
    keywords: '北はどっち, 北の方角, オンラインコンパス, コンパス 無料, 真北 磁北, 方位磁石 オンライン, スマホ コンパス',
    heroH1: '北はどっち？真北を正確に指す無料オンラインコンパス',
    heroBtn: '北の方角を確認する',
    eyebrow: 'リアルタイム方位確認',
    h2: '現在地から北の方角はどっち？',
    directAnswer: '<strong>直接の答え：</strong>現在地から今すぐ北の方角を調べるには、スマホを手のひらに載せて水平に平らに保ちます。上のコンパス画面を確認してください。針が真上の<strong class="text-ink font-semibold">0°（N）</strong>を指したとき、スマホの先端が<strong class="text-ink font-semibold">「真北（本当の北）」</strong>を向いています。90°（E）と表示されている場合は東を向いており、北は真左にあります。',
    cards: [
      { eyebrow: '1. 即時測定', title: 'GPSと地磁気センサー', desc: 'スマホのブラウザが端末内の3軸磁気センサーとGPS情報をリアルタイムで読み取り、アプリをダウンロードすることなく瞬時に方角を算出します。' },
      { eyebrow: '2. 真北と磁北', title: '偏角の自動補正', desc: '一般的な磁石の針は「磁北」を指し、地域によって最大数十度ずれます。本ツールはNOAA世界磁気モデルで地図と一致する「真北」を自動表示します。' },
      { eyebrow: '3. 向いている方角', title: '自分が向いている方角は？', desc: 'ダイヤル上部の数値があなたの向いている正確な方位角です（0°＝北、90°＝東、180°＝南、270°＝西）。' }
    ],
    links: [
      { text: '解説ガイド：自分が向いている方角を調べる →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: '家の窓やベランダの方角を調べる →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'スマホのコンパスを校正する →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: '現在地から今すぐ真北を見つけるにはどうすればよいですか？', a: '方位センサーと位置情報の利用を許可したスマホで本コンパスを開き、水平に持ちます。針が自動的に真北（0°）を指し、現地の磁気偏角も自動補正されます。' },
      { q: '室内や家の中にいるとき、北はどちら側になりますか？', a: '大型家電、電子レンジ、パソコン、鉄筋コンクリートの柱から2メートルほど離れてください。水平に持って0°を示せば正面が北、90°なら左手が北になります。' },
      { q: 'スマホのコンパスが狂ったり方向がずれたりするのはなぜですか？', a: 'マグネット式ケース（MagSafeなど）や周囲の金属による磁気干渉が原因です。磁石付きカバーを外し、スマホを持って空間でゆっくりと「8の字」を数回描いてセンサーを校正してください。' },
      { q: '「北はどっち？」と「自分が向いている方角」の違いは何ですか？', a: '北は固定された地理的な基準（真北0°）です。向いている方角は北に対する角度（方位角）です。コンパスが180°を示している場合、あなたは南を向いており、北は真後ろにあります。' },
      { q: 'アプリをインストールせずにブラウザだけで北を探せますか？', a: 'はい。本ツールはW3C標準のDeviceOrientation APIを利用し、SafariやChromeなどのブラウザ内で100%ローカルに動作します。インストール不要・完全無料です。' },
      { q: 'コンパスセンサーのないパソコンやノートPCで北を見つける方法は？', a: 'デスクトップPCやノートPCには地磁気センサーが搭載されていません。PC環境では、当サイトの「太陽位置計算ツール」を使い、太陽の方位角や影の伸びる方向から真北を正確に特定できます。' }
    ]
  },
  ko: {
    title: '북쪽은 어디인가요? 무료 온라인 나침반 (실시간 진북 표시)',
    description: '현재 위치에서 지금 바로 북쪽 방향을 확인하세요. 앱 설치 없이 브라우저에서 바로 작동하는 무료 고정밀 디지털 온라인 나침반입니다.',
    keywords: '북쪽은 어디, 북쪽 방향, 온라인 나침반, 나침반 무료, 진북 자북, 디지털 나침반, 실시간 나침반, 스마트폰 나침반',
    heroH1: '북쪽은 어디인가요? 진북을 가리키는 실시간 온라인 나침반',
    heroBtn: '북쪽 방향 확인하기',
    eyebrow: '실시간 방향 측정',
    h2: '현재 내 위치에서 북쪽은 어디인가요?',
    directAnswer: '<strong>빠른 답변:</strong> 지금 서 있는 위치에서 북쪽을 찾으려면 스마트폰을 손바닥 위에 수평으로 평평하게 올려놓으세요. 화면 위의 나침반을 확인하세요. 바늘이 똑바로 <strong class="text-ink font-semibold">0°(N)</strong>를 가리킬 때 스마트폰 앞쪽이 <strong class="text-ink font-semibold">‘진북(진짜 북쪽)’</strong>을 향하고 있습니다. 90°(E)로 표시되면 동쪽을 바라보고 있는 것이며 북쪽은 바로 왼쪽입니다.',
    cards: [
      { eyebrow: '1. 즉시 감지', title: 'GPS 및 자력계', desc: '스마트폰 브라우저가 기기의 3축 자기 센서와 GPS 좌표를 실시간으로 읽어 별도의 앱 다운로드 없이 정확한 방위각을 계산합니다.' },
      { eyebrow: '2. 진북 vs 자북', title: '편각 자동 보정', desc: '일반 나침반 바늘은 자북을 가리켜 지도와 최대 20° 차이가 납니다. 본 나침반은 NOAA 세계 자기 모델을 적용해 지도와 일치하는 진북을 표시합니다.' },
      { eyebrow: '3. 바라보는 방향', title: '내가 바라보는 방향은?', desc: '나침반 상단의 숫자가 현재 내가 향하고 있는 정확한 방위각입니다(0° 북쪽, 90° 동쪽, 180° 남쪽, 270° 서쪽).' }
    ],
    links: [
      { text: '가이드: 내가 바라보는 방향 알아보기 →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: '집과 베란다의 방향 확인하기 →', href: '/blog/which-direction-does-my-house-face/' },
      { text: '스마트폰 나침반 캘리브레이션하기 →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: '현재 내 위치에서 진북을 즉시 찾으려면 어떻게 해야 하나요?', a: '방위 센서와 위치 접근이 허용된 스마트폰에서 이 나침반을 열고 수평으로 잡으세요. 바늘이 지역 편각을 자동으로 계산하여 진북(0°)을 정확히 가리킵니다.' },
      { q: '집 안이나 방 안에 있을 때 북쪽은 어느 쪽인가요?', a: '대형 가전제품, 전자레인지, 컴퓨터, 철근 콘크리트 벽에서 떨어지세요. 스마트폰을 평평하게 들었을 때 0°면 앞이 북쪽이고, 90°면 왼쪽이 북쪽입니다.' },
      { q: '스마트폰 나침반이 엉뚱한 방향을 가리키거나 흔들리는 이유는 무엇인가요?', a: '자석이 내장된 폰 케이스(MagSafe 등)나 주변 금속의 간섭 때문입니다. 자석 액세서리를 분리한 후 공중에서 천천히 숫자 8(∞)을 그리며 흔들어 센서를 재보정하세요.' },
      { q: '‘북쪽이 어디인가요?’와 ‘내가 향한 방향’의 차이는 무엇인가요?', a: '북쪽은 고정된 지리적 기준점(진북 0°)입니다. 내가 향한 방향은 북쪽을 기준으로 한 회전 각도입니다. 180°를 가리키면 남쪽을 보고 있는 것이며 북쪽은 등 뒤에 있습니다.' },
      { q: '앱을 설치하지 않고도 온라인 나침반으로 북쪽을 찾을 수 있나요?', a: '네. 이 나침반은 W3C DeviceOrientation API를 이용해 모바일 브라우저에서 100% 작동합니다. 설치나 회원가입이 필요 없으며 완벽한 개인정보 보호를 제공합니다.' },
      { q: '나침반 센서가 없는 PC나 노트북에서 북쪽을 찾는 방법은?', a: '데스크톱 PC나 노트북에는 자력계가 없습니다. PC에서는 당사의 ‘태양 위치 계산기’를 활용해 태양의 방위각과 그림자 방향으로 진북을 정확히 찾을 수 있습니다.' }
    ]
  },
  tr: {
    title: 'Kuzey Nerede? Ücretsiz Çevrim içi Pusula (Canlı Gerçek Kuzey)',
    description: 'Konumunuzdan kuzeyin nerede olduğunu hemen bulun. Gerçek ve manyetik kuzeyi gösteren ücretsiz, hassas çevrim içi dijital pusula. Uygulama indirmeden doğrudan tarayıcıda.',
    keywords: 'kuzey nerede, kuzey yönü bulma, çevrim içi pusula, pusula online, gerçek kuzey, dijital pusula ücretsiz, telefon pusulası, kuzey yönü neresi',
    heroH1: 'Kuzey Nerede? Gerçek Kuzeyi Gösteren Canlı Çevrim içi Pusula',
    heroBtn: 'Kuzeyin nerede olduğunu bul',
    eyebrow: 'anlık yön bulucu',
    h2: 'Şu Anda Bulunduğum Konumdan Kuzey Nerede?',
    directAnswer: '<strong>Doğrudan Cevap:</strong> Şu anda bulunduğunuz konumdan kuzey yönünü bulmak için telefonunuzu avucunuzun içinde yatay ve düz tutun. Yukarıdaki pusula kadranına bakın: ibre tam yukarıdaki <strong class="text-ink font-semibold">0° (K)</strong> yönünü gösterdiğinde telefonunuz <strong class="text-ink font-semibold">Gerçek Kuzeye</strong> bakmaktadır. Kadran <strong class="text-ink font-semibold">90° (D)</strong> gösteriyorsa Doğuya bakıyorsunuz demektir ve Kuzey tam solunuzdadır.',
    cards: [
      { eyebrow: '1. anında algılama', title: 'GPS ve Manyetometre', desc: 'Mobil tarayıcınız, uygulama indirmeye gerek kalmadan cihazınızın 3 eksenli manyetometresini ve GPS koordinatlarını okuyarak yönünüzü anında hesaplar.' },
      { eyebrow: '2. gerçek ve manyetik', title: 'Sapma Düzeltmeli', desc: 'Standart pusula ibreleri manyetik kuzeyi gösterir ve 20°\'ye kadar sapabilir. Pusulamız NOAA Dünya Manyetik Modeli ile sizi gerçek coğrafi kuzeyle hizalar.' },
      { eyebrow: '3. bakış yönü', title: 'Hangi Yöne Bakıyorum?', desc: 'Kadranın üst kısmındaki sayı baktığınız tam yönü gösterir: 0° Kuzey, 90° Doğu, 180° Güney ve 270° Batı.' }
    ],
    links: [
      { text: 'Rehber: Hangi yöne bakıyorum? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'Evinizin cephe yönünü öğrenin →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'Telefon pusulasını kalibre etme →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'Şu an bulunduğum yerden Gerçek Kuzeyi hemen nasıl bulurum?', a: 'Yön ve konum izni verilmiş akıllı telefonunuzda bu çevrim içi pusulayı açın. Cihazı düz tutun; ibre yerel manyetik sapmayı hesaba katarak otomatik olarak Gerçek Kuzeyi (0°) gösterecektir.' },
      { q: 'Evin veya odanın içindeyken kuzey ne tarafta kalır?', a: 'Büyük metal eşyalardan, mikrodalga fırınlardan, bilgisayarlardan ve betonarme kolonlardan uzak durun. Telefonu düz tutun: 0° ise baktığınız yön kuzeydir, 90° ise kuzey solunuzdadır.' },
      { q: 'Telefonumun pusulası neden yanlış yönü gösteriyor veya sapıyor?', a: 'Manyetometre sensörleri mıknatıslı kılıflardan (MagSafe gibi), metalden ve elektronikten etkilenir. Mıknatıslı kılıfı çıkarın ve sensörü sıfırlamak için telefonu 5 saniye boyunca sekiz (∞) şeklinde havada çevirin.' },
      { q: '“Kuzey nerede?” ile “Hangi yöne bakıyorum?” arasındaki fark nedir?', a: 'Kuzey sabit bir coğrafi yöndür (0° Gerçek). Baktığınız yön ise kuzeye göre dönüş açınızdır. Kadran 180° gösteriyorsa Güneye bakıyorsunuzdur ve Kuzey tam arkanızdadır.' },
      { q: 'Uygulama yüklemeden bu çevrim içi pusulayla kuzeyi bulabilir miyim?', a: 'Evet. Bu pusula W3C DeviceOrientation API kullanarak mobil tarayıcınızda (Safari, Chrome, Edge) %100 çalışır. İndirme yok, kayıt yok, verileriniz tamamen gizli kalır.' },
      { q: 'Pusula sensörü olmayan masaüstü bilgisayarda kuzeyi nasıl bulurum?', a: 'Masaüstü ve dizüstü bilgisayarlarda manyetometre bulunmaz. Bilgisayarda Güneş Konumu Hesaplayıcımızı kullanarak güneş açısı ve gölge yönünden Gerçek Kuzeyi kesin olarak bulabilirsiniz.' }
    ]
  },
  ar: {
    title: 'أين يقع الشمال؟ بوصلة إلكترونية مجانية (تحديد الشمال الحقيقي مباشر)',
    description: 'اعرف اتجاه الشمال الآن من موقعك الحالي بدقة. بوصلة رقمية مجانية عبر الإنترنت تحدد الشمال الحقيقي والمغناطيسي مباشرة في المتصفح دون تثبيت أي تطبيق.',
    keywords: 'أين يقع الشمال, اتجاه الشمال من موقعي, بوصلة اونلاين, بوصلة الاتجاهات, الشمال الحقيقي, بوصلة رقمية مجانية, تحديد اتجاه الشمال',
    heroH1: 'أين يقع الشمال؟ بوصلة رقمية تشير إلى الشمال الحقيقي مباشرة',
    heroBtn: 'اعرف اتجاه الشمال الآن',
    eyebrow: 'محدد الاتجاهات الفوري',
    h2: 'أين يقع اتجاه الشمال من موقعي الحالي الآن؟',
    directAnswer: '<strong>إجابة مباشرة:</strong> لمعرفة اتجاه الشمال من موقعك الحالي الآن، احمل هاتفك بشكل أفقي ومسطح في راحة يدك. انظر إلى قرص البوصلة أعلاه: عندما يشير المؤشر مباشرة إلى <strong class="text-ink font-semibold">0° (N)</strong>، فإن هاتفك يتجه نحو <strong class="text-ink font-semibold">الشمال الحقيقي</strong> تماماً. وإذا أظهر القرص <strong class="text-ink font-semibold">90° (E)</strong>، فأنت تتجه نحو الشرق ويقع الشمال مباشرة إلى يسارك.',
    cards: [
      { eyebrow: '1. كشف فوري', title: 'نظام GPS ومستشعر المغناطيسية', desc: 'يقرأ متصفح هاتفك مستشعر المغناطيسية ثلاثي المحاور وإحداثيات الموقع مباشرة لحساب اتجاهك اللحظي دون الحاجة لتحميل أي تطبيق.' },
      { eyebrow: '2. الشمال الحقيقي والمغناطيسي', title: 'تصحيح الانحراف تلقائياً', desc: 'تشير البوصلة التقليدية إلى الشمال المغناطيسي الذي قد ينحرف حتى 20 درجة. تعتمد بوصلتنا على نموذج NOAA العالمي لتوجيهك نحو الشمال الجغرافي الحقيقي.' },
      { eyebrow: '3. اتجاه نظرك', title: 'إلى أين أتجه الآن؟', desc: 'يشير الرقم الموجود أعلى القرص إلى اتجاه نظرك الدقيق: 0° للشمال، 90° للشرق، 180° للجنوب، و 270° للغرب.' }
    ],
    links: [
      { text: 'دليل: إلى أي اتجاه أنظر الآن؟ ←', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'معرفة اتجاه واجهة منزلك ←', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'معايرة بوصلة الهاتف وحل مشكلة الانحراف ←', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'كيف أحدد اتجاه الشمال الحقيقي من موقعي الحالي فوراً؟', a: 'افتح هذه البوصلة الرقمية على هاتفك وتأكد من تفعيل أذونات الحركة والموقع. احمل الهاتف مستوياً في يدك؛ سيشير المؤشر تلقائياً إلى الشمال الحقيقي (0°) مع تصحيح الانحراف المغناطيسي.' },
      { q: 'في أي اتجاه يقع الشمال إذا كنت داخل المنزل أو الغرفة؟', a: 'ابتعد عن الأجهزة الكهربائية والميكروويف وأعمدة الخرسانة المسلحة بالحديد. امسك الهاتف بشكل مسطح: إذا ظهرت الدرجة 0° فأنت تنظر للشمال، وإذا ظهرت 90° فالشمال عن يسارك.' },
      { q: 'لماذا تشير بوصلة الهاتف إلى اتجاه خاطئ أو تدور باستمرار؟', a: 'تتأثر المستشعرات بالحافظات المغناطيسية (مثل MagSafe) والقطع الفولاذية. انزع الأغطية المغناطيسية وحرك الهاتف في الهواء برسم الرقم ثمانية بالإنجليزية (∞) لمدة 5 ثوانٍ لإعادة المعايرة.' },
      { q: 'ما الفرق بين "أين يقع الشمال؟" و "إلى أي اتجاه أنظر؟"؟', a: 'الشمال هو نقطة جغرافية ثابتة (0° حقيقي). أما اتجاه نظرك فهو زاويتك الحالية بالنسبة للشمال. إذا كانت القراءة 180°، فأنت تواجه الجنوب تماماً والشمال خلف ظهرك.' },
      { q: 'هل يمكنني معرفة اتجاه الشمال بهذه البوصلة دون تثبيت تطبيق؟', a: 'نعم، تعمل هذه البوصلة 100% داخل متصفح هاتفك (Safari أو Chrome) عبر تقنيات W3C القياسية دون تنزيل تطبيقات ودون تسجيل، وبخصوصية كاملة داخل جهازك.' },
      { q: 'كيف أحدد الشمال على جهاز الكمبيوتر الذي لا يحتوي على مستشعر بوصلة؟', a: 'لا تحتوي أجهزة الكمبيوتر والمحمول على مستشعر مغناطيسي. يمكنك استخدام أداة "حاسبة موقع الشمس" على موقعنا لتحديد الشمال الحقيقي بدقة من خلال زاوية الشمس واتجاه الظل.' }
    ]
  },
  ur: {
    title: 'شمال کس طرف ہے؟ آن لائن قطب نما (حقیقی شمال لائیو)',
    description: 'اپنے موجودہ مقام سے فوری طور پر معلوم کریں کہ شمال کس طرف ہے۔ بغیر کسی ایپ کو انسٹال کیے براؤزر میں بالکل مفت اور درست آن لائن قطب نما۔',
    keywords: 'شمال کس طرف ہے, شمال کا رخ, آن لائن قطب نما, ڈیجیٹل کمپاس, قبلہ رخ, سمت معلوم کرنے کا طریقہ, شمال کی سمت',
    heroH1: 'شمال کس طرف ہے؟ حقیقی شمال بتانے والا لائیو آن لائن قطب نما',
    heroBtn: 'شمال کی سمت معلوم کریں',
    eyebrow: 'فوری سمت کا تعین',
    h2: 'میرے موجودہ مقام سے شمال کس طرف ہے؟',
    directAnswer: '<strong>براہِ راست جواب:</strong> اپنے مقام سے فوراً شمال معلوم کرنے کے لیے اپنے موبائل کو ہتھیلی پر بالکل سیدھا اور ہموار رکھیں۔ اوپر قطب نما کے ڈائل پر دیکھیں: جب سوئی بالکل اوپر <strong class="text-ink font-semibold">0° (N)</strong> کی طرف اشارہ کرے تو آپ کا فون <strong class="text-ink font-semibold">حقیقی شمال</strong> کی طرف ہے۔ اگر ڈائل پر <strong class="text-ink font-semibold">90° (E)</strong> نظر آئے تو آپ کا رخ مشرق کی طرف ہے اور شمال بالکل آپ کے بائیں جانب ہے۔',
    cards: [
      { eyebrow: '1. فوری نشاندہی', title: 'جی پی ایس اور میگنیٹومیٹر', desc: 'آپ کا موبائل براؤزر کسی بھی ایپ کو ڈاؤن لوڈ کیے بغیر فون کے اندرونی مقناطیسی سینسر اور جی پی ایس سے فوراً درست زاویہ معلوم کر لیتا ہے۔' },
      { eyebrow: '2. حقیقی بمقابلہ مقناطیسی شمال', title: 'خودکار تصحیح', desc: 'عام مقناطیسی سوئی مقناطیسی قطب کی طرف اشارہ کرتی ہے جس میں 20 درجے تک فرق ہو سکتا ہے۔ ہمارا قطب نما سرکاری NOAA ماڈل کے تحت اصلی جغرافیائی شمال دکھاتا ہے۔' },
      { eyebrow: '3. آپ کا رخ', title: 'میرا رخ کس طرف ہے؟', desc: 'ڈائل کے اوپری حصے پر موجود نمبر آپ کے رخ کی درست سمت بتاتا ہے: 0° شمال، 90° مشرق، 180° جنوب اور 270° مغرب ہے۔' }
    ],
    links: [
      { text: 'رہنما: میرا رخ کس سمت میں ہے؟ ←', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'اپنے مکان یا کھڑکی کا رخ معلوم کریں ←', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'موبائل قطب نما کی درستگی اور کیلیبریشن ←', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'میں اپنے موجودہ مقام سے فوراً حقیقی شمال کیسے معلوم کر سکتا ہوں؟', a: 'اپنے اسمارٹ فون پر اس آن لائن قطب نما کو کھولیں اور لوکیشن کی اجازت دیں۔ موبائل کو ہاتھ میں بالکل سیدھا رکھیں؛ سوئی خود بخود حقیقی شمال (0°) کی نشاندہی کرے گی۔' },
      { q: 'اگر میں گھر یا کمرے کے اندر ہوں تو شمال کس طرف ہوگا؟', a: 'بڑی دھاتی اشیاء، مائیکرو ویو اور سیمنٹ کے ستونوں سے تھوڑا دور ہو جائیں۔ موبائل کو ہموار رکھیں: اگر 0° ہو تو سامنے شمال ہے، اور اگر 90° ہو تو بائیں جانب شمال ہے۔' },
      { q: 'میرے فون کا قطب نما غلط سمت کیوں دکھاتا ہے یا سوئی گھومتی کیوں رہتی ہے؟', a: 'فون کا سینسر مقناطیسی کور (جیسے MagSafe) اور برقی اشیاء سے متاثر ہو جاتا ہے۔ مقناطیسی کور ہٹائیں اور فون کو ہوا میں انگریزی کے 8 (∞) کی شکل میں 5 سیکنڈ تک گھمائیں۔' },
      { q: '‘شمال کس طرف ہے’ اور ‘میرا رخ کس طرف ہے’ میں کیا فرق ہے؟', a: 'شمال ایک مستقل جغرافیائی سمت (0° حقیقی) ہے۔ آپ کا رخ شمال کے مقابلے میں آپ کا زاویہ ہے۔ اگر ریڈنگ 180° ہے تو آپ جنوب کی طرف دیکھ رہے ہیں اور شمال آپ کے پیچھے ہے۔' },
      { q: 'کیا میں بغیر کوئی ایپ انسٹال کیے اس قطب نما سے سمت معلوم کر سکتا ہوں؟', a: 'جی ہاں! یہ آن لائن قطب نما براؤزر میں بالکل مفت اور بغیر کسی ایپ یا اکاؤنٹ کے 100% پرائیویٹ طریقے سے چلتا ہے۔' },
      { q: 'اگر لیپ ٹاپ یا کمپیوٹر میں سینسر نہ ہو تو شمال کیسے تلاش کریں؟', a: 'لیپ ٹاپ اور کمپیوٹر میں میگنیٹومیٹر سینسر نہیں ہوتا۔ کمپیوٹر پر آپ ہماری ‘سورج کے مقام کا کیلکولیٹر’ استعمال کر کے سورج اور سائے کے زاویے سے اصلی شمال معلوم کر سکتے ہیں۔' }
    ]
  },
  bn: {
    title: 'উত্তর দিক কোন দিকে? অনলাইন কম্পাস (সরাসরি সঠিক উত্তর দিক)',
    description: 'আপনার বর্তমান অবস্থান থেকে উত্তর দিক কোথায় তা এখনই জানুন। কোনো অ্যাপ ইনস্টল ছাড়াই ব্রাউজারে বিনামূল্যে সঠিক ও নির্ভুল ডিজিটাল অনলাইন কম্পাস।',
    keywords: 'উত্তর দিক কোন দিকে, উত্তর দিক নির্ণয়, অনলাইন কম্পাস, দিক নির্ণয় কম্পাস, ডিজিটাল কম্পাস ফ্রি, কম্পাস অনলাইন, সঠিক উত্তর দিক',
    heroH1: 'উত্তর দিক কোন দিকে? লাইভ অনলাইন কম্পাস যা সঠিক উত্তর দেখায়',
    heroBtn: 'উত্তর দিক জেনে নিন',
    eyebrow: 'তাৎক্ষণিক দিক নির্ণয়',
    h2: 'আমার বর্তমান অবস্থান থেকে উত্তর দিক কোন দিকে?',
    directAnswer: '<strong>সরাসরি উত্তর:</strong> আপনার বর্তমান অবস্থান থেকে এখনই উত্তর দিক জানতে ফোনটি হাতের তালুতে সম্পূর্ণ সোজা এবং অনুভূমিকভাবে ধরুন। ওপরের কম্পাস ডায়ালটি লক্ষ্য করুন: যখন কাঁটাটি সোজা ওপরের <strong class="text-ink font-semibold">0° (N)</strong> নির্দেশ করবে, তখন আপনার ফোনটি <strong class="text-ink font-semibold">সঠিক ভূ-তাত্ত্বিক উত্তরের (True North)</strong> দিকে মুখ করে আছে। ডায়ালে <strong class="text-ink font-semibold">90° (E)</strong> দেখালে আপনি পূর্ব দিকে মুখ করে আছেন এবং উত্তর দিক ঠিক আপনার বাম পাশে।',
    cards: [
      { eyebrow: '১. তাৎক্ষণিক সেন্সর শনাক্তকরণ', title: 'জিপিএস এবং ম্যাগনেটোমিটার', desc: 'আপনার ফোনের অভ্যন্তরীণ ৩-অক্ষীয় ম্যাগনেটোমিটার ও জিপিএস কোনো অ্যাপ ডাউনলোড ছাড়াই রিয়েল-টাইমে নিখুঁত দিক গণনা করে।' },
      { eyebrow: '২. আসল বনাম চৌম্বক উত্তর', title: 'সঠিক কোণ সংশোধন', desc: 'সাধারণ কম্পাসের কাঁটা চৌম্বক উত্তরের দিকে নির্দেশ করে যা প্রায় ২০° পর্যন্ত ভুল হতে পারে। আমাদের কম্পাস সঠিক ভৌগোলیک উত্তর দেখায়।' },
      { eyebrow: '৩. আপনার মুখ কোন দিকে', title: 'আমি কোন দিকে মুখ করে আছি?', desc: 'ডায়ালের ওপরের সংখ্যাটি আপনার বর্তমান কোণ নির্দেশ করে: 0° উত্তর, 90° পূর্ব, 180° দক্ষিণ এবং 270° পশ্চিম।' }
    ],
    links: [
      { text: 'নির্দেশিকা: আমি কোন দিকে মুখ করে আছি? →', href: '/blog/what-way-am-i-facing-online-compass/' },
      { text: 'আপনার বাড়ির অভিমুখ বা দিক নির্ণয় করুন →', href: '/blog/which-direction-does-my-house-face/' },
      { text: 'ফোনের কম্পাস ক্যালিব্রেশন ও ত্রুটি দূর করার উপায় →', href: '/blog/phone-compass-calibration-fix/' }
    ],
    faqs: [
      { q: 'আমার অবস্থান থেকে এখনই সঠিক উত্তর দিক কীভাবে খুঁজে পাব?', a: 'লোকেশন ও সেন্সর পারমিশন অন করে আপনার স্মার্টফোনে এই অনলাইন কম্পাসটি খুলুন এবং ফোনটি সমান্তরালভাবে রাখুন। কাঁটাটি স্বয়ংক্রিয়ভাবে সঠিক উত্তর দিক (0°) দেখাবে।' },
      { q: 'ঘরের বা রুমের ভেতরে থাকলে উত্তর দিক কীভাবে বুঝব?', a: 'ভারী ধাতব বস্তু, মাইক্রোওয়েভ এবং রডের পিলার থেকে কিছুটা দূরে দাঁড়ান। ফোনটি সোজা রাখুন: 0° হলে সামনে উত্তর, এবং 90° হলে আপনার বাম পাশে উত্তর।' },
      { q: 'ফোনের কম্পাস ভুল দিক দেখায় বা কাঁটা অনবরত ঘোরে কেন?', a: 'ম্যাগনেটিক মোবাইল কভার (যেমন MagSafe) বা লোহার কাঠামোর কারণে সেন্সর বিভ্রান্ত হয়। ম্যাগনেটিক কভার খুলে ফোনটি বাতাসে ইংরেজি ৮ (∞) আকারে ৫ সেকেন্ড ঘুরিয়ে ক্যালিব্রেট করুন।' },
      { q: '‘উত্তর কোন দিকে’ আর ‘আমার মুখ কোন দিকে’ এর মধ্যে পার্থক্য কী?', a: 'উত্তর দিক একটি নির্দিষ্ট ভৌগোলিক বিন্দু (0° True North)। আর আপনার অবস্থান হলো উত্তরের সাপেক্ষে আপনার মুখ কোন দিকে। কম্পাসে 180° দেখালে আপনি দক্ষিণে মুখ করে আছেন এবং উত্তর ঠিক আপনার পেছনে।' },
      { q: 'কোনো অ্যাপ ইনস্টল না করেই কি এই অনলাইন কম্পাস দিয়ে দিক জানা যায়?', a: 'হ্যাঁ। এই অনলাইন কম্পাসটি সাফারি বা ক্রোম ব্রাউজারে সম্পূর্ণ বিনামূল্যে এবং কোনো অ্যাপ ইনস্টল বা রেজিস্ট্রেশন ছাড়াই ১০০% সুরক্ষিতভাবে চলে।' },
      { q: 'ল্যাপটপ বা কম্পিউটারে কম্পাস সেন্সর না থাকলে উত্তর দিক কীভাবে বের করব?', a: 'কম্পিউটার বা ল্যাপটপে ম্যাগনেটোমিটার থাকে না। পিসিতে আমাদের ‘সূর্যের অবস্থান ক্যালকুলেটর’ ব্যবহার করে সূর্যের কোণ এবং ছায়ার দিক দেখে নির্ভুল উত্তর দিক বের করতে পারবেন।' }
    ]
  }
};

for (const [lang, data] of Object.entries(langData)) {
  const filePath = path.join(projectRoot, `src/pages/${lang}/index.astro`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update Layout tags
  const layoutRegex = /<Layout[\s\S]*?path="\/[a-z]{2}\/"[\s\S]*?>/;
  const newLayout = `<Layout
	path="/${lang}/"
	title="${data.title}"
	description="${data.description}"
	keywords="${data.keywords}"
>`;
  content = content.replace(layoutRegex, newLayout);

  // 2. Update Hero H1 and Button
  // Replace Hero H1
  content = content.replace(
    /<h1 class="mx-auto mt-6 max-w-4xl text-\[34px\][^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="mx-auto mt-6 max-w-4xl text-[34px] leading-[40px] font-bold text-ink sm:text-display-xl md:text-[54px] md:leading-[60px]">
					${data.heroH1}
				</h1>`
  );

  // Replace primary button in hero to link to #find-north
  content = content.replace(
    /<div class="mt-8 flex flex-wrap items-center justify-center gap-3">\s*<a href="[^"]*" class="btn-primary">[^<]*<\/a>/,
    `<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
					<a href="#find-north" class="btn-primary">${data.heroBtn}</a>`
  );

  // 3. Prepend the 6 FAQs if not already added
  const firstFaqQ = data.faqs[0].q;
  // First, remove any previous insertion of the 6 FAQs if they had unescaped quotes
  for (const faq of data.faqs) {
    const regex = new RegExp(`\\t\\{\\s*\\n\\s*"q":\\s*".*?",?\\s*\\n\\s*"a":\\s*".*?",?\\s*\\n\\s*\\},?\\n?`, 'g');
  }

  const faqString = data.faqs.map(f => `\t{\n\t\t"q": ${JSON.stringify(f.q)},\n\t\t"a": ${JSON.stringify(f.a)}\n\t},`).join('\n');

  // 4. Add the #find-north section if not already present
  if (!content.includes('id="find-north"')) {
    const sectionHtml = `
	<!-- ─── Where Is North Guide Section ───────────────────── -->
	<section id="find-north" class="border-b border-hairline bg-canvas-soft scroll-mt-16">
		<div class="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20">
			<div class="mx-auto max-w-3xl">
				<p class="eyebrow">${data.eyebrow}</p>
				<h2 class="mt-3 text-display-lg text-ink">
					${data.h2}
				</h2>
				<div class="mt-6 rounded-xl border border-hairline bg-canvas p-6 text-body leading-relaxed shadow-xs">
					<p class="text-body-lg">
						${data.directAnswer}
					</p>
				</div>

				<div class="mt-8 grid gap-5 sm:grid-cols-3">
					<div class="card p-5">
						<p class="eyebrow mb-2">${data.cards[0].eyebrow}</p>
						<h3 class="text-base font-semibold text-ink mb-2">${data.cards[0].title}</h3>
						<p class="text-sm text-body leading-6">
							${data.cards[0].desc}
						</p>
					</div>
					<div class="card p-5">
						<p class="eyebrow mb-2">${data.cards[1].eyebrow}</p>
						<h3 class="text-base font-semibold text-ink mb-2">${data.cards[1].title}</h3>
						<p class="text-sm text-body leading-6">
							${data.cards[1].desc}
						</p>
					</div>
					<div class="card p-5">
						<p class="eyebrow mb-2">${data.cards[2].eyebrow}</p>
						<h3 class="text-base font-semibold text-ink mb-2">${data.cards[2].title}</h3>
						<p class="text-sm text-body leading-6">
							${data.cards[2].desc}
						</p>
					</div>
				</div>

				<div class="mt-8 flex flex-wrap items-center gap-3 text-sm">
					<a href="${data.links[0].href}" class="text-link font-medium hover:underline">${data.links[0].text}</a>
					<span class="text-mute" aria-hidden="true">·</span>
					<a href="${data.links[1].href}" class="text-link font-medium hover:underline">${data.links[1].text}</a>
					<span class="text-mute" aria-hidden="true">·</span>
					<a href="${data.links[2].href}" class="text-link font-medium hover:underline">${data.links[2].text}</a>
				</div>
			</div>
		</div>
	</section>
`;
    // Insert right after the Feature Highlights Strip
    // Find the end of feature highlights strip
    const highlightRegex = /(<!-- ─── Feature Highlights Strip ───[\s\S]*?<\/section>)/;
    if (highlightRegex.test(content)) {
      content = content.replace(highlightRegex, `$1\n${sectionHtml}`);
    } else {
      console.log(`Could not find Feature Highlights Strip in ${lang}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated ${lang}/index.astro`);
}
