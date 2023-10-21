//without function
const input = document.querySelector('.dropdown-input');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');
input.addEventListener('focus', () => {
    dropdownList.style.display = 'block';
});
input.addEventListener('blur', () => {
    setTimeout(() => {
        dropdownList.style.display = 'none';
    }, 200);
});
input.addEventListener('input', () => {
    const inputValue = input.value.toLowerCase();
    dropdownItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(inputValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        input.value = item.getAttribute('value');
        dropdownList.style.display = 'none';
    });
});

//with function

function initializeDropdown(dropdownContainer) {
    const input = dropdownContainer.querySelector('.dropdown-input');
    const dropdownList = dropdownContainer.querySelector('.dropdown-list');
    const dropdownItems = dropdownContainer.querySelectorAll('.dropdown-item');

    input.addEventListener('focus', () => {
        dropdownList.style.display = 'block';        
    });

    input.addEventListener('blur', () => {
        setTimeout(() => {
            dropdownList.style.display = 'none';
        }, 200);
    });

    input.addEventListener('input', () => {
        const inputValue = input.value.toLowerCase();
        dropdownItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(inputValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.getAttribute('value');
            dropdownList.style.display = 'none';
        });
    });
}
// Get all dropdown containers and initialize them
const dropdownContainers = document.querySelectorAll('.dropdown-container');
dropdownContainers.forEach(container => {
    initializeDropdown(container);
});


//keep selected dropdown
//working fine
function setValueFromDropdown(fieldName, data, containerSelector) {
    $(`[name=${fieldName}]`).val(data[fieldName]);
    var selectedItem = $(`${containerSelector} .dropdown-item`).filter(function() {
        return $(this).attr('value').startsWith(data[fieldName]);
    }).first();

    if (selectedItem.length) {
        $(`[name=${fieldName}]`).val(selectedItem.attr('value'));
        console.log(`Dropdown Item Value for ${fieldName}: ${selectedItem.attr('value')}`);
    }
}


// keep seleected
setValueFromDropdown('company_id', data, '#company-edit');
            setValueFromDropdown('presea_department_id', data, '#presea_edit');
            setValueFromDropdown('cm_department_id', data, '#cm_edit');
            setValueFromDropdown('department_24_7_id', data, '#department_24_7_edit');
            setValueFromDropdown('pni_department_id', data, '#pni_dept_edit');
            setValueFromDropdown('kits_department_id', data, '#kits_edit');
            setValueFromDropdown('dm_department_id', data, '#dm_dept_edit');
            setValueFromDropdown('previous_dna_test_port_l', data, '#previous_dna_l_edit');
            setValueFromDropdown('last_dna_test_port_r', data, '#last_dna_r_edit');

