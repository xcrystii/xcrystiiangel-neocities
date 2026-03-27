function process()
{
var FlamingMoai = 0;
var Quillbee = 0;
var LeonSBU = 0;
var CodeNeon = 0;
var Legundo = 0;
var Loony = 0;

var cq = document.cq;
var i = 0;

for (i = 0; i < cq.a.length; i++) if (cq.a[i].checked) value = cq.a[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.b.length; i++) if (cq.b[i].checked) value = cq.b[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.c.length; i++) if (cq.c[i].checked) value = cq.c[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.d.length; i++) if (cq.d[i].checked) value = cq.d[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.e.length; i++) if (cq.e[i].checked) value = cq.e[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.f.length; i++) if (cq.f[i].checked) value = cq.f[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.g.length; i++) if (cq.g[i].checked) value = cq.g[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

for (i = 0; i < cq.h.length; i++) if (cq.h[i].checked) value = cq.h[i].value;
if (value == "1") { FlamingMoai++; }
if (value == "2") { Quillbee++; }
if (value == "3") { LeonSBU++; }
if (value == "4") { CodeNeon++; }
if (value == "5") { Legundo++; }
if (value == "6") { Loony++; }

var out = "CodeNeon";
i = CodeNeon;

if (FlamingMoai > i) { out ="flamingmoai"; i = FlamingMoai; }
if (Quillbee > i) { out ="Quillbee"; i = Quillbee; }
if (LeonSBU > i) { out ="LeonSBU"; i = LeonSBU; }
if (Legundo > i) { out ="Legundo"; i = Legundo; }
if (Loony > i) { out ="Loony"; i = Loony; }
location.href = out + ".html";
}
function err(msg, url, line)
{
location.href = "error.html";
}