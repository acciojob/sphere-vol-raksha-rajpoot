function volume_sphere() {
    //Write your code here
	  let radiusInput = document.getElementById('radius');
    let volumeOutput = document.getElementById('volume');
    
    let radius = parseFloat(radiusInput.value);
    
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'NaN';
        return;
    }
    
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    volumeOutput.value = volume.toFixed(4);
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 
    volume_sphere();
});
  


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
