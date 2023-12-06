// after form complete
const submit = document.getElementById("submit");
const notif = document.getElementById("notif");
const form = document.getElementById("form");

submit.addEventListener("click", () => {
    form.classList.add("d-none")
    notif.classList.remove("d-none")
})


// form
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progress = document.getElementById("progress");

let stepNum = 0


nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        stepNum++
        updateFormByStep()
        updateProgress()
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        stepNum--;
        updateFormByStep()
        updateProgress()
    })
})

const updateFormByStep = () => {
    formSteps.forEach((form) => {
        form.classList.contains("form-step-active") && form.classList.remove("form-step-active");
    })

    formSteps[stepNum].classList.add("form-step-active")
}

const updateProgress = () => {
    progressSteps.forEach((step, idx) => {
        if (idx < stepNum + 1) {
            step.classList.add("progress-step-active");
        } else {
            step.classList.remove("progress-step-active");
        }
    })

    const progressActive = document.querySelectorAll(".progress-step-active");
    console.log(progressActive.length)
    console.log(progressSteps.length)

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1) + 0.25) * 100 + "%";

}