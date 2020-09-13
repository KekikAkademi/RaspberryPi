## :computer: Donanımı Tanıyalım: Raspberry Pi Zero WH
**Raspberry Pi**, _İngiltere’de bulunan Raspberry Pi Vakfı_ tarafından desteklenen; öğrenci, amatör ve hobicilerin kullanımına sunulan **kredi kartı büyüklüğünde, tek bir board'dan oluşan mini bilgisayardır.**

Küçük boyutları ile dikkat çeken _Raspberry Pi modelleriyle_, **gerçek bir bilgisayarın size sunduğu tüm görevleri yapabilirsiniz.** Tek parça devre kartından oluşan bu bilgisayarlar, monitör, klavye ve mouse desteği ile tıpkı masaüstü ve dizüstü bilgisayarı gibi kullanılabiliyor. Kompakt tasarımı ve oldukça uygun fiyatı ile bilgisayar erişimini herkes için sağlayan Raspberry Pi çeşitleri farklı modellerine [SAMM Market - Raspberry Pi Ana Distribütörü](https://market.samm.com/ "SAMM Market - Raspberry Pi Ana Distribütörü") adresinden ulaşabilirsiniz.

Bu serinin en yeni versiyonu olan Raspberry Pi ZERO WH, Tek çekirdekli 1 GHz işlemci ve 512 MB RAM ile bilgisayarınızı aratmayacak; Raspberry Pi ZERO WH ile projelerinizi GPIO pinleri ve kablosuz bağlantı üzerinden sürekli olarak bağlayabilirsiniz. Ayrıca Wi-Fi ve Bluetooth gibi kablosuz özellikleri ile oldukça elverişli bir kullanım deneyimi sunuyor. 

Haliyle Raspberry Pi **kurulum ve kullanımı esnasında** diğer bilgisayarlarda olduğu gibi k**lavye, mouse, monitör gibi ekipmanlar lazımdır**; _Özellikle ilk kurulumda._

_Fakat biz_ **klasik yöntemin aksine sadece board üzerinden**; _bir internet bağlantısı ve bilgisayarla ilk kurulumu yapabileceğiz._

## :school_satchel: Kullanılan Ekipman Listesi
- [Raspberry Pi Zero WH](https://market.samm.com/raspberry-pi-zero-wh "Raspberry Pi Zero WH")
- [Erkek USB to Mikro USB Adaptör](https://market.samm.com/s-link-sl-mu5 "Erkek USB to Mikro USB Adaptör")
- [Toshiba 16GB microSDHC](https://market.samm.com/toshiba-16gb-micro-sdhc "Toshiba 16GB microSDHC")

## :floppy_disk: Kullanılan Program Listesi
- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/ "SD Card Formatter")
- [balenaEtcher](https://www.balena.io/etcher/ "balenaEtcher")
- [PuTTY](https://www.putty.org/ "PuTTY")
- [VNC® Viewer](https://www.realvnc.com/en/connect/download/viewer/ "VNC® Viewer")

## :satellite: Kuruluma Başlıyoruz
### :dvd: İşletim Sistemini İndirme
- [Raspbian](https://www.raspberrypi.org/downloads/raspbian/ "Raspbian")
veya
- [Kali Linux RaspberryPi](https://www.offensive-security.com/kali-linux-arm-images/#1493408272250-e17e9049-9ce8 "Kali Linux RaspberryPi")

### :name_badge: SD Kartı Formatlama
SD kartımızı bilgisayarımıza taktıktan sonra “**SD Card Formatter**” programına girerek formatlanacak hafıza kartını seçiyoruz, **Format** seçeneğine tıklayarak format işlemini başlatıyoruz.

### :inbox_tray: İşletim Sistemini Micro-SD Kart’a Yazdırma
> Hafıza kartınız Class10 ve en az 8GB olursa yararlı olacaktır.

**balenaEtcher** programını açarak işletim sistemi imajımızı ve diskimizi seçip **Flash** butonuna tıklıyoruz.

## :closed_lock_with_key: Gerekli İzinler
### :earth_africa: Wi-Fi
`wpasupplicant.conf` adında bir dosya oluşturup içine aşağıdaki kodları yazdıktan sonra, oluşturduğumuz dosyayı `/boot/` dizinine atıyoruz.

    country=TR # Ülke kodu
    update_config=1
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    
    network={
    ssid="Wi-Fi Adı"
    psk="Wi-Fi Şifresi"
    key_mgmt=WPA-PSK
    }

### :shell: SSH
`SSH` adında uzantısız ve içi boş bir dosya oluşturup`/boot/` dizinine atıyoruz.

    Varsayılan kullanıcı adı : pi
    Varsayılan şifre : raspberry

### :vhs: VCN
Yukarıdaki işlemleri yaptıktan sonra sd-kartımızı Pi'ye bağlayıp güç verdiğimiz anda Wi-Fi bağlantısı aktif ve SSH izni verilmiş bir cihaza sahip oluyoruz.
SSH ile cihaz bağlantımızı gerçekleştiriyoruz ve ardından

`sudo raspi-config` komutu ile `interfacing options` sekmesinden `VCN`yi aktifleştirip reboot ediyoruz.

### :loop: USB Bağlantısı
Öncelikle `/boot/config.txt` dosyasını açıp içine **en alta** şu satırları ekleyin:

    dtoverlay=dwc2

Ardından `/boot/cmdline.txt` dosyasını açıyoruz. Bu tek satırlık dosyada “rootwait” kelimesi ardından şu kodu giriyoruz:

    modules-load=dwc2,g_ether

## :iphone: Mobil(Android) ile Pi'ye Bağlanma
- [RaspController](https://play.google.com/store/apps/details?id=it.Ettore.raspcontroller "RaspController")
- [JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh "JuiceSSH")
- [VNC Viewer](https://play.google.com/store/apps/details?id=com.realvnc.viewer.android "VNC Viewer")

# :japanese_ogre: [P4wnP1 A.L.O.A.](https://github.com/KekikAkademi/RaspberryPi/tree/master/P4wnP1-ALOA-TR "P4wnP1 A.L.O.A.")

#

> Bu readme sayfası oluşturulurken [prose.io](http://prose.io/ "prose.io") ve [stackedit.io](https://stackedit.io/app "stackedit.io") araçlarından yardım alınmıştır..
> Emojiler için [webfx](https://www.webfx.com/tools/emoji-cheat-sheet/ "Emoji Cheat Sheet") sayfası kullanılmıştır.
