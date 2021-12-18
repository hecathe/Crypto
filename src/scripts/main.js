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
        for (const control of tab.controlList)
            control.classList.remove(activeClass);
        // for (const block of tab.blockList) block.style.display = "none";
        for (const block of tab.blockList) block.classList.remove(activeClass);
        document
            .querySelector(
                `[data-tab-id="${tabGroup}"][data-tab-control="${name}"]`
            )
            .classList.add(activeClass);
        document
            .querySelector(
                `[data-tab-id="${tabGroup}"][data-tab-block="${name}"]`
            )
            .classList.add(activeClass);
    }

    for (const tabGroup of tabGroupList) {
        const tab = {
            controlList: document.querySelectorAll(
                `[data-tab-id="${tabGroup}"][data-tab-control]`
            ),
            blockList: document.querySelectorAll(
                `[data-tab-id="${tabGroup}"][data-tab-block]`
            ),
        };
        // console.log(tab);
        tabSwith(tab.controlList[0].dataset.tabControl, tab, tabGroup);

        for (const control of tab.controlList) {
            control.addEventListener("click", () => {
                tabSwith(control.dataset.tabControl, tab, tabGroup);
            });
        }
    }
}

svg4everybody({
    polyfill: true,
});

//header toggle
const toggleBtn = document.querySelector(".toggle");
const navlist = document.querySelector(".site-nav");
const body = document.body;

toggleBtn.addEventListener("click", function () {
    toggleBtn.classList.toggle(activeClass);
    navlist.classList.toggle(activeClass);

    if (navlist.classList.contains(activeClass)) {
        body.style.overflowY = "hidden";
    } else {
        body.removeAttribute("style");
    }
});
//header toggle end

//form validation
const mailingForm = document.querySelector('[data-form="mailing"]');
if (mailingForm) {
    const emailField = mailingForm.querySelector('input[type="email"]');
    const submitButton = mailingForm.querySelector('[type="submit"]');
    const responseText = document.querySelector(".form-mailing__response");

    const re =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[a-z0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function showResponse(text) {
        responseText.style.display = "block";
        responseText.innerHTML = text;
    }

    emailField.addEventListener("input", function () {
        if (emailField.value != "") {
            if (emailField.value.search(re) == 0) {
                showResponse("Верный формат E-mail :)");
                emailField.parentElement.classList.remove("error");
                emailField.parentElement.classList.add("success");
                submitButton.classList.remove("disabled");
            } else {
                showResponse("Неверный формат E-mail");
                emailField.parentElement.classList.add("error");
                emailField.parentElement.classList.remove("success");
                submitButton.classList.add("disabled");
            }
        } else {
            responseText.style.display = "none";
            emailField.parentElement.classList.remove("error");
            emailField.parentElement.classList.remove("success");
        }
    });

    emailField.addEventListener("blur", function () {
        if (emailField.value === "") {
            submitButton.classList.remove("disabled");
        }
    });

    mailingForm.addEventListener("submit", function (event) {
        if (
            emailField.parentElement.classList.contains("error") ||
            emailValue == ""
        ) {
            event.preventDefault();
        }
    });
}
//form validation end

//main catalog slider
const catalogSliderOnMain = new Swiper(
    ".catalog-slider__slider .swiper-container",
    {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: ".catalog-slider__slider .swiper-button-next",
            prevEl: ".catalog-slider__slider .swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".catalog-slider__slider .swiper-scrollbar",
        },
    }
);
//main catalog slider end

//news slider
const newsSlider = new Swiper(".news-slider__slider .swiper-container", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: ".catalog-slider__slider .swiper-button-next",
        prevEl: ".catalog-slider__slider .swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".catalog-slider__slider .swiper-scrollbar",
    },
});
//news slider end

//partners
const partnersSlider = new Swiper(".partners__slider .swiper-container", {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 43,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".partners__slider .swiper-button-next",
        prevEl: ".partners__slider .swiper-button-prev",
    },
});
//partners end

// slider with thumbs
const sliderThumb = new Swiper(".swiper-w-thumbs .swiper-thumbs", {
    slidesPerView: 3,
    spaceBetween: 30,
});
const sliderCatalogCard = new Swiper(".swiper-w-thumbs .swiper-view", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-w-thumbs .swiper-button-next",
        prevEl: ".swiper-w-thumbs .swiper-button-prev",
    },

    thumbs: {
        swiper: sliderThumb,
    },
});

// slider with thumbs end

// reviews slider
const reviewSlider = new Swiper(".reviews-slider .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: ".tabs__content .swiper-button-next",
        prevEl: ".tabs__content .swiper-button-prev",
    },
});
// reviews slider end

// accordion
if (document.querySelectorAll(".accordion")) {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        new Accordion(accordion);
    });
}
// accordion end

// modals
const modalTriggers = document.querySelectorAll("[data-popup-trigger]");
const overlay = document.querySelector(".modal-overlay");

modalTriggers.forEach((modalTrigger) => {
    const triggerData = modalTrigger.dataset.popupTrigger;
    // const modal = document.querySelector(`[data-popup="${triggerData}"]`);
    const modals = document.querySelectorAll(`[data-popup]`);

    modalTrigger.addEventListener("click", function (event) {
        event.preventDefault();

        modals.forEach((modal) => {
            const modalData = modal.dataset.popup;

            modal.classList.remove(activeClass);

            if (triggerData === modalData) {
                openPopup(modal);
            }

            if (modal.classList.contains(activeClass)) {
                closePopup(modal);
            }
        })
    });
});

function openPopup(elem) {
    elem.classList.add(activeClass);
    overlay.classList.add(activeClass);
    body.style.overflowY = "hidden";
}

function closePopup(elem) {
    const closePopupBtn = elem.querySelector("[data-close-popup]");

    closePopupBtn.addEventListener("click", function () {
        elem.classList.remove(activeClass);
        overlay.classList.remove(activeClass);
        body.removeAttribute("style");
    });

    overlay.addEventListener("click", function () {
        elem.classList.remove(activeClass);
        overlay.classList.remove(activeClass);
        body.removeAttribute("style");
    });
}

// modals end
