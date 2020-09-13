## :pager: Aracı Tanıyalım: P4wnP1 A.L.O.A.
_[MaMe82](https://www.twitter.com/mame82 "MaMe82")_'nin yaratmış olduğu **[P4wnP1 A.L.O.A.](https://github.com/mame82/P4wnP1_aloa "P4wnP1 A.L.O.A.")** framework'ü sayesinde Raspberry Pi Zero'nuz esnek, düşük maliyetli bir pentest platformuna veya "Biraz Saldırgan Cihaz" a dönüşür. 

## :floppy_disk: Aracı İndirelim ve Kuralım
- [kali-linux-v0.1.0-alpha2-rpi0w-nexmon-p4wnp1-aloa.img.xz](https://github.com/mame82/P4wnP1_aloa/releases/download/v0.1.0-alpha2/kali-linux-v0.1.0-alpha2-rpi0w-nexmon-p4wnp1-aloa.img.xz "kali-linux-v0.1.0-alpha2-rpi0w-nexmon-p4wnp1-aloa.img.xz")
`v0.1.0-alpha2` sürümü, _Mame82_'nin **(Aralık-2018) Pre-release** sürümüdür.

- [kali-linux-2019.3-rpi0w-nexmon-p4wnp1-aloa.img.xz](https://images.offensive-security.com/arm-images/kali-linux-2019.3-rpi0w-nexmon-p4wnp1-aloa.img.xz "kali-linux-2019.3-rpi0w-nexmon-p4wnp1-aloa.img.xz")
`kali-linux-2019.3` sürümü, _offensive-security_'nin **(Ocak-2020 itibariyle) en güncel** sürümüdür.

### :name_badge: SD Kartı Formatlama
SD kartımızı bilgisayarımıza taktıktan sonra “**SD Card Formatter**” programına girerek formatlanacak hafıza kartını seçiyoruz, **Format** seçeneğine tıklayarak format işlemini başlatıyoruz.

### :inbox_tray: İşletim Sistemini Micro-SD Kart’a Yazdırma
> Hafıza kartınız Class10 ve en az 8GB olursa yararlı olacaktır.

**balenaEtcher** programını açarak işletim sistemi imajımızı ve diskimizi seçip **Flash** butonuna tıklıyoruz.

## :tv: Kullanıma Başlayalım
Etcher ile hafıza kartımıza framework'ü flashladıktan sonra sistemimiz tamamen hazır hale geliyor. SD Kartı Pi'ye taktıktan sonra, Pi'yi kurban cihaza usb soketi ile bağlaydıktan sonra framewrok aktif hale geliyor.

- WiFi Şifresi: `MaMe82-P4wnP1`
- Framework URL: `http://172.24.0.1:8000`
- SSH: `172.24.0.1:22` Kullanıcı Adı: `root` Şifresi: `toor`

## |🇹🇷| HID Ducky Payload'ların Türkçe Kullanımı
- [KekikPayload](https://github.com/KekikAkademi/RaspberryPi/tree/master/P4wnP1-ALOA-TR/Payloads/KekikPayload "KekikPayload")

**HID Ducky Payload**'lar genelde _**US** Keymap_ (Klavye Düzeni) kullanıyor. P4wnP1 Aloa için yazılmış **Türkçe** _Keymap olmadığı için_ bunun önüne şöyle geçmeyi başardım;
Kurban bilgisayara **US klavye düzeni indiriyoruz.** Windows İşletim Sisteminde `Alt+Shift` kombinasyonuyla _klavye düzenleri arasında geçiş yapabiliyoruz._ Bu sayede elimizdeki payloadları sorunsuz kullanabiliriz.

_Payload giriş ve çıkışına aşağıdaki kodları yerleştirirsek;_ **Başlangıçta klavye düzenini değiştirip** _US olarak kendini uygulayıp_ **çıkarken tekrar klavye düzenini değiştirerek** _TR haline geri dönüp görevini tamamlamış olur._

    // @KekikAkademi Edit ~
    delay(500);
    press("ALT SHIFT");
    delay(500);
    // @KekikAkademi Edit #

> Elimizdeki Payloadları derleyen [BeBoXoS](https://github.com/beboxos "BeBoXoS") - [akhil1136](https://github.com/akhil1136 "akhil1136") - [beanbot25](https://github.com/beanbot25 "beanbot25") - [PingDucKY](https://github.com/PingDucKY "PingDucKY") teşekkürler..


#

> Bu readme sayfası oluşturulurken [prose.io](http://prose.io/ "prose.io") ve [stackedit.io](https://stackedit.io/app "stackedit.io") araçlarından yardım alınmıştır..
> Emojiler için [webfx](https://www.webfx.com/tools/emoji-cheat-sheet/ "Emoji Cheat Sheet") sayfası kullanılmıştır.
