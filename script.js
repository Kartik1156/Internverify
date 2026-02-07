function scrollToVerify() {
  document.getElementById('verify').scrollIntoView({ behavior: 'smooth' });
}

function scrollToHow() {
  document.getElementById('how').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('analyze-btn').addEventListener('click', function() {
  const content = document.querySelector('textarea').value;
  if (!content.trim()) {
    alert('Please paste a message or upload a file to analyze.');
    return;
  }
  
  // Simulated analysis
  this.innerText = 'Analyzing...';
  this.disabled = true;
  
  setTimeout(() => {
    alert('Analysis complete! In a real application, this would connect to an AI backend.');
    this.innerText = 'Analyze Offer';
    this.disabled = false;
  }, 2000);
});

// Simple file upload interaction
const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('click', () => {
  alert('File upload dialog would open here.');
});

