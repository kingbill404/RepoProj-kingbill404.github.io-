	    /* global THREE */

console.log = () => {}

window.onload = () => {

const {
	WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry,
	MeshPhongMaterial, Mesh, DirectionalLight,
	TrackballControls
} = THREE

const canvas = document.getElementsByTagName('canvas')[0]
const renderer = new WebGLRenderer({ canvas })

// Camera setup

const fov = 50, aspect = 2
const near = 0.1, far = 5

const camera = new PerspectiveCamera(fov, aspect, near, far)

camera.position.z = 2

// Scene setup

const scene = new Scene()

// The cube

const geometry = new BoxGeometry(1, 1, 1)

const material = new MeshPhongMaterial({ color: 'blue' })

const cube = new Mesh(geometry, material)

// The light

const light = new DirectionalLight('white', 1)

light.position.set(-1, 2, 2)

// Add stuff to scene

scene.add(light)
scene.add(cube)
renderer.render(scene, camera)

// Controls

const controls = new TrackballControls(camera, renderer.domElement)

const render = time => {
	time *= 0.001
	cube.rotation.y = time
	cube.rotation.x = 0.5
	renderer.render(scene, camera)
	requestAnimationFrame(render)
	camera.updateProjectionMatrix()
	controls.update()
}

requestAnimationFrame(render)

}

	  $(function() {
    var val = $("p").html();
    alert(val);
});

		  $(function() {
		    var val = $("j").html();
			alert(val);
		  });

	      $(function() {
		    var q = $('m').html();
			alert(q);
			
		  });


	  