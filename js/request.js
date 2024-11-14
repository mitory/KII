const form_request = document.forms.request;


function validateTel(input) {
	if (input.value.charAt(0) !== '8' &&
		((input.value.length >= 2 && input.value.substring(0, 2) !== '+7') || input.value.length === 1)) {
		if (input.value.charAt(0) === '+') {
			input.value = input.value.slice(1)
		}
		input.value = '+7' + input.value;
	}
	if (!/^[0-9+]+$/.test(input.value)) {
		input.value = '+7';
	}
	if (input.value.length > 12) {
		input.value = input.value.substring(0, 12)
	}
}

function validateFIO(event) {
	const inputValue = event.target.value;
	const isValid = /^[а-яА-Я ]*$/.test(inputValue);

	if (!isValid) {
		event.target.value = inputValue.replace(/[^а-яА-Я ]/g, ''); // Удаление невалидных символов
	}
}

form_request.tel.addEventListener("input", function (event) {
	setTimeout(function () {
		validateTel(form_request.tel)
	}, 0);
})
form_request.tel.addEventListener("paste", function (event) {
	setTimeout(function () {
		validateTel(form_request.tel);
	}, 0);
})

form_request.addEventListener("submit", function (event) {
	event.preventDefault();
	if (!form_request.name.value || !form_request.organization.value ||
		!form_request.email.value || !form_request.tel.value) {
		showPopup("Пожалуйста, заполните всю контактную информацию");
		return;
	}
	if (form_request.name.value.length < 5) {
		showPopup("Пожалуйста, введите полное имя")
		return;
	}
	if (form_request.organization.value.length < 3) {
		showPopup("Пожалуйста, введите полное название организации")
		return;
	}
	if (form_request.tel.value.length < 10) {
		showPopup("Пожалуйста, введите полный номер телефона")
		return;
	}
	showPopup("Ожидайте, мы с вами свяжемся")

	// fetch('/items', {
	//     method: 'POST',
	//     headers: {
	//         'Content-Type': 'application/json'
	//     },
	//     body: JSON.stringify({
	//         'full_name': form_request.name.value,
	//         'organisation': form_request.organization.value,
	//         'email': form_request.email.value,
	//         'phone_number': form_request.tel.value,
	//         'comment': form_request.comment.value
	//     })
	// })
	// .then(response => response.json())
	// .then(data => {
	// 	showPopup("Ожидайте, мы с вами свяжемся")
	// 	this.reset();
	// })
	// .catch(error => showPopup("Что-то пошло не так..."))
})