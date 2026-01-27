// تعبئة السنوات تلقائيًا من 2008 إلى 2025
const yearSelect = document.getElementById("yearSelect");
for (let year = 2025; year >= 2008; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

// عرض الامتحانات حسب السنة
function showExams() {
  const year = yearSelect.value;
  const examList = document.getElementById("examList");
  examList.innerHTML = "";

  if (!year) return;

  const subjects = ["رياضيات", "فيزياء", "تكنولوجيا", "لغة عربية", "لغة فرنسية", "لغة إنجليزية"];
  subjects.forEach(sub => {
    const div = document.createElement("div");
    div.className = "exam-item";
    div.innerHTML = `
      <h3><span class="math-inline" data-latex="%7Bsub%7D%20-">{sub} -</span>{year}</h3>
      <a href="pdf/<span class="math-inline" data-latex="%7Byear%7D%2F">{year}/</span>{sub}.pdf" target="_blank">📄 تحميل الموضوع</a> |
      <a href="pdf/<span class="math-inline" data-latex="%7Byear%7D%2F">{year}/</span>{sub}-solution.pdf" target="_blank">✅ الحل النموذجي</a>
    `;
    examList.appendChild(div);
  });
}

// فتح صفحة مادة معينة (يمكنك تطويرها لاحقًا)
function openSubject(subject) {
  alert(`سيتم فتح صفحة مادة ${subject} قريبًا!`);
}
