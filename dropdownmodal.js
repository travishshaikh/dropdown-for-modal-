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


// keep selected
setValueFromDropdown('company_id', data, '#company-edit');           
//You can check this function also
 function setValueFromDropdown(fieldName, data) {
     $(`[name=${fieldName}]`).val(data[fieldName]);
     var selectedItem = $(`.dropdown-list .dropdown-item`).filter(function() {
         return $(this).attr('value').startsWith(data[fieldName]); 
     }).first();

     if (selectedItem.length) {
         $(`[name=${fieldName}]`).val(selectedItem.attr('value'));
        
     }
 }
 console.log(`Dropdown Item Value for ${fieldName}: ${selectedItem.attr('value')}`);
// Usage
// the way to set value in dropdown
// setValueFromDropdown('vessel_type', data);



// <!-- dropdown modal value to print if there is selected in it -->  

  $(document).ready(function() {
       function SelectedAttribute(fieldName) {
           var selectedDropDownItem = $(".dropdown-item[selected]");
          if(selectedDropDownItem.length) {
               const selectedValue = selectedDropDownItem.attr('value');
               $(".dropdown-input").val(selectedValue);
           }
       }
       SelectedAttribute("add_toe_test_profiles[]");
   });
 
