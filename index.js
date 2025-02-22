var nextTargetId = 0;
const colorsList = ['#36E098', '#E0AB36', '#35C9E0', '#E08136', '#50838B'];

document.getElementById('add-target').addEventListener('click', (e) => {
    const park = document.getElementById('park');
    const newTarget = document.createElement('div');
    newTarget.id = `target-${nextTargetId}`;
    newTarget.classList.add('base-target');
    newTarget.style.backgroundColor = colorsList[nextTargetId % colorsList.length];
    park.appendChild(newTarget);
    
    const controls = document.getElementById('controls');
    const newControl = document.createElement('div');
    newControl.id = `control-${nextTargetId}`;
    newControl.classList.add('control');

    const colorHeader = document.createElement('div');
    colorHeader.classList.add('color-header');
    colorHeader.style.backgroundColor = colorsList[nextTargetId % colorsList.length];
    newControl.appendChild(colorHeader);
    
    controls.appendChild(newControl);
    
    nextTargetId++;
});
