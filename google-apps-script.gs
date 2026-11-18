/**
 * RSVP receiver for the wedding website.
 * Paste this into Google Apps Script (Extensions > Apps Script) from inside your Google Sheet.
 * Then Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.
 * Copy the Web app URL into CONFIG.rsvp.endpoint in script.js.
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Time (Lagos)', 'Name', 'Phone', 'Attending', 'Guests', 'Message'];

// Stops spreadsheet formulas such as =HYPERLINK(...) from running when a guest types them.
function clean_(v, max) {
  var s = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max || 500);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.website) return json_({ ok: true });            // honeypot filled in: ignore bots quietly

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sh.setFrozenRows(1);
      sh.getRange('C:C').setNumberFormat('@');                // phone column as plain text: keeps the leading 0
    }
    var attending = clean_(data.attending, 40);
    if (attending !== 'Joyfully accept' && attending !== 'Regretfully decline') attending = clean_(attending, 40);
    var guests = Math.max(0, Math.min(50, parseInt(data.guests, 10) || 0));
    var phone = clean_(data.phone, 30);
    var row = sh.getLastRow() + 1;
    sh.getRange(row, 3).setNumberFormat('@');
    sh.getRange(row, 1, 1, HEADERS.length).setValues([[
      Utilities.formatDate(new Date(), 'Africa/Lagos', 'yyyy-MM-dd HH:mm:ss'),
      clean_(data.name, 100), phone, attending, guests, clean_(data.message, 500)
    ]]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) { /* ignore */ }
  }
}

function doGet() { return json_({ ok: true, message: 'RSVP endpoint is live.' }); }

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
