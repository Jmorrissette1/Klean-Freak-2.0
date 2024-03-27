const tabBtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');
const accordions = document.querySelectorAll(".accordion");

tabBtns.forEach(btn => {
  btn.addEventListener('click', openTab);
});

function openTab(e) {
  // Toggle active class on buttons
  tabBtns.forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');
  
  // Open tab content
  const tabNumber = e.currentTarget.getAttribute('data-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tabNumber}"]`).classList.add('active');
}



