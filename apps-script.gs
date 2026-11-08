// Google Apps Script — يستقبل الاسم والرقم ويكتبهم في الشيت
// 1) افتح Google Sheet جديد → Extensions → Apps Script
// 2) امسح أي كود موجود والصق الكود ده
// 3) Deploy → New deployment → Type: Web app
//    Execute as: Me   |   Who has access: Anyone
// 4) انسخ رابط الـ Web app وحطه في SHEET_URL جوه index.html

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["التاريخ والوقت", "الاسم", "الشركة", "رقم الموبايل", "المصدر (ref)", "الجهاز"]);
  }
  const p = e.parameter || {};
  sheet.appendRow([
    new Date(),
    String(p.name || "").slice(0, 100),
    String(p.company || "").slice(0, 100),
    "'" + String(p.phone || "").slice(0, 30),
    String(p.source || "").slice(0, 50),
    String(p.userAgent || "").slice(0, 200)
  ]);
  return ContentService.createTextOutput("ok");
}
