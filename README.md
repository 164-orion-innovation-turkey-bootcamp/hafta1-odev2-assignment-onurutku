# hafta1-odev2 https://tictactoe-out.netlify.app/

<strong>2-) Tic Tac Toe Uygulaması</strong>


3x3, 9 kutudan oluşan bir yapı tasarlanacak.
Yatay, dikey veya çapraz bir şekilde x-x-x veya o-o-o 3lüsü oluşturan taraf kazanan oyuncu olacak. 3lü oluşmazsa oyun berabere sonuçlanacak. Oyun sonucu bir metin ile bildirilmeli.
(html,css ve javascript kullanılarak yapılacak)
(querySelector ile html elementlerine erişim sağlayabilirsiniz)
(style, classList ile stillerle oynayabilirsiniz)
(addEventListener ile kullanıcı etkileşimlerini yakalayabilirsiniz)

Cevap 2:
Projeyi 4 ana başlıkta tamamladım.

1-değişkenleri tanımladım.

2-Bir IIFE function tanımlayıp kod ilk execute edildiğinde çalışmasını istediğim fonksiyonları ve tag'lere atanacak olan eventleri burada tanımladım.

3-prepareGame() adından bir fonsiyon tanımladım. Bu fonksiyon hem fsayfa ilk yüklendiğinde hem de oyun restart edildiğinde çalışıyor ve tüm eğişkenleri oyuna başlamaya hazır hale getirecek şekilde değiştiriyor.

4-putSign() adında bir fonksiyon tanımladım ve kutulara tıklandığında yani oyun oynanırken ne olacağını tüm eventleri burada tanımladım yani asıl işi yapan fonksiyon bu.

Ayrıntılı açıklama satırları kod içerisinde comment line olarak bulunmaktatır.