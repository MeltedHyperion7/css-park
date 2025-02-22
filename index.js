var nextTargetId = 0;

document.getElementById('add-target').addEventListener('click', (e) => {
    const park = document.getElementById('park');

    const newTarget = document.createElement('div');
    newTarget.id = `target-${nextTargetId}`;
    newTarget.classList.add('base-target');
    nextTargetId++;

    park.appendChild(newTarget);
});
