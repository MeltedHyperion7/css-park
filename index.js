var nextTargetId = 0;
const colorsList = ['#36E098', '#E0AB36', '#35C9E0', '#E08136', '#50838B'];
const kebabToCamelCaseRe = /-(\w)/g;

const properties = new Map();
properties.set('accent-color', {})

document.getElementById('add-target').addEventListener('click', () => {
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

    const addPropertyContainer = document.createElement('div');
    addPropertyContainer.classList.add('add-property-container');
    const addPropertyRow = document.createElement('div');
    addPropertyRow.classList.add('add-property-row');
    const addPropertyName = document.createElement('input');
    addPropertyName.setAttribute('type', 'text');
    addPropertyName.setAttribute('placeholder', 'Property name...');
    addPropertyName.classList.add('add-property-name');
    const addPropertyValue = document.createElement('input');
    addPropertyValue.setAttribute('type', 'text');
    addPropertyValue.setAttribute('placeholder', 'Property value...');
    addPropertyValue.classList.add('add-property-value');
    const addPropertyButton = document.createElement('button');
    addPropertyButton.innerText = "Add +";
    addPropertyButton.classList.add('add-property-button');
    addPropertyButton.addEventListener('click', () => {
        const propertyName = addPropertyName.value;
        const propertyValue = addPropertyValue.value;

        newTarget.style.setProperty(propertyName, propertyValue);
    });

    addPropertyRow.appendChild(addPropertyName);
    addPropertyRow.appendChild(addPropertyValue);
    addPropertyRow.appendChild(addPropertyButton);
    addPropertyContainer.appendChild(addPropertyRow);
    newControl.appendChild(addPropertyContainer);

    controls.appendChild(newControl);
    
    nextTargetId++;
});
