
function navigateTo(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}

document.getElementById('calendarForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('eventTitle').value;
  const date = document.getElementById('eventDate').value;
  const list = document.getElementById('eventList');

  const li = document.createElement('li');
  li.textContent = `${date} – ${title}`;
  list.appendChild(li);

  this.reset();
});
