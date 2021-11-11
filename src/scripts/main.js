const activeClass = "active";

// Переключение табов
// demo
// button(data-tab-id="tabId1", data-tab-control="tab1") 1
// button(data-tab-id="tabId1", data-tab-control="tab2") 2
// .tab-block(data-tab-id="tabId1", data-tab-block="tab1") 1
// .tab-block(data-tab-id="tabId1", data-tab-block="tab2") 2
const tabIdList = document.querySelectorAll("[data-tab-id]");
if (tabIdList) {
	let tabGroupList = new Set();
	for (const tabId of tabIdList) {
		tabGroupList.add(tabId.dataset.tabId);
	}

	function tabSwith(name, tab, tabGroup) {
		for (const control of tab.controlList) control.classList.remove(activeClass);
		for (const block of tab.blockList) block.style.display = "none";
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-control="${name}"]`).classList.add(activeClass);
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-block="${name}"]`).style.display = "";
	}

	for (const tabGroup of tabGroupList) {
		const tab = {
			controlList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-control]`),
			blockList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-block]`),
		};
		console.log(tab);
		tabSwith(tab.controlList[0].dataset.tabControl, tab, tabGroup);

		for (const control of tab.controlList) {
			control.addEventListener("click", () => {
				tabSwith(control.dataset.tabControl, tab, tabGroup);
			});
		}
	}
}

svg4everybody({
	polyfill: true
});


//form validation
const mailingForm = document.querySelector('[data-form="mailing"]');
const emailField = mailingForm.querySelector('input[type="email"]');
const submitButton = mailingForm.querySelector('[type="submit"]')
const responseText = document.querySelector('.form-mailing__response');

const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[a-z0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function showResponse(text) {
	responseText.style.display = 'block'
	responseText.innerHTML = text
}

emailField.addEventListener('input', function() {
	if (emailField.value != '') {
		if (emailField.value.search(re) == 0) {
			showResponse('Верный формат E-mail :)')
			emailField.parentElement.classList.remove('error')
			emailField.parentElement.classList.add('success')
			submitButton.classList.remove('disabled')
		} else {
			showResponse('Неверный формат E-mail')
			emailField.parentElement.classList.add('error')
			emailField.parentElement.classList.remove('success')
			submitButton.classList.add('disabled')
		}
	} else {
		responseText.style.display = 'none'
		emailField.parentElement.classList.remove('error')
		emailField.parentElement.classList.remove('success')
	}
})

mailingForm.addEventListener('submit', function(event) {
	if (emailField.parentElement.classList.contains('error') || emailValue == '') {
		event.preventDefault()
	}
})
//form validation end
