const insertElem = document.querySelector(".insertElem");
createForm(insertElem);

function createForm(place) {
  const formTitle = document.createElement("h2");
  formTitle.textContent = "JS is magic";

  const desc = document.createElement("p");
  desc.textContent = "Learn JS and don't be afraid";

  const nameTitle = document.createElement("label");
  nameTitle.textContent = "Write name";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "name";

  const phoneTitle = document.createElement("label");
  phoneTitle.textContent = "Write phone";

  const phoneInput = document.createElement("input");
  phoneInput.placeholder = "phone";

  const emailTitle = document.createElement("label");
  emailTitle.textContent = "Write email";

  const emailInput = document.createElement("input");
  emailInput.placeholder = "email";

  const messageTitle = document.createElement("label");
  messageTitle.textContent = "message";

  const message = document.createElement("textarea");
  message.textContent = "Your message write here";

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";

  const form = document.createElement("form");

  form.append(
    formTitle,
    desc,
    nameTitle,
    nameInput,
    phoneTitle,
    phoneInput,
    emailTitle,
    emailInput,
    messageTitle,
    message,
    submitBtn
  );
  place.append(form);
}
