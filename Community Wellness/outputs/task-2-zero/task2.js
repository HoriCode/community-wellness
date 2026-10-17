const checklistItems = Array.from(document.querySelectorAll('.habit-item input'));
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resetButton = document.getElementById('reset-button');

function updateProgress() {
  const checkedCount = checklistItems.filter((item) => item.checked).length;
  const total = checklistItems.length;

  progressText.textContent = `${checkedCount} of ${total} habits complete`;
  progressFill.style.width = `${(checkedCount / total) * 100}%`;
}

checklistItems.forEach((item) => {
  item.addEventListener('change', updateProgress);
});

resetButton.addEventListener('click', () => {
  checklistItems.forEach((item) => {
    item.checked = false;
  });
  updateProgress();
});

updateProgress();
