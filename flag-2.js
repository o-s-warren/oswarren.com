const section = document.querySelector("section.flag")

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, section.clientWidth / section.clientHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize( section.clientWidth, section.clientHeight );
section.appendChild( renderer.domElement );

const loader = new THREE.TextureLoader()

var geometry = new THREE.PlaneGeometry(4, 5, 50, 30);

var material = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  map: loader.load("self-portrait.jpg")
});

var flag = new THREE.Mesh( geometry, material );
scene.add( flag );

flag.rotation.set(-0.1, 0, 0)

camera.position.z = 5;

const clock = new THREE.Clock()

function animate() {
  const t = clock.getElapsedTime()
  
  flag.geometry.vertices.map(v => {
    const waveX1 = 0.25 * Math.sin(v.x * 1 + t * 2.2)
    const waveX2 = 0.25 * Math.sin(v.x * 2 + t * 1.6)
    const waveY1 = 0.25 * Math.sin(v.y * 0.8 + t * 0.5)

    
    v.z = waveX1 + waveX2 + waveY1
  })
  
  flag.geometry.verticesNeedUpdate = true
  
  flag.rotation.x += 0.01;
  flag.rotation.y += 0.01
  
  
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();


window.addEventListener("resize", function () {
  camera.aspect = section.clientWidth / section.clientHeight
  camera.updateProjectionMatrix()
  
  renderer.setSize( section.clientWidth, section.clientHeight );
})