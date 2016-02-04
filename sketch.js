var r = new Rune({
  container: "#canvas",
  width: 612,
  height: 792
,
});

for (i = 0; i < 100; i++){
r.line(i, 0, i, r.height)

.stroke(0);
}


r.draw();
