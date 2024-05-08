const deselectAllCheckbox = () => {
    const allCheckbox = document.querySelectorAll('.checkbox');
    allCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
        console.log('unchecking');
    });
}

export default deselectAllCheckbox;