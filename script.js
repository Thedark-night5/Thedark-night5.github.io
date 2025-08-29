// Simple script: set footer year and provide small helper comments for link replacement.
document.addEventListener('DOMContentLoaded', function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // NOTE for you: to add your Snapchat/Instagram links, open index.html and replace the href '#' values:
  // <a id="snap-link" href="#">Snapchat</a>
  // <a id="insta-link" href="#">Instagram</a>
  // replace '#' with your profile links (include https://).
});