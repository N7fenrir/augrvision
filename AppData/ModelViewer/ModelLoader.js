var AugRVision_3DModel = AugRVision_3DModel || {}


AugRVision_3DModel.ModelLoader = function(params)
{
    
    /*This section im talking about.*/
    
    var loader = new THREE.MMDLoader();
    if(params != null)
        { var marker_id = {};
    var previousmarker_id = {};
    marker_id.value = params.markerId;
    previousmarker_id.value = params.markerId;
    var prev_markerid = previousmarker_id.value;
    var pres_markerid= marker_id.value;
    
    var modelurl = {};
    var audioUrl = {};
    var vmdurl = {};
    var pmdurl = {};    
         
    modelurl.src= params.modelurl;
    audioUrl.src = params.audiourl;
    vmdurl.src = params.vmd;
    pmdurl.src = params.pmd;
    
    
    var vmdval = vmdurl.src;
    var pmdval = pmdurl.src

   
    var strurl = modelurl.src;   

    loader.load(strurl+pmdval,strurl+vmdval,function onLoad(mesh)
                {

			mesh.scale.set(1,1,1).multiplyScalar(1/20)
			mesh.rotation.x = Math.PI/2

			markerObject3D.add( mesh );

			var animation = new THREE.Animation( mesh, mesh.geometry.animation );
			animation.play();

			var morphAnimation = new THREE.MorphAnimation2( mesh, mesh.geometry.morphAnimation );
			morphAnimation.play();

			var ikSolver = new THREE.CCDIKSolver( mesh );

			onRenderFcts.push(function(now, delta){
				THREE.AnimationHandler.update( delta/1000 );
				ikSolver.update();
			})
		},
                function onProgress(xhr){
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
                if(percentComplete == 100)
                    {
                        function val () {};
                    }
			}
		}, function onError( xhr ) {
		} );}
 
}

