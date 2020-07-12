var AugRVision_Histogram = AugRVision_Histogram || {}


AugRVision_Histogram.GraphDrawer = function(params)
{
    
    var markerId = {};
    
    
	var geometry = new THREE.Geometry();
    
    geometry.vertices.push(new THREE.Vector3(-0.9, 0.2, 0));
    
	geometry.vertices.push(new THREE.Vector3(-0.9, 0.2, 1.6));
    
	var line = new THREE.Line(geometry, material);
    
	scene.add( line );

    
		addBar(-0.8,1.2);
		addBar(-0.4,8);
		addBar(0,6);
		addBar(0.4,5);
		addBar(0.8,7);
    
    
    
    addText("Dublin",{x:-0.8,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
    
		addText("Los Angeles",{x:-0.4,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
    
		addText("Rome",{x:0,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
    
		addText("Paris",{x:0.4,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
    
		addText("Toronto",{x:0.8,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
    

		addText("Summer",{x:-1.5,y:0,z:1.75},{x:Math.PI*0.5, y:0, z:0});
    
		addText("Temperature",{x:-1.6,y:0,z:1.6},{x:Math.PI*0.5, y:0, z:0});

    addText("5°C",{x:-1.4,y:0,z:0.2},{x:Math.PI*0.5, y:0, z:0});
    
		addText("10°C",{x:-1.4,y:0,z:0.4},{x:Math.PI*0.5, y:0, z:0});
    
		addText("15°C",{x:-1.4,y:0,z:0.6},{x:Math.PI*0.5, y:0, z:0});
    
		addText("20°C",{x:-1.4,y:0,z:0.8},{x:Math.PI*0.5, y:0, z:0});
    
		addText("25°C",{x:-1.4,y:0,z:1},{x:Math.PI*0.5, y:0, z:0});
    
		addText("30°C",{x:-1.4,y:0,z:1.2},{x:Math.PI*0.5, y:0, z:0});
    
		addText("35°C",{x:-1.4,y:0,z:1.4},{x:Math.PI*0.5, y:0, z:0});
    
    
    	})()
    
    function addBar(posX,height){
		var sizeBar = 0.2;
		var highestHeight = 8+2;
		var counter = 0;
		var geometry = new THREE.BoxGeometry( sizeBar, sizeBar, sizeBar );
		var material = new THREE.MeshPhongMaterial( { color:0x1054B5,reflectivity:1} );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = posX;
		mesh.position.y = 0;
		mesh.position.z = 0;
		var myMatrix = new THREE.Matrix4().set(
			1,0,0,0,
			0,1,0,0,
			0,0,1,sizeBar/2,
			0,0,0,1
		);
		mesh.geometry.applyMatrix( myMatrix )
		scene.add( mesh );

		onRenderFcts.push(function(now, delta){
			counter += 0.1 * delta/80;
			if (counter<height) {
				mesh.scale.z =counter;
			};
			if(counter>highestHeight){
				counter = 0
			}
		})
	}


	function addText(texte,pos,rot){
		var materialFront = new THREE.MeshBasicMaterial( { color:0xff0000,reflectivity:1} );
		var materialSide = new THREE.MeshBasicMaterial( { color:0x1054B5,reflectivity:1} );

		var materials = [ materialFront, materialSide ];
		var geometry = new THREE.TextGeometry( texte, {
			size: 0.1,
			height: 0.02,
			curveSegments: 4,
			font: "gentilis",
			bevelThickness: 0,
			bevelSize: 0.02,
			bevelEnabled: false,
			material: 0,
			extrudeMaterial: 1
		});

		var material = new THREE.MeshFaceMaterial(materials);
		var mesh = new THREE.Mesh(geometry, material );

		mesh.position.set( pos.x, pos.y, pos.z);
		mesh.rotation.set(rot.x,rot.y,rot.z);
		scene.add(mesh);
	}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
