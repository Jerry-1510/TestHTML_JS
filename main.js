function Tong() {
  const txtA = document.getElementById("txtA");
  const txtB = document.getElementById("txtB");
  const kq = document.getElementById("txtKq");

  const soA = parseFloat(txtA.value);
  const soB = parseFloat(txtB.value);

  if (isNaN(soA) || isNaN(soB)) {
    kq.textContent = "Lỗi: Vui lòng nhập số vào cả hai ô.";
    return NaN;
  }

  const tong = soA + soB;

  kq.textContent = "Kết quả: " + tong;

  return tong;
}

function Hieu() {
  const txtA = document.getElementById("txtA");
  const txtB = document.getElementById("txtB");
  const kq = document.getElementById("txtKq");

  const soA = parseFloat(txtA.value);
  const soB = parseFloat(txtB.value);

  if (isNaN(soA) || isNaN(soB)) {
    kq.textContent = "Lỗi: Vui lòng nhập số vào cả hai ô.";
    return NaN;
  }

  const tong = soA - soB;

  kq.textContent = "Kết quả: " + tong;

  return tong;
}
