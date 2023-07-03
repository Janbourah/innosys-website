function capitalizeFirstLetter(element) {
    var value = element.value;
    element.value = value.charAt(0).toUpperCase() + value.slice(1);
}

function submitForm(event) {
    event.preventDefault();
    alert("the page will reload");
    location.reload();
}