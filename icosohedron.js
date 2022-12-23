// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the icosohedron geometry and material
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

// Create the icosohedron mesh and add it to the scene
const icosohedron = new THREE.Mesh(geometry, material);
scene.add(icosohedron);

// Set the camera position and look at the icosohedron
camera.position.z = 5;
camera.lookAt(icosohedron.position);

// Animate the icosohedron by rotating it on each frame
function animate() {
  requestAnimationFrame(animate);
  icosohedron.rotation.x += 0.01;
  icosohedron.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
