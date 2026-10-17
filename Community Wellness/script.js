const checklistItems = Array.from(document.querySelectorAll('.habit-item input[type="checkbox"]'));
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const progressTrack = document.getElementById('progress-track');
const resetButton = document.getElementById('reset-button');

function updateProgress() {
  const completedCount = checklistItems.filter((item) => item.checked).length;
  const totalCount = checklistItems.length;
  const progressPercent = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  progressText.textContent = `${completedCount} of ${totalCount} habits complete`;
  progressFill.style.width = `${progressPercent}%`;
  progressTrack.setAttribute('aria-valuemax', String(totalCount));
  progressTrack.setAttribute('aria-valuenow', String(completedCount));
}

checklistItems.forEach((item) => {
  item.addEventListener('change', updateProgress);
});

resetButton.addEventListener('click', () => {
  checklistItems.forEach((item) => {
    item.checked = false;
  });
  updateProgress();
  checklistItems[0]?.focus();
});

updateProgress();
