import fs from 'fs';
import path from 'path';

const projectRoot = 'd:/Projects/tools/onlinecompass';

const langFaqs = {
  es: [
    { q: '¿Cómo encuentro el Norte Verdadero desde mi ubicación actual ahora mismo?', a: 'Abre esta brújula en cualquier smartphone con permisos de orientación y ubicación activos. Mantén el móvil horizontal en tu mano; la aguja señalará automáticamente al Norte Verdadero (0°), compensando la declinación magnética local.' },
    { q: '¿Hacia dónde está el Norte si estoy dentro de mi casa o habitación?', a: 'Aléjate de electrodomésticos grandes, microondas, ordenadores y columnas de hormigón armado con acero. Sostén el móvil plano; si marca 0° estás mirando al norte, si marca 90° el norte está a tu izquierda.' },
    { q: '¿Por qué la brújula de mi teléfono apunta en dirección incorrecta o se desvía?', a: 'Los magnetómetros MEMS son sensibles a interferencias de fundas magnéticas (como MagSafe), revoques de acero y componentes electrónicos. Retira accesorios magnéticos y haz un movimiento en ocho (∞) durante 5 segundos para recalibrar el sensor.' },
    { q: '¿Cuál es la diferencia entre "¿Dónde está el norte?" y "¿Hacia qué dirección miro?"?', a: 'El norte es una coordenada geográfica fija (0° Verdadero). La dirección hacia la que miras es tu rumbo relativo al norte. Si tu brújula marca 180°, estás mirando hacia el Sur y el Norte está justo a tu espalda.' },
    { q: '¿Puedo orientarme con esta brújula en línea sin instalar ninguna aplicación?', a: 'Sí. Esta brújula funciona al 100% en navegadores móviles (Safari, Chrome, Edge, Firefox) mediante la API DeviceOrientation del W3C, sin descargas, sin registros y con total privacidad local.' },
    { q: '¿Cómo encuentro el norte si mi ordenador de sobremesa o portátil no tiene sensor de brújula?', a: 'Los PCs y portátiles carecen de magnetómetros integrados. En ordenadores, utiliza nuestra Calculadora de Posición Solar para determinar el norte exacto a partir del azimut del sol o la dirección de las sombras.' }
  ],
  de: [
    { q: 'Wie finde ich den Wahren Norden von meinem aktuellen Standort aus?', a: 'Öffnen Sie diesen Online-Kompass auf Ihrem Smartphone mit aktivierten Standort- und Sensorrechten. Halten Sie das Gerät flach in der Hand; die Nadel weist automatisch auf den Wahren Norden (0°), korrigiert um die lokale magnetische Deklination.' },
    { q: 'In welcher Richtung liegt Norden, wenn ich im Haus oder Zimmer stehe?', a: 'Halten Sie Abstand zu großen Metallgeräten, Mikrowellen, Computern und Stahlbetonträgern. Halten Sie das Handy flach: Zeigt die Nadel 0°, blicken Sie nach Norden; bei 90° liegt Norden links von Ihnen.' },
    { q: 'Warum zeigt mein Smartphone-Kompass in die falsche Richtung oder weicht ab?', a: 'Sensoren reagieren auf Magnete in Hüllen (z. B. MagSafe-Halterungen) und Elektronik. Nehmen Sie magnetische Hüllen ab und führen Sie 5 Sekunden lang eine ruhige Achterbewegung (∞) durch, um das Magnetometer neu zu kalibrieren.' },
    { q: 'Was ist der Unterschied zwischen „Wo ist Norden?“ und „In welche Richtung blicke ich?“?', a: 'Norden ist ein fester geografischer Punkt (0° Wahr). Ihre Blickrichtung ist der relative Winkel zu Norden. Zeigt der Kompass 180°, blicken Sie nach Süden und Norden liegt genau hinter Ihnen.' },
    { q: 'Kann ich Norden mit diesem Online-Kompass ohne App-Installation finden?', a: 'Ja. Dieser Online-Kompass läuft zu 100 % in Ihrem mobilen Browser (Safari, Chrome, Edge, Firefox) über moderne W3C-Standards – ganz ohne App Store, ohne Registrierung und mit vollem Datenschutz.' },
    { q: 'Wie finde ich Norden am Desktop-PC oder Laptop ohne Kompass-Sensor?', a: 'Desktop-PCs und Notebooks besitzen kein Magnetometer. Nutzen Sie auf PCs unseren Sonnenstands-Rechner, um den exakten Wahren Norden anhand des Sonnenazimuts und des Schattenverlaufs zu bestimmen.' }
  ],
  fr: [
    { q: 'Comment trouver le Nord Vrai depuis ma position actuelle immédiatement ?', a: 'Ouvrez cette boussole sur votre smartphone avec l\'accès aux capteurs et à la localisation autorisé. Tenez l\'appareil à plat ; l\'aiguille s\'aligne automatiquement sur le Nord Vrai (0°) en tenant compte de la déclinaison locale.' },
    { q: 'Dans quelle direction se trouve le Nord à l\'intérieur d\'une maison ?', a: 'Éloignez-vous des gros appareils métalliques, micro-ondes, ordinateurs et armatures en béton armé. Tenez le téléphone bien à plat : à 0°, vous regardez le nord ; à 90°, le nord se trouve sur votre gauche.' },
    { q: 'Pourquoi la boussole de mon téléphone indique-t-elle une mauvaise direction ?', a: 'Les capteurs MEMS sont sensibles aux coques magnétiques (comme MagSafe), aux structures métalliques et aux circuits électroniques. Retirez les accessoires aimantés et faites un mouvement en huit (∞) pendant 5 secondes.' },
    { q: 'Quelle est la différence entre « Où est le nord ? » et « Dans quelle direction je regarde ? » ?', a: 'Le nord est un point cardinal géographique fixe (0° Vrai). La direction que vous regardez est votre cap relatif au nord. Si le cadran indique 180°, vous regardez le Sud et le Nord est juste derrière vous.' },
    { q: 'Puis-je trouver le nord avec cette boussole en ligne sans installer d\'application ?', a: 'Oui. Cette boussole fonctionne à 100 % dans votre navigateur mobile (Safari, Chrome, Edge, Firefox) grâce aux API DeviceOrientation du W3C, sans téléchargement, sans inscription et sans pistage.' },
    { q: 'Comment trouver le nord sur un ordinateur de bureau ou PC portable sans boussole ?', a: 'Les ordinateurs de bureau et PC portables ne disposent pas de magnétomètre. Sur PC, utilisez notre Calculateur de Position Solaire pour repérer le Nord Vrai grâce à l\'azimut du soleil et à l\'ombre projetée.' }
  ],
  it: [
    { q: 'Come posso trovare il Nord Vero dalla mia posizione attuale subito?', a: 'Apri questa bussola online su uno smartphone con permessi di orientamento e posizione attivi. Tieni il telefono piatto; l\'ago indicherà automaticamente il Nord Vero (0°), correggendo la declinazione magnetica locale.' },
    { q: 'In che direzione si trova il Nord se mi trovo dentro casa o in una stanza?', a: 'Allontanati da grandi elettrodomestici in metallo, microonde, computer e travi in cemento armato. Tieni il telefono orizzontale: a 0° guardi a nord, a 90° il nord è alla tua sinistra.' },
    { q: 'Perché la bussola del mio telefono punta nella direzione sbagliata o oscilla?', a: 'I sensori MEMS risentono delle cover magnetiche (come MagSafe), dell\'acciaio e di circuiti elettronici. Rimuovi le custodie magnetiche ed esegui un movimento a forma di otto (∞) per 5 secondi per ricalibrare.' },
    { q: 'Qual è la differenza tra "Dov\'è il nord?" e "In che direzione sto guardando?"?', a: 'Il nord è un punto cardinale geografico fisso (0° Vero). La direzione in cui guardi è la tua rotta relativa al nord. Se il quadrante segna 180°, guardi a Sud e il Nord è esattamente alle tue spalle.' },
    { q: 'Posso orientarmi con questa bussola online senza installare applicazioni?', a: 'Sì. Questa bussola funziona al 100% nel browser mobile (Safari, Chrome, Edge, Firefox) tramite le API DeviceOrientation del W3C, senza download, senza account e nel pieno rispetto della privacy.' },
    { q: 'Come trovo il nord su PC desktop o portatili privi di sensore bussola?', a: 'I computer desktop e laptop non contengono magnetometri. Su PC, utilizza il nostro Calcolatore di Posizione Solare per determinare il Nord Vero sfruttando l\'azimut del sole e l\'ombra proiettata.' }
  ],
  pt: [
    { q: 'Como descubro o Norte Verdadeiro da minha localização atual agora mesmo?', a: 'Abra esta bússola em qualquer smartphone com permissão de orientação e localização concedida. Segure o celular na horizontal; a agulha apontará para o Norte Verdadeiro (0°), corrigindo a declinação magnética.' },
    { q: 'Para que lado fica o Norte se eu estiver dentro de casa ou no quarto?', a: 'Afaste-se de grandes aparelhos de metal, micro-ondas, computadores e vigas de concreto armado. Mantenha o celular plano: se marcar 0°, você está virado para o norte; se marcar 90°, o norte fica à sua esquerda.' },
    { q: 'Por que a bússola do celular aponta para o lado errado ou fica oscilando?', a: 'Sensores MEMS sofrem interferência de capinhas magnéticas (como MagSafe), metais e circuitos eletrônicos. Retire acessórios com ímãs e faça um movimento suave em forma de oito (∞) durante 5 segundos.' },
    { q: 'Qual é a diferença entre "Onde fica o norte?" e "Para onde estou olhando?"?', a: 'O norte é uma coordenada geográfica fixa (0° Verdadeiro). A direção em que você olha é o seu rumo relativo ao norte. Se marcar 180°, você está virado para o Sul e o Norte fica atrás de você.' },
    { q: 'Posso achar o norte com esta bússola online sem instalar aplicativo?', a: 'Sim. Esta bússola roda 100% no navegador do seu smartphone (Safari, Chrome, Edge, Firefox) através das APIs do W3C, sem downloads, sem cadastros e com total privacidade no dispositivo.' },
    { q: 'Como achar o norte no computador ou notebook sem sensor de bússola?', a: 'Computadores de mesa e notebooks não possuem magnetômetro integrado. No computador, utilize nossa Calculadora de Posição Solar para encontrar o Norte Verdadeiro pelo azimute do sol e direção da sombra.' }
  ],
  id: [
    { q: 'Bagaimana cara menemukan arah Utara Sejati dari lokasi saya saat ini?', a: 'Buka kompas online ini di smartphone dengan izin orientasi dan lokasi aktif. Pegang ponsel mendatar; jarum akan otomatis menunjuk ke Utara Sejati (0°) dengan koreksi deklinasi magnetik otomatis.' },
    { q: 'Ke mana arah Utara jika saya berada di dalam rumah atau ruangan?', a: 'Menjauhlah dari benda logam besar, microwave, laptop, dan tiang beton bertulang. Pegang ponsel mendatar: jika jarum menunjuk 0°, Anda menghadap utara; jika 90°, utara ada di sebelah kiri Anda.' },
    { q: 'Mengapa kompas HP saya menunjuk ke arah yang salah atau berputar sendiri?', a: 'Sensor MEMS rentan terhadap gangguan casing bermagnet (seperti MagSafe) atau logam. Lepaskan casing magnet dan gerakkan ponsel membentuk pola angka delapan (∞) selama 5 detik untuk kalibrasi ulang.' },
    { q: 'Apa perbedaan antara "Di mana arah utara?" dan "Ke mana saya menghadap?"?', a: 'Utara adalah titik kardinal tetap (0° Sejati). Arah hadap Anda adalah sudut relatif terhadap utara. Jika kompas menunjukkan 180°, Anda menghadap ke Selatan dan Utara berada tepat di belakang Anda.' },
    { q: 'Bisakah saya mencari arah utara dengan kompas online ini tanpa instal aplikasi?', a: 'Bisa. Kompas online ini bekerja 100% di browser HP Anda (Safari, Chrome, Edge, Firefox) menggunakan API W3C standar, tanpa perlu mengunduh aplikasi, tanpa daftar, dan data tetap privat.' },
    { q: 'Bagaimana cara mengetahui arah utara di komputer atau laptop tanpa sensor kompas?', a: 'Komputer desktop dan laptop tidak memiliki sensor magnetometer. Di PC, gunakan Kalkulator Posisi Matahari kami untuk menentukan arah Utara Sejati berdasarkan azimut matahari dan arah bayangan.' }
  ],
  ja: [
    { q: '現在地から今すぐ真北を見つけるにはどうすればよいですか？', a: '方位センサーと位置情報の利用を許可したスマホで本コンパスを開き、水平に持ちます。針が自動的に真北（0°）を指し、現地の磁気偏角も自動補正されます。' },
    { q: '室内や家の中にいるとき、北はどちら側になりますか？', a: '大型家電、電子レンジ、パソコン、鉄筋コンクリートの柱から2メートルほど離れてください。水平に持って0°を示せば正面が北、90°なら左手が北になります。' },
    { q: 'スマホのコンパスが狂ったり方向がずれたりするのはなぜですか？', a: 'マグネット式ケース（MagSafeなど）や周囲の金属による磁気干渉が原因です。磁石付きカバーを外し、スマホを持って空間でゆっくりと「8の字」を数回描いてセンサーを校正してください。' },
    { q: '「北はどっち？」と「自分が向いている方角」の違いは何ですか？', a: '北は固定された地理的な基準（真北0°）です。向いている方角は北に対する角度（方位角）です。コンパスが180°を示している場合、あなたは南を向いており、北は真後ろにあります。' },
    { q: 'アプリをインストールせずにブラウザだけで北を探せますか？', a: 'はい。本ツールはW3C標準のDeviceOrientation APIを利用し、SafariやChromeなどのブラウザ内で100%ローカルに動作します。インストール不要・完全無料です。' },
    { q: 'コンパスセンサーのないパソコンやノートPCで北を見つける方法は？', a: 'デスクトップPCやノートPCには地磁気センサーが搭載されていません。PC環境では、当サイトの「太陽位置計算ツール」を使い、太陽の方位角や影の伸びる方向から真北を正確に特定できます。' }
  ],
  ko: [
    { q: '현재 내 위치에서 진북을 즉시 찾으려면 어떻게 해야 하나요?', a: '방위 센서와 위치 접근이 허용된 스마트폰에서 이 나침반을 열고 수평으로 잡으세요. 바늘이 지역 편각을 자동으로 계산하여 진북(0°)을 정확히 가리킵니다.' },
    { q: '집 안이나 방 안에 있을 때 북쪽은 어느 쪽인가요?', a: '대형 가전제품, 전자레인지, 컴퓨터, 철근 콘크리트 벽에서 떨어지세요. 스마트폰을 평평하게 들었을 때 0°면 앞이 북쪽이고, 90°면 왼쪽이 북쪽입니다.' },
    { q: '스마트폰 나침반이 엉뚱한 방향을 가리키거나 흔들리는 이유는 무엇인가요?', a: '자석이 내장된 폰 케이스(MagSafe 등)나 주변 금속의 간섭 때문입니다. 자석 액세서리를 분리한 후 공중에서 천천히 숫자 8(∞)을 그리며 흔들어 센서를 재보정하세요.' },
    { q: '‘북쪽이 어디인가요?’와 ‘내가 향한 방향’의 차이는 무엇인가요?', a: '북쪽은 고정된 지리적 기준점(진북 0°)입니다. 내가 향한 방향은 북쪽을 기준으로 한 회전 각도입니다. 180°를 가리키면 남쪽을 보고 있는 것이며 북쪽은 등 뒤에 있습니다.' },
    { q: '앱을 설치하지 않고도 온라인 나침반으로 북쪽을 찾을 수 있나요?', a: '네. 이 나침반은 W3C DeviceOrientation API를 이용해 모바일 브라우저에서 100% 작동합니다. 설치나 회원가입이 필요 없으며 완벽한 개인정보 보호를 제공합니다.' },
    { q: '나침반 센서가 없는 PC나 노트북에서 북쪽을 찾는 방법은?', a: '데스크톱 PC나 노트북에는 자력계가 없습니다. PC에서는 당사의 ‘태양 위치 계산기’를 활용해 태양의 방위각과 그림자 방향으로 진북을 정확히 찾을 수 있습니다.' }
  ],
  tr: [
    { q: 'Şu an bulunduğum yerden Gerçek Kuzeyi hemen nasıl bulurum?', a: 'Yön ve konum izni verilmiş akıllı telefonunuzda bu çevrim içi pusulayı açın. Cihazı düz tutun; ibre yerel manyetik sapmayı hesaba katarak otomatik olarak Gerçek Kuzeyi (0°) gösterecektir.' },
    { q: 'Evin veya odanın içindeyken kuzey ne tarafta kalır?', a: 'Büyük metal eşyalardan, mikrodalga fırınlardan, bilgisayarlardan ve betonarme kolonlardan uzak durun. Telefonu düz tutun: 0° ise baktığınız yön kuzeydir, 90° ise kuzey solunuzdadır.' },
    { q: 'Telefonumun pusulası neden yanlış yönü gösteriyor veya sapıyor?', a: 'Manyetometre sensörleri mıknatıslı kılıflardan (MagSafe gibi), metalden ve elektronikten etkilenir. Mıknatıslı kılıfı çıkarın ve sensörü sıfırlamak için telefonu 5 saniye boyunca sekiz (∞) şeklinde havada çevirin.' },
    { q: '“Kuzey nerede?” ile “Hangi yöne bakıyorum?” arasındaki fark nedir?', a: 'Kuzey sabit bir coğrafi yöndür (0° Gerçek). Baktığınız yön ise kuzeye göre dönüş açınızdır. Kadran 180° gösteriyorsa Güneye bakıyorsunuzdur ve Kuzey tam arkanızdadır.' },
    { q: 'Uygulama yüklemeden bu çevrim içi pusulayla kuzeyi bulabilir miyim?', a: 'Evet. Bu pusula W3C DeviceOrientation API kullanarak mobil tarayıcınızda (Safari, Chrome, Edge) %100 çalışır. İndirme yok, kayıt yok, verileriniz tamamen gizli kalır.' },
    { q: 'Pusula sensörü olmayan masaüstü bilgisayarda kuzeyi nasıl bulurum?', a: 'Masaüstü ve dizüstü bilgisayarlarda manyetometre bulunmaz. Bilgisayarda Güneş Konumu Hesaplayıcımızı kullanarak güneş açısı ve gölge yönünden Gerçek Kuzeyi kesin olarak bulabilirsiniz.' }
  ],
  ar: [
    { q: 'كيف أحدد اتجاه الشمال الحقيقي من موقعي الحالي فوراً؟', a: 'افتح هذه البوصلة الرقمية على هاتفك وتأكد من تفعيل أذونات الحركة والموقع. احمل الهاتف مستوياً في يدك؛ سيشير المؤشر تلقائياً إلى الشمال الحقيقي (0°) مع تصحيح الانحراف المغناطيسي.' },
    { q: 'في أي اتجاه يقع الشمال إذا كنت داخل المنزل أو الغرفة؟', a: 'ابتعد عن الأجهزة الكهربائية والميكروويف وأعمدة الخرسانة المسلحة بالحديد. امسك الهاتف بشكل مسطح: إذا ظهرت الدرجة 0° فأنت تنظر للشمال، وإذا ظهرت 90° فالشمال عن يسارك.' },
    { q: 'لماذا تشير بوصلة الهاتف إلى اتجاه خاطئ أو تدور باستمرار؟', a: 'تتأثر المستشعرات بالحافظات المغناطيسية (مثل MagSafe) والقطع الفولاذية. انزع الأغطية المغناطيسية وحرك الهاتف في الهواء برسم الرقم ثمانية بالإنجليزية (∞) لمدة 5 ثوانٍ لإعادة المعايرة.' },
    { q: 'ما الفرق بين "أين يقع الشمال؟" و "إلى أي اتجاه أنظر؟"؟', a: 'الشمال هو نقطة جغرافية ثابتة (0° حقيقي). أما اتجاه نظرك فهو زاويتك الحالية بالنسبة للشمال. إذا كانت القراءة 180°، فأنت تواجه الجنوب تماماً والشمال خلف ظهرك.' },
    { q: 'هل يمكنني معرفة اتجاه الشمال بهذه البوصلة دون تثبيت تطبيق؟', a: 'نعم، تعمل هذه البوصلة 100% داخل متصفح هاتفك (Safari أو Chrome) عبر تقنيات W3C القياسية دون تنزيل تطبيقات ودون تسجيل، وبخصوصية كاملة داخل جهازك.' },
    { q: 'كيف أحدد الشمال على جهاز الكمبيوتر الذي لا يحتوي على مستشعر بوصلة؟', a: 'لا تحتوي أجهزة الكمبيوتر والمحمول على مستشعر مغناطيسي. يمكنك استخدام أداة "حاسبة موقع الشمس" على موقعنا لتحديد الشمال الحقيقي بدقة من خلال زاوية الشمس واتجاه الظل.' }
  ],
  ur: [
    { q: 'میں اپنے موجودہ مقام سے فوراً حقیقی شمال کیسے معلوم کر سکتا ہوں؟', a: 'اپنے اسمارٹ فون پر اس آن لائن قطب نما کو کھولیں اور لوکیشن کی اجازت دیں۔ موبائل کو ہاتھ میں بالکل سیدھا رکھیں؛ سوئی خود بخود حقیقی شمال (0°) کی نشاندہی کرے گی۔' },
    { q: 'اگر میں گھر یا کمرے کے اندر ہوں تو شمال کس طرف ہوگا؟', a: 'بڑی دھاتی اشیاء، مائیکرو ویو اور سیمنٹ کے ستونوں سے تھوڑا دور ہو جائیں۔ موبائل کو ہموار رکھیں: اگر 0° ہو تو سامنے شمال ہے، اور اگر 90° ہو تو بائیں جانب شمال ہے۔' },
    { q: 'میرے فون کا قطب نما غلط سمت کیوں دکھاتا ہے یا سوئی گھومتی کیوں رہتی ہے؟', a: 'فون کا سینسر مقناطیسی کور (جیسے MagSafe) اور برقی اشیاء سے متاثر ہو جاتا ہے۔ مقناطیسی کور ہٹائیں اور فون کو ہوا میں انگریزی کے 8 (∞) کی شکل میں 5 سیکنڈ تک گھمائیں۔' },
    { q: '‘شمال کس طرف ہے’ اور ‘میرا رخ کس طرف ہے’ میں کیا فرق ہے؟', a: 'شمال ایک مستقل جغرافیائی سمت (0° حقیقی) ہے۔ آپ کا رخ شمال کے مقابلے میں آپ کا زاویہ ہے۔ اگر ریڈنگ 180° ہے تو آپ جنوب کی طرف دیکھ رہے ہیں اور شمال آپ کے پیچھے ہے۔' },
    { q: 'کیا میں بغیر کوئی ایپ انسٹال کیے اس قطب نما سے سمت معلوم کر سکتا ہوں؟', a: 'جی ہاں! یہ آن لائن قطب نما براؤزر میں بالکل مفت اور بغیر کسی ایپ یا اکاؤنٹ کے 100% پرائیویٹ طریقے سے چلتا ہے۔' },
    { q: 'اگر لیپ ٹاپ یا کمپیوٹر میں سینسر نہ ہو تو شمال کیسے تلاش کریں؟', a: 'لیپ ٹاپ اور کمپیوٹر میں میگنیٹومیٹر سینسر نہیں ہوتا۔ کمپیوٹر پر آپ ہماری ‘سورج کے مقام کا کیلکولیٹر’ استعمال کر کے سورج اور سائے کے زاویے سے اصلی شمال معلوم کر سکتے ہیں۔' }
  ],
  bn: [
    { q: 'আমার অবস্থান থেকে এখনই সঠিক উত্তর দিক কীভাবে খুঁজে পাব?', a: 'লোকেশন ও সেন্সর পারমিশন অন করে আপনার স্মার্টফোনে এই অনলাইন কম্পাসটি খুলুন এবং ফোনটি সমান্তরালভাবে রাখুন। কাঁটাটি স্বয়ংক্রিয়ভাবে সঠিক উত্তর দিক (0°) দেখাবে।' },
    { q: 'ঘরের বা রুমের ভেতরে থাকলে উত্তর দিক কীভাবে বুঝব?', a: 'ভারী ধাতব বস্তু, মাইক্রোওয়েভ এবং রডের পিলার থেকে কিছুটা দূরে দাঁড়ান। ফোনটি সোজা রাখুন: 0° হলে সামনে উত্তর, এবং 90° হলে আপনার বাম পাশে উত্তর।' },
    { q: 'ফোনের কম্পাস ভুল দিক দেখায় বা কাঁটা অনবরত ঘোরে কেন?', a: 'ম্যাগনেটিক মোবাইল কভার (যেমন MagSafe) বা লোহার কাঠামোর কারণে সেন্সর বিভ্রান্ত হয়। ম্যাগনেটিক কভার খুলে ফোনটি বাতাসে ইংরেজি ৮ (∞) আকারে ৫ সেকেন্ড ঘুরিয়ে ক্যালিব্রেট করুন।' },
    { q: '‘উত্তর কোন দিকে’ আর ‘আমার মুখ কোন দিকে’ এর মধ্যে পার্থক্য কী?', a: 'উত্তর দিক একটি নির্দিষ্ট ভৌগোলিক বিন্দু (0° True North)। আর আপনার অবস্থান হলো উত্তরের সাপেক্ষে আপনার মুখ কোন দিকে। কম্পাসে 180° দেখালে আপনি দক্ষিণে মুখ করে আছেন এবং উত্তর ঠিক আপনার পেছনে।' },
    { q: 'কোনো অ্যাপ ইনস্টল না করেই কি এই অনলাইন কম্পাস দিয়ে দিক জানা যায়?', a: 'হ্যাঁ। এই অনলাইন কম্পাসটি সাফারি বা ক্রোম ব্রাউজারে সম্পূর্ণ বিনামূল্যে এবং কোনো অ্যাপ ইনস্টল বা রেজিস্ট্রেশন ছাড়াই ১০০% সুরক্ষিতভাবে চলে।' },
    { q: 'ল্যাপটপ বা কম্পিউটারে কম্পাস সেন্সর না থাকলে উত্তর দিক কীভাবে বের করব?', a: 'কম্পিউটার বা ল্যাপটপে ম্যাগনেটোমিটার থাকে না। পিসিতে আমাদের ‘সূর্যের অবস্থান ক্যালকুলেটর’ ব্যবহার করে সূর্যের কোণ এবং ছায়ার দিক দেখে নির্ভুল উত্তর দিক বের করতে পারবেন।' }
  ]
};

for (const [lang, faqs] of Object.entries(langFaqs)) {
  const filePath = path.join(projectRoot, `src/pages/${lang}/index.astro`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Match the entire const faq = [ ... ];
  // Find where the 10 original FAQs start. In each file, the original questions start with the 7th item.
  // We can locate the 7th item by finding the 6th closing brace or regex matching.
  // Better: find `const faq = [` and replace the first 6 items with properly JSON.stringified ones.
  const faqMatch = content.match(/const faq = \[\s*([\s\S]*?)\];/);
  if (!faqMatch) {
    console.log(`Could not match const faq in ${lang}`);
    continue;
  }

  // Generate clean 6 items
  const clean6 = faqs.map(f => `\t{\n\t\t"q": ${JSON.stringify(f.q)},\n\t\t"a": ${JSON.stringify(f.a)}\n\t},`).join('\n');

  // Let's replace the first 6 entries
  // The first 6 entries start right after `const faq = [` and go until the 6th `},\n`
  let faqBody = faqMatch[1];
  
  // Count 6 closing `}`
  let count = 0;
  let splitIndex = -1;
  const regexClose = /\},\s*\n/g;
  let m;
  while ((m = regexClose.exec(faqBody)) !== null) {
    count++;
    if (count === 6) {
      splitIndex = m.index + m[0].length;
      break;
    }
  }

  if (splitIndex !== -1) {
    const remainingFaqs = faqBody.slice(splitIndex);
    const newFaqArray = `const faq = [\n${clean6}\n${remainingFaqs}];`;
    content = content.replace(/const faq = \[\s*[\s\S]*?\];/, newFaqArray);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully fixed FAQs in ${lang}/index.astro`);
  } else {
    console.log(`Could not find 6 closing braces in ${lang}`);
  }
}

