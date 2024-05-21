const deselectAllCheckbox = () => {
    const allCheckbox = document.querySelectorAll('.checkbox');
    allCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

export default deselectAllCheckbox;