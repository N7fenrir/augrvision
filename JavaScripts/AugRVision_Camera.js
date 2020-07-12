/**
 * @Author Vighnesh Bheed
 *
 */

var AugRVision_Camera = AugRVision_Camera || {}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.URL = window.URL || window.webkitURL;


AugRVision_Camera.getVideo = function()
{
    
        var domElement  = document.createElement('video')
        domElement.setAttribute('autoplay', true)

	domElement.style.zIndex = -1;
        domElement.style.position = 'absolute'


	domElement.style.top = '0px'
	domElement.style.left = '0px'
	domElement.style.width = '100%'
	domElement.style.height = '100%'

        function onResize(){

                if( domElement.videoHeight === 0 )   return

                var videoAspect = domElement.videoWidth / domElement.videoHeight
                var windowAspect = window.innerWidth / window.innerHeight

        }

        window.addEventListener('resize', function(event){
                onResize()
        })


        setInterval(function(){
                onResize()
        }, 500)


        MediaStreamTrack.getSources(function(sourceInfos) {

                var constraints = {
                        video: true,
                        audio: false,
                }

                for (var i = 0; i != sourceInfos.length; ++i) {
                        var sourceInfo = sourceInfos[i];
                        if(sourceInfo.kind == "video" && sourceInfo.facing == "environment") {
                                constraints.video = {
                                        optional: [{sourceId: sourceInfo.id}]
                                }

                        }
                }

                navigator.getUserMedia( constraints, function(stream){
                        domElement.src = URL.createObjectURL(stream);
                }, function(error) {
                        console.error("Cant getUserMedia()! due to ", error);
                });
        });

	this.domElement = domElement
}
